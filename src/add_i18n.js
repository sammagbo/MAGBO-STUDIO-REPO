const fs = require('fs');

let content = fs.readFileSync('\\\\adm.local\\ADM\\pasta_pessoal_nao_alunos\\smagbo\\MAGBO-STUDIO-REPO\\src\\data\\translations.ts', 'utf-8');

const t = {
  en: {
    exp: {
      aefe: { role: 'Vie Scolaire', bullets: ['Multicultural and bilingual environment management across French educational institutions', 'School and academic organization, strategic communication with families', 'Preparation and coordination for international certifications (BAC, Brevet, PIX)'] },
      sedeics: { role: 'IT Development Agent — Strategic Projects', bullets: ['Led the PDTIC (IT Master Plan) initiative for IT governance and system modernization', 'Managed cross-departmental technology infrastructure and data organization', 'Delivered strategic IT reports and digital transformation roadmaps'] },
      noceci: { role: 'Managing Partner', bullets: ['Administrative leadership and legal representation', 'Management of human resources, financial operations, and technology stack', 'Strategic planning and business development'] },
      cl20: { role: 'Founder — C.L. 2.0 (Language Courses)', bullets: ['University entrepreneurship project focused on multilingual education (English, Spanish, French, Italian)', 'Developed the business model, bilingual curriculum strategy, and operational framework', 'Bridged technology and language learning through academic-led initiatives'] },
      maori: { role: 'Agent — Information Security', bullets: ['Customer service and information security support for the DCNS project', 'Operational execution in high-clearance environments'] },
    },
    edu: {
      uva: { degree: 'Bachelor', field: 'Computer Science', note: 'Project Academic Manager (2018)' },
      iserj: { degree: 'Technical Diploma', field: 'IT & Systems', note: '' }
    },
    proj: {
      'magbo-studio': 'Personal portfolio and engineering showcase. Built with React, TypeScript, GSAP animations, and Tailwind CSS on a dark premium design system.',
      'controle-de-acesso': 'IoT-driven physical security and access control system for an educational institution. Features QR-based access, sector monitoring dashboards, and real-time tracking.',
      'ccc-cdi': 'Full-stack access control and management system for the CDI organizational center. TypeScript frontend with real-time state management.',
      'french-lms': 'Language learning management system for French education. Full-stack architecture with Spring Boot backend and React frontend.',
      'satisystem': 'Systems development project (TCC) focused on process automation and institutional management. Built as a capstone project at ISERJ.',
      'the-talk': 'A podcast platform for fashion content by Mijean Rochus. Sleek media interface with audio playback capabilities and modern design.',
      'magbo-studio-backend': 'Spring Boot backend architecture for enterprise applications. Clean Architecture patterns, domain isolation, and strict persistence policies.',
      'floresta-unity': 'Environmental simulation game built with Unity and C#. Explores ecological themes through interactive 3D experiences.'
    },
    ui: {
      experience_badge: '02 — Experience',
      experience_title: 'Professional <span class="marker-orange">Trajectory</span>',
      education_badge: 'Education',
      work_badge: '03 — Selected Work',
      work_title: '<span class="marker-blue">Engineering</span> Logs',
      skills_badge: '04 — Skills & Expertise',
      skills_title: 'Technical <span class="marker-red">Arsenal</span>',
      contact_badge: '05 — Initializing Connection',
      contact_title: 'Establish <span class="marker-turquoise">Protocol</span>',
    }
  },
  pt: {
    exp: {
      aefe: { role: 'Vie Scolaire', bullets: ['Gestão de ambiente multicultural e bilíngue em instituições de ensino francesas', 'Organização escolar e acadêmica, comunicação estratégica com as famílias', 'Preparação e coordenação para certificações internacionais (BAC, Brevet, PIX)'] },
      sedeics: { role: 'Agente de Desenvolvimento de TI — Projetos Estratégicos', bullets: ['Liderou a iniciativa do PDTIC (Plano Diretor de TI) para governança e modernização de sistemas', 'Gerenciou infraestrutura tecnológica interdepartamental e organização de dados', 'Entregou relatórios estratégicos de TI e roteiros de transformação digital'] },
      noceci: { role: 'Sócio Administrador', bullets: ['Liderança administrativa e representação legal', 'Gestão de recursos humanos, operações financeiras e stack tecnológico', 'Planejamento estratégico e desenvolvimento de negócios'] },
      cl20: { role: 'Fundador — C.L. 2.0 (Cursos de Idiomas)', bullets: ['Projeto universitário de empreendedorismo focado em educação multilíngue (Inglês, Espanhol, Francês, Italiano)', 'Desenvolveu o modelo de negócio, currículo bilíngue e plano operacional', 'Conectou tecnologia e aprendizagem de idiomas através de iniciativas lideradas por acadêmicos'] },
      maori: { role: 'Agente — Segurança da Informação', bullets: ['Atendimento ao cliente e suporte em segurança da informação para o projeto DCNS', 'Execução operacional em ambientes de alta confidencialidade'] },
    },
    edu: {
      uva: { degree: 'Bacharelado', field: 'Ciência da Computação', note: 'Gerente Acadêmico de Projetos (2018)' },
      iserj: { degree: 'Diploma Técnico', field: 'Sistemas e TI', note: '' }
    },
    proj: {
      'magbo-studio': 'Portfólio pessoal e showcase de engenharia. Construído com React, TypeScript, GSAP e Tailwind CSS em um sistema de design premium escuro.',
      'controle-de-acesso': 'Sistema de controle de acesso e segurança física com base em IoT para uma instituição educacional. O sistema lê QR Code e provê dashboards por setor.',
      'ccc-cdi': 'Sistema de gestão e controle de acesso full-stack para o centro organizacional CDI. Frontend TypeScript com gestão de estado em tempo real.',
      'french-lms': 'Sistema de gestão de aprendizagem para o ensino de francês. Arquitetura full-stack com backend em Spring Boot e frontend em React.',
      'satisystem': 'Projeto de desenvolvimento de sistemas (TCC) focado na automação de processos e gestão institucional e de pontuações.',
      'the-talk': 'Uma plataforma de podcast para conteúdo de moda por Mijean Rochus. Interface estilística moderna com capacidades avançadas de áudio.',
      'magbo-studio-backend': 'Arquitetura de backend Spring Boot para aplicações corporativas. Padrões Clean Architecture, isolamento de domínio e políticas de persistência.',
      'floresta-unity': 'Jogo de simulação ambiental construído em Unity e C#. Explora temas ecológicos de forma interativa e complexa.'
    },
    ui: {
      experience_badge: '02 — Experiência',
      experience_title: 'Trajetória <span class="marker-orange">Profissional</span>',
      education_badge: 'Educação',
      work_badge: '03 — Trabalhos Selecionados',
      work_title: 'Logs de <span class="marker-blue">Engenharia</span>',
      skills_badge: '04 — Habilidades e Expertise',
      skills_title: 'Arsenal <span class="marker-red">Técnico</span>',
      contact_badge: '05 — Iniciando Conexão',
      contact_title: 'Estabelecer <span class="marker-turquoise">Protocolo</span>',
    }
  },
  es: {
    exp: {
      aefe: { role: 'Vie Scolaire', bullets: ['Gestión de ambiente multicultural y bilingüe en instituciones francesas', 'Organización escolar y académica, comunicación estratégica', 'Coordinación de certificaciones internacionales (BAC, Brevet)'] },
      sedeics: { role: 'Agente de Desarrollo IT — Proyectos Estratégicos', bullets: ['Dirigió la iniciativa del Plan Maestro de TI para gobernanza y modernización', 'Gestionó la infraestructura tecnológica interdepartamental', 'Entregó hojas de ruta de transformación digital y reportes de TI'] },
      noceci: { role: 'Socio Administrador', bullets: ['Liderazgo administrativo', 'Gestión de recursos humanos, finanzas y tecnología', 'Desarrollo de negocios'] },
      cl20: { role: 'Fundador — C.L. 2.0 (Cursos de Idiomas)', bullets: ['Proyecto de emprendimiento enfocado en educación multilingüe', 'Desarrolló modelo de negocio y currículo', 'Unió tecnología y aprendizaje de idiomas'] },
      maori: { role: 'Agente — Seguridad de Información', bullets: ['Atención al cliente y soporte para el proyecto DCNS', 'Ejecución en ambientes de alta seguridad'] },
    },
    edu: {
      uva: { degree: 'Bachillerato', field: 'Ciencias de la Computación', note: 'Gerente Académico de Proyectos (2018)' },
      iserj: { degree: 'Diploma Técnico', field: 'TI y Sistemas', note: '' }
    },
    proj: {
      'magbo-studio': 'Portafolio personal diseñado con React, TypeScript, Tailwind y GSAP.',
      'controle-de-acesso': 'Control de seguridad IoT y acceso para centros educativos.',
      'ccc-cdi': 'Sistema de gestión CDI y control de acceso Full-stack.',
      'french-lms': 'Plataforma LMS para el aprendizaje de francés con Spring Boot.',
      'satisystem': 'Sistema de recolección de puntos enfocado a escuelas.',
      'the-talk': 'Plataforma de moda y podcast desarrollada para Mijean Rochus.',
      'magbo-studio-backend': 'API para sistemas críticos usando Java y Spring Boot.',
      'floresta-unity': 'Juego Unity C# sobre ecosistemas forestales.'
    },
    ui: {
      experience_badge: '02 — Experiencia',
      experience_title: 'Trayectoria <span class="marker-orange">Profesional</span>',
      education_badge: 'Educación',
      work_badge: '03 — Proyectos Recientes',
      work_title: 'Registros de <span class="marker-blue">Ingeniería</span>',
      skills_badge: '04 — Habilidades',
      skills_title: 'Arsenal <span class="marker-red">Técnico</span>',
      contact_badge: '05 — Iniciando Conexión',
      contact_title: 'Establecer <span class="marker-turquoise">Protocolo</span>',
    }
  },
  fr: {
    exp: {
      aefe: { role: 'Vie Scolaire', bullets: ['Gestion globale pour environnement multiculturel et francophone', 'Organisation de la vie scolaire, communication avec les familles', 'Certifications internationales (BAC, Brevet)'] },
      sedeics: { role: 'Agent de Dév. Informatique — Projets Stratég.', bullets: ['Mise en oeuvre du Master Plan Informatique pour la gouvernance des SI', 'Gestion des infrastructures interdépartementales', 'Elaboration de feuilles de route stratégiques et transformation digitale'] },
      noceci: { role: 'Gérant et Partenaire', bullets: ['Leadership administratif et représentation légale', 'Gestion des RH, opérations financières, et de la pile technologique', 'Développement commercial'] },
      cl20: { role: 'Fondateur — C.L. 2.0', bullets: ['Projet de création d\'entreprise pour cours de langues', 'Développement du modèle économique', 'Intégration technologique avec l\'éducation'] },
      maori: { role: 'Agent de Sécurité de l\'information', bullets: ['Opérations support et sécurité DCNS', 'Environnement à haute sécurité et clairance'] },
    },
    edu: {
      uva: { degree: 'Licence', field: 'Science Informatique', note: 'Project Manager Académique (2018)' },
      iserj: { degree: 'Diplôme Technique', field: 'Systèmes Informatiques', note: '' }
    },
    proj: {
      'magbo-studio': 'Portefeuille personnel en React/TypeScript.',
      'controle-de-acesso': 'Système de sécurité physique basé sur l\'IoT.',
      'ccc-cdi': 'Contrôle d\'accès du centre organisationnel CDI.',
      'french-lms': 'Système LMS pour le Français par API.',
      'satisystem': 'Automatisation de processus de l\'institution.',
      'the-talk': 'Plateforme multimédia / Podcast The Talk Fashion.',
      'magbo-studio-backend': 'Architecture backend métier robuste en Spring Boot.',
      'floresta-unity': 'Jeu Unity écologique interactif.'
    },
    ui: {
      experience_badge: '02 — Expérience',
      experience_title: 'Parcours <span class="marker-orange">Professionnel</span>',
      education_badge: 'Éducation',
      work_badge: '03 — Projets Sélectionnés',
      work_title: 'Registres <span class="marker-blue">Techniques</span>',
      skills_badge: '04 — Compétences',
      skills_title: 'Arsenal <span class="marker-red">Technologique</span>',
      contact_badge: '05 — Connexion Initiale',
      contact_title: 'Établir <span class="marker-turquoise">le Protocole</span>',
    }
  },
  sw: {
    exp: {
      aefe: { role: 'Vie Scolaire', bullets: ['Usimamizi wa mazingira mbalimbali kwa taasisi za Kifaransa', 'Mawasiliano ya kimkakati na familia', 'Maandalizi kwa vyeti vya kimataifa'] },
      sedeics: { role: 'Wakala wa Teknolojia — Miradi Mikuu', bullets: ['Aliwezesha maendeleo ya mfumo mkuu wa IT (PDTIC)', 'Alisimamia miundombinu ya mfumo ya idara', 'Aliwasilisha ripoti za mageuzi ya kidijitali'] },
      noceci: { role: 'Mkurugenzi Mshiriki', bullets: ['Uongozi wasimamizi na mamlaka ya kisheria', 'Usimamizi wa fedha, watu na teknolojia', 'Mipango ya kimkakati ya biashara'] },
      cl20: { role: 'Mwanzilishi', bullets: ['Mradi wa elimu ya lugha za kigeni katika chuo kikuu', 'Aliunda mfumo wa kibiashara', 'Teknolojia iliyojumuishwa na mafunzo'] },
      maori: { role: 'Afisa wa Usalama wa Taarifa', bullets: ['Usalama na uhakiki wa mradi wa DCNS', 'Utekelezaji kazi thabiti katika mazingira muhimu'] },
    },
    edu: {
      uva: { degree: 'Shahada', field: 'Sayansi ya Kompyuta', note: 'Meneja Miradi ya Chuo (2018)' },
      iserj: { degree: 'Shahada Ndogo', field: 'Teknolojia na Mifumo', note: '' }
    },
    proj: {
      'magbo-studio': 'Ukurasa binafsi. Imeundwa na React, TypeScript na muundo mzuri.',
      'controle-de-acesso': 'Mfumo wa kudhibiti usalama kutumia IoT. Inajumuisha ufikiaji wa kutumia nambari ya QR.',
      'ccc-cdi': 'Programu ya kusimamia upatikanaji wa shirika na CDI.',
      'french-lms': 'Shule ya matumizi kwenye mtandao ya Kifaransa na Spring Boot.',
      'satisystem': 'Matumizi ya kuandaa shughuli kwa otomatiki za wanafunzi.',
      'the-talk': 'Sauti ya redio za mitindo kwa Mijean Rochus.',
      'magbo-studio-backend': 'Seva kuu ya Java kwa mifumo thabiti.',
      'floresta-unity': 'Mchezo rahisi wa kiikolojia kupitia Unity 3D.'
    },
    ui: {
      experience_badge: '02 — Uzoefu',
      experience_title: 'Historia ya <span class="marker-orange">Kikazi</span>',
      education_badge: 'Elimu',
      work_badge: '03 — Kazi Bora',
      work_title: 'Mifumo na <span class="marker-blue">Uhadi</span>',
      skills_badge: '04 — Utaalamu',
      skills_title: 'Silaha <span class="marker-red">Téknolojia</span>',
      contact_badge: '05 — Anzisha Muunganisho',
      contact_title: 'Sanidi <span class="marker-turquoise">Itifaki</span>',
    }
  }
};

const langs = ['en', 'pt', 'es', 'fr', 'sw'];
for(let lang of langs) {
      const injectStr = '            exp: ' + JSON.stringify(t[lang].exp, null, 18) + ',\n' +
            '            edu: ' + JSON.stringify(t[lang].edu, null, 18) + ',\n' +
            '            proj: ' + JSON.stringify(t[lang].proj, null, 18) + ',\n' +
            '            ui: ' + JSON.stringify(t[lang].ui, null, 18) + ',\n            about: {';
      
      content = content.replace('about: {', injectStr);
}

fs.writeFileSync('\\\\adm.local\\ADM\\pasta_pessoal_nao_alunos\\smagbo\\MAGBO-STUDIO-REPO\\src\\data\\translations.ts', content);
console.log('Successfully injected block!');
