# Revisión de preguntas de bases de datos: respuestas interpretativas, en null o sin fuente

**Confidencial: no se publica.**

Generado el 2026-10-28 con `node scripts/generar_revision.js` a partir de `/data/respuestas/`.

Cómo revisar: para cada fila, abrí el link, verificá que el dato coincida con la fuente y marcá la última columna con ✔ (aprobado) o ✘ y un comentario. 
Cuando una respuesta esté aprobada, su `estado` en el JSON del país pasa de `pendiente_revision` a `aprobado`. 
Mientras quede alguna pendiente, el sitio muestra la franja "Versión de prueba: datos en revisión".

Solo se listan las respuestas que aplicaron un criterio interpretativo, quedaron en null o se marcaron "no_aplica_sin_fuente" (el país no figura en la fuente: la pregunta sale del cálculo). El resto de las respuestas de bases de datos está en los JSON de /data/respuestas/ con su dato, link y fecha.

## Puntos a mirar

- **Antigua y Barbuda I3-5:** Criterio: se cuentan solo las normas que habilitan el arbitraje internacional a inversores argentinos (ley nacional o tratado con Argentina). Los tratados del país con terceros países no se cuentan. REVISAR si se acepta esta lectura. Tiene tratados de inversión con el Reino Unido (1987) y Alemania (2000).
- **Belice I3-5:** Criterio: se cuentan solo las normas que habilitan el arbitraje internacional a inversores argentinos (ley nacional o tratado con Argentina). Los tratados del país con terceros países no se cuentan. REVISAR si se acepta esta lectura. Tiene un tratado de inversión con el Reino Unido (1982), bajo el cual se arbitraron casos con reglas de la CNUDMI. Firmó el Convenio del CIADI el 19/12/1986 pero no lo ratificó.
- **Cuba I3-5:** Criterio aprobado: una norma vigente que habilita expresamente el arbitraje internacional en disputas de inversores con el Estado; se tomó el tratado con Argentina como norma vigente. REVISAR.
- **Dominica I3-5:** Criterio: se cuentan solo las normas que habilitan el arbitraje internacional a inversores argentinos (ley nacional o tratado con Argentina). Los tratados del país con terceros países no se cuentan. REVISAR si se acepta esta lectura. Tiene tratados de inversión con el Reino Unido y Alemania (1987).
- **República Dominicana I3-5:** Criterio: se cuentan solo las normas que habilitan el arbitraje internacional a inversores argentinos (ley nacional o tratado con Argentina). Los tratados del país con terceros países no se cuentan. REVISAR si se acepta esta lectura. República Dominicana es parte del CAFTA-DR, que prevé arbitraje inversor–Estado solo para inversores de los países firmantes.
- **India I3-5:** Criterio aprobado: no es miembro del CIADI y ninguna norma vigente aplicable a inversores argentinos habilita expresamente el arbitraje internacional. La Ley de Arbitraje y Conciliación de 1996 es una habilitación general del arbitraje, que con el criterio de Brasil no alcanza. REVISAR.
- **Polonia I3-5:** Criterio aprobado: una norma vigente que habilita expresamente el arbitraje internacional en disputas de inversores con el Estado; se tomó el tratado con Argentina como norma vigente. REVISAR.
- **Paraguay A1:** Figura un "Convenio sobre inversiones y complementación industrial" de 1969 (vigente), que no es un tratado de protección de inversiones. Protocolo de Cooperación y Facilitación de Inversiones del Mercosur (2017): Paraguay lo aprobó por Ley 7660 (sancionada en abril de 2026), pero no se encontró el depósito del instrumento de ratificación ni la fecha de entrada en vigor para Paraguay, así que no se contó como vigente. REVISAR cuando se publique el depósito.
- **Surinam I3-5:** Criterio: se cuentan solo las normas que habilitan el arbitraje internacional a inversores argentinos (ley nacional o tratado con Argentina). Los tratados del país con terceros países no se cuentan. REVISAR si se acepta esta lectura. Tiene un tratado de inversión con los Países Bajos. Adhirió a la Convención de Nueva York sobre laudos arbitrales extranjeros (2024), que no habilita por sí sola el arbitraje con el Estado. No se pudo revisar el texto completo de la Ley de Inversiones de 2002 (S.B. 2002 n.º 42).
- **Uruguay A1:** Criterio aprobado (sesión 4): el Protocolo de Cooperación y Facilitación de Inversiones del Mercosur cuenta como instrumento de protección si está vigente entre Argentina y el socio. Que Uruguay sea parte se infiere de su ley aprobatoria y su reglamentación, y de que el Protocolo entró en vigor el 30/07/2019, tras el segundo depósito (Brasil depositó el 31/05/2019); no se encontró la constancia del depósito uruguayo. REVISAR.
- **Venezuela I3-5:** Criterio aprobado: una norma vigente que habilita expresamente el arbitraje internacional en disputas de inversores con el Estado; se tomó el tratado con Argentina como norma vigente. REVISAR.

## Antigua y Barbuda (ATG)

Preguntas de esta planilla: 16. Completas: 13. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 3.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Antigua_and_Barbuda_1981?lang=en) | Constitute Project, Constitución (Antigua_and_Barbuda_1981) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| A2 | ¿El Índice de Percepción de la Corrupción (CPI) del país es inferior a 45/100? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Índice de Percepción de la Corrupción 2025 de Transparencia Internacional. | — | — | — | — | — | pendiente_revision |  |
| E4 | ¿La economía informal supera el 30% del PBI? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la Informal Economy Database del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | SÍ | No es miembro del CIADI y no tiene un tratado de inversión con Argentina. No se encontró una norma nacional vigente que habilite expresamente el arbitraje internacional en disputas de inversores con el Estado. | no es miembro del CIADI ni tiene tratado de inversión con Argentina (dato 2026, CIADI) | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-28 | Criterio: se cuentan solo las normas que habilitan el arbitraje internacional a inversores argentinos (ley nacional o tratado con Argentina). Los tratados del país con terceros países no se cuentan. REVISAR si se acepta esta lectura. Tiene tratados de inversión con el Reino Unido (1987) y Alemania (2000). | [CIADI, base de datos de Estados miembro](https://icsid.worldbank.org/about/member-states/database-of-member-states): No es miembro del CIADI.<br>[Cancillería argentina, Biblioteca Digital de Tratados](https://tratados.cancilleria.gob.ar/busqueda.php): No registra un tratado bilateral de inversión vigente con Argentina. | pendiente_revision |  |

## Bahamas (BHS)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |

## Belice (BLZ)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero prevé notificaciones escritas en inglés a los detenidos. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Belize_2022?lang=en) | Constitute Project, Constitución (Belize_2022) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | SÍ | No es miembro del CIADI y no tiene un tratado de inversión con Argentina. No se encontró una norma nacional vigente que habilite expresamente el arbitraje internacional en disputas de inversores con el Estado. | no es miembro del CIADI ni tiene tratado de inversión con Argentina (dato 2026, CIADI) | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-28 | Criterio: se cuentan solo las normas que habilitan el arbitraje internacional a inversores argentinos (ley nacional o tratado con Argentina). Los tratados del país con terceros países no se cuentan. REVISAR si se acepta esta lectura. Tiene un tratado de inversión con el Reino Unido (1982), bajo el cual se arbitraron casos con reglas de la CNUDMI. Firmó el Convenio del CIADI el 19/12/1986 pero no lo ratificó. | [CIADI, base de datos de Estados miembro](https://icsid.worldbank.org/about/member-states/database-of-member-states): No es miembro del CIADI. Firmó el Convenio el Dec 19, 1986 pero no lo ratificó.<br>[Cancillería argentina, Biblioteca Digital de Tratados](https://tratados.cancilleria.gob.ar/busqueda.php): No registra un tratado bilateral de inversión vigente con Argentina. | pendiente_revision |  |

## Bolivia (BOL)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución (art. 5) establece el español como idioma oficial y los idiomas de las naciones indígenas. | idioma oficial: español (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Bolivia_2009?lang=en) | Constitute Project, Constitución (Bolivia_2009) · 2026-10-27 | El español es uno de los idiomas oficiales; se respondió NO porque el español es oficial. Con una lectura literal extrema ("un idioma oficial distinto del español") la respuesta sería SÍ. | — | pendiente_revision |  |
| E3 | ¿La moneda local se devaluó más de 20% frente al dólar en los últimos 24 meses? | SÍ | Tipo de cambio oficial del BCB: 12,02 bolivianos por dólar el 27/10/2026. Según el FMI, el tipo oficial estaba en 6,91 (promedio) en octubre de 2024: la moneda se devaluó cerca de 74%. | la moneda se devaluó cerca de 74% frente al dólar (dato 2026, Banco Central de Bolivia) | [abrir](https://www.bcb.gob.bo/) | Banco Central de Bolivia, tipo de cambio oficial · 2026-10-27 | La serie del FMI llega solo hasta abril de 2026 y no refleja el cambio; se usó el tipo oficial publicado por el BCB y el valor de 2024 del FMI. | — | pendiente_revision |  |

## Brasil (BRA)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| A1 | ¿No existe un tratado bilateral de inversión vigente entre Argentina y el país? | NO | Protocolo de Cooperación y Facilitación de Inversiones del Mercosur (2017): vigente para Argentina desde el 24/11/2020 (Ley 27.527) según la Cancillería argentina. Brasil depositó su instrumento el 31/05/2019 y el Protocolo está en vigor para Brasil desde el 30/07/2019 (Decreto 10.027/2019). | Protocolo de Cooperación y Facilitación de Inversiones del Mercosur, vigente (dato 2020, Cancillería argentina) | [abrir](https://tratados.cancilleria.gob.ar/tratado_multi_ficha.php?id=k6KnnA) | Cancillería argentina, Biblioteca Digital de Tratados (Protocolo de Cooperación y Facilitación de Inversiones del Mercosur) · 2026-10-28 | Criterio aprobado (sesión 4): el Protocolo de Cooperación y Facilitación de Inversiones del Mercosur cuenta como instrumento de protección si está vigente entre Argentina y el socio. No hay un tratado bilateral de inversión con Brasil en la base de la Cancillería. | [Cancillería argentina, Biblioteca Digital de Tratados, ficha del Protocolo](https://tratados.cancilleria.gob.ar/tratado_multi_ficha.php?id=k6KnnA): Argentina: ratificación del 25/09/2020, en vigor para Argentina desde el 24/11/2020. Estado: vigente.<br>[Senado Federal de Brasil, Decreto 10.027/2019](https://legis.senado.leg.br/norma/31440079/publicacao/31440090): Brasil depositó el 31/05/2019; en vigor para Brasil desde el 30/07/2019. | pendiente_revision |  |

## Barbados (BRB)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Chile (CHL)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución no establece un idioma oficial; el español es el idioma de las instituciones. | el español es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Chile_2021?lang=en) | Constitute Project, Constitución (Chile_2021) · 2026-10-27 | Criterio literal: no hay un idioma oficial distinto del español, así que la respuesta es NO. | — | pendiente_revision |  |

## Costa Rica (CRI)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: La herramienta no tiene dato de orientación a largo plazo, indulgencia; con las dimensiones disponibles (distancia al poder 14, individualismo 36, motivación por el logro 35, evitación de la incertidumbre 0) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Ccosta%20rica) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |

## Cuba (CUB)

Preguntas de esta planilla: 16. Completas: 9. Sin completar (null): 1. Fuera del cálculo (el país no figura en la fuente): 6.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| E1 | ¿El PBI per cápita (PPP) del país es inferior a USD 8.000? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el World Economic Outlook del FMI. | — | — | — | — | — | pendiente_revision |  |
| E2 | ¿La inflación anual superó el 15% en al menos uno de los últimos 3 años? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el World Economic Outlook del FMI. | — | — | — | — | — | pendiente_revision |  |
| E3 | ¿La moneda local se devaluó más de 20% frente al dólar en los últimos 24 meses? | null | Sin responder: El país no figura en la base de tipos de cambio del FMI y el sitio del banco central no se pudo abrir desde el entorno. | — | — | — | — | — | pendiente_revision |  |
| E4 | ¿La economía informal supera el 30% del PBI? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la Informal Economy Database del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| I3-1 | ¿El país está por debajo del percentil 50 en el Rule of Law Index del World Justice Project? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Rule of Law Index 2026 del World Justice Project. | — | — | — | — | — | pendiente_revision |  |
| I3-4 | ¿El país está por debajo del percentil 50 en el factor 7.5 (la justicia civil no está sujeta a demoras irrazonables) del Rule of Law Index del World Justice Project? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Rule of Law Index 2026 del World Justice Project. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | NO | No es miembro del CIADI, pero el Acuerdo Argentina–Cuba de Promoción y Protección Recíproca de Inversiones (firmado el 30/11/1995, vigente desde el 01/06/1997; art. 8) permite al inversor llevar una controversia con el Estado a un tribunal arbitral ad hoc con reglas de la CNUDMI. | tratado de inversión con Argentina, vigente, con arbitraje internacional (dato 1997, Cancillería argentina) | [abrir](https://tratados.cancilleria.gob.ar/tratado_ficha.php?id=kqCqlw==) | Cancillería argentina, Biblioteca Digital de Tratados, Acuerdo Argentina–Cuba (1995) · 2026-10-28 | Criterio aprobado: una norma vigente que habilita expresamente el arbitraje internacional en disputas de inversores con el Estado; se tomó el tratado con Argentina como norma vigente. REVISAR. | [CIADI, base de datos de Estados miembro](https://icsid.worldbank.org/about/member-states/database-of-member-states): No es miembro del CIADI. | pendiente_revision |  |

## Chipre (CYP)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |

## Dominica (DMA)

Preguntas de esta planilla: 16. Completas: 13. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 3.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Dominica_2014?lang=en) | Constitute Project, Constitución (Dominica_2014) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| E4 | ¿La economía informal supera el 30% del PBI? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la Informal Economy Database del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | SÍ | No es miembro del CIADI y no tiene un tratado de inversión con Argentina. No se encontró una norma nacional vigente que habilite expresamente el arbitraje internacional en disputas de inversores con el Estado. | no es miembro del CIADI ni tiene tratado de inversión con Argentina (dato 2026, CIADI) | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-28 | Criterio: se cuentan solo las normas que habilitan el arbitraje internacional a inversores argentinos (ley nacional o tratado con Argentina). Los tratados del país con terceros países no se cuentan. REVISAR si se acepta esta lectura. Tiene tratados de inversión con el Reino Unido y Alemania (1987). | [CIADI, base de datos de Estados miembro](https://icsid.worldbank.org/about/member-states/database-of-member-states): No es miembro del CIADI.<br>[Cancillería argentina, Biblioteca Digital de Tratados](https://tratados.cancilleria.gob.ar/busqueda.php): No registra un tratado bilateral de inversión vigente con Argentina. | pendiente_revision |  |

## República Dominicana (DOM)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | SÍ | No es miembro del CIADI (firmó el Convenio el 20/03/2000 pero no lo ratificó). La Ley 16-95 sobre Inversión Extranjera no tiene ninguna cláusula de solución de controversias ni de arbitraje. El acuerdo de inversiones con Argentina (2001) no está en vigor. | no es miembro del CIADI y su ley de inversión extranjera no prevé arbitraje internacional (dato 2026, CIADI) | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-28 | Criterio: se cuentan solo las normas que habilitan el arbitraje internacional a inversores argentinos (ley nacional o tratado con Argentina). Los tratados del país con terceros países no se cuentan. REVISAR si se acepta esta lectura. República Dominicana es parte del CAFTA-DR, que prevé arbitraje inversor–Estado solo para inversores de los países firmantes. | [CIADI, base de datos de Estados miembro](https://icsid.worldbank.org/about/member-states/database-of-member-states): No es miembro del CIADI. Firmó el Convenio el Mar 20, 2000 pero no lo ratificó.<br>[Cancillería de República Dominicana, Ley 16-95 sobre Inversión Extranjera](https://bel.mirex.gob.do/wp-content/uploads/2022/11/Ley-No.-16-95.pdf): Sin cláusula de solución de controversias ni de arbitraje.<br>[Cancillería argentina, Biblioteca Digital de Tratados, Acuerdo Argentina–República Dominicana (2001)](https://tratados.cancilleria.gob.ar/tratado_ficha.php?id=kqarlw==): Figura como "no está en vigor". | pendiente_revision |  |

## Ecuador (ECU)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Granada (GRD)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Grenada_1992?lang=en) | Constitute Project, Constitución (Grenada_1992) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| E4 | ¿La economía informal supera el 30% del PBI? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la Informal Economy Database del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Guatemala (GTM)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: La herramienta no tiene dato de indulgencia; con las dimensiones disponibles (distancia al poder 46, individualismo 15, motivación por el logro 19, evitación de la incertidumbre 12, orientación a largo plazo 4) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Cguatemala) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |

## Guyana (GUY)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Guyana_2016?lang=en) | Constitute Project, Constitución (Guyana_2016) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |

## Honduras (HND)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: La herramienta no tiene dato de orientación a largo plazo, indulgencia; con las dimensiones disponibles (distancia al poder 31, individualismo 31, motivación por el logro 16, evitación de la incertidumbre 36) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Chonduras) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |

## Haití (HTI)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |

## India (IND)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | SÍ | No es miembro del CIADI. El acuerdo de inversiones con Argentina se extinguió el 30/08/2013 y India dio por terminados sus tratados bilaterales de inversión con decenas de países desde 2017. No se encontró una norma nacional vigente que habilite expresamente el arbitraje internacional en disputas de inversores con el Estado. | no es miembro del CIADI y su tratado de inversión con Argentina se extinguió en 2013 (dato 2026, CIADI) | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-28 | Criterio aprobado: no es miembro del CIADI y ninguna norma vigente aplicable a inversores argentinos habilita expresamente el arbitraje internacional. La Ley de Arbitraje y Conciliación de 1996 es una habilitación general del arbitraje, que con el criterio de Brasil no alcanza. REVISAR. | [CIADI, base de datos de Estados miembro](https://icsid.worldbank.org/about/member-states/database-of-member-states): No es miembro del CIADI.<br>[Cancillería argentina, Biblioteca Digital de Tratados, Acuerdo Argentina–India](https://tratados.cancilleria.gob.ar/tratado_ficha.php?id=lKKklw==): Figura como extinguido desde el 30/08/2013.<br>[Herbert Smith Freehills, India termina tratados de inversión con 58 países (2017)](https://www.hsfkramer.com/notes/publicinternationallaw/2017-03/mixed-messages-to-investors-as-india-quietly-terminates-bilateral-investment-treaties-with-58-countries): India notificó la terminación de sus tratados bilaterales de inversión. | pendiente_revision |  |

## Jamaica (JAM)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: La herramienta no tiene dato de orientación a largo plazo, indulgencia; con las dimensiones disponibles (distancia al poder 4, individualismo 12, motivación por el logro 12, evitación de la incertidumbre 73) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Cjamaica) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |

## Japón (JPN)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | Japón no tiene idioma oficial declarado por ley; la Ley de Tribunales (art. 74) dispone que en los tribunales se usa el japonés. | en los tribunales se usa el japonés (dato 2026, Ley de Tribunales de Japón) | [abrir](https://www.japaneselawtranslation.go.jp/en/laws/view/7/en) | Ministerio de Justicia de Japón, Ley de Tribunales (art. 74) · 2026-10-27 | No hay un idioma oficial declarado; se tomó el japonés como idioma de las instituciones. | — | pendiente_revision |  |

## San Cristóbal y Nieves (KNA)

Preguntas de esta planilla: 16. Completas: 12. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 4.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero prevé notificaciones escritas en inglés a los detenidos. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/St_Kitts_and_Nevis_1983?lang=en) | Constitute Project, Constitución (St_Kitts_and_Nevis_1983) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| A2 | ¿El Índice de Percepción de la Corrupción (CPI) del país es inferior a 45/100? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Índice de Percepción de la Corrupción 2025 de Transparencia Internacional. | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| E4 | ¿La economía informal supera el 30% del PBI? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la Informal Economy Database del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Santa Lucía (LCA)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/St_Lucia_1978?lang=en) | Constitute Project, Constitución (St_Lucia_1978) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## México (MEX)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución no establece un idioma oficial; el español es el idioma de las instituciones. | el español es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Mexico_2015?lang=en) | Constitute Project, Constitución (Mexico_2015) · 2026-10-27 | Criterio literal: no hay un idioma oficial distinto del español, así que la respuesta es NO. | — | pendiente_revision |  |

## Nicaragua (NIC)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |

## Panamá (PAN)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: La herramienta no tiene dato de orientación a largo plazo, indulgencia; con las dimensiones disponibles (distancia al poder 46, individualismo 40, motivación por el logro 12, evitación de la incertidumbre 0) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Cpanama) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |

## Perú (PER)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución (art. 48) establece el español como idioma oficial y, donde predominan, el quechua, el aimara y otras lenguas originarias. | idioma oficial: español (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Peru_2023?lang=en) | Constitute Project, Constitución (Peru_2023) · 2026-10-27 | El español es uno de los idiomas oficiales; se respondió NO porque el español es oficial. Con una lectura literal extrema ("un idioma oficial distinto del español") la respuesta sería SÍ. | — | pendiente_revision |  |

## Polonia (POL)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | NO | No es miembro del CIADI, pero el Acuerdo Argentina–Polonia de Promoción y Protección Recíproca de Inversiones (firmado el 31/07/1991, vigente desde el 01/09/1992) permite al inversor llevar una controversia con el Estado a arbitraje internacional (CIADI, a elección del inversor). | tratado de inversión con Argentina, vigente, con arbitraje internacional (dato 1992, Cancillería argentina) | [abrir](https://tratados.cancilleria.gob.ar/tratado_ficha.php?id=lqCqmw==) | Cancillería argentina, Biblioteca Digital de Tratados, Acuerdo Argentina–Polonia (1991) · 2026-10-28 | Criterio aprobado: una norma vigente que habilita expresamente el arbitraje internacional en disputas de inversores con el Estado; se tomó el tratado con Argentina como norma vigente. REVISAR. | [CIADI, base de datos de Estados miembro](https://icsid.worldbank.org/about/member-states/database-of-member-states): No es miembro del CIADI. | pendiente_revision |  |

## Paraguay (PRY)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución (art. 140) establece el español como idioma oficial y el guaraní. | idioma oficial: español (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Paraguay_2011?lang=en) | Constitute Project, Constitución (Paraguay_2011) · 2026-10-27 | El español es uno de los idiomas oficiales; se respondió NO porque el español es oficial. Con una lectura literal extrema ("un idioma oficial distinto del español") la respuesta sería SÍ. | — | pendiente_revision |  |
| A1 | ¿No existe un tratado bilateral de inversión vigente entre Argentina y el país? | SÍ | La base de tratados no registra un acuerdo bilateral de promoción y protección recíproca de inversiones con este país. | sin tratado registrado en la base oficial (dato 2026, Cancillería argentina) | [abrir](https://tratados.cancilleria.gob.ar/busqueda.php) | Cancillería argentina, Biblioteca Digital de Tratados · 2026-10-27 | Figura un "Convenio sobre inversiones y complementación industrial" de 1969 (vigente), que no es un tratado de protección de inversiones. Protocolo de Cooperación y Facilitación de Inversiones del Mercosur (2017): Paraguay lo aprobó por Ley 7660 (sancionada en abril de 2026), pero no se encontró el depósito del instrumento de ratificación ni la fecha de entrada en vigor para Paraguay, así que no se contó como vigente. REVISAR cuando se publique el depósito. | — | pendiente_revision |  |

## Surinam (SUR)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: La herramienta no tiene dato de orientación a largo plazo, indulgencia; con las dimensiones disponibles (distancia al poder 36, individualismo 4, motivación por el logro 19, evitación de la incertidumbre 6) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Csuriname) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | SÍ | No es miembro del CIADI y no tiene un tratado de inversión con Argentina. No se encontró una norma nacional vigente que habilite expresamente el arbitraje internacional en disputas de inversores con el Estado. | no es miembro del CIADI ni tiene tratado de inversión con Argentina (dato 2026, CIADI) | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-28 | Criterio: se cuentan solo las normas que habilitan el arbitraje internacional a inversores argentinos (ley nacional o tratado con Argentina). Los tratados del país con terceros países no se cuentan. REVISAR si se acepta esta lectura. Tiene un tratado de inversión con los Países Bajos. Adhirió a la Convención de Nueva York sobre laudos arbitrales extranjeros (2024), que no habilita por sí sola el arbitraje con el Estado. No se pudo revisar el texto completo de la Ley de Inversiones de 2002 (S.B. 2002 n.º 42). | [CIADI, base de datos de Estados miembro](https://icsid.worldbank.org/about/member-states/database-of-member-states): No es miembro del CIADI.<br>[Cancillería argentina, Biblioteca Digital de Tratados](https://tratados.cancilleria.gob.ar/busqueda.php): No registra un tratado bilateral de inversión vigente con Argentina. | pendiente_revision |  |

## Trinidad y Tobago (TTO)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero garantiza intérprete a quien no entienda o hable inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Trinidad_and_Tobago_2007?lang=en) | Constitute Project, Constitución (Trinidad_and_Tobago_2007) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |

## Uruguay (URY)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución no establece un idioma oficial; el español es el idioma de las instituciones. | el español es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Uruguay_2004?lang=en) | Constitute Project, Constitución (Uruguay_2004) · 2026-10-27 | Criterio literal: no hay un idioma oficial distinto del español, así que la respuesta es NO. | — | pendiente_revision |  |
| A1 | ¿No existe un tratado bilateral de inversión vigente entre Argentina y el país? | NO | Protocolo de Cooperación y Facilitación de Inversiones del Mercosur (2017): vigente para Argentina desde el 24/11/2020 según la Cancillería; Uruguay lo aprobó por Ley 19.635 (2018) y lo reglamentó por Decreto 272/2019. | Protocolo de Cooperación y Facilitación de Inversiones del Mercosur, vigente (dato 2020, Cancillería argentina) | [abrir](https://tratados.cancilleria.gob.ar/tratado_multi_ficha.php?id=k6KnnA) | Cancillería argentina, Biblioteca Digital de Tratados (Protocolo de Cooperación y Facilitación de Inversiones del Mercosur) · 2026-10-28 | Criterio aprobado (sesión 4): el Protocolo de Cooperación y Facilitación de Inversiones del Mercosur cuenta como instrumento de protección si está vigente entre Argentina y el socio. Que Uruguay sea parte se infiere de su ley aprobatoria y su reglamentación, y de que el Protocolo entró en vigor el 30/07/2019, tras el segundo depósito (Brasil depositó el 31/05/2019); no se encontró la constancia del depósito uruguayo. REVISAR. | [Cancillería argentina, Biblioteca Digital de Tratados, ficha del Protocolo](https://tratados.cancilleria.gob.ar/tratado_multi_ficha.php?id=k6KnnA): Argentina: Ley 27.527, ratificación del 25/09/2020; entrada en vigor del Protocolo el 30/07/2019 y para Argentina el 24/11/2020. Estado: vigente.<br>[IMPO, Decreto 272/2019 (reglamentación de la Ley 19.635)](https://www.impo.com.uy/bases/decretos/272-2019): Uruguay aprobó el Protocolo por Ley 19.635 y lo reglamentó en 2019. | pendiente_revision |  |

## San Vicente y las Granadinas (VCT)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 0. Fuera del cálculo (el país no figura en la fuente): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/St_Vincent_and_the_Grenadines_1979?lang=en) | Constitute Project, Constitución (St_Vincent_and_the_Grenadines_1979) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | no_aplica_sin_fuente | Sale del cálculo: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Venezuela (VEN)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| E3 | ¿La moneda local se devaluó más de 20% frente al dólar en los últimos 24 meses? | null | Sin responder: El país no figura en la base de tipos de cambio del FMI y el sitio del banco central no se pudo abrir desde el entorno. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | NO | Venezuela no es miembro del CIADI (lo denunció en 2012), pero el Acuerdo Argentina–Venezuela de Promoción y Protección Recíprocas de Inversiones (firmado el 16/11/1993, vigente desde el 01/07/1995) permite al inversor llevar una controversia con el Estado a arbitraje internacional (Mecanismo Complementario del CIADI o tribunal ad hoc con reglas de la CNUDMI). | tratado de inversión con Argentina, vigente, con arbitraje internacional (dato 1995, Cancillería argentina) | [abrir](https://tratados.cancilleria.gob.ar/tratado_ficha.php?id=lKCnmg==) | Cancillería argentina, Biblioteca Digital de Tratados, Acuerdo Argentina–Venezuela (1993) · 2026-10-28 | Criterio aprobado: una norma vigente que habilita expresamente el arbitraje internacional en disputas de inversores con el Estado; se tomó el tratado con Argentina como norma vigente. REVISAR. | [CIADI, base de datos de Estados miembro](https://icsid.worldbank.org/about/member-states/database-of-member-states): No es miembro del CIADI. | pendiente_revision |  |
