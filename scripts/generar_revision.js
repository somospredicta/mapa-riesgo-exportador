#!/usr/bin/env node
/*
 * CONFIDENCIAL: no se publica.
 *
 * Genera las planillas de revisión de /data/revision/ a partir de /data/respuestas/*.json:
 * una tabla por país con pregunta, respuesta, dato, link y la columna "Aprobado (Agustina)".
 *
 * Planillas (se definen en PLANILLAS):
 *   revision_3_paises.md            Brasil, China y España, todas las preguntas.
 *   revision_tanda1_sudamerica.md   Preguntas de investigación de la tanda 1 (Sudamérica).
 *   revision_bases_64_paises.md     Preguntas de bases de datos, solo respuestas interpretativas o en null.
 *
 * Uso: node scripts/generar_revision.js
 */
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const checklist = JSON.parse(fs.readFileSync(path.join(RAIZ, 'metodologia', 'checklist_pais.json'), 'utf8'));
const DIR = path.join(RAIZ, 'data', 'respuestas');
const SALIDA_DIR = path.join(RAIZ, 'data', 'revision');

const BASES = ['C1', 'C2', 'A1', 'A2', 'A3', 'A4', 'G1', 'G3', 'E1', 'E2', 'E3', 'E4', 'I3-1', 'I3-4', 'I3-5', 'I4-4'];
const SUDAMERICA = ['BOL', 'CHL', 'COL', 'ECU', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN'];

const PLANILLAS = [
  { archivo: 'revision_3_paises.md', titulo: 'Revisión de respuestas: Brasil, China y España', paises: ['BRA', 'CHN', 'ESP'] },
  { archivo: 'revision_tanda1_sudamerica.md', titulo: 'Revisión de la tanda 1 de investigación: Sudamérica (C3, A5, I3-2 y G4)', paises: SUDAMERICA, preguntas: ['C3', 'A5', 'I3-2', 'G4'] },
  { archivo: 'revision_bases_64_paises.md', titulo: 'Revisión de preguntas de bases de datos: respuestas interpretativas o en null', preguntas: BASES, soloDudosas: true,
    nota: 'Solo se listan las respuestas que aplicaron un criterio interpretativo o quedaron en null. El resto de las respuestas de bases de datos está en los JSON de /data/respuestas/ con su dato, link y fecha.' },
];

// Texto seguro dentro de una celda de tabla Markdown.
function celda(v) {
  if (v === null || v === undefined || v === '') return '—';
  return String(v).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

const todas = [
  ...checklist.preguntas,
  { id: checklist.indicador_aparte.id, pregunta: `${checklist.indicador_aparte.pregunta} (indicador aparte, no entra al puntaje)` },
];
const hoy = new Date().toISOString().slice(0, 10);
const datosPorPais = fs.readdirSync(DIR).filter((f) => f.endsWith('.json')).sort()
  .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')));

const esDudosa = (r) => r.respuesta === null || r.respuesta === undefined || r.interpretativa === true;

function fila(p, r) {
  const respuesta = r.respuesta === null || r.respuesta === undefined ? 'null' : r.respuesta;
  const dato = r.respuesta === null || r.respuesta === undefined ? `Sin responder: ${r.motivo_null || 'sin motivo cargado'}` : r.dato;
  const extras = (r.fuentes_adicionales || []).map((f) => `[${celda(f.nombre)}](${f.url})`);
  const link = r.fuente_url ? [`[abrir](${r.fuente_url})`, ...extras].join('<br>') : '—';
  const fuente = r.fuente_nombre ? `${r.fuente_nombre} · ${r.consultado || 'sin fecha'}` : '—';
  const publico = r.dato_publico ? `${r.dato_publico} (dato ${r.anio_dato || 'sin año'}, ${r.fuente_corta || 'sin fuente corta'})` : null;
  const revisadas = (r.fuentes_revisadas || []).map((f) => `[${celda(f.nombre)}](${f.url}): ${celda(f.resultado)}`).join('<br>');
  return `| ${p.id} | ${celda(p.pregunta)} | ${respuesta} | ${celda(dato)} | ${celda(publico)} | ${link} | ${celda(fuente)} | ${celda(r.criterio)} | ${revisadas || '—'} | ${celda(r.estado)} |  |`;
}

for (const pl of PLANILLAS) {
  const paises = datosPorPais.filter((d) => !pl.paises || pl.paises.includes(d.pais));
  const preguntas = todas.filter((p) => !pl.preguntas || pl.preguntas.includes(p.id));
  const partes = [
    `# ${pl.titulo}`, '',
    '**Confidencial: no se publica.**', '',
    `Generado el ${hoy} con \`node scripts/generar_revision.js\` a partir de \`/data/respuestas/\`.`, '',
    'Cómo revisar: para cada fila, abrí el link, verificá que el dato coincida con la fuente y marcá la última columna con ✔ (aprobado) o ✘ y un comentario. ',
    'Cuando una respuesta esté aprobada, su `estado` en el JSON del país pasa de `pendiente_revision` a `aprobado`. ',
    'Mientras quede alguna pendiente, el sitio muestra la franja "Versión de prueba: datos en revisión".', '',
  ];
  if (pl.nota) partes.push(pl.nota, '');

  // Puntos a mirar: respuestas cuyo criterio pide una revisión posterior o una decisión.
  const puntos = [];
  for (const d of paises) {
    for (const p of preguntas) {
      const r = d.respuestas[p.id];
      if (r && r.criterio && /REVISAR|pueden decidir|confirmar/i.test(r.criterio)) puntos.push(`- **${d.nombre} ${p.id}:** ${r.criterio}`);
    }
  }
  if (puntos.length) partes.push('## Puntos a mirar', '', ...puntos, '');

  let total = 0;
  for (const d of paises) {
    const filas = preguntas.filter((p) => d.respuestas[p.id] && (!pl.soloDudosas || esDudosa(d.respuestas[p.id])));
    if (pl.soloDudosas && !filas.length) continue;
    const nulos = preguntas.filter((p) => !d.respuestas[p.id] || d.respuestas[p.id].respuesta === null).length;
    partes.push(`## ${d.nombre} (${d.pais})`, '');
    partes.push(`Preguntas de esta planilla: ${preguntas.length}. Completas: ${preguntas.length - nulos}. Sin completar (null): ${nulos}.`, '');
    partes.push('| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |');
    partes.push('|---|---|---|---|---|---|---|---|---|---|---|');
    for (const p of filas) { partes.push(fila(p, d.respuestas[p.id])); total += 1; }
    partes.push('');
  }
  fs.mkdirSync(SALIDA_DIR, { recursive: true });
  fs.writeFileSync(path.join(SALIDA_DIR, pl.archivo), partes.join('\n'));
  console.log(`Revisión generada en data/revision/${pl.archivo} (${total} filas).`);
}
