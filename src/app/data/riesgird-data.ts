/**
 * Datos de ejemplo para RIESGIRD-ACC Perú
 * Propuesta 29 de enero 2026
 * Mary Mollo – Secretaria Técnica de la RiesGIRD-ACC / Perú
 */

// ============================================
// 1. QUÉ ES LA RIESGIRD ACC PERÚ
// ============================================
export interface UniversidadMiembro {
  id: string;
  nombre: string;
  logo: string;
  rector: PersonaContacto;
  secretariaRectorado: PersonaContacto;
  vicerrectorAcademico: PersonaContacto;
  vicerrectorInvestigacion: PersonaContacto;
  directorAdministracion: PersonaContacto;
  secretarioTecnico: PersonaContacto;
  comiteTecnico: PersonaContacto[];
  resolucionSecretario?: string;
  resolucionComite?: string;
}

export interface PersonaContacto {
  nombre: string;
  cargo: string;
  foto: string;
  correo: string;
  telefono: string;
}

export const INFO_RIESGIRD = {
  nombre: 'RiesGIRD-ACC / Perú',
  nombreCompleto: 'Red Interuniversitaria de Gestión Integral del Riesgo de Desastres y Adaptación al Cambio Climático del Perú',
  vision: 'Ser la red líder en América Latina en la promoción de la gestión integral del riesgo de desastres y la adaptación al cambio climático desde la educación superior, formando profesionales comprometidos con la resiliencia territorial.',
  mision: 'Articular las capacidades de las universidades peruanas para integrar la gestión del riesgo de desastres y la adaptación al cambio climático en la formación académica, investigación y proyección social, contribuyendo al desarrollo sostenible del país.',
  objetivos: [
    'Promover la incorporación transversal de la GIRD-ACC en los planes de estudio universitarios',
    'Fomentar la investigación científica en gestión de riesgos y cambio climático',
    'Desarrollar programas de extensión universitaria para comunidades vulnerables',
    'Establecer alianzas estratégicas con entidades nacionales e internacionales',
    'Crear una red de expertos y profesionales especializados en GIRD-ACC',
    'Impulsar la innovación tecnológica para la reducción del riesgo de desastres'
  ],
  lineamientos: [
    'Integración académica multidisciplinaria',
    'Enfoque territorial y participativo',
    'Articulación con políticas públicas nacionales',
    'Cooperación interinstitucional',
    'Generación y transferencia de conocimiento',
    'Sostenibilidad y compromiso institucional'
  ]
};

export const ESTRUCTURA_ORGANIZACION = {
  descripcion: 'La RiesGIRD-ACC Perú está organizada de manera participativa y democrática, con representación de todas las universidades miembro.',
  organos: [
    {
      nombre: 'Asamblea de Rectores',
      descripcion: 'Máximo órgano de gobierno de la red, conformado por los rectores de las universidades miembro.',
      icono: 'groups'
    },
    {
      nombre: 'Consejo Directivo',
      descripcion: 'Órgano ejecutivo encargado de la gestión y coordinación de las actividades de la red.',
      icono: 'account_balance'
    },
    {
      nombre: 'Secretaría Técnica',
      descripcion: 'Unidad operativa responsable de la gestión administrativa y técnica de la red.',
      icono: 'support_agent'
    },
    {
      nombre: 'Comités Técnicos Interáreas',
      descripcion: 'Equipos estratégicos designados por cada universidad para la articulación temática.',
      icono: 'engineering'
    }
  ]
};

export const ESTATUTO = {
  titulo: 'Estatuto de la RiesGIRD-ACC Perú',
  fechaAprobacion: '15 de marzo de 2024',
  capitulos: [
    { numero: 'I', titulo: 'Disposiciones Generales', articulos: 5 },
    { numero: 'II', titulo: 'De los Miembros', articulos: 8 },
    { numero: 'III', titulo: 'De los Órganos de Gobierno', articulos: 12 },
    { numero: 'IV', titulo: 'Del Patrimonio', articulos: 4 },
    { numero: 'V', titulo: 'Disposiciones Finales', articulos: 3 }
  ],
  archivoUrl: '/assets/documentos/estatuto-riesgird.pdf'
};

export const UNIVERSIDADES_MIEMBRO: UniversidadMiembro[] = [
  {
    id: 'unmsm',
    nombre: 'Universidad Nacional Mayor de San Marcos',
    logo: '/assets/universidades/unmsm.png',
    rector: {
      nombre: 'Dr. Carlos Eduardo Vásquez Llanos',
      cargo: 'Rector',
      foto: '/assets/personas/rector-unmsm.jpg',
      correo: 'rectorado@unmsm.edu.pe',
      telefono: '+51 1 619-7000'
    },
    secretariaRectorado: {
      nombre: 'Dra. María Elena Torres Fernández',
      cargo: 'Secretaria de Rectorado',
      foto: '/assets/personas/sec-unmsm.jpg',
      correo: 'secretaria.rectorado@unmsm.edu.pe',
      telefono: '+51 1 619-7001'
    },
    vicerrectorAcademico: {
      nombre: 'Dr. Jorge Luis Mendoza García',
      cargo: 'Vicerrector Académico',
      foto: '/assets/personas/vra-unmsm.jpg',
      correo: 'vra@unmsm.edu.pe',
      telefono: '+51 1 619-7002'
    },
    vicerrectorInvestigacion: {
      nombre: 'Dra. Ana María Chávez Rodríguez',
      cargo: 'Vicerrectora de Investigación',
      foto: '/assets/personas/vri-unmsm.jpg',
      correo: 'vri@unmsm.edu.pe',
      telefono: '+51 1 619-7003'
    },
    directorAdministracion: {
      nombre: 'Mg. Roberto Sánchez Paredes',
      cargo: 'Director General de Administración',
      foto: '/assets/personas/dga-unmsm.jpg',
      correo: 'dga@unmsm.edu.pe',
      telefono: '+51 1 619-7004'
    },
    secretarioTecnico: {
      nombre: 'Dr. Luis Alberto Flores Mendoza',
      cargo: 'Secretario Técnico RiesGIRD-ACC',
      foto: '/assets/personas/st-unmsm.jpg',
      correo: 'riesgird@unmsm.edu.pe',
      telefono: '+51 1 619-7005'
    },
    comiteTecnico: [
      { nombre: 'Ing. Patricia Rojas Lima', cargo: 'Coordinadora Académica', foto: '/assets/personas/ct1-unmsm.jpg', correo: 'projass@unmsm.edu.pe', telefono: '+51 1 619-7006' },
      { nombre: 'Dr. Miguel Ángel Huamán Soto', cargo: 'Coordinador de Investigación', foto: '/assets/personas/ct2-unmsm.jpg', correo: 'mhuaman@unmsm.edu.pe', telefono: '+51 1 619-7007' }
    ],
    resolucionSecretario: 'R.R. N° 0123-2024-UNMSM',
    resolucionComite: 'R.R. N° 0124-2024-UNMSM'
  },
  {
    id: 'uni',
    nombre: 'Universidad Nacional de Ingeniería',
    logo: '/assets/universidades/uni.png',
    rector: {
      nombre: 'Dr. Alfonso López Miranda',
      cargo: 'Rector',
      foto: '/assets/personas/rector-uni.jpg',
      correo: 'rectorado@uni.edu.pe',
      telefono: '+51 1 381-5630'
    },
    secretariaRectorado: {
      nombre: 'Mg. Carmen Rosa Delgado Pérez',
      cargo: 'Secretaria de Rectorado',
      foto: '/assets/personas/sec-uni.jpg',
      correo: 'secretaria@uni.edu.pe',
      telefono: '+51 1 381-5631'
    },
    vicerrectorAcademico: {
      nombre: 'Dr. Pedro Martínez Castillo',
      cargo: 'Vicerrector Académico',
      foto: '/assets/personas/vra-uni.jpg',
      correo: 'vra@uni.edu.pe',
      telefono: '+51 1 381-5632'
    },
    vicerrectorInvestigacion: {
      nombre: 'Dra. Lucía Fernández Quiroz',
      cargo: 'Vicerrectora de Investigación',
      foto: '/assets/personas/vri-uni.jpg',
      correo: 'vri@uni.edu.pe',
      telefono: '+51 1 381-5633'
    },
    directorAdministracion: {
      nombre: 'Mg. Fernando Castro Yupanqui',
      cargo: 'Director General de Administración',
      foto: '/assets/personas/dga-uni.jpg',
      correo: 'dga@uni.edu.pe',
      telefono: '+51 1 381-5634'
    },
    secretarioTecnico: {
      nombre: 'Ing. Rosa María Quispe Mamani',
      cargo: 'Secretaria Técnica RiesGIRD-ACC',
      foto: '/assets/personas/st-uni.jpg',
      correo: 'riesgird@uni.edu.pe',
      telefono: '+51 1 381-5635'
    },
    comiteTecnico: [
      { nombre: 'Dr. Carlos Vargas Mendoza', cargo: 'Coordinador Técnico', foto: '/assets/personas/ct1-uni.jpg', correo: 'cvargas@uni.edu.pe', telefono: '+51 1 381-5636' },
      { nombre: 'Ing. Mónica Salazar Ramos', cargo: 'Coordinadora de Extensión', foto: '/assets/personas/ct2-uni.jpg', correo: 'msalazar@uni.edu.pe', telefono: '+51 1 381-5637' }
    ],
    resolucionSecretario: 'R.R. N° 0089-2024-UNI',
    resolucionComite: 'R.R. N° 0090-2024-UNI'
  },
  {
    id: 'pucp',
    nombre: 'Pontificia Universidad Católica del Perú',
    logo: '/assets/universidades/pucp.png',
    rector: {
      nombre: 'Dr. Carlos Garatea Grau',
      cargo: 'Rector',
      foto: '/assets/personas/rector-pucp.jpg',
      correo: 'rectorado@pucp.edu.pe',
      telefono: '+51 1 626-2000'
    },
    secretariaRectorado: {
      nombre: 'Dra. Margarita Suárez López',
      cargo: 'Secretaria General',
      foto: '/assets/personas/sec-pucp.jpg',
      correo: 'secretaria.general@pucp.edu.pe',
      telefono: '+51 1 626-2001'
    },
    vicerrectorAcademico: {
      nombre: 'Dra. Cristina del Maestro Vecino',
      cargo: 'Vicerrectora Académica',
      foto: '/assets/personas/vra-pucp.jpg',
      correo: 'vra@pucp.edu.pe',
      telefono: '+51 1 626-2002'
    },
    vicerrectorInvestigacion: {
      nombre: 'Dr. Aldo Panfichi Huamán',
      cargo: 'Vicerrector de Investigación',
      foto: '/assets/personas/vri-pucp.jpg',
      correo: 'vri@pucp.edu.pe',
      telefono: '+51 1 626-2003'
    },
    directorAdministracion: {
      nombre: 'Mg. Luis Enrique Villanueva',
      cargo: 'Director de Administración',
      foto: '/assets/personas/dga-pucp.jpg',
      correo: 'dadm@pucp.edu.pe',
      telefono: '+51 1 626-2004'
    },
    secretarioTecnico: {
      nombre: 'Dra. Sandra Villena Saldaña',
      cargo: 'Secretaria Técnica RiesGIRD-ACC',
      foto: '/assets/personas/st-pucp.jpg',
      correo: 'riesgird@pucp.edu.pe',
      telefono: '+51 1 626-2005'
    },
    comiteTecnico: [
      { nombre: 'Dr. Javier Díaz Albertini', cargo: 'Coordinador Académico', foto: '/assets/personas/ct1-pucp.jpg', correo: 'jdiaz@pucp.edu.pe', telefono: '+51 1 626-2006' },
      { nombre: 'Mg. Elena Gálvez Ramírez', cargo: 'Coordinadora de Proyectos', foto: '/assets/personas/ct2-pucp.jpg', correo: 'egalvez@pucp.edu.pe', telefono: '+51 1 626-2007' }
    ],
    resolucionSecretario: 'R.R. N° 0156-2024-PUCP',
    resolucionComite: 'R.R. N° 0157-2024-PUCP'
  },
  {
    id: 'unsa',
    nombre: 'Universidad Nacional de San Agustín de Arequipa',
    logo: '/assets/universidades/unsa.png',
    rector: {
      nombre: 'Dr. Hugo Rojas Flores',
      cargo: 'Rector',
      foto: '/assets/personas/rector-unsa.jpg',
      correo: 'rectorado@unsa.edu.pe',
      telefono: '+51 54 237-808'
    },
    secretariaRectorado: {
      nombre: 'Mg. Gladys Paredes Mendoza',
      cargo: 'Secretaria de Rectorado',
      foto: '/assets/personas/sec-unsa.jpg',
      correo: 'secretaria@unsa.edu.pe',
      telefono: '+51 54 237-809'
    },
    vicerrectorAcademico: {
      nombre: 'Dr. Manuel Zeballos Carrión',
      cargo: 'Vicerrector Académico',
      foto: '/assets/personas/vra-unsa.jpg',
      correo: 'vra@unsa.edu.pe',
      telefono: '+51 54 237-810'
    },
    vicerrectorInvestigacion: {
      nombre: 'Dra. Isabel Cáceres Huanca',
      cargo: 'Vicerrectora de Investigación',
      foto: '/assets/personas/vri-unsa.jpg',
      correo: 'vri@unsa.edu.pe',
      telefono: '+51 54 237-811'
    },
    directorAdministracion: {
      nombre: 'Mg. José Arias Zúñiga',
      cargo: 'Director General de Administración',
      foto: '/assets/personas/dga-unsa.jpg',
      correo: 'dga@unsa.edu.pe',
      telefono: '+51 54 237-812'
    },
    secretarioTecnico: {
      nombre: 'Ing. Raúl Cornejo Valencia',
      cargo: 'Secretario Técnico RiesGIRD-ACC',
      foto: '/assets/personas/st-unsa.jpg',
      correo: 'riesgird@unsa.edu.pe',
      telefono: '+51 54 237-813'
    },
    comiteTecnico: [
      { nombre: 'Dr. Víctor Choque Mamani', cargo: 'Coordinador de Investigación', foto: '/assets/personas/ct1-unsa.jpg', correo: 'vchoque@unsa.edu.pe', telefono: '+51 54 237-814' },
      { nombre: 'Mg. Teresa Abril Núñez', cargo: 'Coordinadora Académica', foto: '/assets/personas/ct2-unsa.jpg', correo: 'tabril@unsa.edu.pe', telefono: '+51 54 237-815' }
    ],
    resolucionSecretario: 'R.R. N° 0201-2024-UNSA',
    resolucionComite: 'R.R. N° 0202-2024-UNSA'
  },
  {
    id: 'unt',
    nombre: 'Universidad Nacional de Trujillo',
    logo: '/assets/universidades/unt.png',
    rector: {
      nombre: 'Dr. Carlos Vásquez Boyer',
      cargo: 'Rector',
      foto: '/assets/personas/rector-unt.jpg',
      correo: 'rectorado@unitru.edu.pe',
      telefono: '+51 44 205-271'
    },
    secretariaRectorado: {
      nombre: 'Mg. Patricia Ruiz de Mendoza',
      cargo: 'Secretaria de Rectorado',
      foto: '/assets/personas/sec-unt.jpg',
      correo: 'secretaria@unitru.edu.pe',
      telefono: '+51 44 205-272'
    },
    vicerrectorAcademico: {
      nombre: 'Dr. Luis Escobedo Gallo',
      cargo: 'Vicerrector Académico',
      foto: '/assets/personas/vra-unt.jpg',
      correo: 'vra@unitru.edu.pe',
      telefono: '+51 44 205-273'
    },
    vicerrectorInvestigacion: {
      nombre: 'Dra. Flor de María Espino Carrasco',
      cargo: 'Vicerrectora de Investigación',
      foto: '/assets/personas/vri-unt.jpg',
      correo: 'vri@unitru.edu.pe',
      telefono: '+51 44 205-274'
    },
    directorAdministracion: {
      nombre: 'Mg. Alberto Jara López',
      cargo: 'Director General de Administración',
      foto: '/assets/personas/dga-unt.jpg',
      correo: 'dga@unitru.edu.pe',
      telefono: '+51 44 205-275'
    },
    secretarioTecnico: {
      nombre: 'Dr. Marco Polo Sánchez',
      cargo: 'Secretario Técnico RiesGIRD-ACC',
      foto: '/assets/personas/st-unt.jpg',
      correo: 'riesgird@unitru.edu.pe',
      telefono: '+51 44 205-276'
    },
    comiteTecnico: [
      { nombre: 'Ing. Carmen Salinas Vera', cargo: 'Coordinadora Técnica', foto: '/assets/personas/ct1-unt.jpg', correo: 'csalinas@unitru.edu.pe', telefono: '+51 44 205-277' },
      { nombre: 'Dr. Eduardo Luna García', cargo: 'Coordinador de Extensión', foto: '/assets/personas/ct2-unt.jpg', correo: 'eluna@unitru.edu.pe', telefono: '+51 44 205-278' }
    ],
    resolucionSecretario: 'R.R. N° 0178-2024-UNT',
    resolucionComite: 'R.R. N° 0179-2024-UNT'
  }
];

// ============================================
// 2. ALIADOS ESTRATÉGICOS
// ============================================
export interface AliadoEstrategico {
  id: string;
  nombre: string;
  tipo: 'cip' | 'cooperacion' | 'gobierno' | 'empresa';
  logo: string;
  descripcion: string;
  contacto: {
    nombre?: string;
    correo?: string;
    telefono?: string;
    web?: string;
  };
}

export const ALIADOS_ESTRATEGICOS: AliadoEstrategico[] = [
  // CIP
  {
    id: 'cip',
    nombre: 'Colegio de Ingenieros del Perú',
    tipo: 'cip',
    logo: '/assets/aliados/cip.png',
    descripcion: 'Institución profesional que agrupa a los ingenieros del país.',
    contacto: { web: 'https://www.cip.org.pe', correo: 'contacto@cip.org.pe', telefono: '+51 1 202-5000' }
  },
  // Cooperación Internacional
  {
    id: 'usaid',
    nombre: 'USAID Perú',
    tipo: 'cooperacion',
    logo: '/assets/aliados/usaid.png',
    descripcion: 'Agencia de los Estados Unidos para el Desarrollo Internacional.',
    contacto: { web: 'https://www.usaid.gov/peru', correo: 'usaid-peru@usaid.gov' }
  },
  {
    id: 'jica',
    nombre: 'JICA - Agencia de Cooperación Internacional del Japón',
    tipo: 'cooperacion',
    logo: '/assets/aliados/jica.png',
    descripcion: 'Cooperación técnica japonesa para el desarrollo.',
    contacto: { web: 'https://www.jica.go.jp/peru', correo: 'pe_oso_rep@jica.go.jp' }
  },
  {
    id: 'giz',
    nombre: 'GIZ - Cooperación Alemana',
    tipo: 'cooperacion',
    logo: '/assets/aliados/giz.png',
    descripcion: 'Deutsche Gesellschaft für Internationale Zusammenarbeit.',
    contacto: { web: 'https://www.giz.de/peru', correo: 'giz-peru@giz.de' }
  },
  {
    id: 'pnud',
    nombre: 'Programa de las Naciones Unidas para el Desarrollo',
    tipo: 'cooperacion',
    logo: '/assets/aliados/pnud.png',
    descripcion: 'Organismo de la ONU para el desarrollo sostenible.',
    contacto: { web: 'https://www.pe.undp.org', correo: 'info.pe@undp.org' }
  },
  // Gobierno
  {
    id: 'indeci',
    nombre: 'INDECI - Instituto Nacional de Defensa Civil',
    tipo: 'gobierno',
    logo: '/assets/aliados/indeci.png',
    descripcion: 'Organismo público ejecutor del SINAGERD.',
    contacto: { web: 'https://www.indeci.gob.pe', correo: 'consultas@indeci.gob.pe', telefono: '+51 1 225-9898' }
  },
  {
    id: 'cenepred',
    nombre: 'CENEPRED',
    tipo: 'gobierno',
    logo: '/assets/aliados/cenepred.png',
    descripcion: 'Centro Nacional de Estimación, Prevención y Reducción del Riesgo de Desastres.',
    contacto: { web: 'https://www.cenepred.gob.pe', correo: 'consultas@cenepred.gob.pe' }
  },
  {
    id: 'minam',
    nombre: 'Ministerio del Ambiente',
    tipo: 'gobierno',
    logo: '/assets/aliados/minam.png',
    descripcion: 'Ente rector del sector ambiental nacional.',
    contacto: { web: 'https://www.gob.pe/minam', correo: 'atencion@minam.gob.pe' }
  },
  {
    id: 'minedu',
    nombre: 'Ministerio de Educación',
    tipo: 'gobierno',
    logo: '/assets/aliados/minedu.png',
    descripcion: 'Ente rector del sector educación.',
    contacto: { web: 'https://www.gob.pe/minedu', correo: 'atencion@minedu.gob.pe' }
  },
  // Empresas
  {
    id: 'antamina',
    nombre: 'Compañía Minera Antamina',
    tipo: 'empresa',
    logo: '/assets/aliados/antamina.png',
    descripcion: 'Empresa minera comprometida con el desarrollo sostenible.',
    contacto: { web: 'https://www.antamina.com', correo: 'comunicaciones@antamina.com' }
  },
  {
    id: 'telefonica',
    nombre: 'Telefónica del Perú',
    tipo: 'empresa',
    logo: '/assets/aliados/telefonica.png',
    descripcion: 'Empresa de telecomunicaciones con programas de responsabilidad social.',
    contacto: { web: 'https://www.telefonica.com.pe' }
  }
];

// ============================================
// 3. MEMBRESÍA
// ============================================
export interface FaseMembresia {
  numero: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  icono: string;
}

export const PROCESO_MEMBRESIA = {
  titulo: 'Proceso de Adscripción a la Red',
  descripcion: 'Las universidades peruanas pueden solicitar su incorporación a la RiesGIRD-ACC siguiendo el procedimiento establecido.',
  fases: [
    {
      numero: 1,
      titulo: 'Solicitud Formal',
      descripcion: 'El Rector de la universidad envía una carta de solicitud de adscripción dirigida a la Presidencia de la Red.',
      duracion: '1 semana',
      icono: 'mail'
    },
    {
      numero: 2,
      titulo: 'Evaluación de Requisitos',
      descripcion: 'El Consejo Directivo evalúa el cumplimiento de los requisitos establecidos en el estatuto.',
      duracion: '2 semanas',
      icono: 'checklist'
    },
    {
      numero: 3,
      titulo: 'Designación de Representantes',
      descripcion: 'La universidad emite resoluciones designando al Secretario Técnico y Comité Técnico Interáreas.',
      duracion: '1 semana',
      icono: 'people'
    },
    {
      numero: 4,
      titulo: 'Aprobación en Asamblea',
      descripcion: 'La Asamblea de Rectores aprueba la incorporación de la nueva universidad miembro.',
      duracion: 'Próxima asamblea',
      icono: 'how_to_vote'
    },
    {
      numero: 5,
      titulo: 'Emisión de Certificado',
      descripcion: 'Se emite el certificado de membresía oficial firmado por la Presidencia de la Red.',
      duracion: '1 semana',
      icono: 'verified'
    }
  ] as FaseMembresia[]
};

export const REQUISITOS_MEMBRESIA = [
  'Ser una universidad licenciada por SUNEDU',
  'Carta de solicitud firmada por el Rector',
  'Compromiso formal de participación activa en la red',
  'Resolución de designación de Secretario Técnico',
  'Resolución de conformación del Comité Técnico Interáreas',
  'Plan de trabajo institucional en GIRD-ACC',
  'Acta de compromiso con los lineamientos de la red'
];

export const MODELOS_DOCUMENTOS = [
  {
    titulo: 'Modelo de Carta de Solicitud de Adscripción',
    descripcion: 'Formato oficial para solicitar la incorporación a la red.',
    archivo: '/assets/documentos/modelo-carta-adscripcion.docx',
    icono: 'description'
  },
  {
    titulo: 'Modelo de Resolución de Designación de Secretario Técnico',
    descripcion: 'Formato de resolución rectoral para designar al representante institucional.',
    archivo: '/assets/documentos/modelo-resolucion-secretario.docx',
    icono: 'gavel'
  },
  {
    titulo: 'Modelo de Designación de Comité Técnico Interáreas',
    descripcion: 'Formato para conformar el equipo estratégico institucional.',
    archivo: '/assets/documentos/modelo-comite-tecnico.docx',
    icono: 'groups'
  },
  {
    titulo: 'Modelo de Certificado de Membresía',
    descripcion: 'Diseño del certificado oficial que acredita la membresía.',
    archivo: '/assets/documentos/modelo-certificado.pdf',
    icono: 'workspace_premium'
  }
];

// ============================================
// 4. ASAMBLEAS DE RECTORES
// ============================================
export interface Asamblea {
  anio: number;
  numero: string;
  fecha: string;
  lugar: string;
  agenda: string[];
  acuerdos: string[];
  fotos: string[];
  documentos: { titulo: string; archivo: string }[];
}

export const ASAMBLEAS: Asamblea[] = [
  {
    anio: 2024,
    numero: 'I Asamblea Ordinaria',
    fecha: '15 de agosto de 2024',
    lugar: 'Universidad Nacional Mayor de San Marcos, Lima',
    agenda: [
      'Instalación formal de la RiesGIRD-ACC Perú',
      'Aprobación del Estatuto de la Red',
      'Elección del primer Consejo Directivo',
      'Presentación del Plan de Trabajo 2024-2027',
      'Definición de cuotas y aportes institucionales',
      'Establecimiento de alianzas estratégicas iniciales'
    ],
    acuerdos: [
      'Acuerdo N° 001-2024: Aprobación del Estatuto por unanimidad',
      'Acuerdo N° 002-2024: Elección de UNMSM como universidad sede',
      'Acuerdo N° 003-2024: Designación de Secretaría Técnica',
      'Acuerdo N° 004-2024: Aprobación del Plan de Trabajo 2024-2027',
      'Acuerdo N° 005-2024: Establecimiento de cuota anual de membresía',
      'Acuerdo N° 006-2024: Conformación de comisiones de trabajo'
    ],
    fotos: [
      '/assets/asambleas/2024/foto1.jpg',
      '/assets/asambleas/2024/foto2.jpg',
      '/assets/asambleas/2024/foto3.jpg',
      '/assets/asambleas/2024/foto4.jpg',
      '/assets/asambleas/2024/foto5.jpg',
      '/assets/asambleas/2024/foto6.jpg'
    ],
    documentos: [
      { titulo: 'Acta de la I Asamblea', archivo: '/assets/documentos/acta-asamblea-2024.pdf' },
      { titulo: 'Estatuto Aprobado', archivo: '/assets/documentos/estatuto-2024.pdf' }
    ]
  },
  {
    anio: 2025,
    numero: 'II Asamblea Ordinaria',
    fecha: '20 de marzo de 2025',
    lugar: 'Universidad Nacional de Ingeniería, Lima',
    agenda: [
      'Informe de gestión 2024',
      'Evaluación del cumplimiento del Plan de Trabajo',
      'Incorporación de nuevas universidades miembro',
      'Planificación del I Congreso Internacional',
      'Aprobación del presupuesto 2025',
      'Renovación parcial del Consejo Directivo'
    ],
    acuerdos: [
      'Acuerdo N° 001-2025: Aprobación del Informe de Gestión 2024',
      'Acuerdo N° 002-2025: Incorporación de 5 nuevas universidades',
      'Acuerdo N° 003-2025: Aprobación del presupuesto 2025',
      'Acuerdo N° 004-2025: Organización del I Congreso Internacional',
      'Acuerdo N° 005-2025: Renovación del Consejo Directivo',
      'Acuerdo N° 006-2025: Establecimiento de convenios marco'
    ],
    fotos: [
      '/assets/asambleas/2025/foto1.jpg',
      '/assets/asambleas/2025/foto2.jpg',
      '/assets/asambleas/2025/foto3.jpg',
      '/assets/asambleas/2025/foto4.jpg'
    ],
    documentos: [
      { titulo: 'Acta de la II Asamblea', archivo: '/assets/documentos/acta-asamblea-2025.pdf' },
      { titulo: 'Informe de Gestión 2024', archivo: '/assets/documentos/informe-2024.pdf' }
    ]
  },
  {
    anio: 2026,
    numero: 'III Asamblea Ordinaria',
    fecha: '25 de marzo de 2026 (Programada)',
    lugar: 'Pontificia Universidad Católica del Perú, Lima',
    agenda: [
      'Informe de gestión 2025',
      'Memoria del I y II Congreso Internacional',
      'Evaluación de medio término del Plan 2024-2027',
      'Planificación de actividades 2026-2027',
      'Fortalecimiento de la Red de Investigadores',
      'Propuestas de cooperación internacional'
    ],
    acuerdos: [],
    fotos: [],
    documentos: []
  }
];

// ============================================
// 5. PLAN DE TRABAJO 2024-2027
// ============================================
export interface Investigador {
  nombre: string;
  universidad: string;
  especialidad: string;
  orcid: string;
  correo: string;
  foto: string;
  publicaciones: number;
}

export interface ExpertoGobernanza {
  nombre: string;
  universidad: string;
  experiencia: string;
  correo: string;
  foto: string;
}

export interface ProgramaEspecializacion {
  titulo: string;
  universidad: string;
  modalidad: string;
  duracion: string;
  creditos: number;
  descripcion: string;
  estado: 'activo' | 'proximo' | 'finalizado';
}

export interface LaboratorioTerritorial {
  nombre: string;
  universidad: string;
  ubicacion: string;
  descripcion: string;
  proyectos: string[];
  foto: string;
}

export interface Brigada {
  nombre: string;
  universidad: string;
  integrantes: number;
  especialidad: string;
  contacto: string;
}

export const RED_INVESTIGADORES: Investigador[] = [
  {
    nombre: 'Dr. Juan Carlos Villegas Palomino',
    universidad: 'UNMSM',
    especialidad: 'Geología y Riesgos Sísmicos',
    orcid: '0000-0001-2345-6789',
    correo: 'jvillegas@unmsm.edu.pe',
    foto: '/assets/investigadores/villegas.jpg',
    publicaciones: 45
  },
  {
    nombre: 'Dra. María Elena Foronda Robles',
    universidad: 'UNI',
    especialidad: 'Ingeniería Sísmica y Estructural',
    orcid: '0000-0002-3456-7890',
    correo: 'mforonda@uni.edu.pe',
    foto: '/assets/investigadores/foronda.jpg',
    publicaciones: 38
  },
  {
    nombre: 'Dr. Roberto Quispe Mendoza',
    universidad: 'PUCP',
    especialidad: 'Cambio Climático y Recursos Hídricos',
    orcid: '0000-0003-4567-8901',
    correo: 'rquispe@pucp.edu.pe',
    foto: '/assets/investigadores/quispe.jpg',
    publicaciones: 52
  },
  {
    nombre: 'Dra. Luz Marina Carbajal Torres',
    universidad: 'UNSA',
    especialidad: 'Vulcanología y Geofísica',
    orcid: '0000-0004-5678-9012',
    correo: 'lcarbajal@unsa.edu.pe',
    foto: '/assets/investigadores/carbajal.jpg',
    publicaciones: 29
  },
  {
    nombre: 'Dr. César Augusto Chávez Rodríguez',
    universidad: 'UNT',
    especialidad: 'Gestión del Riesgo Urbano',
    orcid: '0000-0005-6789-0123',
    correo: 'cchavez@unitru.edu.pe',
    foto: '/assets/investigadores/chavez.jpg',
    publicaciones: 33
  },
  {
    nombre: 'Dra. Patricia Huamán Espinoza',
    universidad: 'UNMSM',
    especialidad: 'Salud Pública en Emergencias',
    orcid: '0000-0006-7890-1234',
    correo: 'phuaman@unmsm.edu.pe',
    foto: '/assets/investigadores/huaman.jpg',
    publicaciones: 41
  }
];

export const EXPERTOS_GOBERNANZA: ExpertoGobernanza[] = [
  {
    nombre: 'Dr. Fernando Bravo Alarcón',
    universidad: 'PUCP',
    experiencia: 'Ex Director de INDECI, consultor internacional en GRD',
    correo: 'fbravo@pucp.edu.pe',
    foto: '/assets/expertos/bravo.jpg'
  },
  {
    nombre: 'Mg. Rosa Elvira Sandoval Peralta',
    universidad: 'UNMSM',
    experiencia: 'Especialista en políticas públicas de GRD',
    correo: 'rsandoval@unmsm.edu.pe',
    foto: '/assets/expertos/sandoval.jpg'
  },
  {
    nombre: 'Dr. Jorge Luis Herrera Castillo',
    universidad: 'UNI',
    experiencia: 'Consultor PNUD en gestión del riesgo',
    correo: 'jherrera@uni.edu.pe',
    foto: '/assets/expertos/herrera.jpg'
  }
];

export const PROGRAMAS_ESPECIALIZACION: ProgramaEspecializacion[] = [
  {
    titulo: 'Diplomado en Gestión Integral del Riesgo de Desastres',
    universidad: 'Universidad Nacional Mayor de San Marcos',
    modalidad: 'Semipresencial',
    duracion: '6 meses',
    creditos: 24,
    descripcion: 'Formación especializada en los componentes prospectivo, correctivo y reactivo de la GRD.',
    estado: 'activo'
  },
  {
    titulo: 'Maestría en Cambio Climático y Desarrollo Sostenible',
    universidad: 'Pontificia Universidad Católica del Perú',
    modalidad: 'Presencial',
    duracion: '2 años',
    creditos: 72,
    descripcion: 'Programa de posgrado enfocado en la adaptación al cambio climático.',
    estado: 'activo'
  },
  {
    titulo: 'Especialización en Ingeniería Sísmica',
    universidad: 'Universidad Nacional de Ingeniería',
    modalidad: 'Presencial',
    duracion: '1 año',
    creditos: 36,
    descripcion: 'Formación técnica especializada en diseño sismorresistente.',
    estado: 'activo'
  },
  {
    titulo: 'Diplomado en Adaptación al Cambio Climático',
    universidad: 'Universidad Nacional de San Agustín',
    modalidad: 'Virtual',
    duracion: '4 meses',
    creditos: 16,
    descripcion: 'Capacitación en estrategias de adaptación para zonas alto andinas.',
    estado: 'proximo'
  },
  {
    titulo: 'Curso de Alta Especialización en Evaluación de Riesgos',
    universidad: 'Universidad Nacional de Trujillo',
    modalidad: 'Híbrido',
    duracion: '3 meses',
    creditos: 12,
    descripcion: 'Metodologías de evaluación de riesgos según normativa nacional.',
    estado: 'proximo'
  }
];

export const LABORATORIOS_TERRITORIALES: LaboratorioTerritorial[] = [
  {
    nombre: 'Laboratorio de Resiliencia Urbana Lima Norte',
    universidad: 'UNMSM',
    ubicacion: 'San Juan de Lurigancho, Lima',
    descripcion: 'Espacio de investigación-acción para el desarrollo de capacidades comunitarias en GRD.',
    proyectos: [
      'Mapeo participativo de riesgos',
      'Sistemas de alerta temprana comunitaria',
      'Huertos urbanos resilientes'
    ],
    foto: '/assets/laboratorios/lima-norte.jpg'
  },
  {
    nombre: 'Laboratorio de Gestión del Riesgo Sísmico',
    universidad: 'UNI',
    ubicacion: 'Rímac, Lima',
    descripcion: 'Centro de investigación en vulnerabilidad sísmica de edificaciones.',
    proyectos: [
      'Reforzamiento de viviendas de adobe',
      'Monitoreo sísmico en tiempo real',
      'Evaluación de puentes y estructuras críticas'
    ],
    foto: '/assets/laboratorios/sismico-uni.jpg'
  },
  {
    nombre: 'Laboratorio de Adaptación al Cambio Climático Alto Andino',
    universidad: 'UNSA',
    ubicacion: 'Valle del Colca, Arequipa',
    descripcion: 'Investigación sobre impactos del cambio climático en ecosistemas de montaña.',
    proyectos: [
      'Monitoreo de glaciares',
      'Gestión sostenible del agua',
      'Agricultura resiliente al clima'
    ],
    foto: '/assets/laboratorios/colca.jpg'
  }
];

export const BRIGADAS: Brigada[] = [
  {
    nombre: 'Brigada Universitaria de Rescate UNMSM',
    universidad: 'UNMSM',
    integrantes: 45,
    especialidad: 'Búsqueda y rescate en estructuras colapsadas',
    contacto: 'brigada.rescate@unmsm.edu.pe'
  },
  {
    nombre: 'Voluntariado de Primera Respuesta UNI',
    universidad: 'UNI',
    integrantes: 38,
    especialidad: 'Evaluación de daños y primeros auxilios',
    contacto: 'voluntariado@uni.edu.pe'
  },
  {
    nombre: 'Brigada de Emergencias PUCP',
    universidad: 'PUCP',
    integrantes: 52,
    especialidad: 'Evacuación y atención de emergencias',
    contacto: 'brigada@pucp.edu.pe'
  },
  {
    nombre: 'Brigada de Respuesta UNSA',
    universidad: 'UNSA',
    integrantes: 35,
    especialidad: 'Emergencias volcánicas y sísmicas',
    contacto: 'brigada.emergencias@unsa.edu.pe'
  },
  {
    nombre: 'Voluntariado Universitario UNT',
    universidad: 'UNT',
    integrantes: 40,
    especialidad: 'Gestión de albergues y ayuda humanitaria',
    contacto: 'voluntariado@unitru.edu.pe'
  }
];

export const PLAN_2026 = {
  titulo: 'Plan Operativo 2026',
  ejes: [
    {
      nombre: 'Formación Académica',
      actividades: [
        'Implementación de cursos transversales en GIRD-ACC',
        'Actualización de mallas curriculares',
        'Capacitación docente en metodologías de enseñanza'
      ]
    },
    {
      nombre: 'Investigación',
      actividades: [
        'Convocatoria de proyectos de investigación colaborativa',
        'Publicación del repositorio de investigaciones',
        'Organización de seminarios de investigación'
      ]
    },
    {
      nombre: 'Extensión Universitaria',
      actividades: [
        'Fortalecimiento de laboratorios territoriales',
        'Campañas de sensibilización comunitaria',
        'Formación de brigadas estudiantiles'
      ]
    },
    {
      nombre: 'Cooperación Interinstitucional',
      actividades: [
        'Firma de convenios con entidades gubernamentales',
        'Participación en redes internacionales',
        'Intercambio académico entre universidades miembro'
      ]
    }
  ]
};

export interface EventoForo {
  id: string;
  titulo: string;
  fecha: string;
  hora: string;
  tipo: 'webinar' | 'taller' | 'conferencia' | 'reunion' | 'convocatoria';
  descripcion: string;
  modalidad: 'virtual' | 'presencial' | 'hibrido';
  enlaceInscripcion?: string;
  ponentes?: string[];
}

export const FORO_INTERUNIVERSITARIO: EventoForo[] = [
  {
    id: 'ev-001',
    titulo: 'Webinar: Lecciones Aprendidas del Fenómeno El Niño 2025',
    fecha: '2026-02-15',
    hora: '10:00',
    tipo: 'webinar',
    descripcion: 'Análisis de la respuesta universitaria ante el Fenómeno El Niño 2025.',
    modalidad: 'virtual',
    enlaceInscripcion: 'https://riesgird.pe/eventos/webinar-nino-2025',
    ponentes: ['Dr. Juan Villegas (UNMSM)', 'Dra. María Foronda (UNI)']
  },
  {
    id: 'ev-002',
    titulo: 'Taller: Metodologías de Evaluación del Riesgo',
    fecha: '2026-03-10',
    hora: '09:00',
    tipo: 'taller',
    descripcion: 'Capacitación práctica en metodologías CENEPRED e INDECI.',
    modalidad: 'presencial',
    enlaceInscripcion: 'https://riesgird.pe/eventos/taller-metodologias',
    ponentes: ['Mg. Rosa Sandoval (UNMSM)', 'Ing. Carlos Vargas (UNI)']
  },
  {
    id: 'ev-003',
    titulo: 'III Congreso Internacional GIRD-ACC 2026',
    fecha: '2026-10-20',
    hora: '08:00',
    tipo: 'conferencia',
    descripcion: 'Mayor evento académico de la red con participación internacional.',
    modalidad: 'hibrido',
    enlaceInscripcion: 'https://congreso.riesgird.pe/2026',
    ponentes: ['Ponentes nacionales e internacionales']
  },
  {
    id: 'ev-004',
    titulo: 'Convocatoria: Proyectos de Investigación Colaborativa 2026',
    fecha: '2026-04-01',
    hora: '00:00',
    tipo: 'convocatoria',
    descripcion: 'Financiamiento para proyectos de investigación entre universidades miembro.',
    modalidad: 'virtual',
    enlaceInscripcion: 'https://riesgird.pe/convocatoria-investigacion-2026'
  },
  {
    id: 'ev-005',
    titulo: 'Reunión de Coordinación de Secretarios Técnicos',
    fecha: '2026-02-28',
    hora: '15:00',
    tipo: 'reunion',
    descripcion: 'Reunión mensual de coordinación entre secretarios técnicos de la red.',
    modalidad: 'virtual'
  }
];

// ============================================
// 6. MEMORIAS DE GESTIÓN
// ============================================
export interface ActividadMemoria {
  titulo: string;
  fecha: string;
  descripcion: string;
  participantes: number;
  fotos: string[];
}

export interface MemoriaGestion {
  periodo: string;
  titulo: string;
  descripcion: string;
  actividades: ActividadMemoria[];
  logros: string[];
  cifras: { label: string; valor: string | number }[];
  documentoMemoria?: string;
}

export interface CongresoInternacional {
  edicion: string;
  año: number;
  tema: string;
  fecha: string;
  lugar: string;
  participantes: number;
  ponencias: number;
  paises: number;
  resumen: string;
  fotos: string[];
  publicacion?: string;
}

export const MEMORIAS_GESTION: MemoriaGestion[] = [
  {
    periodo: '2024-2025',
    titulo: 'Memoria de Gestión Período 2024-2025',
    descripcion: 'Primer período de gestión de la RiesGIRD-ACC Perú, enfocado en la consolidación institucional.',
    actividades: [
      {
        titulo: 'Instalación de la RiesGIRD-ACC Perú',
        fecha: 'Agosto 2024',
        descripcion: 'Acto protocolar de creación de la red con presencia de 15 rectores.',
        participantes: 120,
        fotos: ['/assets/memorias/2024/instalacion1.jpg', '/assets/memorias/2024/instalacion2.jpg']
      },
      {
        titulo: 'I Congreso Internacional GIRD-ACC',
        fecha: 'Noviembre 2024',
        descripcion: 'Primer congreso internacional organizado por la red.',
        participantes: 450,
        fotos: ['/assets/memorias/2024/congreso1.jpg', '/assets/memorias/2024/congreso2.jpg']
      },
      {
        titulo: 'Firma de Convenio Marco con INDECI',
        fecha: 'Febrero 2025',
        descripcion: 'Convenio de cooperación interinstitucional para formación y capacitación.',
        participantes: 50,
        fotos: ['/assets/memorias/2025/convenio-indeci.jpg']
      },
      {
        titulo: 'II Congreso Internacional GIRD-ACC',
        fecha: 'Octubre 2025',
        descripcion: 'Segundo congreso con enfoque en cambio climático.',
        participantes: 580,
        fotos: ['/assets/memorias/2025/congreso1.jpg', '/assets/memorias/2025/congreso2.jpg']
      }
    ],
    logros: [
      'Incorporación de 25 universidades miembro',
      'Firma de 8 convenios interinstitucionales',
      'Organización de 2 congresos internacionales',
      'Creación de la Red de Investigadores con 45 miembros',
      'Establecimiento de 3 laboratorios territoriales',
      'Capacitación de 1,200 profesionales y estudiantes'
    ],
    cifras: [
      { label: 'Universidades Miembro', valor: 25 },
      { label: 'Investigadores en Red', valor: 45 },
      { label: 'Convenios Firmados', valor: 8 },
      { label: 'Personas Capacitadas', valor: 1200 },
      { label: 'Publicaciones', valor: 28 },
      { label: 'Eventos Organizados', valor: 35 }
    ],
    documentoMemoria: '/assets/documentos/memoria-2024-2025.pdf'
  }
];

export const CONGRESOS_INTERNACIONALES: CongresoInternacional[] = [
  {
    edicion: 'I',
    año: 2024,
    tema: 'Universidades Resilientes: Formando Profesionales para la Gestión del Riesgo',
    fecha: '15-17 de noviembre de 2024',
    lugar: 'Universidad Nacional Mayor de San Marcos, Lima',
    participantes: 450,
    ponencias: 68,
    paises: 12,
    resumen: 'Primer congreso internacional de la red, enfocado en el rol de las universidades en la formación de profesionales competentes en GIRD-ACC.',
    fotos: [
      '/assets/congresos/2024/foto1.jpg',
      '/assets/congresos/2024/foto2.jpg',
      '/assets/congresos/2024/foto3.jpg',
      '/assets/congresos/2024/foto4.jpg'
    ],
    publicacion: '/assets/documentos/libro-congreso-2024.pdf'
  },
  {
    edicion: 'II',
    año: 2025,
    tema: 'Cambio Climático y Adaptación: Desafíos para la Educación Superior',
    fecha: '20-22 de octubre de 2025',
    lugar: 'Universidad Nacional de Ingeniería, Lima',
    participantes: 580,
    ponencias: 85,
    paises: 15,
    resumen: 'Segundo congreso con énfasis en estrategias de adaptación al cambio climático desde la educación superior.',
    fotos: [
      '/assets/congresos/2025/foto1.jpg',
      '/assets/congresos/2025/foto2.jpg',
      '/assets/congresos/2025/foto3.jpg',
      '/assets/congresos/2025/foto4.jpg'
    ],
    publicacion: '/assets/documentos/libro-congreso-2025.pdf'
  }
];

export const ALBUM_FOTOGRAFICO = {
  titulo: 'Álbum Fotográfico Institucional',
  descripcion: 'Galería de imágenes de las actividades académicas e institucionales de la RiesGIRD-ACC Perú.',
  categorias: [
    {
      nombre: 'Asambleas de Rectores',
      fotos: [
        { src: '/assets/album/asambleas/foto1.jpg', caption: 'I Asamblea de Rectores 2024' },
        { src: '/assets/album/asambleas/foto2.jpg', caption: 'Firma del Estatuto' },
        { src: '/assets/album/asambleas/foto3.jpg', caption: 'II Asamblea de Rectores 2025' }
      ]
    },
    {
      nombre: 'Congresos Internacionales',
      fotos: [
        { src: '/assets/album/congresos/foto1.jpg', caption: 'Inauguración I Congreso 2024' },
        { src: '/assets/album/congresos/foto2.jpg', caption: 'Panel de expertos internacionales' },
        { src: '/assets/album/congresos/foto3.jpg', caption: 'Clausura II Congreso 2025' }
      ]
    },
    {
      nombre: 'Capacitaciones y Talleres',
      fotos: [
        { src: '/assets/album/capacitaciones/foto1.jpg', caption: 'Taller de evaluación de riesgos' },
        { src: '/assets/album/capacitaciones/foto2.jpg', caption: 'Capacitación docente' },
        { src: '/assets/album/capacitaciones/foto3.jpg', caption: 'Simulacro universitario' }
      ]
    },
    {
      nombre: 'Trabajo de Campo',
      fotos: [
        { src: '/assets/album/campo/foto1.jpg', caption: 'Laboratorio territorial Lima Norte' },
        { src: '/assets/album/campo/foto2.jpg', caption: 'Monitoreo de glaciares' },
        { src: '/assets/album/campo/foto3.jpg', caption: 'Brigadas en acción' }
      ]
    }
  ]
};

// Información de la Secretaria Técnica
export const SECRETARIA_TECNICA = {
  nombre: 'Mary Mollo',
  cargo: 'Secretaria Técnica de la RiesGIRD-ACC / Perú',
  correo: 'secretaria.tecnica@riesgird.pe',
  telefono: '+51 1 619-7000 anexo 1234'
};
