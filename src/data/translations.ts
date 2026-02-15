export type Language = 'en' | 'pt' | 'es';

export const TRANSLATIONS = {
      en: {
            nav: {
                  projects: 'PROJECTS',
                  expertise: 'EXPERTISE',
                  tech_radar: 'TECH_RADAR',
                  contact: 'CONTACT',
            },
            hero: {
                  status: 'SYSTEM OPERATIONAL // READY TO DEPLOY',
                  title_start: 'Building',
                  title_gradient: 'Critical Systems',
                  title_middle: 'Where Failure Is',
                  title_end: 'Not An Option.',
                  description: 'Elite Software Engineering & Security Architecture. We architect institutional-grade platforms, secure environments, and high-scale solutions for government and enterprise sectors.',
                  cta_primary: 'INITIATE PROTOCOL',
                  cta_secondary: 'VIEW CLASSIFIED DATA',
                  stats: {
                        systems: 'Mission Critical System',
                        uptime: 'Uptime Guarantee',
                        security: 'Compromised Data',
                        global: 'Operations Reach',
                  }
            },
            projects: {
                  title: 'CASE_LOGS // CLASSIFIED',
                  restricted: 'Restricted Access',
                  view_study: 'View Case Study',
            },
            expertise: {
                  capabilities: 'OPERATIONAL_CAPABILITIES',
                  events: 'KEY_SYSTEM_EVENTS',
                  risk_level: 'RISK_LEVEL',
                  current_state: 'CURRENT STATE: ACTIVE',
            },
            radar: {
                  title: 'TECHNOLOGY_RADAR // SENSOR_ARRAY',
                  quadrants: {
                        adopt: 'ADOPT // PRODUCTION_READY',
                        trial: 'TRIAL // BETA_TESTING',
                        assess: 'ASSESS // OBSERVATION',
                        hold: 'HOLD // DEPRECATED',
                  }
            },
            contact: {
                  title: 'Initiate Secure Protocol',
                  subtitle: 'Target: MAGBO_HQ // Encryption Level: AES-256',
                  secure_channel: 'SECURE_CHANNEL_V1.4',
                  identification: 'Identification (Name)',
                  email: 'Institutional Email',
                  briefing: 'Project Briefing',
                  placeholders: {
                        id: 'ENTER IDENTIFIER...',
                        email: 'USER@AGENCY.GOV',
                        briefing: 'DESCRIBE MISSION OBJECTIVES AND TECHNICAL REQUIREMENTS...',
                  },
                  button: {
                        encrypting: 'ENCRYPTING DATA_PACKETS...',
                        initiate: 'INITIATE COMMUNICATION',
                  },
                  success: {
                        title: 'Protocol Initiated',
                        message: 'Transmission successful. Our team will decrypt your briefing and establish a secure uplink shortly.',
                        new: 'Start New Transmission',
                  },
                  encryption_label: 'ENCRYPTION: AES-256-GCM',
                  link_active: 'LINK ACTIVE',
            }
      },
      pt: {
            nav: {
                  projects: 'PROJETOS',
                  expertise: 'EXPERTISE',
                  tech_radar: 'RADAR_TEC',
                  contact: 'CONTATO',
            },
            hero: {
                  status: 'SISTEMA OPERACIONAL // PRONTO PARA DEPLOY',
                  title_start: 'Construindo',
                  title_gradient: 'Sistemas Críticos',
                  title_middle: 'Onde Falhar',
                  title_end: 'Não É Opção.',
                  description: 'Engenharia de Software de Elite & Arquitetura de Segurança. Arquitetamos plataformas institucionais, ambientes seguros e soluções de alta escala para governo e grandes empresas.',
                  cta_primary: 'INICIAR PROTOCOLO',
                  cta_secondary: 'VER DADOS CLASSIFICADOS',
                  stats: {
                        systems: 'Sistemas Críticos',
                        uptime: 'Garantia de Uptime',
                        security: 'Dados Comprometidos',
                        global: 'Alcance Operacional',
                  }
            },
            projects: {
                  title: 'REGISTROS_CASOS // CONFIDENCIAL',
                  restricted: 'Acesso Restrito',
                  view_study: 'Ver Estudo de Caso',
            },
            expertise: {
                  capabilities: 'CAPACIDADES_OPERACIONAIS',
                  events: 'EVENTOS_CHAVE_SISTEMA',
                  risk_level: 'NÍVEL_RISCO',
                  current_state: 'ESTADO ATUAL: ATIVO',
            },
            radar: {
                  title: 'RADAR_TECNOLÓGICO // MATRIZ_SENSOR',
                  quadrants: {
                        adopt: 'ADOTAR // PRODUÇÃO',
                        trial: 'TESTAR // BETA',
                        assess: 'AVALIAR // OBSERVAÇÃO',
                        hold: 'RETER // DEPRECIADO',
                  }
            },
            contact: {
                  title: 'Iniciar Protocolo Seguro',
                  subtitle: 'Alvo: MAGBO_HQ // Nível Criptografia: AES-256',
                  secure_channel: 'CANAL_SEGURO_V1.4',
                  identification: 'Identificação (Nome)',
                  email: 'Email Institucional',
                  briefing: 'Briefing do Projeto',
                  placeholders: {
                        id: 'INSERIR IDENTIFICADOR...',
                        email: 'USUARIO@AGENCIA.GOV',
                        briefing: 'DESCREVA OBJETIVOS DA MISSÃO E REQUISITOS TÉCNICOS...',
                  },
                  button: {
                        encrypting: 'CRIPTOGRAFANDO PACOTES...',
                        initiate: 'INICIAR COMUNICAÇÃO',
                  },
                  success: {
                        title: 'Protocolo Iniciado',
                        message: 'Transmissão com sucesso. Nossa equipe descriptografará seu briefing e estabelecerá um link seguro em breve.',
                        new: 'Iniciar Nova Transmissão',
                  },
                  encryption_label: 'CRIPTOGRAFIA: AES-256-GCM',
                  link_active: 'LINK ATIVO',
            }
      },
      es: {
            nav: {
                  projects: 'PROYECTOS',
                  expertise: 'EXPERTISE',
                  tech_radar: 'RADAR_TEC',
                  contact: 'CONTACTO',
            },
            hero: {
                  status: 'SISTEMA OPERATIVO // LISTO PARA DESPLIEGUE',
                  title_start: 'Construyendo',
                  title_gradient: 'Sistemas Críticos',
                  title_middle: 'Donde Fallar',
                  title_end: 'No Es Opción.',
                  description: 'Ingeniería de Software de Élite y Arquitectura de Seguridad. Arquitectamos plataformas institucionales, entornos seguros y soluciones de alta escala para gobierno y grandes empresas.',
                  cta_primary: 'INICIAR PROTOCOLO',
                  cta_secondary: 'VER DATOS CLASIFICADOS',
                  stats: {
                        systems: 'Sistemas Críticos',
                        uptime: 'Garantía de Uptime',
                        security: 'Datos Comprometidos',
                        global: 'Alcance Operativo',
                  }
            },
            projects: {
                  title: 'REGISTRO_CASOS // CONFIDENCIAL',
                  restricted: 'Acceso Restringido',
                  view_study: 'Ver Estudio de Caso',
            },
            expertise: {
                  capabilities: 'CAPACIDADES_OPERATIVAS',
                  events: 'EVENTOS_CLAVE_SISTEMA',
                  risk_level: 'NIVEL_RIESGO',
                  current_state: 'ESTADO ACTUAL: ACTIVO',
            },
            radar: {
                  title: 'RADAR_TECNOLÓGICO // MATRIZ_SENSOR',
                  quadrants: {
                        adopt: 'ADOPTAR // PRODUCCIÓN',
                        trial: 'PROBAR // BETA',
                        assess: 'EVALUAR // OBSERVACIÓN',
                        hold: 'RETENER // DEPRECADO',
                  }
            },
            contact: {
                  title: 'Iniciar Protocolo Seguro',
                  subtitle: 'Objetivo: MAGBO_HQ // Nivel Encriptación: AES-256',
                  secure_channel: 'CANAL_SEGURO_V1.4',
                  identification: 'Identificación (Nombre)',
                  email: 'Email Institucional',
                  briefing: 'Briefing del Proyecto',
                  placeholders: {
                        id: 'INSERTAR IDENTIFICADOR...',
                        email: 'USUARIO@AGENCIA.GOV',
                        briefing: 'DESCRIBA OBJETIVOS DE LA MISIÓN Y REQUISITOS TÉCNICOS...',
                  },
                  button: {
                        encrypting: 'ENCRIPTANDO PAQUETES...',
                        initiate: 'INICIAR COMUNICACIÓN',
                  },
                  success: {
                        title: 'Protocolo Iniciado',
                        message: 'Transmisión exitosa. Nuestro equipo desencriptará su briefing y establecerá un enlace seguro en breve.',
                        new: 'Iniciar Nueva Transmisión',
                  },
                  encryption_label: 'ENCRIPTACIÓN: AES-256-GCM',
                  link_active: 'ENLACE ACTIVO',
            }
      }
};
