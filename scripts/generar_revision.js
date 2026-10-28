#!/usr/bin/env node
/*
 * CONFIDENCIAL: no se publica.
 *
 * Genera las planillas de revisión de /data/revision/ a partir de /data/respuestas/*.json.
 * Cada planilla se ordena en tres bloques:
 *   Revisión completa  Respuestas interpretativas, en null, fuera del cálculo y todas las condiciones críticas (KO con SÍ).
 *   Muestreo           Para cada pregunta mecánica, 4 países al azar (con semilla fija) entre los que no están en el bloque anterior.
 *   Resto              Las demás, solo como referencia.
 * Columnas para los revisores: "Aprobado" (sí/no), "Revisó" (G = Giuliano, A = Agustina) y "Comentario".
 *
 * Planillas (se definen en PLANILLAS):
 *   revision_3_paises            Brasil, China y España, todas las preguntas.
 *   revision_tanda1_sudamerica   Preguntas de investigación de la tanda 1 (Sudamérica).
 *   revision_bases_64_paises     Preguntas de bases de datos (sin Brasil, China y España).
 *   revision_tanda2_america      Preguntas de investigación de la tanda 2 (resto de América).
 *   revision_c4_64_paises        C4 (cámara bilateral), sin Brasil, China y España.
 *
 * Escribe un .md por planilla y data/revision/planillas.json, del que scripts/planillas_xlsx.py arma los .xlsx
 * (se ejecuta al final si hay python3 con openpyxl).
 *
 * Uso: node scripts/generar_revision.js
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');

const RAIZ = path.join(__dirname, '..');
const checklist = JSON.parse(fs.readFileSync(path.join(RAIZ, 'metodologia', 'checklist_pais.json'), 'utf8'));
const DIR = path.join(RAIZ, 'data', 'respuestas');
const SALIDA_DIR = path.join(RAIZ, 'data', 'revision');

const BASES = ['C1', 'C2', 'A1', 'A2', 'A3', 'A4', 'G1', 'G3', 'E1', 'E2', 'E3', 'E4', 'I3-1', 'I3-4', 'I3-5', 'I4-4'];
// Preguntas que se responden con una consulta directa a una base o registro: van a muestreo.
const MECANICAS = [...BASES, 'G4', 'C4'];
const TRES_PAISES = ['BRA', 'CHN', 'ESP'];
const SUDAMERICA = ['BOL', 'CHL', 'COL', 'ECU', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN'];
const RESTO_AMERICA = ['CAN', 'USA', 'MEX', 'BLZ', 'CRI', 'SLV', 'GTM', 'HND', 'NIC', 'PAN', 'ATG', 'BHS', 'BRB', 'CUB', 'DMA', 'DOM', 'GRD', 'HTI', 'JAM', 'KNA', 'LCA', 'VCT', 'TTO'];
const NO_APLICA = 'no_aplica_sin_fuente';
const POR_MUESTREO = 4;

const PLANILLAS = [
  { archivo: 'revision_3_paises', titulo: 'Revisión de respuestas: Brasil, China y España', paises: TRES_PAISES },
  { archivo: 'revision_tanda1_sudamerica', titulo: 'Revisión de la tanda 1 de investigación: Sudamérica (C3, A5, I3-2 y G4)', paises: SUDAMERICA, preguntas: ['C3', 'A5', 'I3-2', 'G4'] },
  { archivo: 'revision_bases_64_paises', titulo: 'Revisión de preguntas de bases de datos', preguntas: BASES, excluir: TRES_PAISES,
    nota: `Brasil, China y España están en revision_3_paises. "${NO_APLICA}" quiere decir que el país no figura en la fuente: la pregunta sale del cálculo.` },
  { archivo: 'revision_tanda2_america', titulo: 'Revisión de la tanda 2 de investigación: resto de América (C3, A5, I3-2 y G4)', paises: RESTO_AMERICA, preguntas: ['C3', 'A5', 'I3-2', 'G4'] },
  { archivo: 'revision_c4_64_paises', titulo: 'Revisión de C4: cámara empresarial bilateral activa con Argentina', preguntas: ['C4'], excluir: TRES_PAISES,
    nota: 'Fuentes: registro de entidades de la IGJ (balances y asambleas, corte de septiembre de 2026) y nota de Cancillería con las 27 cámaras binacionales recibidas el 22/03/2024. Brasil, China y España están en revision_3_paises.' },
];
const BLOQUES = [
  { id: 'completa', titulo: 'Revisión completa', nota: 'Revisar todas: respuestas interpretativas, en null, fuera del cálculo y todas las condiciones críticas (⚡).' },
  { id: 'muestreo', titulo: 'Muestreo', nota: `Para cada pregunta mecánica, ${POR_MUESTREO} países al azar: abrí el link y verificá el dato.` },
  { id: 'resto', titulo: 'Resto', nota: 'Solo como referencia. Se pueden aprobar, pero no hace falta revisarlas una por una.' },
];
const REVISORES = { G: 'Giuliano', A: 'Agustina' };

const todas = [
  ...checklist.preguntas,
  { id: checklist.indicador_aparte.id, pregunta: `${checklist.indicador_aparte.pregunta} (indicador aparte, no entra al puntaje)`, criticidad: 0, ko: false },
];
const hoy = new Date().toISOString().slice(0, 10);
const datosPorPais = fs.readdirSync(DIR).filter((f) => f.endsWith('.json')).sort()
  .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')));

const sinRespuesta = (r) => r.respuesta === null || r.respuesta === undefined || r.respuesta === NO_APLICA;

// Huella de lo que se revisa: si la respuesta cambia después de generar la planilla, la aprobación no se aplica.
// scripts/leer_completadas.py la calcula igual.
function huella(r) {
  const partes = [r.respuesta, r.dato, r.dato_publico, r.anio_dato, r.fuente_url, r.consultado].map((v) => (v === null || v === undefined ? '' : String(v)));
  return crypto.createHash('sha1').update(partes.join('\u0001'), 'utf8').digest('hex').slice(0, 12);
}

// Sorteo reproducible: la misma planilla y pregunta dan el mismo orden mientras no cambien los países disponibles.
function semilla(texto) {
  let h = 2166136261;
  for (const c of texto) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function azar(s) {
  return () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function sortear(lista, n, clave) {
  const r = azar(semilla(clave));
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(r() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia.slice(0, n);
}

function filaDatos(d, p, r) {
  const dato = r.respuesta === NO_APLICA ? `Sale del cálculo: ${r.motivo_null || 'sin motivo cargado'}`
    : sinRespuesta(r) ? `Sin responder: ${r.motivo_null || 'sin motivo cargado'}` : r.dato;
  return {
    pais: d.pais,
    nombre: d.nombre,
    pregunta: p.id,
    texto_pregunta: p.pregunta,
    critica: Boolean(p.ko && r.respuesta === 'SÍ'),
    respuesta: r.respuesta === null || r.respuesta === undefined ? 'null' : r.respuesta,
    dato: dato || '',
    dato_publico: r.dato_publico ? `${r.dato_publico} (dato ${r.anio_dato || 'sin año'}, ${r.fuente_corta || 'sin fuente corta'})` : '',
    link: r.fuente_url || '',
    otros_links: (r.fuentes_adicionales || []).map((f) => ({ nombre: f.nombre, url: f.url })),
    fuente: r.fuente_nombre ? `${r.fuente_nombre} · ${r.consultado || 'sin fecha'}` : '',
    criterio: r.criterio || '',
    fuentes_revisadas: (r.fuentes_revisadas || []).map((f) => ({ nombre: f.nombre, url: f.url, resultado: f.resultado })),
    estado: r.estado || '',
    aprobado: r.estado === 'aprobado' ? 'sí' : '',
    reviso: r.estado === 'aprobado' ? (r.revisado_por || '') : '',
    comentario: '',
    huella: huella(r),
  };
}

function armarPlanilla(pl) {
  const paises = datosPorPais.filter((d) => (!pl.paises || pl.paises.includes(d.pais)) && !(pl.excluir || []).includes(d.pais));
  const preguntas = todas.filter((p) => !pl.preguntas || pl.preguntas.includes(p.id));
  const bloques = { completa: [], muestreo: [], resto: [] };
  const candidatos = {};
  for (const d of paises) {
    for (const p of preguntas) {
      const r = d.respuestas[p.id];
      if (!r) continue;
      const f = filaDatos(d, p, r);
      if (sinRespuesta(r) || r.interpretativa === true || f.critica) bloques.completa.push(f);
      else if (MECANICAS.includes(p.id)) (candidatos[p.id] = candidatos[p.id] || []).push(f);
      else bloques.resto.push(f);
    }
  }
  for (const p of preguntas) {
    const lista = candidatos[p.id] || [];
    const elegidos = new Set(sortear(lista.map((f) => f.pais), POR_MUESTREO, `${pl.archivo}:${p.id}`));
    for (const f of lista) (elegidos.has(f.pais) ? bloques.muestreo : bloques.resto).push(f);
  }
  // Orden dentro de cada bloque: pregunta (orden del checklist) y país.
  const orden = todas.map((p) => p.id);
  for (const b of Object.values(bloques)) b.sort((a, c) => orden.indexOf(a.pregunta) - orden.indexOf(c.pregunta) || a.nombre.localeCompare(c.nombre, 'es'));

  const puntos = [];
  for (const d of paises) {
    for (const p of preguntas) {
      const r = d.respuestas[p.id];
      if (r && r.criterio && /REVISAR|pueden decidir|confirmar/i.test(r.criterio)) puntos.push(`${d.nombre} ${p.id}: ${r.criterio}`);
      if (r && r.respuesta === null && r.motivo_null && /PARA COMPLETAR/.test(r.motivo_null)) puntos.push(`${d.nombre} ${p.id}: ${r.motivo_null}`);
    }
  }
  return { archivo: pl.archivo, titulo: pl.titulo, nota: pl.nota || '', generado: hoy, puntos, bloques };
}

// Texto seguro dentro de una celda de tabla Markdown.
function celda(v) {
  if (v === null || v === undefined || v === '') return '—';
  return String(v).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

function filaMd(f) {
  const links = f.link ? [`[abrir](${f.link})`, ...f.otros_links.map((o) => `[${celda(o.nombre)}](${o.url})`)].join('<br>') : '—';
  const revisadas = f.fuentes_revisadas.map((o) => `[${celda(o.nombre)}](${o.url}): ${celda(o.resultado)}`).join('<br>') || '—';
  const resp = f.critica ? `${f.respuesta} ⚡` : f.respuesta;
  return `| ${celda(f.nombre)} | ${f.pregunta} | ${celda(f.texto_pregunta)} | ${resp} | ${celda(f.dato)} | ${celda(f.dato_publico)} | ${links} | ${celda(f.fuente)} | ${celda(f.criterio)} | ${revisadas} | ${celda(f.estado)} | ${f.aprobado} | ${f.reviso} | ${f.comentario} |`;
}

function escribirMd(pl) {
  const partes = [
    `# ${pl.titulo}`, '',
    '**Confidencial: no se publica.**', '',
    `Generado el ${pl.generado} con \`node scripts/generar_revision.js\` a partir de \`/data/respuestas/\`. Hay una versión en Excel con el mismo nombre (\`${pl.archivo}.xlsx\`), con un bloque por hoja.`, '',
    'Cómo revisar: abrí el link de cada fila y verificá que el dato coincida con la fuente. Completá "Aprobado" (sí/no), "Revisó" (G = Giuliano, A = Agustina) y, si hace falta, "Comentario". ',
    'Lo más cómodo es completar el Excel y subirlo a `data/revision/completadas/`: las filas con "sí" pasan a `aprobado` y las que tienen "no" o un comentario se corrigen. ',
    'Mientras quede alguna respuesta pendiente, el sitio muestra la franja "Versión de prueba: datos en revisión".', '',
  ];
  if (pl.nota) partes.push(pl.nota, '');
  partes.push('| Bloque | Filas |', '|---|---|', ...BLOQUES.map((b) => `| ${b.titulo} | ${pl.bloques[b.id].length} |`), '');
  if (pl.puntos.length) partes.push('## Puntos a mirar', '', ...pl.puntos.map((t) => `- ${celda(t)}`), '');
  for (const b of BLOQUES) {
    const filas = pl.bloques[b.id];
    partes.push(`## ${b.titulo} (${filas.length} filas)`, '', b.nota, '');
    if (!filas.length) { partes.push('Sin filas.', ''); continue; }
    partes.push('| País | # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado | Revisó | Comentario |');
    partes.push('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
    for (const f of filas) partes.push(filaMd(f));
    partes.push('');
  }
  fs.writeFileSync(path.join(SALIDA_DIR, `${pl.archivo}.md`), partes.join('\n'));
}

fs.mkdirSync(SALIDA_DIR, { recursive: true });
fs.mkdirSync(path.join(SALIDA_DIR, 'completadas'), { recursive: true });
const planillas = PLANILLAS.map(armarPlanilla);
for (const pl of planillas) {
  escribirMd(pl);
  const n = BLOQUES.map((b) => `${b.titulo.toLowerCase()}: ${pl.bloques[b.id].length}`).join(', ');
  console.log(`Revisión generada en data/revision/${pl.archivo}.md (${n}).`);
}
fs.writeFileSync(path.join(SALIDA_DIR, 'planillas.json'), JSON.stringify({ generado: hoy, revisores: REVISORES, bloques: BLOQUES, planillas }, null, 1) + '\n');

// Los .xlsx los arma scripts/planillas_xlsx.py (necesita python3 con openpyxl).
const py = spawnSync('python3', [path.join(__dirname, 'planillas_xlsx.py')], { stdio: 'inherit' });
if (py.error || py.status !== 0) console.warn('Aviso: no se generaron los .xlsx. Corré: python3 scripts/planillas_xlsx.py (requiere openpyxl).');
