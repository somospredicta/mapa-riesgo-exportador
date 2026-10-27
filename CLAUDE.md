# Mapa de Riesgo Exportador Predicta — reglas permanentes

Planisferio web público e interactivo: un exportador argentino pasa el mouse por un país y ve el
riesgo político, institucional y estructural del entorno, visto desde Argentina.

Estas reglas valen para todo el proyecto y para cualquier sesión futura.

## 1. Confidencialidad

- El checklist, las criticidades, los pesos y la fórmula de la metodología son **confidenciales**.
- Viven **solo** en `/metodologia` y `/scripts`. Nunca se copian, citan ni resumen dentro de `/public`.
- `/public` es lo único que se publica. El sitio público recibe únicamente **resultados ya calculados**:
  un JSON (`/public/data/riesgo.json`) con puntajes, condiciones críticas activas y hechos con fuente.
- Nada de lo que está en `/public` (HTML, JS, comentarios, JSON) puede permitir reconstruir pesos,
  criticidades ni fórmula. Ni siquiera en comentarios de código.
- `/data` guarda insumos de trabajo; tampoco se publica.

## 2. Integridad

- Nunca inventar datos, puntajes, fechas ni fuentes.
- Todo dato lleva fuente con link y fecha de consulta.
- Si falta un dato, se muestra **"Sin datos"**. No se estima, no se interpola, no se completa "a ojo".
- El sitio no muestra ítems (condiciones, hechos, alertas) que lleguen sin fuente con link y fecha.

## 3. Marca

- Fondo: Azul Prussia `#000030`.
- Azul Espectro `#0059FF`: **solo acento** (bordes, links, detalles). Nunca como relleno grande.
- Blanco `#FEFEFE`. Negro `#020202`.
- Títulos: **Funnel Display**.
- Logo: `public/img/logo-predicta.png` (no reemplazar por texto).
- Cuerpo: **Google Sans** (disponible en Google Fonts). Respaldo: Inter / sans-serif.

## 4. Semáforo del mapa (solo para riesgo)

| Puntaje   | Color          | Etiqueta            |
|-----------|----------------|---------------------|
| 4,1 a 5,0 | verde          | Entorno favorable   |
| 3,1 a 4,0 | amarillo       | Precaución          |
| 2,1 a 3,0 | rojo cauteloso | Entorno exigente    |
| 1,0 a 2,0 | rojo crítico   | Entorno crítico     |
| sin datos | gris           | Sin datos           |

Los colores del semáforo se usan únicamente para expresar riesgo, en ningún otro elemento.
El puntaje se redondea a un decimal antes de clasificarlo.

## 5. Idioma

Interfaz en español rioplatense, con voseo ("consultanos", "pedí", "hacé").

La primera letra de frases, títulos, subtítulos y nombres de países va en mayúscula; el resto,
según la ortografía normal ("Mapa de riesgo exportador", "Condiciones críticas", "Sin datos").

## Estructura

```
/public        Sitio publicado (lo único que ve Vercel). HTML + CSS + JS, sin frameworks ni build.
  index.html
  metodologia.html
  css/estilos.css
  js/entidades.js   Países con puntaje propio, regiones, territorios y país de origen.
  js/mapa.js        Mapa (D3 + world-atlas desde CDN), tooltip y panel.
  data/mapa.json    Resultados ya calculados. Lo genera scripts/calcular.js; no se edita a mano.
/metodologia   CONFIDENCIAL. checklist_pais.json: preguntas, criticidades, KO, fórmula y frases públicas.
/scripts       CONFIDENCIAL.
  calcular.js          Respuestas + checklist → public/data/mapa.json
  generar_revision.js  Respuestas → data/revision/revision_3_paises.md
/data          Insumos de trabajo. No se publica.
  respuestas/XXX.json  Una por país (ISO alfa-3): respuesta SÍ / NO / null, dato, fuente, link, fecha, estado.
  revision/            Planillas para revisión humana.
vercel.json    Publica solo /public.
```

## Flujo de datos

1. Se investiga cada pregunta en la fuente indicada y se carga en `data/respuestas/XXX.json`.
   Sin fuente verificable, la respuesta queda en `null` con `motivo_null`. Nunca se completa de memoria.
2. Toda respuesta nueva arranca con `"estado": "pendiente_revision"`. Pasa a `"aprobado"` solo cuando
   la aprueba Agustina en la planilla de `data/revision/`.
3. `node scripts/generar_revision.js` regenera la planilla de revisión.
4. `node scripts/calcular.js` regenera `public/data/mapa.json`. Si queda alguna respuesta sin aprobar,
   el estado es `"borrador"` y el sitio muestra la franja "Versión de prueba: datos en revisión".

Reglas del cálculo: una respuesta faltante (o sin dato, link o fecha) nunca cuenta como NO; deja su dimensión
y el puntaje país en "Sin datos completos". Los KO no cambian el color: se listan como condiciones críticas.

Campos de cada respuesta en `data/respuestas/XXX.json`:
- `dato`: el detalle completo para la revisión interna. No se publica.
- `dato_publico`: el valor corto que sí se publica cuando la respuesta es SÍ (condiciones críticas, hechos)
  y en el indicador I4-4. Tiene que ser un hecho verificable de la fuente y nunca mencionar umbrales,
  criticidades ni pesos.
- `anio_dato`: año al que corresponde el dato publicado.
- `fuente_corta`: nombre corto de la fuente para la frase pública.
  La frase pública se arma así: "La percepción de corrupción es alta (CPI: 35/100; dato 2025, Transparencia Internacional)."
- `fuentes_revisadas`: fuentes consultadas en una búsqueda documentada (ver "Criterios de respuesta"). No se publican.
- `criterio`: interpretación aplicada o fuente sustituta usada, para que la revise Agustina. No se publica.
- `fuentes_adicionales`: otras fuentes consultadas (`nombre`, `url`, `consultado`). No se publican.
- `motivo_null`: por qué la respuesta quedó sin completar.

## Criterios de respuesta

Aprobados por los fundadores. Rigen para todos los países.

1. **Búsqueda documentada (C3, A5, I3-2).** La metodología responde SÍ solo cuando el riesgo existe.
   Si la búsqueda en las fuentes definidas no encuentra casos, la respuesta es NO y se guarda en
   `fuentes_revisadas` la lista de fuentes consultadas (`nombre`, `url`, `consultado`, `resultado`).
   Null solo cuando no se pudo buscar.
   - C3: prensa indexada (Reuters, AP y medios de referencia del país), informes de la OCDE y disputas
     de la OMC. La OMC sola no alcanza.
   - A5: prensa e informes país. También cuenta una decisión de un tribunal supremo con efecto general
     y retroactivo sobre empresas.
   - I3-2: base de casos del CIADI y prensa. Solo cuenta una expropiación, nacionalización o confiscación
     documentada; una demanda sin resolver no alcanza.
2. **C1:** lectura literal. Un idioma oficial distinto del español es SÍ.
3. **A3:** un acuerdo en aplicación provisoria cuenta como vigente.
4. **G4:** se responde con la frecuencia vigente al día de la consulta. Si hay un cambio anunciado,
   se anota en `criterio` la fecha a partir de la cual hay que revisarla.
5. **I3-4:** se responde con el factor 7.5 del Rule of Law Index del World Justice Project
   ("la justicia civil no está sujeta a demoras irrazonables"), percentil sobre el total de países.
6. **I3-5:** SÍ si el país no es miembro del CIADI y no hay una norma vigente que habilite expresamente
   el arbitraje internacional en disputas de inversores con el Estado. Se verifica en el texto oficial
   de la ley y en la lista de miembros del CIADI.
7. **Año del dato.** Todo dato que se publica muestra el año al que corresponde (`anio_dato`), por ejemplo
   "La economía informal tiene un peso alto en el PBI (40% del PBI; dato 2020, Banco Mundial)."

## Grupos del mapa

- Puntaje propio: los 27 países de la UE, todos los países de América, China, India y Japón.
- Regiones (puntaje ponderado regional): Resto de Europa, Resto de Asia, Medio Oriente, África, Oceanía.
- Argentina: "país de origen", sin puntaje (incluye Islas Malvinas e Islas Georgias del Sur y Sandwich del Sur).
- Territorios dependientes (Groenlandia, Puerto Rico, Hong Kong, etc.): sin puntaje propio, solo nombre.
- La asignación está en `public/js/entidades.js`.

## Formato de `public/data/mapa.json`

Lo genera `scripts/calcular.js`. Las claves de país son códigos ISO 3166-1 alfa-3; las de región, los ids
de `entidades.js`. Cualquier campo puede faltar o ser `null`: el sitio muestra "Sin datos".

```json
{
  "actualizado": "AAAA-MM-DD",
  "estado": "borrador | aprobado",
  "paises": {
    "BRA": {
      "puntaje": 3.4,
      "etiqueta": "Precaución",
      "completo": true,
      "dimensiones": { "cultural": 4.0, "administrativa": 3.1, "geografica": 4.5, "economica": 3.0, "instituciones": 2.5 },
      "condiciones_criticas": [ { "texto": "…", "dato": "…", "anio_dato": 2025, "fuente": { "nombre": "…", "url": "https://…", "consultado": "AAAA-MM-DD" } } ],
      "hechos": [ { "texto": "…", "dato": "…", "anio_dato": 2025, "fuente": { … } } ],
      "calidad_informacion": { "alerta": false, "texto": "…", "dato": "…", "anio_dato": 2026, "fuente": { … } },
      "estado": "borrador | aprobado"
    }
  },
  "regiones": {}
}
```

Campos opcionales que el sitio ya sabe mostrar si en el futuro se agregan: `tendencia` ("sube" | "baja" | "estable"),
`alertas` (con `fecha`) y `argentina_con`, con el mismo formato de ítem con fuente.
