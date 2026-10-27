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
- Si falta un dato, se muestra **"sin datos"**. No se estima, no se interpola, no se completa "a ojo".
- El sitio no muestra ítems (condiciones, hechos, alertas) que lleguen sin fuente con link y fecha.

## 3. Marca

- Fondo: Azul Prussia `#000030`.
- Azul Espectro `#0059FF`: **solo acento** (bordes, links, detalles). Nunca como relleno grande.
- Blanco `#FEFEFE`. Negro `#020202`.
- Títulos: **Funnel Display**, siempre en minúscula.
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

## Estructura

```
/public        Sitio publicado (lo único que ve Vercel). HTML + CSS + JS, sin frameworks ni build.
  index.html
  metodologia.html
  css/estilos.css
  js/entidades.js   Países con puntaje propio, regiones, territorios y país de origen.
  js/mapa.js        Mapa (D3 + world-atlas desde CDN), tooltip y panel.
  data/riesgo.json  Resultados ya calculados (hoy vacío).
/metodologia   CONFIDENCIAL. No se publica.
/scripts       CONFIDENCIAL. Cálculo de puntajes. No se publica.
/data          Insumos de trabajo. No se publica.
vercel.json    Publica solo /public.
```

## Grupos del mapa

- Puntaje propio: los 27 países de la UE, todos los países de América, China, India y Japón.
- Regiones (puntaje ponderado regional): Resto de Europa, Resto de Asia, Medio Oriente, África, Oceanía.
- Argentina: "país de origen", sin puntaje (incluye Islas Malvinas e Islas Georgias del Sur y Sandwich del Sur).
- Territorios dependientes (Groenlandia, Puerto Rico, Hong Kong, etc.): sin puntaje propio, solo nombre.
- La asignación está en `public/js/entidades.js`.

## Formato de `public/data/riesgo.json`

Las claves de país son códigos ISO 3166-1 alfa-3; las de región, los ids de `entidades.js`.
Cualquier campo puede faltar: el sitio muestra "sin datos".

```json
{
  "actualizado": "AAAA-MM-DD",
  "paises": {
    "BRA": {
      "puntaje": 3.4,
      "tendencia": "sube | baja | estable",
      "dimensiones": { "cultural": 4.0, "administrativa": 3.0, "geografica": 4.5, "economica": 3.0, "instituciones": 2.5 },
      "condiciones_criticas": [ { "texto": "…", "fuente": { "nombre": "…", "url": "https://…", "consultado": "AAAA-MM-DD" } } ],
      "hechos":        [ { "texto": "…", "fuente": { … } } ],
      "alertas":       [ { "fecha": "AAAA-MM-DD", "texto": "…", "fuente": { … } } ],
      "argentina_con": [ { "texto": "…", "fuente": { … } } ]
    }
  },
  "regiones": {
    "resto-europa": { "puntaje": 3.2, "tendencia": "estable" }
  }
}
```
