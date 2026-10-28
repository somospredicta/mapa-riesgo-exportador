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
- Títulos: **Funnel Display**. Excepción aprobada a la regla anterior de minúsculas: el título del mapa es "Mapa de riesgo exportador".
- Argentina (país de origen): relleno igual al fondo y borde Azul Espectro. País seleccionado: borde blanco grueso, sin cambiar el relleno.
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
  generar_revision.js  Respuestas → planillas de data/revision/ (.md y, con planillas_xlsx.py, .xlsx)
  planillas_xlsx.py    Arma los .xlsx de las planillas (Python con openpyxl; lo llama generar_revision.js).
  leer_completadas.py  Lee las planillas completadas de data/revision/completadas/ y aprueba respuestas.
/data          Insumos de trabajo. No se publica.
  respuestas/XXX.json  Una por país (ISO alfa-3): respuesta SÍ / NO / null, dato, fuente, link, fecha, estado.
  revision/            Planillas para revisión humana (.md y .xlsx).
    completadas/       Planillas completadas que suben los revisores; procesadas/ guarda las ya leídas.
  fuentes/             Archivos de fuentes oficiales subidos a mano (cuando el entorno no puede abrirlas). Ver LEEME.md.
vercel.json    Publica solo /public.
```

## Flujo de datos

1. Se investiga cada pregunta en la fuente indicada y se carga en `data/respuestas/XXX.json`.
   Sin fuente verificable, la respuesta queda en `null` con `motivo_null`. Nunca se completa de memoria.
2. Toda respuesta nueva arranca con `"estado": "pendiente_revision"`. Pasa a `"aprobado"` (o a `"aprobada_por_muestreo"`,
   ver "Planillas de revisión") solo cuando
   la aprueba un revisor en la planilla de `data/revision/`. Revisan **Giuliano (G) o Agustina (A)**, cualquiera de los dos;
   la respuesta aprobada guarda quién la revisó (`revisado_por`) y la fecha (`revisado_fecha`).
3. `node scripts/generar_revision.js` regenera las planillas de revisión (se definen en `PLANILLAS` dentro del script).
   Cuando los revisores suben una planilla completada a `data/revision/completadas/`, se corre
   `python3 scripts/leer_completadas.py`: las filas con "sí" (con "Revisó" y sin comentario) pasan a `"aprobado"`; las que
   tienen "no" o un comentario se corrigen según el comentario y se le listan al usuario para confirmar. Los generadores
   nunca pisan una respuesta aprobada.
4. `node scripts/calcular.js` regenera `public/data/mapa.json`. Si queda alguna respuesta sin aprobar,
   el estado es `"borrador"` y el sitio muestra la franja "Versión de prueba: datos en revisión".

Reglas del cálculo: una respuesta faltante (o sin dato, link o fecha) nunca cuenta como NO; deja su dimensión
y el puntaje país en "Sin datos completos". Los KO no cambian el color: se listan como condiciones críticas.

Campos de cada respuesta en `data/respuestas/XXX.json`:
- `dato`: el detalle completo para la revisión interna. No se publica.
- `dato_publico`: el valor corto que se publica: en las respuestas SÍ (condiciones críticas, hechos), en las NO
  (bloque "A favor") y en el indicador I4-4. Tiene que ser un hecho verificable de la fuente y nunca mencionar umbrales,
  criticidades ni pesos.
- `anio_dato`: año al que corresponde el dato publicado.
- `fuente_corta`: nombre corto de la fuente para la frase pública.
  La frase pública se arma así: "La percepción de corrupción es alta (CPI: 35/100; dato 2025, Transparencia Internacional)."
- `fuentes_revisadas`: fuentes consultadas en una búsqueda documentada (ver "Criterios de respuesta"). No se publican.
- `criterio`: interpretación aplicada o fuente sustituta usada, para que la revise Agustina. No se publica.
- `fuentes_adicionales`: otras fuentes consultadas (`nombre`, `url`, `consultado`). No se publican.
- `motivo_null`: por qué la respuesta quedó sin completar. Si el país no figura en una base: "El país no figura en [fuente]."
- `fuente_ausente`: en las respuestas `"no_aplica_sin_fuente"`, el nombre de la fuente en la que el país no figura. Es lo que
  se muestra en el panel ("el país no figura en [fuentes]"). Sin este campo y `motivo_null`, la respuesta cuenta como sin responder.
- `interpretativa`: `true` cuando la respuesta aplicó un criterio que conviene revisar. Va a las planillas de revisión.
- `variante`: elige una variante de la frase pública del checklist (por ejemplo `"general"` en A5 cuando el cambio
  alcanzó a todas las empresas: "afectaron a empresas, incluidas las extranjeras").
- `revisado_por` (G o A), `revisado_fecha` y `revision_origen` (planilla, hoja y fila): se cargan al aprobar la respuesta.
- `alerta` (`texto`, `fecha`): hecho con fuente que se publica en "Alertas recientes" aunque no cuente como riesgo vigente
  (criterio 23). Usa la fuente, el link y la fecha de consulta de la respuesta.

## Planillas de revisión

- Revisan Giuliano (G) o Agustina (A), cualquiera de los dos.
- Columnas para los revisores: "Aprobado" (sí/no), "Revisó" (G/A) y "Comentario".
- Cada planilla tiene tres bloques (en el .xlsx, una hoja por bloque):
  1. **Revisión completa:** respuestas interpretativas, en null, fuera del cálculo y todas las condiciones críticas (⚡).
  2. **Muestreo:** para cada pregunta mecánica (bases de datos, G4 y C4), 4 países al azar con su dato y link.
  3. **Resto:** las demás, solo como referencia.
- En el .xlsx solo se editan "Aprobado" (desplegable sí/no), "Revisó" (desplegable G/A) y "Comentario"; el resto está
  protegido y en gris. Una columna oculta ("Huella") permite detectar si la respuesta cambió después de generar la planilla.
- Las planillas se regeneran solo con lo pendiente: las respuestas aprobadas (por un revisor o por muestreo) ya no se listan.
- **Aprobación por muestreo (sesión 6):** cuando en una planilla todas las filas de "Muestreo" de una pregunta están aprobadas
  sin comentarios, las filas de esa misma pregunta en "Resto" pasan a `"aprobada_por_muestreo"`, con quién aprobó el muestreo
  (`revisado_por`) y la fecha (`revisado_fecha`). Si alguna fila del muestreo de esa pregunta tiene "no" o comentario, el resto
  de esa pregunta no se aprueba hasta corregir. A1 queda excluida del muestreo hasta terminar su corrección
  (`EXCLUIDAS_MUESTREO` en `scripts/leer_completadas.py`). Para el cálculo y la franja de borrador,
  `"aprobada_por_muestreo"` cuenta como aprobada. `python3 scripts/leer_completadas.py --reaplicar` vuelve a aplicar la regla
  a las planillas ya procesadas.

## Panel del país

- Condiciones críticas: respuestas SÍ de preguntas KO.
- Hechos principales: hasta 3 respuestas SÍ que no sean KO, ordenadas por criticidad (empate: orden del checklist).
- A favor: hasta 2 respuestas NO de mayor criticidad, con la `frase_positiva` del checklist y su dato.
- Tendencia, alertas recientes y "Argentina con…" se ocultan mientras no tengan datos.
- Al pasar el mouse, si el país tiene condiciones críticas, el cuadrito muestra "⚡ N condiciones críticas".
- Las frases públicas y positivas nunca revelan umbrales, ventanas de tiempo, criticidades ni pesos
  (por ejemplo, "El Estado de derecho muestra debilidades", no "está en la mitad inferior del ranking").

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

8. **Cobertura (sesión 4).** Si un país NO FIGURA en la fuente oficial de una pregunta (el dato no existe; no es que
   la investigación esté pendiente), la respuesta es `"no_aplica_sin_fuente"` con `motivo_null`. Esa pregunta sale del
   numerador y del denominador de su dimensión. Una dimensión se calcula solo si sus preguntas respondidas suman al
   menos el 75% de la suma total de criticidades de la dimensión; si no, queda "sin datos". Las respuestas pendientes
   de investigación siguen en `null` y bloquean el puntaje. En el panel, si hay preguntas excluidas, se muestra debajo
   de las dimensiones: "Calculado con N de M preguntas: el país no figura en [fuentes]".
9. **I3-5 (precisión):** SÍ si el país no es miembro del CIADI y ninguna norma vigente habilita EXPRESAMENTE el
   arbitraje internacional en disputas de inversores con el Estado. Una habilitación general del arbitraje con el
   Estado que no lo menciona (por ejemplo, la Ley 13.129/2015 de Brasil) no alcanza.
10. **C1 (precisión):** si no hay idioma oficial declarado, se toma el idioma de las instituciones según sus leyes.
11. **G3 (precisión):** se toma la diferencia horaria máxima del año.
12. **A3 (precisión):** el Sistema Global de Preferencias Comerciales (SGPC) no cuenta como acuerdo comercial.
13. **A1 (precisión):** un tratado de libre comercio vigente con capítulo de protección de inversiones cuenta como
    equivalente a un tratado de inversión. También cuenta el Protocolo de Cooperación y Facilitación de Inversiones
    del Mercosur (2017) si está vigente entre Argentina y el socio.
14. **C4:** se responde con el sitio de la cámara, la Cancillería o un registro oficial, con búsqueda documentada.
15. **C3 (sesión 5):** las medidas antidumping y otras defensas comerciales permitidas por la OMC NO cuentan como
    discriminación, salvo que un fallo de la OMC las declare incompatibles. La disputa se anota en `fuentes_revisadas`.
16. **I3-2 (sesión 5):** las sanciones internacionales contra personas o entidades puntuales (por ejemplo, decomisos de
    bienes rusos) NO cuentan como expropiación.
17. **A5 (sesión 5):** una ley retroactiva que después se derogó sigue contando como SÍ, porque existió; el dato publicado
    lo aclara: "(…, luego derogado en [año])".
18. **I3-5 (sesión 5):** un tratado bilateral de inversión vigente con Argentina que prevé arbitraje internacional cuenta
    como norma habilitante. Los tratados del país con terceros países no cuentan.
19. **C4 (sesión 5):** una cámara sin balances ni asambleas en los últimos 3 años se considera inactiva (SÍ).
20. **Frase "A favor" de A1:** "Tiene un acuerdo vigente de protección de inversiones con Argentina".
21. **Búsquedas automáticas (sesión 6):** cuando una búsqueda automática por nombre (de país, de acuerdo o de entidad)
    no encuentra un registro, antes de responder hay que probar variantes: nombre oficial y corto ("Francia",
    "República Francesa"), gentilicio ("Francesa", "Franco-"), nombres históricos ("Checoslovaquia", "Yugoslavia",
    "República Federal de Alemania"), uniones o bloques ("Unión Económica Belgo-Luxemburguesa", "Mercosur", "ALADI"),
    abreviaturas de registro ("ARG-ALEM", "EE.UU."), con y sin tildes, y también buscar por tipo de acuerdo sin filtrar
    por país. Si hay una segunda fuente (por ejemplo, UNCTAD para tratados de inversión), se contrasta país por país y
    cualquier diferencia va a "Revisión completa" como interpretativa.
22. **A3 y la ALADI (sesión 6):** la Preferencia Arancelaria Regional de la ALADI sola es una preferencia marginal y no
    cuenta como acuerdo comercial (igual que el SGPC: SÍ). Cuenta (NO) un Acuerdo de Alcance Parcial bilateral o un Acuerdo
    de Complementación Económica vigente entre el país y Argentina o el Mercosur. Se verifica el instrumento concreto
    (número de ACE o AAP) en la página de acuerdos vigentes de Cancillería o en la base de textos de la ALADI.

Pedidos de la revisión de G (28/10/2026), **aplicados y pendientes de confirmación por los fundadores**:

23. **A5, medida retroactiva revertida (reemplaza al 17 para estos casos):** si una ley retroactiva se derogó y se devolvió
    lo cobrado, A5 es NO y el hecho se publica en "Alertas recientes" (campo `alerta` de la respuesta: `texto` y `fecha`),
    recomendando seguir cambios similares. Una respuesta NO con alerta no va al bloque "A favor".
24. **C2 con dimensiones de Hofstede faltantes:** si la herramienta tiene dato de algunas dimensiones pero no de todas, se
    responde con las dimensiones disponibles (SÍ si al menos 2 superan los 40 puntos), como interpretativa. Si el país no
    figura en la herramienta, sigue siendo `"no_aplica_sin_fuente"`.

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
      "a_favor": [ { "texto": "…", "dato": "…", "anio_dato": 2025, "fuente": { … } } ],
      "calidad_informacion": { "alerta": false, "texto": "…", "dato": "…", "anio_dato": 2026, "fuente": { … } },
      "cobertura": { "preguntas_usadas": 18, "preguntas_total": 20, "fuentes_ausentes": ["…"] },
      "sin_cobertura_suficiente": false,
      "estado": "borrador | aprobado"
    }
  },
  "regiones": {}
}
```

`cobertura` es `null` si no hay preguntas excluidas. `sin_cobertura_suficiente` es `true` cuando todas las preguntas tienen
respuesta pero alguna dimensión no llega al mínimo de cobertura; el sitio muestra "Sin datos suficientes".

Campos opcionales que el sitio ya sabe mostrar si en el futuro se agregan: `tendencia` ("sube" | "baja" | "estable"),
`alertas` (con `fecha`) y `argentina_con`, con el mismo formato de ítem con fuente.
