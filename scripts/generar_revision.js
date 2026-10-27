#!/usr/bin/env node
/*
 * CONFIDENCIAL: no se publica.
 *
 * Genera /data/revision/revision_3_paises.md a partir de /data/respuestas/*.json:
 * una tabla por país con pregunta, respuesta, dato, link y la columna "Aprobado (Agustina)".
 *
 * Uso: node scripts/generar_revision.js
 */
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const checklist = JSON.parse(fs.readFileSync(path.join(RAIZ, 'metodologia', 'checklist_pais.json'), 'utf8'));
const DIR = path.join(RAIZ, 'data', 'respuestas');
const SALIDA = path.join(RAIZ, 'data', 'revision', 'revision_3_paises.md');

// Texto seguro dentro de una celda de tabla Markdown.
function celda(v) {
  if (v === null || v === undefined || v === '') return '—';
  return String(v).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

const preguntas = [
  ...checklist.preguntas,
  { id: checklist.indicador_aparte.id, pregunta: `${checklist.indicador_aparte.pregunta} (indicador aparte, no entra al puntaje)` },
];

const hoy = new Date().toISOString().slice(0, 10);
const partes = [
  '# Revisión de respuestas: Brasil, China y España',
  '',
  '**Confidencial: no se publica.**',
  '',
  `Generado el ${hoy} con \`node scripts/generar_revision.js\` a partir de \`/data/respuestas/\`.`,
  '',
  'Cómo revisar: para cada fila, abrí el link, verificá que el dato coincida con la fuente y marcá la última columna con ✔ (aprobado) o ✘ y un comentario. ',
  'Cuando una respuesta esté aprobada, su `estado` en el JSON del país pasa de `pendiente_revision` a `aprobado`. ',
  'Mientras quede alguna pendiente, el sitio muestra la franja "Versión de prueba: datos en revisión".',
  '',
];

const archivos = fs.readdirSync(DIR).filter((f) => f.endsWith('.json')).sort();

// Puntos a mirar: respuestas cuyo criterio pide una revisión posterior o una decisión.
const puntos = [];
for (const archivo of archivos) {
  const datos = JSON.parse(fs.readFileSync(path.join(DIR, archivo), 'utf8'));
  for (const [id, r] of Object.entries(datos.respuestas || {})) {
    if (r.criterio && /REVISAR|pueden decidir|confirmar/i.test(r.criterio)) puntos.push(`- **${datos.nombre} ${id}:** ${r.criterio}`);
  }
}
if (puntos.length) partes.push('## Puntos a mirar', '', ...puntos, '');

for (const archivo of archivos) {
  const datos = JSON.parse(fs.readFileSync(path.join(DIR, archivo), 'utf8'));
  const resp = datos.respuestas || {};
  const sinResponder = preguntas.filter((p) => !resp[p.id] || resp[p.id].respuesta === null).length;

  partes.push(`## ${datos.nombre} (${datos.pais})`, '');
  partes.push(`Respuestas completas: ${preguntas.length - sinResponder} de ${preguntas.length}. Sin completar (null): ${sinResponder}.`, '');
  partes.push('| # | Pregunta | Respuesta | Dato | Dato que se publica (si da SÍ) | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |');
  partes.push('|---|---|---|---|---|---|---|---|---|---|---|');
  for (const p of preguntas) {
    const r = resp[p.id] || {};
    const respuesta = r.respuesta === null || r.respuesta === undefined ? 'null' : r.respuesta;
    const dato = r.respuesta === null || r.respuesta === undefined ? `Sin responder: ${r.motivo_null || 'sin motivo cargado'}` : r.dato;
    const extras = (r.fuentes_adicionales || []).map((f) => `[${celda(f.nombre)}](${f.url})`);
    const link = r.fuente_url ? [`[abrir](${r.fuente_url})`, ...extras].join('<br>') : '—';
    const fuente = r.fuente_nombre ? `${r.fuente_nombre} · ${r.consultado || 'sin fecha'}` : '—';
    const publico = r.dato_publico ? `${r.dato_publico} (dato ${r.anio_dato || 'sin año'}, ${r.fuente_corta || 'sin fuente corta'})` : null;
    const revisadas = (r.fuentes_revisadas || []).map((f) => `[${celda(f.nombre)}](${f.url}): ${celda(f.resultado)}`).join('<br>');
    partes.push(`| ${p.id} | ${celda(p.pregunta)} | ${respuesta} | ${celda(dato)} | ${celda(publico)} | ${link} | ${celda(fuente)} | ${celda(r.criterio)} | ${revisadas || '—'} | ${celda(r.estado)} |  |`);
  }
  partes.push('');
}

fs.mkdirSync(path.dirname(SALIDA), { recursive: true });
fs.writeFileSync(SALIDA, partes.join('\n'));
console.log('Revisión generada en', path.relative(RAIZ, SALIDA));
