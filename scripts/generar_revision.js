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

for (const archivo of fs.readdirSync(DIR).filter((f) => f.endsWith('.json')).sort()) {
  const datos = JSON.parse(fs.readFileSync(path.join(DIR, archivo), 'utf8'));
  const resp = datos.respuestas || {};
  const sinResponder = preguntas.filter((p) => !resp[p.id] || resp[p.id].respuesta === null).length;

  partes.push(`## ${datos.nombre} (${datos.pais})`, '');
  partes.push(`Respuestas sin completar: ${sinResponder} de ${preguntas.length}.`, '');
  partes.push('| # | Pregunta | Respuesta | Dato | Link | Fuente y fecha de consulta | Estado | Aprobado (Agustina) |');
  partes.push('|---|---|---|---|---|---|---|---|');
  for (const p of preguntas) {
    const r = resp[p.id] || {};
    const respuesta = r.respuesta === null || r.respuesta === undefined ? 'null' : r.respuesta;
    const dato = r.respuesta === null || r.respuesta === undefined ? `Sin responder: ${r.motivo_null || 'sin motivo cargado'}` : r.dato;
    const link = r.fuente_url ? `[abrir](${r.fuente_url})` : '—';
    const fuente = r.fuente_nombre ? `${r.fuente_nombre} · ${r.consultado || 'sin fecha'}` : '—';
    partes.push(`| ${p.id} | ${celda(p.pregunta)} | ${respuesta} | ${celda(dato)} | ${link} | ${celda(fuente)} | ${celda(r.estado)} |  |`);
  }
  partes.push('');
}

fs.mkdirSync(path.dirname(SALIDA), { recursive: true });
fs.writeFileSync(SALIDA, partes.join('\n'));
console.log('Revisión generada en', path.relative(RAIZ, SALIDA));
