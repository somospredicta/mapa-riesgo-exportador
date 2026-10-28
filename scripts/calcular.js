#!/usr/bin/env node
/*
 * CONFIDENCIAL: no se publica.
 *
 * Lee la metodología (/metodologia/checklist_pais.json) y las respuestas por país
 * (/data/respuestas/*.json) y genera /public/data/mapa.json SOLO con resultados.
 * En mapa.json nunca van criticidades, pesos, fórmula ni el texto del checklist.
 *
 * Uso: node scripts/calcular.js
 */
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const CHECKLIST = path.join(RAIZ, 'metodologia', 'checklist_pais.json');
const RESPUESTAS = path.join(RAIZ, 'data', 'respuestas');
const SALIDA = path.join(RAIZ, 'public', 'data', 'mapa.json');

const SI = 'SÍ';
const NO = 'NO';
const NO_APLICA = 'no_aplica_sin_fuente';

function leerJSON(archivo) {
  return JSON.parse(fs.readFileSync(archivo, 'utf8'));
}

function redondear(v, decimales) {
  const f = 10 ** decimales;
  return Math.round(v * f) / f;
}

// Mismos cortes que el semáforo del sitio (CLAUDE.md, sección 4).
function etiqueta(puntaje) {
  if (puntaje === null) return 'Sin datos completos';
  if (puntaje > 4.0) return 'Entorno favorable';
  if (puntaje > 3.0) return 'Precaución';
  if (puntaje > 2.0) return 'Entorno exigente';
  return 'Entorno crítico';
}

function fechaValida(f) {
  return typeof f === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(f);
}

function urlValida(u) {
  try {
    const p = new URL(u).protocol;
    return p === 'https:' || p === 'http:';
  } catch {
    return false;
  }
}

// Una respuesta solo cuenta si es SÍ o NO y trae dato, fuente con link y fecha de consulta.
// Cualquier otra cosa se trata como "sin responder" (nunca como NO).
function respuestaValida(r, id, pais, avisos) {
  if (!r || r.respuesta === null || r.respuesta === undefined) return null;
  if (r.respuesta === NO_APLICA) {
    if (r.motivo_null && r.fuente_ausente) return NO_APLICA;
    avisos.push(`${pais} ${id}: "${NO_APLICA}" sin motivo_null o fuente_ausente; se toma como sin responder.`);
    return null;
  }
  if (r.respuesta !== SI && r.respuesta !== NO) {
    avisos.push(`${pais} ${id}: respuesta "${r.respuesta}" no es "${SI}" ni "${NO}"; se toma como sin responder.`);
    return null;
  }
  if (!r.dato || !r.fuente_nombre || !urlValida(r.fuente_url) || !fechaValida(r.consultado)) {
    avisos.push(`${pais} ${id}: respuesta sin dato, fuente, link o fecha de consulta; se toma como sin responder.`);
    return null;
  }
  return r.respuesta;
}

function fuentePublica(r) {
  return { nombre: r.fuente_nombre, url: r.fuente_url, consultado: r.consultado };
}

// Ítem público: la frase del checklist con el dato real, el año del dato y la fuente entre paréntesis,
// por ejemplo "La percepción de corrupción es alta (CPI 35/100, puesto 107 de 182; dato 2025, Transparencia Internacional)."
// Solo se publican `dato_publico`, `anio_dato` y `fuente_corta`; `dato` y `criterio` quedan para la revisión interna.
function itemPublico(frase, r, id, pais, avisos) {
  const base = frase.replace(/\.\s*$/, '');
  if (!r.dato_publico || !r.anio_dato || !r.fuente_corta) {
    avisos.push(`${pais} ${id}: falta dato_publico, anio_dato o fuente_corta; la frase pública sale sin el dato.`);
    return { texto: `${base}.`, dato: null, anio_dato: null, fuente: fuentePublica(r) };
  }
  return {
    texto: `${base} (${r.dato_publico}; dato ${r.anio_dato}, ${r.fuente_corta}).`,
    dato: r.dato_publico,
    anio_dato: r.anio_dato,
    fuente: fuentePublica(r),
  };
}

function calcularPais(checklist, archivo, avisos) {
  const datos = leerJSON(archivo);
  const pais = datos.pais;
  const resp = datos.respuestas || {};
  const { formula } = checklist;

  const dimensiones = {};
  const excluidas = [];
  let faltaCobertura = false;
  const condiciones = [];
  const afirmativas = [];
  const negativas = [];

  for (const dim of Object.keys(checklist.dimensiones)) {
    const preguntas = checklist.preguntas.filter((p) => p.dimension === dim);
    let totalDimension = 0;
    let total = 0;
    let conSi = 0;
    let completa = true;
    for (const p of preguntas) {
      totalDimension += p.criticidad;
      const v = respuestaValida(resp[p.id], p.id, pais, avisos);
      if (v === null) { completa = false; continue; }
      // Cobertura: si el país no figura en la fuente oficial, la pregunta sale del numerador y del denominador.
      if (v === NO_APLICA) { excluidas.push(resp[p.id].fuente_ausente); continue; }
      total += p.criticidad;
      if (v === SI) {
        conSi += p.criticidad;
        afirmativas.push({ p, r: resp[p.id] });
      } else {
        negativas.push({ p, r: resp[p.id] });
      }
    }
    // Mínimo de cobertura: las preguntas respondidas tienen que sumar una parte mínima de las criticidades de la dimensión.
    const conCobertura = total > 0 && total >= formula.cobertura_minima * totalDimension;
    if (completa && !conCobertura) faltaCobertura = true;
    dimensiones[dim] = completa && conCobertura ? 5 - (conSi / total) * 4 : null;
  }

  const { C, A, G, E, I3 } = dimensiones;
  const cage = [C, A, G, E].every((v) => v !== null) ? (C + A + G + E) / 4 : null;
  const puntajeCrudo = cage !== null && I3 !== null ? formula.peso_cage * cage + formula.peso_i3 * I3 : null;
  const puntaje = puntajeCrudo === null ? null : redondear(puntajeCrudo, formula.decimales);

  // La frase SÍ puede tener variantes (por ejemplo, A5 cuando el cambio alcanzó a todas las empresas).
  const fraseSi = (p, r) => (r.variante && p.variantes && p.variantes[r.variante]) || p.frase_publica;

  // Condiciones críticas: KO con SÍ verificado, aunque el puntaje esté incompleto.
  for (const { p, r } of afirmativas) {
    if (p.ko) condiciones.push(itemPublico(fraseSi(p, r), r, p.id, pais, avisos));
  }

  // Orden: criticidad de mayor a menor; a igual criticidad, el orden del checklist.
  const orden = checklist.preguntas.map((p) => p.id);
  const porCriticidad = (a, b) => b.p.criticidad - a.p.criticidad || orden.indexOf(a.p.id) - orden.indexOf(b.p.id);

  // Hechos principales: hasta 3 respuestas SÍ que no sean KO (los KO ya están en condiciones críticas).
  const hechos = afirmativas
    .filter(({ p }) => !p.ko)
    .sort(porCriticidad)
    .slice(0, 3)
    .map(({ p, r }) => itemPublico(fraseSi(p, r), r, p.id, pais, avisos));

  // A favor: hasta 2 respuestas NO de mayor criticidad, con la frase positiva del checklist.
  const aFavor = negativas
    .sort(porCriticidad)
    .slice(0, 2)
    .map(({ p, r }) => itemPublico(p.frase_positiva, r, p.id, pais, avisos));

  // Indicador aparte (no entra al puntaje).
  const ind = checklist.indicador_aparte;
  const vInd = respuestaValida(resp[ind.id], ind.id, pais, avisos);
  const calidad = vInd === null || vInd === NO_APLICA
    ? null
    : { alerta: vInd === SI, ...itemPublico(vInd === SI ? ind.frase_si : ind.frase_no, resp[ind.id], ind.id, pais, avisos) };

  const publicas = {};
  for (const [dim, info] of Object.entries(checklist.dimensiones)) {
    publicas[info.clave_publica] = dimensiones[dim] === null ? null : redondear(dimensiones[dim], formula.decimales);
  }

  const todas = [...checklist.preguntas.map((p) => p.id), ind.id];
  const aprobado = todas.every((id) => resp[id] && resp[id].estado === 'aprobado');

  return {
    pais,
    resultado: {
      puntaje,
      etiqueta: etiqueta(puntaje),
      completo: puntaje !== null,
      dimensiones: publicas,
      condiciones_criticas: condiciones,
      hechos,
      a_favor: aFavor,
      calidad_informacion: calidad,
      cobertura: excluidas.length
        ? { preguntas_usadas: checklist.preguntas.length - excluidas.length, preguntas_total: checklist.preguntas.length, fuentes_ausentes: [...new Set(excluidas)] }
        : null,
      sin_cobertura_suficiente: faltaCobertura,
      estado: aprobado ? 'aprobado' : 'borrador',
    },
  };
}

function main() {
  const checklist = leerJSON(CHECKLIST);
  const avisos = [];
  const archivos = fs.existsSync(RESPUESTAS)
    ? fs.readdirSync(RESPUESTAS).filter((f) => f.endsWith('.json')).sort()
    : [];

  const paises = {};
  for (const f of archivos) {
    const { pais, resultado } = calcularPais(checklist, path.join(RESPUESTAS, f), avisos);
    paises[pais] = resultado;
  }

  const estados = Object.values(paises).map((p) => p.estado);
  const salida = {
    actualizado: new Date().toISOString().slice(0, 10),
    estado: estados.length && estados.every((e) => e === 'aprobado') ? 'aprobado' : 'borrador',
    paises,
    regiones: {},
  };

  fs.writeFileSync(SALIDA, JSON.stringify(salida, null, 2) + '\n');

  for (const a of avisos) console.warn('Aviso:', a);
  console.log(`mapa.json generado (${salida.estado}).`);
  for (const [id, p] of Object.entries(paises)) {
    const cob = p.cobertura ? ` · ${p.cobertura.preguntas_usadas}/${p.cobertura.preguntas_total} preguntas` : '';
    const estado = p.puntaje !== null ? p.puntaje : p.sin_cobertura_suficiente ? 'sin cobertura suficiente' : 'sin datos completos';
    console.log(`  ${id}: ${estado}${cob} · KO activos: ${p.condiciones_criticas.length}`);
  }
}

main();
