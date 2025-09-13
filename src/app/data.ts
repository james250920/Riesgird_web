// src/app/data.ts
export const RIES_INFO = {
  liderazgos: [
    { ambito: 'Ries GIRD-ACC / Perú', periodo: '2024–2027' },
    { ambito: 'Ries GIRD-ACC / LAC', periodo: '2024–2026' },
  ],
  consejoDirectivo: {
    peru_2024_2027: [
      {
        rol: 'Presidente',
        nombre: 'Dr. Jaime Serida Nishimura',
        institucion: 'Universidad ESAN (Rector)',
        email: 'jserida@esan.edu.pe',
      },
      {
        rol: 'Secretario',
        nombre: 'Dr. Edgardo Palomino Torres',
        institucion: 'UNH',
      },
      {
        rol: 'Vocal',
        nombre: 'Dr. Edgar Martínez Huamán',
        institucion: 'UNAJMA',
      },
    ],
    secretariaTecnica: {
      nombre: 'Mary Mollo Medina',
      cargo: 'Secretaría Técnica Nacional RiesGIRD-ACC/Perú',
      email: 'mmollo@esan.edu.pe',
      telefono: '998678236',
      perfil: 'Experta en gobierno y política pública – Universidad ESAN',
      correoRed: 'red_riesgird-acc_pe@esan.edu.pe',
    },
  },
  // En la PPTX aparecen numerados (1..6). Déjalos listos para rellenar.
  objetivos: [
    {
      n: 1,
      texto:
        'Proponer, diseñar, desarrollar e implementar estrategias colaborativas de acción que reduzcan el riesgo de desastres y riesgos climáticos que generan impactos en los aspectos social, económico y ambiental del país, considerando la particularidad de cada uno de los territorios.',
    },
    {
      n: 2,
      texto:
        'Asegurar la mayor pertinencia, eficacia y calidad en las capacidades que corresponden a las funciones y fines de la academia, para lo cual podrá coordinar con instituciones públicas o privadas, de nivel nacional e internacional, a fin de asegurar la asistencia técnica y la cooperación en los procesos de la GIRD-ACC con oportunidad y diligencia.',
    },
    {
      n: 3,
      texto:
        'Desarrollar productos de valor mediante alianzas y acciones colaborativas entre universidades y con los organismos e instituciones relacionadas a la GIRD-ACC a nivel nacional e internacional.',
    },
    {
      n: 4,
      texto:
        'Proponer y poner a disposición de las autoridades competentes, cuadros técnicos especializados en los siete procesos de la GRD, como integrantes del SINAGERD.',
    },
    {
      n: 5,
      texto:
        'Promover el derecho a la asistencia humanitaria y el derecho a gozar de un ambiente saludable, con respeto a la naturaleza; poniéndose a disposición de las organizaciones públicas o privadas inmersas en los procesos de la GIRD-ACC, sin aceptar presiones políticas, económicas o religiosas que condicionen su cooperación en situaciones de desastres o emergencias, a nivel nacional o internacional.',
    },
    {
      n: 6,
      texto:
        'Mantener  independencia y autonomía, respecto a cualquier tipo de poder, para ejercer la asistencia humanitaria.',
    },
  ],
  lineamientos: [
    {
      n: 1,
      texto:
        'Desarrollo de políticas y estrategias nacionales en el marco de la gobernanza universitaria en GIRD-ACC',
    },
    { n: 2, texto: 'Investigación colaborativa y redes de conocimiento' },
    {
      n: 3,
      texto:
        'Fortalecimiento de capacidades y formación continua para académicos,  investigadores y gestores  para promover la RRD y la ACC',
    },
    {
      n: 4,
      texto:
        'Vinculación con la comunidad y responsabilidad social universitaria con impacto socio ambiental territorial',
    },
    { n: 5, texto: 'Gestión del conocimiento y difusión de buenas prácticas' },
    {
      n: 6,
      texto: 'Creación de programas académicos conjuntos para fortalecer una red de formadores',
    },
    {
      n: 7,
      texto:
        'Promover alianzas y asocios estratégicos con la empresa privada, el gobierno, la sociedad civil  y la  cooperación internacional',
    },
  ],
  universidades: [
    'Universidad ESAN',
    'Universidad Nacional de Ingeniería',
    'Universidad Nacional Agraria La Molina',
    'Universidad Nacional Mayor de San Marcos',
    'Universidad Nacional Jorge Basadre Grohmann',
    'Universidad Nacional de Huancavelica',
    'Universidad Nacional José María Arguedas',
    'Universidad Nacional de San Antonio Abad del Cusco',
    'Universidad Nacional del Altiplano',
    'Universidad Nacional del Centro del Perú',
    'Universidad Nacional de Cajamarca',
    'Universidad Nacional de Tumbes',
    'Universidad Nacional de Piura',
    'Universidad Nacional de Ucayali',
    'Universidad Nacional de Trujillo',
    'Universidad Nacional Hermilio Valdizán',
    'Universidad Nacional de Cañete',
    'Universidad Nacional de San Agustín',
    'Universidad Nacional de Juliaca',
    'Universidad Nacional de San Cristóbal de Huamanga',
    'Universidad Nacional de Barranca',
    'Universidad Nacional de Jaén',
    'Universidad Católica de Santa María',
    'Universidad Andina del Cusco',
    'Universidad Privada de Tacna',
    'Universidad Nacional Santiago Antúnez de Mayolo',
    'Universidad Nacional Tecnológica de Lima Sur',
  ],
  eventos: [
    {
      id: 1,
      titulo: 'Seminario Internacional de Gestión de Riesgos de Desastres',
      descripcion: 'Un evento académico que reúne a expertos internacionales para discutir las mejores prácticas en gestión de riesgos y adaptación al cambio climático.',
      fecha: '2024-03-15',
      hora: '09:00',
      modalidad: 'Presencial y Virtual',
      lugar: 'Universidad ESAN, Lima',
      imagen: '/assets/eventos/seminario-grd.jpg',
      organizador: 'Red RiesGIRD-ACC / Perú',
      categoria: 'Académico',
      estado: 'Próximo',
      enlaceInscripcion: 'https://example.com/inscripcion-seminario',
      contacto: {
        email: 'red_riesgird-acc_pe@esan.edu.pe',
        telefono: '+51 998 678 236'
      }
    },
    {
      id: 2,
      titulo: 'Taller de Capacitación en Adaptación Climática',
      descripcion: 'Taller práctico dirigido a investigadores y gestores públicos sobre estrategias de adaptación al cambio climático en el contexto peruano.',
      fecha: '2024-02-28',
      hora: '14:00',
      modalidad: 'Virtual',
      lugar: 'Plataforma Zoom',
      imagen: '/assets/eventos/taller-adaptacion.jpg',
      organizador: 'Universidad Nacional de Ingeniería',
      categoria: 'Capacitación',
      estado: 'Finalizado',
      enlaceInscripcion: null,
      contacto: {
        email: 'capacitacion@uni.edu.pe',
        telefono: '+51 999 123 456'
      }
    },
    {
      id: 3,
      titulo: 'Conferencia sobre Resiliencia Urbana',
      descripcion: 'Conferencia magistral sobre estrategias de resiliencia urbana frente a desastres naturales, con casos de estudio de ciudades latinoamericanas.',
      fecha: '2024-04-20',
      hora: '10:30',
      modalidad: 'Híbrido',
      lugar: 'Universidad Nacional Mayor de San Marcos',
      imagen: '/assets/eventos/conferencia-resiliencia.jpg',
      organizador: 'Universidad Nacional Mayor de San Marcos',
      categoria: 'Conferencia',
      estado: 'Próximo',
      enlaceInscripcion: 'https://example.com/inscripcion-conferencia',
      contacto: {
        email: 'eventos@unmsm.edu.pe',
        telefono: '+51 998 765 432'
      }
    },
    {
      id: 4,
      titulo: 'Workshop de Investigación Colaborativa',
      descripcion: 'Espacio de intercambio y colaboración entre investigadores de las universidades miembro de la red para desarrollar proyectos conjuntos.',
      fecha: '2024-01-18',
      hora: '09:00',
      modalidad: 'Presencial',
      lugar: 'Universidad Nacional Agraria La Molina',
      imagen: '/assets/eventos/workshop-investigacion.jpg',
      organizador: 'Red RiesGIRD-ACC / Perú',
      categoria: 'Workshop',
      estado: 'Finalizado',
      enlaceInscripcion: null,
      contacto: {
        email: 'investigacion@lamolina.edu.pe',
        telefono: '+51 997 654 321'
      }
    }
  ],
};
