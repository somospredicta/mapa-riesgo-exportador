# Revisión de preguntas de bases de datos: respuestas interpretativas o en null

**Confidencial: no se publica.**

Generado el 2026-10-27 con `node scripts/generar_revision.js` a partir de `/data/respuestas/`.

Cómo revisar: para cada fila, abrí el link, verificá que el dato coincida con la fuente y marcá la última columna con ✔ (aprobado) o ✘ y un comentario. 
Cuando una respuesta esté aprobada, su `estado` en el JSON del país pasa de `pendiente_revision` a `aprobado`. 
Mientras quede alguna pendiente, el sitio muestra la franja "Versión de prueba: datos en revisión".

Solo se listan las respuestas que aplicaron un criterio interpretativo o quedaron en null. El resto de las respuestas de bases de datos está en los JSON de /data/respuestas/ con su dato, link y fecha.

## Puntos a mirar

- **Bulgaria G3:** La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar.
- **Chipre G3:** La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar.
- **Estonia G3:** La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar.
- **Finlandia G3:** La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar.
- **Grecia G3:** La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar.
- **Guyana A3:** El SGPC es un sistema plurilateral de preferencias acotadas; se contó como acuerdo comercial vigente por lectura literal. Los fundadores pueden decidir si alcanza.
- **Lituania G3:** La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar.
- **Letonia G3:** La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar.
- **Nicaragua A3:** El SGPC es un sistema plurilateral de preferencias acotadas; se contó como acuerdo comercial vigente por lectura literal. Los fundadores pueden decidir si alcanza.
- **Rumania G3:** La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar.
- **Trinidad y Tobago A3:** El SGPC es un sistema plurilateral de preferencias acotadas; se contó como acuerdo comercial vigente por lectura literal. Los fundadores pueden decidir si alcanza.

## Antigua y Barbuda (ATG)

Preguntas de esta planilla: 16. Completas: 12. Sin completar (null): 4.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Antigua_and_Barbuda_1981?lang=en) | Constitute Project, Constitución (Antigua_and_Barbuda_1981) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| A2 | ¿El Índice de Percepción de la Corrupción (CPI) del país es inferior a 45/100? | null | Sin responder: El país no figura en el Índice de Percepción de la Corrupción 2025 de Transparencia Internacional. | — | — | — | — | — | pendiente_revision |  |
| E4 | ¿La economía informal supera el 30% del PBI? | null | Sin responder: El país no figura en la Informal Economy Database del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: No es miembro del CIADI. Falta verificar en el texto oficial de la ley si alguna norma vigente habilita expresamente el arbitraje internacional en disputas de inversores con el Estado (criterio aprobado para I3-5). | — | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-27 | — | — | pendiente_revision |  |

## Bulgaria (BGR)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| G3 | ¿La diferencia horaria con Argentina (UTC−3) supera las 5 horas? | SÍ | Capital: zona Europe/Sofia. Diferencia con Argentina (UTC−3): entre 5 y 6 horas según la época del año. Supera las 5 horas durante el horario de verano europeo. | 6 horas de diferencia con Argentina en verano europeo (dato 2026, IANA) | [abrir](https://data.iana.org/time-zones/tzdata-latest.tar.gz) | Base de zonas horarias IANA (tzdata 2026e) · 2026-10-27 | La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar. | — | pendiente_revision |  |

## Bahamas (BHS)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | null | Sin responder: La Constitución no declara un idioma oficial y no se encontró una norma oficial que lo establezca. | — | [abrir](https://www.constituteproject.org/constitution/Bahamas_1973?lang=en) | Constitute Project, Constitución (Bahamas_1973) · 2026-10-27 | — | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |

## Belice (BLZ)

Preguntas de esta planilla: 16. Completas: 13. Sin completar (null): 3.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero prevé notificaciones escritas en inglés a los detenidos. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Belize_2022?lang=en) | Constitute Project, Constitución (Belize_2022) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | null | Sin responder: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: No es miembro del CIADI. Firmó el Convenio el Dec 19, 1986 pero no lo ratificó. Falta verificar en el texto oficial de la ley si alguna norma vigente habilita expresamente el arbitraje internacional en disputas de inversores con el Estado (criterio aprobado para I3-5). | — | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-27 | — | — | pendiente_revision |  |

## Bolivia (BOL)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución (art. 5) establece el español como idioma oficial y los idiomas de las naciones indígenas. | idioma oficial: español (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Bolivia_2009?lang=en) | Constitute Project, Constitución (Bolivia_2009) · 2026-10-27 | El español es uno de los idiomas oficiales; se respondió NO porque el español es oficial. Con una lectura literal extrema ("un idioma oficial distinto del español") la respuesta sería SÍ. | — | pendiente_revision |  |
| E3 | ¿La moneda local se devaluó más de 20% frente al dólar en los últimos 24 meses? | SÍ | Tipo de cambio oficial del BCB: 12,02 bolivianos por dólar el 27/10/2026. Según el FMI, el tipo oficial estaba en 6,91 (promedio) en octubre de 2024: la moneda se devaluó cerca de 74%. | la moneda se devaluó cerca de 74% frente al dólar (dato 2026, Banco Central de Bolivia) | [abrir](https://www.bcb.gob.bo/) | Banco Central de Bolivia, tipo de cambio oficial · 2026-10-27 | La serie del FMI llega solo hasta abril de 2026 y no refleja el cambio; se usó el tipo oficial publicado por el BCB y el valor de 2024 del FMI. | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: No es miembro del CIADI. Falta verificar en el texto oficial de la ley si alguna norma vigente habilita expresamente el arbitraje internacional en disputas de inversores con el Estado (criterio aprobado para I3-5). | — | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-27 | — | — | pendiente_revision |  |

## Brasil (BRA)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: Revisión de la sesión 3: el Decreto 10.025/2019 solo regula el arbitraje con la administración pública federal en los sectores portuario y de transporte (rodoviario, ferroviario, acuático y aeroportuario); su exigencia de arbitrar en Brasil y en portugués no es de alcance general. La norma general, la Ley 13.129/2015, habilita a la administración pública directa e indirecta a usar arbitraje para conflictos sobre derechos patrimoniales disponibles, pero no menciona ni excluye el arbitraje internacional. Brasil no es miembro del CIADI. Con el criterio aprobado (SÍ si no es miembro del CIADI y ninguna norma vigente habilita expresamente el arbitraje internacional), la conclusión depende de si la habilitación general de la Ley 13.129 alcanza: queda para que decida Agustina. | — | [abrir](https://legis.senado.leg.br/norma/584941/publicacao/15632925)<br>[Senado Federal de Brasil, Decreto 10.025/2019](https://legis.senado.leg.br/norma/31412365/publicacao/31412376)<br>[CIADI, base de datos de Estados miembro](https://icsid.worldbank.org/about/member-states/database-of-member-states) | Senado Federal de Brasil, Ley 13.129/2015 · 2026-10-27 | — | — | pendiente_revision |  |

## Barbados (BRB)

Preguntas de esta planilla: 16. Completas: 13. Sin completar (null): 3.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | null | Sin responder: La Constitución no declara un idioma oficial y no se encontró una norma oficial que lo establezca. | — | [abrir](https://www.constituteproject.org/constitution/Barbados_2026?lang=en) | Constitute Project, Constitución (Barbados_2026) · 2026-10-27 | — | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | null | Sin responder: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Chile (CHL)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución no establece un idioma oficial; el español es el idioma de las instituciones. | el español es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Chile_2021?lang=en) | Constitute Project, Constitución (Chile_2021) · 2026-10-27 | Criterio literal: no hay un idioma oficial distinto del español, así que la respuesta es NO. | — | pendiente_revision |  |
| A1 | ¿No existe un tratado bilateral de inversión vigente entre Argentina y el país? | SÍ | Tratado entre la República Argentina y la República de Chile sobre Promoción y Protección Recíproca de Inversiones: firmado el 02/08/1991. Estado: Extinguido. Terminación: 01/05/2019. | el tratado firmado en 1991 figura como "extinguido" (dato 2026, Cancillería argentina) | [abrir](https://tratados.cancilleria.gob.ar/busqueda.php) | Cancillería argentina, Biblioteca Digital de Tratados · 2026-10-27 | El tratado bilateral se extinguió el 01/05/2019. Los fundadores pueden evaluar si un capítulo de inversiones dentro de un acuerdo comercial cuenta como tratado; no figura en esta base como tratado de inversión. | — | pendiente_revision |  |

## Costa Rica (CRI)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: La herramienta no tiene dato de orientación a largo plazo, indulgencia; con las dimensiones disponibles (distancia al poder 14, individualismo 36, motivación por el logro 35, evitación de la incertidumbre 0) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Ccosta%20rica) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |

## Cuba (CUB)

Preguntas de esta planilla: 16. Completas: 8. Sin completar (null): 8.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| E1 | ¿El PBI per cápita (PPP) del país es inferior a USD 8.000? | null | Sin responder: El país no figura en el World Economic Outlook del FMI. | — | — | — | — | — | pendiente_revision |  |
| E2 | ¿La inflación anual superó el 15% en al menos uno de los últimos 3 años? | null | Sin responder: El país no figura en el World Economic Outlook del FMI. | — | — | — | — | — | pendiente_revision |  |
| E3 | ¿La moneda local se devaluó más de 20% frente al dólar en los últimos 24 meses? | null | Sin responder: El país no figura en la base de tipos de cambio del FMI y el sitio del banco central no se pudo abrir desde el entorno. | — | — | — | — | — | pendiente_revision |  |
| E4 | ¿La economía informal supera el 30% del PBI? | null | Sin responder: El país no figura en la Informal Economy Database del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| I3-1 | ¿El país está por debajo del percentil 50 en el Rule of Law Index del World Justice Project? | null | Sin responder: El país no figura en el Rule of Law Index 2026 del World Justice Project. | — | — | — | — | — | pendiente_revision |  |
| I3-4 | ¿El país está por debajo del percentil 50 en el factor 7.5 (la justicia civil no está sujeta a demoras irrazonables) del Rule of Law Index del World Justice Project? | null | Sin responder: El país no figura en el Rule of Law Index 2026 del World Justice Project. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: No es miembro del CIADI. Falta verificar en el texto oficial de la ley si alguna norma vigente habilita expresamente el arbitraje internacional en disputas de inversores con el Estado (criterio aprobado para I3-5). | — | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-27 | — | — | pendiente_revision |  |

## Chipre (CYP)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G3 | ¿La diferencia horaria con Argentina (UTC−3) supera las 5 horas? | SÍ | Capital: zona Asia/Nicosia. Diferencia con Argentina (UTC−3): entre 5 y 6 horas según la época del año. Supera las 5 horas durante el horario de verano europeo. | 6 horas de diferencia con Argentina en verano europeo (dato 2026, IANA) | [abrir](https://data.iana.org/time-zones/tzdata-latest.tar.gz) | Base de zonas horarias IANA (tzdata 2026e) · 2026-10-27 | La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar. | — | pendiente_revision |  |

## Dominica (DMA)

Preguntas de esta planilla: 16. Completas: 12. Sin completar (null): 4.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Dominica_2014?lang=en) | Constitute Project, Constitución (Dominica_2014) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | null | Sin responder: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| E4 | ¿La economía informal supera el 30% del PBI? | null | Sin responder: El país no figura en la Informal Economy Database del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: No es miembro del CIADI. Falta verificar en el texto oficial de la ley si alguna norma vigente habilita expresamente el arbitraje internacional en disputas de inversores con el Estado (criterio aprobado para I3-5). | — | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-27 | — | — | pendiente_revision |  |

## República Dominicana (DOM)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: No es miembro del CIADI. Firmó el Convenio el Mar 20, 2000 pero no lo ratificó. Falta verificar en el texto oficial de la ley si alguna norma vigente habilita expresamente el arbitraje internacional en disputas de inversores con el Estado (criterio aprobado para I3-5). | — | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-27 | — | — | pendiente_revision |  |

## Ecuador (ECU)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | null | Sin responder: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Estonia (EST)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| G3 | ¿La diferencia horaria con Argentina (UTC−3) supera las 5 horas? | SÍ | Capital: zona Europe/Tallinn. Diferencia con Argentina (UTC−3): entre 5 y 6 horas según la época del año. Supera las 5 horas durante el horario de verano europeo. | 6 horas de diferencia con Argentina en verano europeo (dato 2026, IANA) | [abrir](https://data.iana.org/time-zones/tzdata-latest.tar.gz) | Base de zonas horarias IANA (tzdata 2026e) · 2026-10-27 | La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar. | — | pendiente_revision |  |

## Finlandia (FIN)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| G3 | ¿La diferencia horaria con Argentina (UTC−3) supera las 5 horas? | SÍ | Capital: zona Europe/Helsinki. Diferencia con Argentina (UTC−3): entre 5 y 6 horas según la época del año. Supera las 5 horas durante el horario de verano europeo. | 6 horas de diferencia con Argentina en verano europeo (dato 2026, IANA) | [abrir](https://data.iana.org/time-zones/tzdata-latest.tar.gz) | Base de zonas horarias IANA (tzdata 2026e) · 2026-10-27 | La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar. | — | pendiente_revision |  |

## Grecia (GRC)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| G3 | ¿La diferencia horaria con Argentina (UTC−3) supera las 5 horas? | SÍ | Capital: zona Europe/Athens. Diferencia con Argentina (UTC−3): entre 5 y 6 horas según la época del año. Supera las 5 horas durante el horario de verano europeo. | 6 horas de diferencia con Argentina en verano europeo (dato 2026, IANA) | [abrir](https://data.iana.org/time-zones/tzdata-latest.tar.gz) | Base de zonas horarias IANA (tzdata 2026e) · 2026-10-27 | La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar. | — | pendiente_revision |  |

## Granada (GRD)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Grenada_1992?lang=en) | Constitute Project, Constitución (Grenada_1992) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| E4 | ¿La economía informal supera el 30% del PBI? | null | Sin responder: El país no figura en la Informal Economy Database del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Guatemala (GTM)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: La herramienta no tiene dato de indulgencia; con las dimensiones disponibles (distancia al poder 46, individualismo 15, motivación por el logro 19, evitación de la incertidumbre 12, orientación a largo plazo 4) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Cguatemala) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |

## Guyana (GUY)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Guyana_2016?lang=en) | Constitute Project, Constitución (Guyana_2016) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| A3 | ¿No existe un acuerdo comercial vigente entre el país y Argentina o el Mercosur? | NO | El único acuerdo en vigor con Argentina es el Sistema Global de Preferencias Comerciales entre Países en Desarrollo (SGPC), según la OMC. | Sistema Global de Preferencias Comerciales (dato 2026, OMC) | [abrir](https://rtais.wto.org/UI/ExportAllRTAList.aspx) | OMC, base de datos de acuerdos comerciales regionales · 2026-10-27 | El SGPC es un sistema plurilateral de preferencias acotadas; se contó como acuerdo comercial vigente por lectura literal. Los fundadores pueden decidir si alcanza. | — | pendiente_revision |  |

## Honduras (HND)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: La herramienta no tiene dato de orientación a largo plazo, indulgencia; con las dimensiones disponibles (distancia al poder 31, individualismo 31, motivación por el logro 16, evitación de la incertidumbre 36) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Chonduras) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |

## Haití (HTI)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |

## India (IND)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: No es miembro del CIADI. Falta verificar en el texto oficial de la ley si alguna norma vigente habilita expresamente el arbitraje internacional en disputas de inversores con el Estado (criterio aprobado para I3-5). | — | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-27 | — | — | pendiente_revision |  |

## Jamaica (JAM)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | null | Sin responder: La Constitución no declara un idioma oficial y no se encontró una norma oficial que lo establezca. | — | [abrir](https://www.constituteproject.org/constitution/Jamaica_2023?lang=en) | Constitute Project, Constitución (Jamaica_2023) · 2026-10-27 | — | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: La herramienta no tiene dato de orientación a largo plazo, indulgencia; con las dimensiones disponibles (distancia al poder 4, individualismo 12, motivación por el logro 12, evitación de la incertidumbre 73) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Cjamaica) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |

## Japón (JPN)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | Japón no tiene idioma oficial declarado por ley; la Ley de Tribunales (art. 74) dispone que en los tribunales se usa el japonés. | en los tribunales se usa el japonés (dato 2026, Ley de Tribunales de Japón) | [abrir](https://www.japaneselawtranslation.go.jp/en/laws/view/7/en) | Ministerio de Justicia de Japón, Ley de Tribunales (art. 74) · 2026-10-27 | No hay un idioma oficial declarado; se tomó el japonés como idioma de las instituciones. | — | pendiente_revision |  |

## San Cristóbal y Nieves (KNA)

Preguntas de esta planilla: 16. Completas: 12. Sin completar (null): 4.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero prevé notificaciones escritas en inglés a los detenidos. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/St_Kitts_and_Nevis_1983?lang=en) | Constitute Project, Constitución (St_Kitts_and_Nevis_1983) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| A2 | ¿El Índice de Percepción de la Corrupción (CPI) del país es inferior a 45/100? | null | Sin responder: El país no figura en el Índice de Percepción de la Corrupción 2025 de Transparencia Internacional. | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | null | Sin responder: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| E4 | ¿La economía informal supera el 30% del PBI? | null | Sin responder: El país no figura en la Informal Economy Database del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Santa Lucía (LCA)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/St_Lucia_1978?lang=en) | Constitute Project, Constitución (St_Lucia_1978) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | null | Sin responder: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Lituania (LTU)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| G3 | ¿La diferencia horaria con Argentina (UTC−3) supera las 5 horas? | SÍ | Capital: zona Europe/Vilnius. Diferencia con Argentina (UTC−3): entre 5 y 6 horas según la época del año. Supera las 5 horas durante el horario de verano europeo. | 6 horas de diferencia con Argentina en verano europeo (dato 2026, IANA) | [abrir](https://data.iana.org/time-zones/tzdata-latest.tar.gz) | Base de zonas horarias IANA (tzdata 2026e) · 2026-10-27 | La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar. | — | pendiente_revision |  |

## Letonia (LVA)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| G3 | ¿La diferencia horaria con Argentina (UTC−3) supera las 5 horas? | SÍ | Capital: zona Europe/Riga. Diferencia con Argentina (UTC−3): entre 5 y 6 horas según la época del año. Supera las 5 horas durante el horario de verano europeo. | 6 horas de diferencia con Argentina en verano europeo (dato 2026, IANA) | [abrir](https://data.iana.org/time-zones/tzdata-latest.tar.gz) | Base de zonas horarias IANA (tzdata 2026e) · 2026-10-27 | La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar. | — | pendiente_revision |  |

## México (MEX)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución no establece un idioma oficial; el español es el idioma de las instituciones. | el español es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Mexico_2015?lang=en) | Constitute Project, Constitución (Mexico_2015) · 2026-10-27 | Criterio literal: no hay un idioma oficial distinto del español, así que la respuesta es NO. | — | pendiente_revision |  |

## Nicaragua (NIC)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| A3 | ¿No existe un acuerdo comercial vigente entre el país y Argentina o el Mercosur? | NO | El único acuerdo en vigor con Argentina es el Sistema Global de Preferencias Comerciales entre Países en Desarrollo (SGPC), según la OMC. | Sistema Global de Preferencias Comerciales (dato 2026, OMC) | [abrir](https://rtais.wto.org/UI/ExportAllRTAList.aspx) | OMC, base de datos de acuerdos comerciales regionales · 2026-10-27 | El SGPC es un sistema plurilateral de preferencias acotadas; se contó como acuerdo comercial vigente por lectura literal. Los fundadores pueden decidir si alcanza. | — | pendiente_revision |  |

## Panamá (PAN)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: La herramienta no tiene dato de orientación a largo plazo, indulgencia; con las dimensiones disponibles (distancia al poder 46, individualismo 40, motivación por el logro 12, evitación de la incertidumbre 0) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Cpanama) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |

## Perú (PER)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución (art. 48) establece el español como idioma oficial y, donde predominan, el quechua, el aimara y otras lenguas originarias. | idioma oficial: español (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Peru_2023?lang=en) | Constitute Project, Constitución (Peru_2023) · 2026-10-27 | El español es uno de los idiomas oficiales; se respondió NO porque el español es oficial. Con una lectura literal extrema ("un idioma oficial distinto del español") la respuesta sería SÍ. | — | pendiente_revision |  |

## Polonia (POL)

Preguntas de esta planilla: 16. Completas: 15. Sin completar (null): 1.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: No es miembro del CIADI. Falta verificar en el texto oficial de la ley si alguna norma vigente habilita expresamente el arbitraje internacional en disputas de inversores con el Estado (criterio aprobado para I3-5). | — | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-27 | — | — | pendiente_revision |  |

## Paraguay (PRY)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución (art. 140) establece el español como idioma oficial y el guaraní. | idioma oficial: español (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Paraguay_2011?lang=en) | Constitute Project, Constitución (Paraguay_2011) · 2026-10-27 | El español es uno de los idiomas oficiales; se respondió NO porque el español es oficial. Con una lectura literal extrema ("un idioma oficial distinto del español") la respuesta sería SÍ. | — | pendiente_revision |  |
| A1 | ¿No existe un tratado bilateral de inversión vigente entre Argentina y el país? | SÍ | La base de tratados no registra un acuerdo bilateral de promoción y protección recíproca de inversiones con este país. | sin tratado registrado en la base oficial (dato 2026, Cancillería argentina) | [abrir](https://tratados.cancilleria.gob.ar/busqueda.php) | Cancillería argentina, Biblioteca Digital de Tratados · 2026-10-27 | Figura un "Convenio sobre inversiones y complementación industrial" de 1969 (vigente), que no es un tratado de protección de inversiones. | — | pendiente_revision |  |

## Rumania (ROU)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| G3 | ¿La diferencia horaria con Argentina (UTC−3) supera las 5 horas? | SÍ | Capital: zona Europe/Bucharest. Diferencia con Argentina (UTC−3): entre 5 y 6 horas según la época del año. Supera las 5 horas durante el horario de verano europeo. | 6 horas de diferencia con Argentina en verano europeo (dato 2026, IANA) | [abrir](https://data.iana.org/time-zones/tzdata-latest.tar.gz) | Base de zonas horarias IANA (tzdata 2026e) · 2026-10-27 | La diferencia es de 5 horas en invierno y 6 en verano: se respondió SÍ porque la supera durante parte del año. Los fundadores pueden decidir si se toma la diferencia máxima o la de horario estándar. | — | pendiente_revision |  |

## Surinam (SUR)

Preguntas de esta planilla: 16. Completas: 12. Sin completar (null): 4.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | null | Sin responder: La Constitución no declara un idioma oficial y no se encontró una norma oficial que lo establezca. | — | [abrir](https://www.constituteproject.org/constitution/Surinam_1992?lang=en) | Constitute Project, Constitución (Surinam_1992) · 2026-10-27 | — | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: La herramienta no tiene dato de orientación a largo plazo, indulgencia; con las dimensiones disponibles (distancia al poder 36, individualismo 4, motivación por el logro 19, evitación de la incertidumbre 6) la respuesta no se puede determinar. | — | [abrir](https://www.theculturefactor.com/country-comparison-tool?countries=argentina%2Csuriname) | The Culture Factor Group, Country Comparison Tool (Hofstede) · 2026-10-27 | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | null | Sin responder: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: No es miembro del CIADI. Falta verificar en el texto oficial de la ley si alguna norma vigente habilita expresamente el arbitraje internacional en disputas de inversores con el Estado (criterio aprobado para I3-5). | — | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-27 | — | — | pendiente_revision |  |

## Trinidad y Tobago (TTO)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero garantiza intérprete a quien no entienda o hable inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Trinidad_and_Tobago_2007?lang=en) | Constitute Project, Constitución (Trinidad_and_Tobago_2007) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| A3 | ¿No existe un acuerdo comercial vigente entre el país y Argentina o el Mercosur? | NO | El único acuerdo en vigor con Argentina es el Sistema Global de Preferencias Comerciales entre Países en Desarrollo (SGPC), según la OMC. | Sistema Global de Preferencias Comerciales (dato 2026, OMC) | [abrir](https://rtais.wto.org/UI/ExportAllRTAList.aspx) | OMC, base de datos de acuerdos comerciales regionales · 2026-10-27 | El SGPC es un sistema plurilateral de preferencias acotadas; se contó como acuerdo comercial vigente por lectura literal. Los fundadores pueden decidir si alcanza. | — | pendiente_revision |  |

## Uruguay (URY)

Preguntas de esta planilla: 16. Completas: 16. Sin completar (null): 0.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | NO | La Constitución no establece un idioma oficial; el español es el idioma de las instituciones. | el español es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/Uruguay_2004?lang=en) | Constitute Project, Constitución (Uruguay_2004) · 2026-10-27 | Criterio literal: no hay un idioma oficial distinto del español, así que la respuesta es NO. | — | pendiente_revision |  |

## San Vicente y las Granadinas (VCT)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ¿El idioma oficial del país es distinto del español y no existe una lengua franca de negocios compartida con Argentina? | SÍ | La Constitución no declara un idioma oficial, pero exige a los legisladores hablar y leer inglés. | el inglés es el idioma de las instituciones (dato 2026, Constitución) | [abrir](https://www.constituteproject.org/constitution/St_Vincent_and_the_Grenadines_1979?lang=en) | Constitute Project, Constitución (St_Vincent_and_the_Grenadines_1979) · 2026-10-27 | La Constitución no declara un idioma oficial; se tomó el inglés como idioma de las instituciones por la cláusula citada. | — | pendiente_revision |  |
| C2 | ¿La diferencia entre Argentina y el país supera los 40 puntos en al menos 2 dimensiones de Hofstede? | null | Sin responder: El país no figura en la herramienta de comparación de Hofstede (The Culture Factor Group). | — | — | — | — | — | pendiente_revision |  |
| G1 | ¿El Logistics Performance Index del país es inferior a 2,8 sobre 5? | null | Sin responder: El país no figura en el Logistics Performance Index 2023 del Banco Mundial. | — | — | — | — | — | pendiente_revision |  |

## Venezuela (VEN)

Preguntas de esta planilla: 16. Completas: 14. Sin completar (null): 2.

| # | Pregunta | Respuesta | Dato | Dato que se publica | Link | Fuente y fecha de consulta | Criterio aplicado | Fuentes revisadas | Estado | Aprobado (Agustina) |
|---|---|---|---|---|---|---|---|---|---|---|
| E3 | ¿La moneda local se devaluó más de 20% frente al dólar en los últimos 24 meses? | null | Sin responder: El país no figura en la base de tipos de cambio del FMI y el sitio del banco central no se pudo abrir desde el entorno. | — | — | — | — | — | pendiente_revision |  |
| I3-5 | ¿El país no ofrece acceso a arbitraje internacional (CIADI/ICC) para disputas con el Estado? | null | Sin responder: No es miembro del CIADI. Falta verificar en el texto oficial de la ley si alguna norma vigente habilita expresamente el arbitraje internacional en disputas de inversores con el Estado (criterio aprobado para I3-5). | — | [abrir](https://icsid.worldbank.org/about/member-states/database-of-member-states) | CIADI, base de datos de Estados miembro · 2026-10-27 | — | — | pendiente_revision |  |
