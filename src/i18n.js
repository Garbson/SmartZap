import { createI18n } from 'vue-i18n'

const messages = {
  // Inglês
  en: {
    navbar: {
      about: 'About Us',
      properties: 'Properties',
      contact: 'Contact',
    },
    content: {
      welcome: 'Welcome to our platform!',
      description: 'We help you automate leads and manage your business.',
    },
    carousel: {
      items: [
        { title: 'Automate your Messages' },
        { title: 'Organize your Leads' },
        { title: 'Message Escalation' },
        { title: 'Instant Responses' },
        { title: 'Integrated CRM' },
        { title: 'Increase Productivity' },
        { title: 'Focus on Results' },
        { title: 'Personalized Messages' },
      ],
    },
    feature: {
      title: 'With SmartZap, you increase your productivity and close more sales intelligently and automatically.',
      description:
        'We present SmartZap, a tool that will transform your WhatsApp into an automated sales system! With Kanban CRM and innovative features, organize your leads and optimize your customer service to close more sales with less effort.',
      button: 'I want to try for free',
    },
    functionalities: {
      title: 'Explore all features:',
      features: [
        { title: 'ChatBot', description: 'Create simple self-service and don’t keep your customers waiting.' },
        { title: 'Kanban CRM', description: 'Organize your leads and clients visually and practically.' },
        { title: 'Analytics', description: 'Gain insights into your campaigns and sales performance.' },
        { title: 'Message Automation', description: 'Send automated messages to your clients at key moments.' },
        { title: 'Multiuser', description: 'Allow your entire team to collaborate in one place.' },
        { title: 'Mass Messaging', description: 'Send messages to multiple contacts at once.' },
        { title: 'Reminders', description: 'Set reminders to never miss important follow-ups.' },
        { title: 'Quick Messages', description: 'Send pre-written messages instantly.' },
        { title: 'Labels', description: 'Categorize and organize your contacts with labels.' },
        { title: 'Contact-Specific Notes', description: 'Add notes for each contact separately.' },
        { title: 'Auto-Save Contacts', description: 'Save new contacts automatically from conversations.' },
        { title: 'Tabs', description: 'Work with multiple tabs to organize your workflows.' },
        { title: 'Export Contacts', description: 'Export your contact list for external use.' },
        { title: 'ChatGPT Integration', description: 'Integrate with ChatGPT for smarter conversations.' },
        { title: 'Track Orders by Contact', description: 'Track orders and link them to specific contacts.' },
      ],
    },
    testimonials: {
      title: 'What our users are saying:',
      question: 'Want to experience the benefits of WaSpeed?',
      button: 'I want to try for free',
      images: [
        { image: '/public/house1.jpg' },
        { image: '/public/house4.jpg' },
        { image: '/public/house2.jpg' },
      ],
    },
    setup: {
      title: 'Start Using WaSpeed Today:',
      steps: [
        {
          number: '1',
          title: 'Create Your Account',
          description: 'Sign up quickly and access all WaSpeed features.',
          button: 'Create Account',
        },
        {
          number: '2',
          title: 'Configure and Use',
          description: 'Complete the initial setup and start using WaSpeed to manage your leads.',
        },
      ],
      tutorial: 'Watch the Tutorial',
    },
    integrations: {
      title: 'You can integrate with thousands of other platforms',
      subtitle: {
        part1: 'Make',
        highlight: 'SmartZap',
        part2: 'even more powerful by integrating with other tools',
      },
      images: [
        { image: '/azul.webp' },
        { image: '/btrix.webp' },
        { image: '/chatgpt.webp' },
        { image: '/nf.webp' },
        { image: '/sheets.webp' },
        { image: '/tri.webp' },
        { image: '/erp.webp' },
        { image: '/pipedrive.webp' },
        { image: '/hubSpot.webp' },
      ],
    },
    plans: {
      title: 'The license is per user!',
      subtitle: 'Choose the number of users:',
      featuresTitle: 'All plans include:',
      features: [
        'Support from Mon to Sat',
        'Integration with Google Calendar',
        'Magic eye for deleted messages',
        'Creation of custom tabs',
        'Message scheduling',
        'Quick responses',
        'Mass messaging',
        'Export contacts',
        'Quick notes',
        'Webhooks',
        'Reminders',
        'ChatBot',
      ],
      planOptions: [
        { title: 'License for 01 user (annual)', image: 'preco1.svg' },
        { title: 'License for 02 users (annual)', image: 'preco2.svg' },
        { title: 'License for 05 users (annual)', image: 'preco3.svg' },
        { title: 'License for 10 users (annual)', image: 'preco3.svg' },
      ],
      button: 'Buy Now',
    },
    faqs: {
      title: 'Frequently Asked Questions',
      subtitle: 'Here are the most common questions. If you still have doubts, contact us!',
      questions: [
        {
          question: 'How do I create my account?',
          answer: "You can create your account by clicking the 'Create Account' button on the home page.",
        },
        {
          question: 'What is included in the annual plan?',
          answer: 'All annual plans include support, integrations, and full access to the tools.',
        },
        {
          question: 'Can I use WaSpeed on mobile devices?',
          answer: 'Yes, WaSpeed is compatible with mobile browsers.',
        },
        {
          question: 'How do I configure the ChatBot?',
          answer: 'In the settings tab, you will find detailed options to customize the ChatBot.',
        },
        {
          question: 'What happens if I cancel my subscription?',
          answer: 'You will lose access to premium features but can continue with the basic plan.',
        },
        {
          question: 'Can I integrate with other platforms?',
          answer: 'Yes, WaSpeed supports integrations with various platforms like Google Calendar, Zapier, and more.',
        },
        {
          question: 'Can I test before subscribing?',
          answer: 'Of course! We offer a free trial version for 7 days.',
        },
        {
          question: 'Is the support really 24/7?',
          answer: 'Our support is available from Monday to Saturday, 8 AM to 10 PM.',
        },
      ],
      ctaTitle: 'Still have questions?',
      ctaSubtitle: 'Contact our team, we are ready to clarify your doubts!',
      ctaButton: 'Contact Support',
    },
    footer: {
      aboutTitle: 'About SmartZap',
      aboutDescription:
        'SmartZap is the ideal tool to transform your WhatsApp communication. With advanced automation features, Kanban CRM, and powerful integrations, we make it easy to manage your leads and clients.',
      followUs: 'Follow us',
      contact: {
        email: 'support@SmartZap.com',
        phone: '+55 11 99999-9999',
      },
      copyright: '© 2024 SmartZap. All rights reserved.',
    },
  },
  // Português
  pt: {
    navbar: {
      about: 'Sobre Nós',
      properties: 'Imóveis',
      contact: 'Contato',
    },
    content: {
      welcome: 'Bem-vindo à nossa plataforma!',
      description: 'Ajudamos você a automatizar leads e gerenciar seu negócio.',
    },
    carousel: {
      items: [
        { title: 'Automatize suas Mensagens' },
        { title: 'Organize seus Leads' },
        { title: 'Escalonamento de Mensagens' },
        { title: 'Respostas Instantâneas' },
        { title: 'Tenha um CRM Integrado' },
        { title: 'Aumente sua Produtividade' },
        { title: 'Foco em Resultados' },
        { title: 'Mensagens Personalizadas' },
      ],},
    feature: {
      title: 'Com o SmartZap, você aumenta sua produtividade e fecha mais vendas de forma inteligente e automatizada.',
      description:
        'Apresentamos o SmartZap, uma ferramenta que vai transformar seu WhatsApp em um sistema de vendas automatizado! Com CRM Kanban e recursos inovadores, organize seus leads e otimize seu atendimento para fechar mais vendas com menos esforço.',
      button: 'Quero testar grátis',
    },
    functionalities: {
      title: 'Navegue por todas funcionalidades:',
      features: [
        { title: 'ChatBot', description: 'Crie um autoatendimento de forma simples e não deixe seu cliente esperando.' },
        { title: 'CRM Kanban', description: 'Organize seus leads e clientes de forma visual e prática.' },
        { title: 'Analytics', description: 'Tenha insights sobre o desempenho das suas campanhas e vendas.' },
        { title: 'Automação de Mensagens', description: 'Envie mensagens automáticas para seus clientes em momentos importantes.' },
        { title: 'Multiusuário', description: 'Permita que toda sua equipe colabore em um só lugar.' },
        { title: 'Disparo em Massa', description: 'Envie mensagens para vários contatos ao mesmo tempo.' },
        { title: 'Lembretes', description: 'Defina lembretes para nunca perder um acompanhamento importante.' },
        { title: 'Mensagens rápidas', description: 'Envie mensagens pré-escritas instantaneamente.' },
        { title: 'Etiquetas', description: 'Categorize e organize seus contatos com etiquetas.' },
        { title: 'Anotações separadas por contato', description: 'Adicione notas para cada contato separadamente.' },
        { title: 'Salvar contatos automaticamente', description: 'Salve novos contatos automaticamente a partir das conversas.' },
        { title: 'Abas', description: 'Trabalhe com várias abas para organizar seus fluxos de trabalho.' },
        { title: 'Exportar contatos', description: 'Exporte sua lista de contatos para uso externo.' },
        { title: 'Integração com ChatGPT', description: 'Integre com o ChatGPT para conversas mais inteligentes.' },
        { title: 'Rastrear encomendas por contato', description: 'Rastreie encomendas e vincule-as a contatos específicos.' },
      ],
    },
    testimonials: {
      title: 'O que nossos usuários estão dizendo:',
      question: 'Quer experimentar os benefícios do WaSpeed?',
      button: 'Quero testar grátis',
      images: [
        { image: '/public/house1.jpg' },
        { image: '/public/house2.jpg' },
        { image: '/public/house3.jpg' },
      ],
    },
    setup: {
      title: 'Comece Hoje Mesmo a Usar o WaSpeed:',
      steps: [
        {
          number: '1',
          title: 'Crie Sua Conta',
          description: 'Faça o cadastro rapidamente e acesse todas as funcionalidades do WaSpeed.',
          button: 'Criar Conta',
        },
        {
          number: '2',
          title: 'Configure e Use',
          description: 'Faça as configurações iniciais e comece a usar o WaSpeed para gerenciar seus leads.',
        },
      ],
      tutorial: 'Assista ao Tutorial',
    },
    integrations: {
      title: 'Você pode integrar com milhares de outras plataformas',
      subtitle: {
        part1: 'Deixe o',
        highlight: 'SmartZap',
        part2: 'ainda mais poderoso fazendo integrações',
      },
      images: [
        { image: '/azul.webp' },
        { image: '/btrix.webp' },
        { image: '/chatgpt.webp' },
        { image: '/nf.webp' },
        { image: '/sheets.webp' },
        { image: '/tri.webp' },
        { image: '/erp.webp' },
        { image: '/pipedrive.webp' },
        { image: '/hubSpot.webp' },
      ],
    },
    plans: {
      title: 'A licença é por usuário!',
      subtitle: 'Escolha a quantidade de usuários:',
      featuresTitle: 'Todos os planos possuem:',
      features: [
        'Suporte de Seg a Sáb',
        'Integração com o Google agenda',
        'Olho mágico para mensagens apagadas',
        'Criação de abas personalizadas',
        'Agendamento de mensagens',
        'Respostas rápidas',
        'Disparo em massa',
        'Exportar contatos',
        'Notas rápidas',
        'Webhooks',
        'Lembretes',
        'ChatBot',
      ],
      planOptions: [
        { title: 'Licença para 01 usuário anual', image: 'preco1.svg' },
        { title: 'Licença para 02 usuários anual', image: 'preco2.svg' },
        { title: 'Licença para 05 usuários anual', image: 'preco3.svg' },
        { title: 'Licença para 10 usuários anual', image: 'preco3.svg' },
      ],
      button: 'Comprar Agora',
    },
    faqs: {
      title: 'Perguntas Frequentes',
      subtitle: 'Aqui estão as perguntas mais frequentes, caso ainda tenha dúvidas, entre em contato conosco',
      questions: [
        {
          question: 'Como faço para criar minha conta?',
          answer: "Você pode criar sua conta clicando no botão 'Criar Conta' na página inicial.",
        },
        {
          question: 'O que está incluso no plano anual?',
          answer: 'Todos os planos anuais incluem suporte, integrações e acesso completo às ferramentas.',
        },
        {
          question: 'Posso usar o WaSpeed em dispositivos móveis?',
          answer: 'Sim, o WaSpeed é compatível com navegadores de dispositivos móveis.',
        },
        {
          question: 'Como configurar o ChatBot?',
          answer: 'Na aba de configurações, você encontrará opções detalhadas para personalizar o ChatBot.',
        },
        {
          question: 'O que acontece se eu cancelar minha assinatura?',
          answer: 'Você perderá acesso às funcionalidades premium, mas poderá continuar com o plano básico.',
        },
        {
          question: 'É possível integrar com outras plataformas?',
          answer: 'Sim, o WaSpeed suporta integrações com diversas plataformas como Google Agenda, Zapier, entre outras.',
        },
        {
          question: 'Posso testar antes de assinar?',
          answer: 'Claro! Oferecemos uma versão de teste gratuita por 7 dias.',
        },
        {
          question: 'O suporte é realmente 24/7?',
          answer: 'Nosso suporte funciona de segunda a sábado, das 8h às 22h.',
        },
      ],
      ctaTitle: 'Ficou alguma Dúvida?',
      ctaSubtitle: 'Chame nosso time, estamos preparados para esclarecer suas dúvidas!',
      ctaButton: 'Entrar em contato com o suporte',
    },
    footer: {
      aboutTitle: 'Sobre o SmartZap',
      aboutDescription:
        'O SmartZap é a ferramenta ideal para transformar sua comunicação via WhatsApp. Com recursos avançados de automação, CRM Kanban e integrações poderosas, facilitamos o gerenciamento dos seus leads e clientes.',
      followUs: 'Siga-nos',
      contact: {
        email: 'suporte@SmartZap.com',
        phone: '+55 11 99999-9999',
      },
      copyright: '© 2024 SmartZap. Todos os direitos reservados.',
    },
  },
  // Espanhol
  es: {
    navbar: {
      about: 'Sobre Nosotros',
      properties: 'Propiedades',
      contact: 'Contacto',
    },
    content: {
      welcome: '¡Bienvenido a nuestra plataforma!',
      description: 'Te ayudamos a automatizar clientes potenciales y gestionar tu negocio.',
    },
    carousel: {
      items: [
        { title: 'Automatiza tus Mensajes' },
        { title: 'Organiza tus Leads' },
        { title: 'Escalado de Mensajes' },
        { title: 'Respuestas Instantáneas' },
        { title: 'CRM Integrado' },
        { title: 'Aumenta tu Productividad' },
        { title: 'Enfócate en Resultados' },
        { title: 'Mensajes Personalizados' },
      ],},
    feature: {
      title: 'Con SmartZap, aumentas tu productividad y cierras más ventas de forma inteligente y automatizada.',
      description:
        'Presentamos SmartZap, una herramienta que transformará tu WhatsApp en un sistema de ventas automatizado. ¡Con CRM Kanban y funciones innovadoras, organiza tus clientes potenciales y optimiza tu servicio al cliente para cerrar más ventas con menos esfuerzo!',
      button: 'Quiero probar gratis',
    },
    functionalities: {
      title: 'Explora todas las funcionalidades:',
      features: [
        { title: 'ChatBot', description: 'Crea un autoservicio simple y no hagas esperar a tus clientes.' },
        { title: 'CRM Kanban', description: 'Organiza tus clientes potenciales y clientes de forma visual y práctica.' },
        { title: 'Analíticas', description: 'Obtén información sobre el rendimiento de tus campañas y ventas.' },
        { title: 'Automatización de Mensajes', description: 'Envía mensajes automáticos a tus clientes en momentos clave.' },
        { title: 'Multiusuario', description: 'Permite que todo tu equipo colabore en un solo lugar.' },
        { title: 'Mensajes Masivos', description: 'Envía mensajes a varios contactos al mismo tiempo.' },
        { title: 'Recordatorios', description: 'Configura recordatorios para no perder seguimientos importantes.' },
        { title: 'Mensajes Rápidos', description: 'Envía mensajes preescritos al instante.' },
        { title: 'Etiquetas', description: 'Categoriza y organiza tus contactos con etiquetas.' },
        { title: 'Notas por Contacto', description: 'Añade notas para cada contacto por separado.' },
        { title: 'Guardar Contactos Automáticamente', description: 'Guarda nuevos contactos automáticamente desde las conversaciones.' },
        { title: 'Pestañas', description: 'Trabaja con varias pestañas para organizar tu flujo de trabajo.' },
        { title: 'Exportar Contactos', description: 'Exporta tu lista de contactos para uso externo.' },
        { title: 'Integración con ChatGPT', description: 'Integra con ChatGPT para conversaciones más inteligentes.' },
        { title: 'Rastrear Pedidos por Contacto', description: 'Rastrea pedidos y vincúlalos a contactos específicos.' },
      ],
    },
    testimonials: {
      title: 'Lo que dicen nuestros usuarios:',
      question: '¿Quieres experimentar los beneficios de WaSpeed?',
      button: 'Quiero probar gratis',
      images: [
        { image: 'https://via.placeholder.com/150?text=Maria' },
        { image: 'https://via.placeholder.com/150?text=Carlos' },
        { image: 'https://via.placeholder.com/150?text=Ana' },
        { image: 'https://via.placeholder.com/150?text=Lucas' },
        { image: 'https://via.placeholder.com/150?text=Fernanda' },
        { image: 'https://via.placeholder.com/150?text=João' },
      ],
    },
    setup: {
      title: 'Empieza a usar WaSpeed hoy:',
      steps: [
        {
          number: '1',
          title: 'Crea tu Cuenta',
          description: 'Regístrate rápidamente y accede a todas las funciones de WaSpeed.',
          button: 'Crear Cuenta',
        },
        {
          number: '2',
          title: 'Configura y Usa',
          description: 'Completa la configuración inicial y comienza a usar WaSpeed para gestionar tus clientes potenciales.',
        },
      ],
      tutorial: 'Mira el Tutorial',
    },
    integrations: {
      title: 'Puedes integrarte con miles de otras plataformas',
      subtitle: {
        part1: 'Haz que',
        highlight: 'SmartZap',
        part2: 'sea aún más poderoso integrándote con otras herramientas',
      },
      images: [
        { image: '/azul.webp' },
        { image: '/btrix.webp' },
        { image: '/chatgpt.webp' },
        { image: '/nf.webp' },
        { image: '/sheets.webp' },
        { image: '/tri.webp' },
        { image: '/erp.webp' },
        { image: '/pipedrive.webp' },
        { image: '/hubSpot.webp' },
      ],
    },
    plans: {
      title: '¡La licencia es por usuario!',
      subtitle: 'Elige la cantidad de usuarios:',
      featuresTitle: 'Todos los planes incluyen:',
      features: [
        'Soporte de Lun a Sáb',
        'Integración con Google Calendar',
        'Ojo mágico para mensajes eliminados',
        'Creación de pestañas personalizadas',
        'Programación de mensajes',
        'Respuestas rápidas',
        'Mensajes masivos',
        'Exportar contactos',
        'Notas rápidas',
        'Webhooks',
        'Recordatorios',
        'ChatBot',
      ],
      planOptions: [
        { title: 'Licencia para 01 usuario anual', image: 'preco1.svg' },
        { title: 'Licencia para 02 usuarios anual', image: 'preco2.svg' },
        { title: 'Licencia para 05 usuarios anual', image: 'preco3.svg' },
        { title: 'Licencia para 10 usuarios anual', image: 'preco3.svg' },
      ],
      button: 'Comprar Ahora',
    },
    faqs: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Aquí están las preguntas más frecuentes. Si aún tienes dudas, ¡contáctanos!',
      questions: [
        {
          question: '¿Cómo creo mi cuenta?',
          answer: "Puedes crear tu cuenta haciendo clic en el botón 'Crear Cuenta' en la página de inicio.",
        },
        {
          question: '¿Qué incluye el plan anual?',
          answer: 'Todos los planes anuales incluyen soporte, integraciones y acceso completo a las herramientas.',
        },
        {
          question: '¿Puedo usar WaSpeed en dispositivos móviles?',
          answer: 'Sí, WaSpeed es compatible con navegadores móviles.',
        },
        {
          question: '¿Cómo configuro el ChatBot?',
          answer: 'En la pestaña de configuración, encontrarás opciones detalladas para personalizar el ChatBot.',
        },
        {
          question: '¿Qué sucede si cancelo mi suscripción?',
          answer: 'Perderás acceso a las funciones premium, pero podrás continuar con el plan básico.',
        },
        {
          question: '¿Puedo integrarme con otras plataformas?',
          answer: 'Sí, WaSpeed es compatible con integraciones como Google Calendar, Zapier y más.',
        },
        {
          question: '¿Puedo probar antes de suscribirme?',
          answer: '¡Por supuesto! Ofrecemos una versión de prueba gratuita por 7 días.',
        },
        {
          question: '¿El soporte realmente es 24/7?',
          answer: 'Nuestro soporte está disponible de lunes a sábado, de 8 AM a 10 PM.',
        },
      ],
      ctaTitle: '¿Tienes alguna duda?',
      ctaSubtitle: 'Contacta a nuestro equipo, ¡estamos listos para aclarar tus dudas!',
      ctaButton: 'Contactar Soporte',
    },
    footer: {
      aboutTitle: 'Sobre SmartZap',
      aboutDescription:
        'SmartZap es la herramienta ideal para transformar su comunicación a través de WhatsApp. Con funciones avanzadas de automatización, Kanban CRM e integraciones poderosas, facilitamos la gestión de sus clientes potenciales y clientes.',
      followUs: 'Síguenos',
      contact: {
        email: 'soporte@SmartZap.com',
        phone: '+55 11 99999-9999',
      },
      copyright: '© 2024 SmartZap. Todos los derechos reservados.',
    },
  },
}

const i18n = createI18n({
  locale: 'pt', // Idioma padrão
  fallbackLocale: 'en', // Idioma de fallback
  messages, // Traduções
})

export default i18n
