/*
 * Qué es cada forma del mapa.
 *
 * Las claves de la izquierda son los nombres (en inglés) que trae world-atlas.
 * - PAISES: tienen puntaje propio. Clave = código ISO 3166-1 alfa-3 (el mismo que usa riesgo.json).
 * - REGIONES: se agrupan y comparten un puntaje regional.
 * - ORIGEN: Argentina, país de origen, sin puntaje.
 * - TERRITORIOS: dependencias sin puntaje propio; solo se muestra el nombre.
 * La Antártida no se dibuja.
 */
(function () {
  const PAISES = {
    // Unión Europea (27)
    AUT: { nombre: 'Austria', bloque: 'Unión Europea', formas: ['Austria'] },
    BEL: { nombre: 'Bélgica', bloque: 'Unión Europea', formas: ['Belgium'] },
    BGR: { nombre: 'Bulgaria', bloque: 'Unión Europea', formas: ['Bulgaria'] },
    HRV: { nombre: 'Croacia', bloque: 'Unión Europea', formas: ['Croatia'] },
    CYP: { nombre: 'Chipre', bloque: 'Unión Europea', formas: ['Cyprus', 'N. Cyprus'] },
    CZE: { nombre: 'Chequia', bloque: 'Unión Europea', formas: ['Czechia'] },
    DNK: { nombre: 'Dinamarca', bloque: 'Unión Europea', formas: ['Denmark'] },
    EST: { nombre: 'Estonia', bloque: 'Unión Europea', formas: ['Estonia'] },
    FIN: { nombre: 'Finlandia', bloque: 'Unión Europea', formas: ['Finland', 'Åland'] },
    FRA: { nombre: 'Francia', bloque: 'Unión Europea', formas: ['France'] },
    DEU: { nombre: 'Alemania', bloque: 'Unión Europea', formas: ['Germany'] },
    GRC: { nombre: 'Grecia', bloque: 'Unión Europea', formas: ['Greece'] },
    HUN: { nombre: 'Hungría', bloque: 'Unión Europea', formas: ['Hungary'] },
    IRL: { nombre: 'Irlanda', bloque: 'Unión Europea', formas: ['Ireland'] },
    ITA: { nombre: 'Italia', bloque: 'Unión Europea', formas: ['Italy'] },
    LVA: { nombre: 'Letonia', bloque: 'Unión Europea', formas: ['Latvia'] },
    LTU: { nombre: 'Lituania', bloque: 'Unión Europea', formas: ['Lithuania'] },
    LUX: { nombre: 'Luxemburgo', bloque: 'Unión Europea', formas: ['Luxembourg'] },
    MLT: { nombre: 'Malta', bloque: 'Unión Europea', formas: ['Malta'] },
    NLD: { nombre: 'Países Bajos', bloque: 'Unión Europea', formas: ['Netherlands'] },
    POL: { nombre: 'Polonia', bloque: 'Unión Europea', formas: ['Poland'] },
    PRT: { nombre: 'Portugal', bloque: 'Unión Europea', formas: ['Portugal'] },
    ROU: { nombre: 'Rumania', bloque: 'Unión Europea', formas: ['Romania'] },
    SVK: { nombre: 'Eslovaquia', bloque: 'Unión Europea', formas: ['Slovakia'] },
    SVN: { nombre: 'Eslovenia', bloque: 'Unión Europea', formas: ['Slovenia'] },
    ESP: { nombre: 'España', bloque: 'Unión Europea', formas: ['Spain'] },
    SWE: { nombre: 'Suecia', bloque: 'Unión Europea', formas: ['Sweden'] },

    // América (todos los países, salvo Argentina, que es el origen)
    ATG: { nombre: 'Antigua y Barbuda', bloque: 'América', formas: ['Antigua and Barb.'] },
    BHS: { nombre: 'Bahamas', bloque: 'América', formas: ['Bahamas'] },
    BRB: { nombre: 'Barbados', bloque: 'América', formas: ['Barbados'] },
    BLZ: { nombre: 'Belice', bloque: 'América', formas: ['Belize'] },
    BOL: { nombre: 'Bolivia', bloque: 'América', formas: ['Bolivia'] },
    BRA: { nombre: 'Brasil', bloque: 'América', formas: ['Brazil'] },
    CAN: { nombre: 'Canadá', bloque: 'América', formas: ['Canada'] },
    CHL: { nombre: 'Chile', bloque: 'América', formas: ['Chile'] },
    COL: { nombre: 'Colombia', bloque: 'América', formas: ['Colombia'] },
    CRI: { nombre: 'Costa Rica', bloque: 'América', formas: ['Costa Rica'] },
    CUB: { nombre: 'Cuba', bloque: 'América', formas: ['Cuba'] },
    DMA: { nombre: 'Dominica', bloque: 'América', formas: ['Dominica'] },
    DOM: { nombre: 'República Dominicana', bloque: 'América', formas: ['Dominican Rep.'] },
    ECU: { nombre: 'Ecuador', bloque: 'América', formas: ['Ecuador'] },
    SLV: { nombre: 'El Salvador', bloque: 'América', formas: ['El Salvador'] },
    GRD: { nombre: 'Granada', bloque: 'América', formas: ['Grenada'] },
    GTM: { nombre: 'Guatemala', bloque: 'América', formas: ['Guatemala'] },
    GUY: { nombre: 'Guyana', bloque: 'América', formas: ['Guyana'] },
    HTI: { nombre: 'Haití', bloque: 'América', formas: ['Haiti'] },
    HND: { nombre: 'Honduras', bloque: 'América', formas: ['Honduras'] },
    JAM: { nombre: 'Jamaica', bloque: 'América', formas: ['Jamaica'] },
    MEX: { nombre: 'México', bloque: 'América', formas: ['Mexico'] },
    NIC: { nombre: 'Nicaragua', bloque: 'América', formas: ['Nicaragua'] },
    PAN: { nombre: 'Panamá', bloque: 'América', formas: ['Panama'] },
    PRY: { nombre: 'Paraguay', bloque: 'América', formas: ['Paraguay'] },
    PER: { nombre: 'Perú', bloque: 'América', formas: ['Peru'] },
    KNA: { nombre: 'San Cristóbal y Nieves', bloque: 'América', formas: ['St. Kitts and Nevis'] },
    LCA: { nombre: 'Santa Lucía', bloque: 'América', formas: ['Saint Lucia'] },
    VCT: { nombre: 'San Vicente y las Granadinas', bloque: 'América', formas: ['St. Vin. and Gren.'] },
    SUR: { nombre: 'Surinam', bloque: 'América', formas: ['Suriname'] },
    TTO: { nombre: 'Trinidad y Tobago', bloque: 'América', formas: ['Trinidad and Tobago'] },
    USA: { nombre: 'Estados Unidos', bloque: 'América', formas: ['United States of America'] },
    URY: { nombre: 'Uruguay', bloque: 'América', formas: ['Uruguay'] },
    VEN: { nombre: 'Venezuela', bloque: 'América', formas: ['Venezuela'] },

    // Asia con puntaje propio
    CHN: { nombre: 'China', bloque: 'Asia', formas: ['China'] },
    IND: { nombre: 'India', bloque: 'Asia', formas: ['India'] },
    JPN: { nombre: 'Japón', bloque: 'Asia', formas: ['Japan'] },
  };

  // Cada región: forma de world-atlas -> nombre en español.
  const REGIONES = {
    'resto-europa': {
      nombre: 'Resto de Europa',
      miembros: {
        'Albania': 'Albania', 'Andorra': 'Andorra', 'Belarus': 'Bielorrusia',
        'Bosnia and Herz.': 'Bosnia y Herzegovina', 'Iceland': 'Islandia', 'Kosovo': 'Kosovo',
        'Liechtenstein': 'Liechtenstein', 'Macedonia': 'Macedonia del Norte', 'Moldova': 'Moldavia',
        'Monaco': 'Mónaco', 'Montenegro': 'Montenegro', 'Norway': 'Noruega', 'Russia': 'Rusia',
        'San Marino': 'San Marino', 'Serbia': 'Serbia', 'Switzerland': 'Suiza', 'Ukraine': 'Ucrania',
        'United Kingdom': 'Reino Unido', 'Vatican': 'Ciudad del Vaticano',
      },
    },
    'resto-asia': {
      nombre: 'Resto de Asia',
      miembros: {
        'Afghanistan': 'Afganistán', 'Armenia': 'Armenia', 'Azerbaijan': 'Azerbaiyán',
        'Bangladesh': 'Bangladés', 'Bhutan': 'Bután', 'Brunei': 'Brunéi', 'Cambodia': 'Camboya',
        'Georgia': 'Georgia', 'Indonesia': 'Indonesia', 'Kazakhstan': 'Kazajistán',
        'Kyrgyzstan': 'Kirguistán', 'Laos': 'Laos', 'Malaysia': 'Malasia', 'Maldives': 'Maldivas',
        'Mongolia': 'Mongolia', 'Myanmar': 'Myanmar', 'Nepal': 'Nepal', 'North Korea': 'Corea del Norte',
        'Pakistan': 'Pakistán', 'Philippines': 'Filipinas', 'Singapore': 'Singapur',
        'South Korea': 'Corea del Sur', 'Sri Lanka': 'Sri Lanka', 'Taiwan': 'Taiwán',
        'Tajikistan': 'Tayikistán', 'Thailand': 'Tailandia', 'Timor-Leste': 'Timor Oriental',
        'Turkmenistan': 'Turkmenistán', 'Uzbekistan': 'Uzbekistán', 'Vietnam': 'Vietnam',
      },
    },
    'medio-oriente': {
      nombre: 'Medio Oriente',
      miembros: {
        'Bahrain': 'Baréin', 'Iran': 'Irán', 'Iraq': 'Irak', 'Israel': 'Israel', 'Jordan': 'Jordania',
        'Kuwait': 'Kuwait', 'Lebanon': 'Líbano', 'Oman': 'Omán', 'Palestine': 'Palestina',
        'Qatar': 'Catar', 'Saudi Arabia': 'Arabia Saudita', 'Syria': 'Siria', 'Turkey': 'Turquía',
        'United Arab Emirates': 'Emiratos Árabes Unidos', 'Yemen': 'Yemen',
      },
    },
    'africa': {
      nombre: 'África',
      miembros: {
        'Algeria': 'Argelia', 'Angola': 'Angola', 'Benin': 'Benín', 'Botswana': 'Botsuana',
        'Burkina Faso': 'Burkina Faso', 'Burundi': 'Burundi', 'Cabo Verde': 'Cabo Verde',
        'Cameroon': 'Camerún', 'Central African Rep.': 'República Centroafricana', 'Chad': 'Chad',
        'Comoros': 'Comoras', 'Congo': 'República del Congo',
        'Dem. Rep. Congo': 'República Democrática del Congo', "Côte d'Ivoire": 'Costa de Marfil',
        'Djibouti': 'Yibuti', 'Egypt': 'Egipto', 'Eq. Guinea': 'Guinea Ecuatorial', 'Eritrea': 'Eritrea',
        'eSwatini': 'Esuatini', 'Ethiopia': 'Etiopía', 'Gabon': 'Gabón', 'Gambia': 'Gambia',
        'Ghana': 'Ghana', 'Guinea': 'Guinea', 'Guinea-Bissau': 'Guinea-Bisáu', 'Kenya': 'Kenia',
        'Lesotho': 'Lesoto', 'Liberia': 'Liberia', 'Libya': 'Libia', 'Madagascar': 'Madagascar',
        'Malawi': 'Malaui', 'Mali': 'Malí', 'Mauritania': 'Mauritania', 'Mauritius': 'Mauricio',
        'Morocco': 'Marruecos', 'Mozambique': 'Mozambique', 'Namibia': 'Namibia', 'Niger': 'Níger',
        'Nigeria': 'Nigeria', 'Rwanda': 'Ruanda', 'São Tomé and Principe': 'Santo Tomé y Príncipe',
        'Senegal': 'Senegal', 'Seychelles': 'Seychelles', 'Sierra Leone': 'Sierra Leona',
        'Somalia': 'Somalia', 'Somaliland': 'Somalilandia', 'South Africa': 'Sudáfrica',
        'S. Sudan': 'Sudán del Sur', 'Sudan': 'Sudán', 'Tanzania': 'Tanzania', 'Togo': 'Togo',
        'Tunisia': 'Túnez', 'Uganda': 'Uganda', 'W. Sahara': 'Sahara Occidental', 'Zambia': 'Zambia',
        'Zimbabwe': 'Zimbabue',
      },
    },
    'oceania': {
      nombre: 'Oceanía',
      miembros: {
        'Australia': 'Australia', 'Fiji': 'Fiyi', 'Kiribati': 'Kiribati', 'Marshall Is.': 'Islas Marshall',
        'Micronesia': 'Micronesia', 'Nauru': 'Nauru', 'New Zealand': 'Nueva Zelanda', 'Palau': 'Palaos',
        'Papua New Guinea': 'Papúa Nueva Guinea', 'Samoa': 'Samoa', 'Solomon Is.': 'Islas Salomón',
        'Tonga': 'Tonga', 'Vanuatu': 'Vanuatu',
      },
    },
  };

  const ORIGEN = {
    id: 'ARG',
    nombre: 'Argentina',
    formas: {
      'Argentina': 'Argentina',
      'Falkland Is.': 'Islas Malvinas',
      'S. Geo. and the Is.': 'Islas Georgias del Sur y Sandwich del Sur',
    },
  };

  // Forma -> [nombre, de quién depende]
  const TERRITORIOS = {
    'American Samoa': ['Samoa Americana', 'Estados Unidos'],
    'Anguilla': ['Anguila', 'Reino Unido'],
    'Aruba': ['Aruba', 'Países Bajos'],
    'Ashmore and Cartier Is.': ['Islas Ashmore y Cartier', 'Australia'],
    'Bermuda': ['Bermudas', 'Reino Unido'],
    'Br. Indian Ocean Ter.': ['Territorio Británico del Océano Índico', 'Reino Unido'],
    'British Virgin Is.': ['Islas Vírgenes Británicas', 'Reino Unido'],
    'Cayman Is.': ['Islas Caimán', 'Reino Unido'],
    'Cook Is.': ['Islas Cook', 'Nueva Zelanda'],
    'Curaçao': ['Curazao', 'Países Bajos'],
    'Faeroe Is.': ['Islas Feroe', 'Dinamarca'],
    'Fr. Polynesia': ['Polinesia Francesa', 'Francia'],
    'Fr. S. Antarctic Lands': ['Tierras Australes y Antárticas Francesas', 'Francia'],
    'Greenland': ['Groenlandia', 'Dinamarca'],
    'Guam': ['Guam', 'Estados Unidos'],
    'Guernsey': ['Guernsey', 'Reino Unido'],
    'Heard I. and McDonald Is.': ['Islas Heard y McDonald', 'Australia'],
    'Hong Kong': ['Hong Kong', 'China'],
    'Indian Ocean Ter.': ['Territorios australianos del Océano Índico', 'Australia'],
    'Isle of Man': ['Isla de Man', 'Reino Unido'],
    'Jersey': ['Jersey', 'Reino Unido'],
    'Macao': ['Macao', 'China'],
    'Montserrat': ['Montserrat', 'Reino Unido'],
    'N. Mariana Is.': ['Islas Marianas del Norte', 'Estados Unidos'],
    'New Caledonia': ['Nueva Caledonia', 'Francia'],
    'Niue': ['Niue', 'Nueva Zelanda'],
    'Norfolk Island': ['Isla Norfolk', 'Australia'],
    'Pitcairn Is.': ['Islas Pitcairn', 'Reino Unido'],
    'Puerto Rico': ['Puerto Rico', 'Estados Unidos'],
    'Saint Helena': ['Santa Elena', 'Reino Unido'],
    'Siachen Glacier': ['Glaciar de Siachen', null],
    'Sint Maarten': ['San Martín (parte neerlandesa)', 'Países Bajos'],
    'St-Barthélemy': ['San Bartolomé', 'Francia'],
    'St-Martin': ['San Martín (parte francesa)', 'Francia'],
    'St. Pierre and Miquelon': ['San Pedro y Miquelón', 'Francia'],
    'Turks and Caicos Is.': ['Islas Turcas y Caicos', 'Reino Unido'],
    'U.S. Virgin Is.': ['Islas Vírgenes de los Estados Unidos', 'Estados Unidos'],
    'Wallis and Futuna Is.': ['Wallis y Futuna', 'Francia'],
  };

  const EXCLUIDAS = ['Antarctica'];

  // Índice: forma de world-atlas -> qué es.
  const porForma = {};
  for (const [id, p] of Object.entries(PAISES)) {
    for (const f of p.formas) porForma[f] = { tipo: 'pais', id, nombre: p.nombre };
  }
  for (const [id, r] of Object.entries(REGIONES)) {
    for (const [f, nombre] of Object.entries(r.miembros)) porForma[f] = { tipo: 'region', id, nombre };
  }
  for (const [f, nombre] of Object.entries(ORIGEN.formas)) {
    porForma[f] = { tipo: 'origen', id: ORIGEN.id, nombre };
  }
  for (const [f, [nombre, de]] of Object.entries(TERRITORIOS)) {
    porForma[f] = { tipo: 'territorio', id: 'territorio:' + f, nombre, de };
  }

  window.ENTIDADES = { PAISES, REGIONES, ORIGEN, TERRITORIOS, EXCLUIDAS, porForma };
})();
