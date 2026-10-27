/*
 * Mapa de riesgo exportador: dibuja el planisferio, maneja el tooltip y el panel lateral.
 * Solo lee resultados ya calculados de data/mapa.json. Si un dato falta, muestra "Sin datos".
 */
(function () {
  const ATLAS_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json';
  const DATOS_URL = 'data/mapa.json';
  const CONTACTO_URL = 'https://predicta.ar';
  const TEXTO_REGION = 'Este puntaje es un ponderado general de la región y no describe a ningún país en particular. Para conocer el entorno de un país puntual, contactanos.';

  const { PAISES, REGIONES, ORIGEN, EXCLUIDAS, porForma } = window.ENTIDADES;

  const DIMENSIONES = [
    ['cultural', 'Cultural'],
    ['administrativa', 'Administrativa'],
    ['geografica', 'Geográfica'],
    ['economica', 'Económica'],
    ['instituciones', 'Instituciones'],
  ];

  const TENDENCIAS = {
    sube: { flecha: '↑', texto: 'Mejora' },
    baja: { flecha: '↓', texto: 'Empeora' },
    estable: { flecha: '→', texto: 'Estable' },
  };

  let datos = { paises: {}, regiones: {} };
  let ultimoPuntero = 'mouse';
  let seleccion = null;

  const svg = d3.select('#lienzo');
  const capaMapa = svg.append('g');
  const capaFormas = capaMapa.append('g');
  const capaHover = capaMapa.append('path').attr('class', 'contornos');
  const capaSeleccion = capaMapa.append('path').attr('class', 'contornos seleccion');
  const tooltip = document.getElementById('tooltip');
  const panel = document.getElementById('panel');

  // Trama para marcar a Argentina como país de origen.
  svg.append('defs').append('pattern')
    .attr('id', 'trama-origen')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', 4).attr('height', 4)
    .attr('patternTransform', 'rotate(45)')
    .call((p) => {
      p.append('rect').attr('width', 4).attr('height', 4).attr('fill', '#000030');
      p.append('rect').attr('width', 1.6).attr('height', 4).attr('fill', '#FEFEFE');
    });

  // ---------- Utilidades ----------

  function claveDe(info) { return info.tipo + ':' + info.id; }

  function el(tag, attrs, ...hijos) {
    const nodo = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === 'class') nodo.className = v;
      else nodo.setAttribute(k, v);
    }
    for (const h of hijos) if (h != null) nodo.append(h);
    return nodo;
  }

  function esNumero(v) { return typeof v === 'number' && Number.isFinite(v); }

  function formatoPuntaje(v) { return v.toFixed(1).replace('.', ','); }

  // Devuelve [clase, etiqueta] del semáforo. Se redondea a un decimal antes de clasificar.
  function semaforo(v) {
    if (!esNumero(v)) return ['s-sin-datos', 'Sin datos'];
    const r = Math.round(v * 10) / 10;
    if (r > 4.0) return ['s-favorable', 'Entorno favorable'];
    if (r > 3.0) return ['s-precaucion', 'Precaución'];
    if (r > 2.0) return ['s-exigente', 'Entorno exigente'];
    return ['s-critico', 'Entorno crítico'];
  }

  function formatoFecha(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    return m ? `${m[3]}/${m[2]}/${m[1]}` : null;
  }

  function urlSegura(url) {
    try {
      const u = new URL(url);
      return u.protocol === 'https:' || u.protocol === 'http:' ? u.href : null;
    } catch { return null; }
  }

  // Un ítem solo se muestra si trae fuente con link y fecha de consulta.
  function itemValido(item) {
    const f = item && item.fuente;
    const ok = item && item.texto && f && f.nombre && urlSegura(f.url) && formatoFecha(f.consultado);
    if (!ok) console.warn('Ítem descartado por no tener fuente completa:', item);
    return Boolean(ok);
  }

  function nodoFuente(f) {
    return el('span', { class: 'fuente' },
      'Fuente: ',
      el('a', { href: urlSegura(f.url), target: '_blank', rel: 'noopener' }, f.nombre),
      ` · consultado el ${formatoFecha(f.consultado)}`);
  }

  function sinDatos() { return el('p', { class: 'sin-datos' }, 'Sin datos'); }

  function seccion(titulo, ...contenido) {
    return el('section', { class: 'seccion' }, el('h3', {}, titulo), ...contenido);
  }

  function listaConFuentes(items, clase, conFecha) {
    const validos = (items || []).filter(itemValido);
    if (!validos.length) return null;
    const ul = el('ul', clase ? { class: clase } : {});
    for (const it of validos) {
      const fecha = conFecha && formatoFecha(it.fecha);
      ul.append(el('li', {},
        el('span', {}, fecha ? `${fecha} · ${it.texto}` : it.texto),
        nodoFuente(it.fuente)));
    }
    return ul;
  }

  // "Sin datos completos" cuando el país tiene respuestas cargadas pero falta alguna.
  function textoSinPuntaje(d) { return d.completo === false ? 'Sin datos completos' : 'Sin datos'; }

  // ---------- Secciones del panel ----------

  function seccionPuntaje(d) {
    const [clase, etiqueta] = semaforo(d.puntaje);
    return seccion('Puntaje',
      el('div', { class: 'puntaje' },
        el('span', { class: 'puntaje-valor' }, esNumero(d.puntaje) ? formatoPuntaje(d.puntaje) : '—'),
        el('span', { class: 'puntaje-etiqueta ' + clase }, esNumero(d.puntaje) ? etiqueta : textoSinPuntaje(d))));
  }

  function seccionTendencia(d) {
    const t = TENDENCIAS[d.tendencia];
    return seccion('Tendencia', t
      ? el('div', { class: 'tendencia' }, el('span', { class: 'flecha', 'aria-hidden': 'true' }, t.flecha), el('span', {}, t.texto))
      : sinDatos());
  }

  function seccionDimensiones(d) {
    const dims = d.dimensiones || {};
    const ul = el('ul', { class: 'dimensiones' });
    for (const [clave, nombre] of DIMENSIONES) {
      const v = dims[clave];
      ul.append(el('li', {}, el('span', {}, nombre), el('span', {}, esNumero(v) ? formatoPuntaje(v) : 'Sin datos')));
    }
    return seccion('Dimensiones', ul);
  }

  function seccionCriticas(d) {
    const lista = listaConFuentes(d.condiciones_criticas, 'criticas');
    if (!lista) return seccion('Condiciones críticas', sinDatos());
    return seccion('Condiciones críticas', lista,
      el('p', { class: 'criticas-cierre' },
        '¿Esta condición afecta tu operación? ',
        el('a', { href: CONTACTO_URL, target: '_blank', rel: 'noopener' }, 'Consultanos')));
  }

  function seccionCalidad(d) {
    const c = d.calidad_informacion;
    if (!c || !itemValido(c)) return seccion('Calidad de la información oficial', sinDatos());
    return seccion('Calidad de la información oficial',
      el('p', { class: 'calidad' + (c.alerta ? ' calidad-alerta' : '') },
        el('span', {}, c.texto),
        nodoFuente(c.fuente)));
  }

  function panelPais(id) {
    const d = datos.paises[id] || {};
    const nombre = PAISES[id].nombre;
    return [
      seccionPuntaje(d),
      seccionTendencia(d),
      seccionDimensiones(d),
      seccionCriticas(d),
      seccion('Hechos principales', listaConFuentes(d.hechos) || sinDatos()),
      seccionCalidad(d),
      seccion('Alertas recientes', listaConFuentes(d.alertas, null, true) || sinDatos()),
      seccion('Argentina con ' + nombre, listaConFuentes(d.argentina_con) || sinDatos()),
    ];
  }

  function panelRegion(id) {
    const d = datos.regiones[id] || {};
    const miembros = Object.values(REGIONES[id].miembros).sort((a, b) => a.localeCompare(b, 'es'));
    return [
      seccionPuntaje(d),
      seccion('Sobre este puntaje', el('p', { class: 'texto-fijo' }, TEXTO_REGION)),
      el('section', { class: 'seccion' },
        el('details', { class: 'miembros' },
          el('summary', {}, `Países que incluye (${miembros.length})`),
          el('p', {}, miembros.join(', ')))),
    ];
  }

  function panelOrigen() {
    return [
      seccion('País de origen',
        el('p', { class: 'texto-fijo' }, 'El mapa muestra el entorno de cada destino visto desde Argentina. Argentina no lleva puntaje.')),
    ];
  }

  function abrirPanel(info) {
    let tipo, titulo, secciones;
    if (info.tipo === 'pais') {
      tipo = PAISES[info.id].bloque; titulo = PAISES[info.id].nombre; secciones = panelPais(info.id);
    } else if (info.tipo === 'region') {
      tipo = 'Región'; titulo = REGIONES[info.id].nombre; secciones = panelRegion(info.id);
    } else if (info.tipo === 'origen') {
      tipo = 'País de origen'; titulo = ORIGEN.nombre; secciones = panelOrigen();
    } else {
      return;
    }
    document.getElementById('panel-tipo').textContent = tipo;
    document.getElementById('panel-titulo').textContent = titulo;
    const cuerpo = document.getElementById('panel-cuerpo');
    cuerpo.replaceChildren(...secciones);
    cuerpo.scrollTop = 0;
    panel.hidden = false;
    document.body.classList.add('con-panel');
    seleccionar(info);
    document.getElementById('panel-cerrar').focus({ preventScroll: true });
  }

  function cerrarPanel() {
    panel.hidden = true;
    document.body.classList.remove('con-panel');
    seleccionar(null);
  }

  document.getElementById('panel-cerrar').addEventListener('click', cerrarPanel);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) cerrarPanel(); });

  // ---------- Mapa ----------

  let formas, geometrias, topologia, camino, zoom;
  const contornos = new Map();

  function contornoDe(clave) {
    if (!contornos.has(clave)) {
      const geoms = geometrias.filter((g) => claveDe(g.info) === clave);
      contornos.set(clave, topojson.merge(topologia, geoms));
    }
    return contornos.get(clave);
  }

  function resaltar(info) {
    const clave = info ? claveDe(info) : null;
    formas.classed('resaltada', (f) => clave !== null && claveDe(f.info) === clave && f.info.tipo !== 'territorio');
    capaHover.attr('d', clave && info.tipo !== 'territorio' ? camino(contornoDe(clave)) : null);
  }

  function seleccionar(info) {
    seleccion = info;
    const clave = info ? claveDe(info) : null;
    formas.classed('seleccionada', (f) => clave !== null && claveDe(f.info) === clave);
    capaSeleccion.attr('d', clave ? camino(contornoDe(clave)) : null);
  }

  function textoTooltip(info) {
    if (info.tipo === 'pais') {
      const d = datos.paises[info.id] || {};
      return [info.nombre, esNumero(d.puntaje) ? `${formatoPuntaje(d.puntaje)} · ${semaforo(d.puntaje)[1]}` : textoSinPuntaje(d)];
    }
    if (info.tipo === 'region') return [REGIONES[info.id].nombre, info.nombre];
    if (info.tipo === 'origen') {
      return info.nombre === ORIGEN.nombre ? [info.nombre, 'País de origen'] : [info.nombre, 'Argentina · país de origen'];
    }
    return [info.nombre, info.de ? `Territorio de ${info.de} · sin puntaje propio` : 'Zona en disputa · sin puntaje propio'];
  }

  let temporizadorTooltip;
  function mostrarTooltip(info, x, y) {
    const [titulo, sub] = textoTooltip(info);
    tooltip.replaceChildren(el('strong', {}, titulo), el('span', {}, sub));
    tooltip.hidden = false;
    const r = tooltip.getBoundingClientRect();
    const margen = 12;
    let left = x + 14;
    let top = y + 14;
    if (left + r.width > window.innerWidth - margen) left = x - r.width - 14;
    if (top + r.height > window.innerHeight - margen) top = y - r.height - 14;
    tooltip.style.left = Math.max(margen, left) + 'px';
    tooltip.style.top = Math.max(margen, top) + 'px';
    clearTimeout(temporizadorTooltip);
    if (ultimoPuntero === 'touch') temporizadorTooltip = setTimeout(ocultarTooltip, 2500);
  }

  function ocultarTooltip() { tooltip.hidden = true; }

  function claseDeForma(f) {
    const base = 'forma ' + f.info.tipo;
    if (f.info.tipo === 'pais') return base + ' ' + semaforo((datos.paises[f.info.id] || {}).puntaje)[0];
    if (f.info.tipo === 'region') return base + ' ' + semaforo((datos.regiones[f.info.id] || {}).puntaje)[0];
    return base;
  }

  function dibujar() {
    const ancho = svg.node().clientWidth;
    const alto = svg.node().clientHeight;
    const enCelular = ancho <= 720;
    const arriba = enCelular ? 56 : 64;
    const abajo = enCelular ? 40 : 24;
    const mundo = { type: 'FeatureCollection', features: formas.data() };
    const proyeccion = d3.geoNaturalEarth1();
    if (alto > ancho * 1.2) {
      // Celular vertical: el mundo entero quedaría diminuto. Se agranda y se centra en el
      // Atlántico (América, Europa y África a la vista); el resto se ve arrastrando.
      proyeccion.fitWidth(ancho * 1.9, mundo);
      const [[, y0], [, y1]] = d3.geoPath(proyeccion).bounds(mundo);
      const [x] = proyeccion([-25, 0]);
      const [tx, ty] = proyeccion.translate();
      proyeccion.translate([tx + ancho / 2 - x, ty + (arriba + alto - abajo) / 2 - (y0 + y1) / 2]);
    } else {
      proyeccion.fitExtent([[8, arriba], [ancho - 8, alto - abajo]], mundo);
    }
    camino = d3.geoPath(proyeccion);
    formas.attr('d', camino);
    contornos.clear();
    resaltar(null);
    seleccionar(seleccion);
    const [[x0, y0], [x1, y1]] = camino.bounds(mundo);
    zoom.extent([[0, 0], [ancho, alto]])
      .translateExtent([[Math.min(0, x0 - 16), Math.min(0, y0 - arriba)], [Math.max(ancho, x1 + 16), Math.max(alto, y1 + abajo)]]);
    svg.call(zoom.transform, d3.zoomIdentity);
  }

  function configurarZoom() {
    zoom = d3.zoom()
      .scaleExtent([1, 12])
      .on('zoom', (e) => capaMapa.attr('transform', e.transform));
    svg.call(zoom).on('dblclick.zoom', null);

    document.querySelectorAll('[data-zoom]').forEach((b) => b.addEventListener('click', () => {
      const t = svg.transition().duration(300);
      if (b.dataset.zoom === 'mas') t.call(zoom.scaleBy, 1.6);
      else if (b.dataset.zoom === 'menos') t.call(zoom.scaleBy, 1 / 1.6);
      else t.call(zoom.transform, d3.zoomIdentity);
    }));
  }

  async function cargarDatos() {
    try {
      const r = await fetch(DATOS_URL, { cache: 'no-cache' });
      if (!r.ok) throw new Error(r.status);
      const j = await r.json();
      datos = { paises: j.paises || {}, regiones: j.regiones || {}, actualizado: j.actualizado };
      document.getElementById('franja-prueba').hidden = j.estado !== 'borrador';
      const fecha = formatoFecha(j.actualizado);
      if (fecha) document.getElementById('actualizado').textContent = `Datos al ${fecha}`;
    } catch (e) {
      console.warn('No se pudieron leer los resultados; todo se muestra como "Sin datos".', e);
    }
  }

  async function iniciar() {
    const [atlas] = await Promise.all([d3.json(ATLAS_URL), cargarDatos()]);
    topologia = atlas;
    geometrias = atlas.objects.countries.geometries.filter((g) => !EXCLUIDAS.includes(g.properties.name));
    for (const g of geometrias) {
      g.info = porForma[g.properties.name] || { tipo: 'territorio', id: g.properties.name, nombre: g.properties.name, de: null };
    }
    const features = topojson.feature(atlas, { type: 'GeometryCollection', geometries: geometrias }).features;
    features.forEach((f, i) => { f.info = geometrias[i].info; });

    formas = capaFormas.selectAll('path')
      .data(features)
      .join('path')
      .attr('class', claseDeForma)
      .on('pointerdown', (e) => { ultimoPuntero = e.pointerType || 'mouse'; })
      .on('pointerenter pointermove', (e, f) => {
        if (e.pointerType === 'touch') return;
        resaltar(f.info);
        mostrarTooltip(f.info, e.clientX, e.clientY);
      })
      .on('pointerleave', (e) => {
        if (e.pointerType === 'touch') return;
        resaltar(null);
        ocultarTooltip();
      })
      .on('click', (e, f) => {
        // En el celular, el panel ya muestra el nombre; el tooltip queda para lo que no abre panel.
        if (ultimoPuntero === 'touch' && f.info.tipo === 'territorio') {
          resaltar(f.info);
          mostrarTooltip(f.info, e.clientX, e.clientY);
        }
        abrirPanel(f.info);
      });

    configurarZoom();
    dibujar();
    if (window.innerWidth <= 720) document.getElementById('leyenda').open = false;
    window.addEventListener('resize', dibujar);
    document.getElementById('cargando').remove();
  }

  iniciar().catch((e) => {
    console.error(e);
    document.getElementById('cargando').textContent = 'No pudimos cargar el mapa. Probá recargar la página.';
  });
})();
