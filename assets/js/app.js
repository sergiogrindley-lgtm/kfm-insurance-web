/**
 * KFM Insurance & Patria Gestoría
 * Main UI Application Script
 * Features: Seamless Bilingual Engine (EN/ES), Navbar Scroll Effects, FAQ Accordion, Mobile Nav
 */

(function () {
  'use strict';

  // --- Translation Dictionary ---
  const translations = {
    en: {
      // Topbar & Mobile Nav
      topbar_emergency: "24/7 Roadside Assistance: 900 373 737",
      topbar_downtown: "Downtown Rota: +34 956 84 00 50",
      topbar_base: "Base Naval Office: NEX Complex",
      mob_assistance: "24/7 Roadside Assistance",
      mob_downtown: "Downtown Rota Office",
      mob_base: "Base Naval Office",

      // Nav
      nav_auto: "Auto & POV",
      nav_home: "Home & Renters",
      nav_dgt: "DGT Transfers",
      nav_health: "Health",
      nav_guide: "Base Guide",
      nav_locations: "Offices",
      nav_quote_btn: "Get a Quote",

      // Hero
      hero_badge: "Official Insurance & Gestoría in Rota Since 2000",
      hero_title_1: "Trusted Insurance in Rota for",
      hero_title_2: "US Military & Expats",
      hero_desc: "Get your immediate Green Card (Carta Verde) for Pass & Decal, full coverage for US and European spec vehicles, SOFA-compliant renters insurance, and official DGT vehicle transfers.",
      hero_check_1: "Same-Day Green Cards issued on the spot",
      hero_check_2: "Two convenient locations: Downtown Rota & inside the NEX",
      hero_check_3: "English & Spanish bilingual advisory with claims support",
      hero_cta_quote: "Start Instant Quote",
      hero_cta_contact: "Talk to an Agent",

      // Hero Card
      hero_card_title: "Quick Quote Request",
      hero_card_sub: "Receive your comparison in minutes",
      tab_auto: "🚗 Auto / POV",
      tab_home: "🏠 Home",
      tab_dgt: "📋 DGT Transfer",
      tab_health: "🩺 Health",
      lbl_name: "Full Name",
      ph_name: "John Doe / María García",
      lbl_phone: "Phone / WhatsApp",
      ph_phone: "+34 600 000 000 or US number",
      lbl_vehicle: "Vehicle Year, Make & Model",
      ph_vehicle: "e.g. 2021 Ford Explorer or Seat León",
      lbl_spec: "Vehicle Specification",
      opt_us_spec: "US Specification (Imported)",
      opt_eu_spec: "European / Spanish Specification",
      btn_get_quote: "Request Free Quote Now",
      hero_guarantee: "🔒 No obligation. 100% Privacy guaranteed.",

      // Trust Bar
      trust_1_title: "NAVSTA Rota Specialist",
      trust_1_desc: "Trusted by military families for 20+ years",
      trust_2_title: "Pass & Decal Ready",
      trust_2_desc: "Instant international Green Cards",
      trust_3_title: "Official DGT Partner",
      trust_3_desc: "Certified Gestoría for vehicle transfers",
      trust_4_title: "24/7 Roadside Assistance",
      trust_4_desc: "Coverage across Spain & Europe",

      // Services
      services_badge: "Coverage That Protects You",
      services_title: "Complete Insurance & Vehicle Services",
      services_subtitle: "Tailored specifically for US military personnel under the SOFA agreement, contractors, and local residents.",

      srv_auto_badge: "Most Requested",
      srv_auto_title: "Auto & POV Insurance",
      srv_auto_desc: "Complete protection for imported US-spec cars, trucks, motorcycles, and European vehicles. Includes international Green Card required for base decals.",
      srv_auto_f1: "Third Party, Fire & Theft or Comprehensive",
      srv_auto_f2: "24/7 European roadside assistance from KM 0",
      srv_auto_f3: "Fast Green Card issue for Pass & Decal",
      srv_auto_btn: "Quote Auto / POV",

      srv_home_badge: "SOFA Compliant",
      srv_home_title: "Home & Renters Insurance",
      srv_home_desc: "Mandatory coverage for rental properties in Rota, Costa Ballena, and El Puerto. Complies fully with Navy Housing and Spanish tenancy law.",
      srv_home_f1: "Landlord civil liability coverage",
      srv_home_f2: "Personal property, furniture & electronics",
      srv_home_f3: "Water damage, theft and window glass",
      srv_home_btn: "Quote Renters",

      srv_dgt_badge: "Official Gestoría",
      srv_dgt_title: "DGT Vehicle Transfers & Plates",
      srv_dgt_desc: "Avoid the lines and language barrier at Tráfico. Official vehicle ownership transfers between military members or locals, and Spanish plate registrations.",
      srv_dgt_f1: "Mandato del comprador official representation",
      srv_dgt_f2: "Transfer of ownership (Cambio de titularidad)",
      srv_dgt_f3: "Import documentation & ITV management",
      srv_dgt_btn: "Request DGT Service",

      srv_health_badge: "Bilingual Network",
      srv_health_title: "Private Health & Dental",
      srv_health_desc: "Comprehensive medical insurance with English-speaking doctors and clinics across Cádiz and Seville. Ideal for visas, residency, and extra peace of mind.",
      srv_health_f1: "Direct access to top private hospitals",
      srv_health_f2: "No copay and low copay options",
      srv_health_f3: "Dental care and travel emergency included",
      srv_health_btn: "Quote Health",

      // Military Guide
      guide_badge: "Arriving at NAVSTA Rota?",
      guide_title: "Your 4-Step Vehicle & Housing Checklist",
      guide_subtitle: "Everything you need to know when PCSing to Naval Station Rota or Morón Air Base.",

      step_1_title: "1. Receive Your POV",
      step_1_desc: "Pick up your vehicle at the Port of Rota or purchase a car locally from another departing service member or dealership.",
      step_2_title: "2. Get Spanish Insurance",
      step_2_desc: "Visit our office (Downtown or inside the NEX) to get your policy and official international Green Card (Carta Verde).",
      step_3_title: "3. Pass & Decal Registration",
      step_3_desc: "Present your Green Card, registration/title, and Spanish inspection to get your base pass and vehicle decal.",
      step_4_title: "4. Secure Your Lease",
      step_4_desc: "Activate your Renters Insurance policy before signing your rental lease to meet Housing Office requirements.",

      guide_banner_title: "Need help buying or selling a car in Rota?",
      guide_banner_desc: "Our Patria Gestoría handles all legal paperwork, contracts, and DGT ownership transfers smoothly.",
      guide_banner_btn: "Ask Our Gestoría",

      // Quote Calculator Section
      calc_badge: "Interactive Calculator",
      calc_title: "Get Your Custom Quote",
      calc_subtitle: "Fill out the form below. We'll compare top underwriters to get you the lowest rate with maximum coverage.",

      tab_calc_auto: "🚗 Auto & POV",
      tab_calc_home: "🏠 Home & Renters",
      tab_calc_dgt: "📋 DGT Vehicle Transfer",
      tab_calc_health: "🩺 Private Health",

      // Auto Calc Fields
      legend_auto_veh: "1. Vehicle Details",
      lbl_calc_year: "Year",
      lbl_calc_make: "Make",
      lbl_calc_model: "Model",
      lbl_calc_plate: "License Plate / VIN",
      lbl_calc_spec: "Specification",
      lbl_calc_val: "Estimated Value (€ or $)",
      legend_auto_cov: "2. Coverage & Driver",
      cov_third: "Third Party Basic",
      cov_third_desc: "Mandatory civil liability & roadside assistance",
      cov_plus: "Third Party Complete",
      cov_plus_desc: "Adds theft, fire, animal impact & glass",
      cov_comp: "Comprehensive (Full Coverage)",
      cov_comp_desc: "Full own damage protection with low deductible",
      lbl_calc_age: "Primary Driver Age",
      lbl_calc_license: "Years of License",
      legend_auto_contact: "3. Contact & Delivery",
      lbl_calc_email: "Email Address",
      lbl_calc_duty: "Duty Station / Ship / PSC (Optional)",
      btn_send_whatsapp: "📱 Get Quote via WhatsApp",
      btn_send_email: "✉️ Submit for Advisor Review",

      // Locations & Emergency
      loc_badge: "Visit Us In Person",
      loc_title: "Two Convenient Offices in Rota",
      loc_subtitle: "Stop by our downtown office right by the main gate or visit us inside the NEX on base.",

      loc_downtown_title: "Downtown Rota Office",
      loc_downtown_sub: "Primary Agency & Gestoría",
      loc_downtown_addr: "Plaza del Triunfo de la Virgen del Rosario Coronada, 7 Bajo, 11520 Rota (Cádiz)",
      loc_downtown_phone: "+34 956 84 00 50 / Fax: +34 956 81 16 16",
      loc_downtown_hours: "Mon – Fri: 9:00 AM – 7:00 PM | Sat: 9:00 AM – 1:00 PM",
      loc_downtown_note: "Located at the central roundabout connecting Rota to Av. Crucero Baleares / Main Gate.",

      loc_base_title: "Naval Station Rota Office",
      loc_base_sub: "Inside the Installation",
      loc_base_addr: "NEX (Navy Exchange) Complex, NAVSTA Rota, 11530 Rota (Cádiz)",
      loc_base_phone: "Direct Military On-Base Support",
      loc_base_hours: "Mon – Fri: Standard NEX Operating Hours",
      loc_base_note: "Accessible for active duty, DoD civilian employees, contractors and retirees.",

      claims_title: "24/7 Roadside Assistance & Emergency Claims",
      claims_desc: "Breakdown, puncture, dead battery or accident? Call 24 hours a day, 365 days a year with your policy number.",
      claims_spain_lbl: "Spain Freephone",
      claims_intl_lbl: "International / Roaming: +34 91 387 46 36",

      // FAQ
      faq_badge: "Got Questions?",
      faq_title: "Frequently Asked Questions",
      faq_subtitle: "Clear answers to the most common inquiries regarding insurance and vehicle regulations in Rota.",

      faq_q1: "How fast can I get my Green Card (Carta Verde)?",
      faq_a1: "Immediately! When you visit our office or complete your quote online, we can issue your policy and print your official Green Card on the spot so you can head straight to Pass & Decal.",

      faq_q2: "Can you insure US specification vehicles imported into Spain?",
      faq_a2: "Yes, absolutely. Over 80% of our clients drive US-spec vehicles. We insure American VIN numbers directly without needing European conversion before registration.",

      faq_q3: "Does my Renters Insurance satisfy the Navy Housing Office requirements?",
      faq_a3: "Yes. Our renters policies are built specifically around the US Navy Housing Office and SOFA lease standards, covering tenant liability to the Spanish landlord as well as your own personal contents.",

      faq_q4: "Can Patria Gestoría help me buy or sell a car between military members?",
      faq_a4: "Yes. We take care of the entire DGT transfer process, contract preparation, tax payments, and title updates so neither buyer nor seller has to deal with bureaucratic complications.",

      // Footer
      footer_about_p: "KFM Insurance and Patria Gestoría have provided trusted bilingual insurance and administrative vehicle services for the Rota naval community, expats, and locals for over two decades.",
      footer_links_title: "Quick Links",
      footer_legal_title: "Legal & Regulatory",
      footer_legal_p: "KFM Insurance operates under Spanish Directorate-General of Insurance (DGSFP) regulations. Patria Gestoría is a certified member of the Official College of Administrative Gestors.",
      footer_rights: "All rights reserved. KFM Insurance & Patria Gestoría.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Legal Notice",
      footer_cookies: "Cookie Policy",

      // Modal Success
      modal_title: "Quote Request Sent Successfully!",
      modal_desc: "Thank you! Our bilingual team is preparing your personalized comparison. We will contact you shortly via WhatsApp or Email.",
      modal_btn: "Close"
    },

    es: {
      // Topbar & Mobile Nav
      topbar_emergency: "Asistencia en Carretera 24h: 900 373 737",
      topbar_downtown: "Oficina Rota Centro: +34 956 84 00 50",
      topbar_base: "Oficina Base Naval: Complejo NEX",
      mob_assistance: "Asistencia en Carretera 24h",
      mob_downtown: "Oficina Rota Centro",
      mob_base: "Oficina Base Naval",

      // Nav
      nav_auto: "Auto & POV",
      nav_home: "Hogar",
      nav_dgt: "Gestoría DGT",
      nav_health: "Salud",
      nav_guide: "Guía Base",
      nav_locations: "Oficinas",
      nav_quote_btn: "Pedir Presupuesto",

      // Hero
      hero_badge: "Agencia Oficial de Seguros y Gestoría en Rota Desde el 2000",
      hero_title_1: "Tu Seguro y Gestoría de Confianza para",
      hero_title_2: "Rota y la Base Naval",
      hero_desc: "Carta Verde inmediata para Pass & Decal, seguros a todo riesgo para vehículos americanos y europeos, pólizas de hogar para alquileres SOFA y transferencias oficiales en la DGT.",
      hero_check_1: "Emisión inmediata de Carta Verde en el acto",
      hero_check_2: "Dos oficinas a tu servicio: Rota Centro y dentro del NEX",
      hero_check_3: "Asesoramiento bilingüe y gestión integral de siniestros",
      hero_cta_quote: "Cotizar Presupuesto",
      hero_cta_contact: "Hablar con un Asesor",

      // Hero Card
      hero_card_title: "Solicita tu Presupuesto",
      hero_card_sub: "Recibe tu comparativa en minutos",
      tab_auto: "🚗 Auto / Coche",
      tab_home: "🏠 Hogar",
      tab_dgt: "📋 Gestoría DGT",
      tab_health: "🩺 Salud",
      lbl_name: "Nombre y Apellidos",
      ph_name: "María García / John Doe",
      lbl_phone: "Teléfono / WhatsApp",
      ph_phone: "+34 600 000 000",
      lbl_vehicle: "Año, Marca y Modelo del Vehículo",
      ph_vehicle: "Ej: 2021 Seat León o Ford Explorer",
      lbl_spec: "Especificación del Vehículo",
      opt_us_spec: "Especificación Americana (Importado EE.UU.)",
      opt_eu_spec: "Especificación Europea / Matrícula Española",
      btn_get_quote: "Solicitar Presupuesto Gratis",
      hero_guarantee: "🔒 Sin compromiso. 100% Confidencial.",

      // Trust Bar
      trust_1_title: "Especialistas en NAVSTA Rota",
      trust_1_desc: "Más de 20 años al servicio de familias y militares",
      trust_2_title: "Listos para Pass & Decal",
      trust_2_desc: "Carta Verde internacional en el acto",
      trust_3_title: "Gestoría Oficial DGT",
      trust_3_desc: "Gestores colegiados para transferencias",
      trust_4_title: "Asistencia en Carretera 24h",
      trust_4_desc: "Cobertura completa en España y Europa",

      // Services
      services_badge: "Protección a tu Medida",
      services_title: "Servicios Integrales de Seguros y Tráfico",
      services_subtitle: "Diseñados tanto para el personal militar bajo el tratado SOFA como para residentes de Rota, Costa Ballena y la comarca.",

      srv_auto_badge: "El Más Solicitado",
      srv_auto_title: "Seguro de Auto y Vehículo (POV)",
      srv_auto_desc: "Cobertura completa para vehículos importados de EE.UU. (US Specs) y coches europeos. Incluye Carta Verde internacional obligatoria para registrar el vehículo en la base.",
      srv_auto_f1: "Terceros, Terceros Ampliado o Todo Riesgo",
      srv_auto_f2: "Grúa y asistencia en carretera 24h desde km 0",
      srv_auto_f3: "Carta Verde inmediata para Pass & Decal",
      srv_auto_btn: "Cotizar Seguro de Auto",

      srv_home_badge: "Normativa SOFA",
      srv_home_title: "Seguro de Hogar e Inquilinos",
      srv_home_desc: "Pólizas indispensables para viviendas en alquiler en Rota, Costa Ballena y El Puerto. Cumplen todas las exigencias de la Housing Office y la legislación de arrendamientos.",
      srv_home_f1: "Responsabilidad civil frente al arrendador",
      srv_home_f2: "Cobertura de mobiliario, enseres y electrónica",
      srv_home_f3: "Daños por agua, robo y rotura de cristales",
      srv_home_btn: "Cotizar Hogar",

      srv_dgt_badge: "Gestoría Oficial",
      srv_dgt_title: "Transferencias y Matrículas DGT",
      srv_dgt_desc: "Evita colas y desplazamientos a Tráfico. Cambios de titularidad entre particulares o militares, matriculaciones de vehículos importados e informes de tráfico.",
      srv_dgt_f1: "Mandato oficial del comprador",
      srv_dgt_f2: "Cambio de titularidad express",
      srv_dgt_f3: "Gestión de impuestos, tasas e ITV",
      srv_dgt_btn: "Solicitar Trámite DGT",

      srv_health_badge: "Cuadro Bilingüe",
      srv_health_title: "Seguros de Salud y Dental",
      srv_health_desc: "Asistencia sanitaria privada con los mejores especialistas y centros hospitalarios de Cádiz y Sevilla. Válido para visados y residencias en España.",
      srv_health_f1: "Acceso directo a clínicas privadas punteras",
      srv_health_f2: "Opciones sin copago o copago reducido",
      srv_health_f3: "Cobertura dental y urgencias en viaje",
      srv_health_btn: "Cotizar Salud",

      // Military Guide
      guide_badge: "¿Recién Llegado a Rota?",
      guide_title: "Tu Guía en 4 Pasos: Coche y Vivienda",
      guide_subtitle: "Todo lo que necesitas saber si estás destinado en la Base Naval de Rota o en la Base Aérea de Morón.",

      step_1_title: "1. Recepción del Vehículo",
      step_1_desc: "Recoge tu coche en el puerto de la Base o adquiere un vehículo de ocasión a otro militar que regrese a EE.UU.",
      step_2_title: "2. Contrata el Seguro Español",
      step_2_desc: "Ven a vernos (a Rota Centro o al NEX) para emitir tu póliza y tu Carta Verde internacional en el acto.",
      step_3_title: "3. Registro en Pass & Decal",
      step_3_desc: "Presenta la Carta Verde, título de propiedad e inspección para obtener tu pase y pegatina de vehículo.",
      step_4_title: "4. Asegura tu Alquiler",
      step_4_desc: "Activa tu póliza de inquilino (Renters) antes de firmar el contrato para cumplir los requisitos de Housing.",

      guide_banner_title: "¿Necesitas comprar o vender un coche en Rota?",
      guide_banner_desc: "Nuestra Gestoría Patria tramita el contrato de compraventa, el cambio de nombre en la DGT y el pago de tasas sin complicaciones.",
      guide_banner_btn: "Consultar con Gestoría",

      // Quote Calculator Section
      calc_badge: "Cotizador Interactivo",
      calc_title: "Calcula tu Presupuesto a Medida",
      calc_subtitle: "Rellena los datos a continuación. Comparamos entre las principales compañías para ofrecerte el mejor precio y la máxima cobertura.",

      tab_calc_auto: "🚗 Auto / POV",
      tab_calc_home: "🏠 Hogar / Inquilinos",
      tab_calc_dgt: "📋 Gestoría DGT",
      tab_calc_health: "🩺 Salud Privada",

      // Auto Calc Fields
      legend_auto_veh: "1. Datos del Vehículo",
      lbl_calc_year: "Año de Fabricación",
      lbl_calc_make: "Marca",
      lbl_calc_model: "Modelo",
      lbl_calc_plate: "Matrícula o Número de Bastidor (VIN)",
      lbl_calc_spec: "Especificación",
      lbl_calc_val: "Valor Estimado (€ o $)",
      legend_auto_cov: "2. Cobertura y Conductor",
      cov_third: "Terceros Básico",
      cov_third_desc: "Responsabilidad civil obligatoria y asistencia en carretera",
      cov_plus: "Terceros Completo",
      cov_plus_desc: "Añade robo, incendio, lunas e impacto con animales",
      cov_comp: "Todo Riesgo",
      cov_comp_desc: "Daños propios completos con franquicia reducida",
      lbl_calc_age: "Edad del Conductor",
      lbl_calc_license: "Años de Carnet",
      legend_auto_contact: "3. Contacto y Entrega",
      lbl_calc_email: "Correo Electrónico",
      lbl_calc_duty: "Destino / Barco / PSC Box (Opcional)",
      btn_send_whatsapp: "📱 Pedir Presupuesto por WhatsApp",
      btn_send_email: "✉️ Enviar para Revisión de Asesor",

      // Locations & Emergency
      loc_badge: "Ven a Conocernos",
      loc_title: "Dos Oficinas Físicas en Rota",
      loc_subtitle: "Visítanos en nuestra sede central junto a la entrada a la Base o dentro del centro comercial NEX.",

      loc_downtown_title: "Oficina Rota Centro",
      loc_downtown_sub: "Sede Principal y Gestoría",
      loc_downtown_addr: "Plaza del Triunfo de la Virgen del Rosario Coronada, 7 Bajo, 11520 Rota (Cádiz)",
      loc_downtown_phone: "+34 956 84 00 50 / Fax: +34 956 81 16 16",
      loc_downtown_hours: "Lunes a Viernes: 9:00 a 19:00 | Sábados: 9:00 a 13:00",
      loc_downtown_note: "En la rotonda principal de entrada que conecta con Av. Crucero Baleares / Puerta de la Base.",

      loc_base_title: "Oficina Base Naval de Rota",
      loc_base_sub: "Dentro de la Instalación Militar",
      loc_base_addr: "Complejo NEX (Navy Exchange), NAVSTA Rota, 11530 Rota (Cádiz)",
      loc_base_phone: "Atención directa en la Base",
      loc_base_hours: "Lunes a Viernes: Horario comercial NEX",
      loc_base_note: "Acceso para personal militar en servicio activo, civiles DoD, contratistas y jubilados.",

      claims_title: "Asistencia en Carretera 24/7 y Siniestros Urgentes",
      claims_desc: "¿Avería, pinchazo, batería o accidente? Llama las 24 horas del día, los 365 días del año indicando tu número de póliza.",
      claims_spain_lbl: "Teléfono Gratuito en España",
      claims_intl_lbl: "Desde el Extranjero: +34 91 387 46 36",

      // FAQ
      faq_badge: "¿Tienes Dudas?",
      faq_title: "Preguntas Frecuentes",
      faq_subtitle: "Respuestas claras a las dudas más habituales sobre seguros y trámites de vehículos en Rota.",

      faq_q1: "¿Con qué rapidez puedo tener mi Carta Verde?",
      faq_a1: "¡En el acto! Al visitarnos o solicitarla online, tramitamos la póliza e imprimimos tu Carta Verde oficial de inmediato para que puedas ir directamente a Pass & Decal.",

      faq_q2: "¿Se pueden asegurar coches americanos importados a España?",
      faq_a2: "Sí, absolutamente. Más del 80% de nuestros clientes conducen vehículos con especificaciones estadounidenses. Aseguramos con el número de bastidor (VIN) americano sin necesidad de homologación previa.",

      faq_q3: "¿Cumple el seguro de inquilino los requisitos de Housing?",
      faq_a3: "Sí. Nuestras pólizas de hogar para inquilinos están adaptadas a las exigencias de la Navy Housing Office y los contratos bajo el tratado SOFA, cubriendo la responsabilidad civil ante el propietario y tus bienes personales.",

      faq_q4: "¿Puede la Gestoría tramitar la compraventa de un coche entre militares?",
      faq_a4: "Sí. Nos encargamos de todo el trámite de Tráfico (DGT), redacción de contratos, liquidación del impuesto de transmisiones y cambio de titular para que no tengas que preocuparte por nada.",

      // Footer
      footer_about_p: "KFM Insurance y Patria Gestoría ofrecen seguros y servicios administrativos de vehículos con atención bilingüe a la comunidad de la Base Naval de Rota, residentes y expatriados desde hace más de 20 años.",
      footer_links_title: "Enlaces Rápidos",
      footer_legal_title: "Información Legal",
      footer_legal_p: "KFM Insurance opera bajo la supervisión de la Dirección General de Seguros y Fondos de Pensiones (DGSFP). Patria Gestoría cuenta con gestor colegiado oficial.",
      footer_rights: "Todos los derechos reservados. KFM Insurance & Patria Gestoría.",
      footer_privacy: "Política de Privacidad",
      footer_terms: "Aviso Legal",
      footer_cookies: "Política de Cookies",

      // Modal Success
      modal_title: "¡Solicitud Enviada con Éxito!",
      modal_desc: "Muchas gracias. Nuestro equipo está preparando tu comparativa personalizada. Nos pondremos en contacto contigo a la brevedad por WhatsApp o Email.",
      modal_btn: "Cerrar"
    }
  };

  // --- State ---
  let currentLang = 'en'; // Default to English for Naval Station demographic

  // Initialize Language
  function initLanguage() {
    const saved = localStorage.getItem('kfm_lang');
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    if (langParam === 'es' || langParam === 'en') {
      currentLang = langParam;
    } else if (saved === 'es' || saved === 'en') {
      currentLang = saved;
    } else {
      // Browser detection
      const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (browserLang.startsWith('es')) {
        currentLang = 'es';
      } else {
        currentLang = 'en';
      }
    }

    setLanguage(currentLang);
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('kfm_lang', lang);
    document.documentElement.lang = lang;

    // Update active button classes
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    // Translate placeholder attributes with data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
  }

  // Bind Language Buttons
  function bindLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const selected = btn.getAttribute('data-lang');
        setLanguage(selected);
      });
    });
  }

  // Sticky Navbar shadow on scroll
  function initStickyNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Mobile Navigation Drawer Toggle
  function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking a nav link
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // FAQ Accordion
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const header = item.querySelector('.faq-header');
      if (!header) return;

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  // Modal Dialog Control
  window.KFMModal = {
    open: function () {
      const modal = document.getElementById('quoteSuccessModal');
      if (modal) modal.classList.add('active');
    },
    close: function () {
      const modal = document.getElementById('quoteSuccessModal');
      if (modal) modal.classList.remove('active');
    }
  };

  function initModalEvents() {
    const modal = document.getElementById('quoteSuccessModal');
    if (!modal) return;

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.KFMModal.close();
      }
    });

    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', window.KFMModal.close);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        window.KFMModal.close();
      }
    });
  }

  // DOM Content Loaded
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    bindLanguageButtons();
    initStickyNavbar();
    initMobileNav();
    initFAQ();
    initModalEvents();
  });

  // Expose current language getter
  window.KFM = {
    getLanguage: () => currentLang,
    setLanguage: setLanguage
  };

})();
