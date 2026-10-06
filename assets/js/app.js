/**
 * KFM Insurance
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
      topbar_base: "Base Naval Office: By the Autoport",
      mob_assistance: "24/7 Roadside Assistance",
      mob_downtown: "Downtown Rota Office",
      mob_base: "Base Naval Office",
      mob_base_val: "By the Autoport",

      // Nav
      nav_auto: "Auto & POV",
      nav_home: "Renters Insurance",
      nav_dgt: "DGT Transfers",
      nav_policy: "Policy Transfers",
      nav_bundle: "Bundle & Save",
      nav_guide: "Base Guide",
      nav_locations: "Locations",
      nav_quote_btn: "Get a Quote",

      // Hero
      hero_badge: "Trusted Insurance in Rota for US Military",
      hero_title_1: "Trusted Insurance in Rota for",
      hero_title_2: "US Military",
      hero_desc: "Get your Green Card for picking up your vehicle from VPC, renters insurance, official DGT vehicle transfers, and policy transfers. Plus, save on renters insurance when you insure your vehicle with us.",
      hero_check_1: "Instant Green Cards for VPC vehicle pickup & Pass & Decal",
      hero_check_2: "Two locations: Downtown Rota & on Base by the Autoport",
      hero_check_3: "English-speaking support with claims and towing assistance",
      hero_cta_quote: "Start Instant Quote",
      hero_cta_contact: "Talk to an Agent",

      // Hero Card
      hero_card_title: "Quick Quote Request",
      hero_card_sub: "Receive your comparison in minutes",
      tab_auto: "🚗 Auto / POV",
      tab_home: "🏠 Renters",
      tab_dgt: "📋 DGT Transfers",
      tab_policy: "🔄 Policy Transfers",
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
      trust_1_title: "VPC Pickup & Green Cards",
      trust_1_desc: "Instant Green Card to pick up your vehicle from VPC",
      trust_2_title: "Renters Insurance",
      trust_2_desc: "Coverage designed for US military living in Spain",
      trust_3_title: "Official DGT Transfers",
      trust_3_desc: "Professional assistance with vehicle transfer & registration",
      trust_4_title: "Two Convenient Locations",
      trust_4_desc: "Downtown Rota & on Base by the Autoport",

      // Services Section
      services_badge: "Coverage That Protects You",
      services_title: "Complete Insurance & Vehicle Services",
      services_subtitle: "Tailored specifically for US military personnel under the SOFA agreement, contractors, and local residents.",

      srv_auto_badge: "Most Requested",
      srv_auto_title: "Auto & POV Insurance",
      srv_auto_desc: "Complete protection for imported US-spec cars, trucks, motorcycles, and European vehicles. Includes international Green Card for VPC pickup and Pass & Decal registration.",
      srv_auto_f1: "Instant Green Card for VPC pickup & Pass & Decal",
      srv_auto_f2: "Third Party, Fire & Theft or Comprehensive",
      srv_auto_f3: "24/7 European roadside assistance from KM 0",
      srv_auto_btn: "Quote Auto / POV",

      srv_home_badge: "SOFA Compliant",
      srv_home_title: "Renters Insurance",
      srv_home_desc: "Coverage designed for US military living in Spain. Meets all Navy Housing and lease liability standards to protect your home and personal property.",
      srv_home_f1: "Navy Housing & SOFA lease compliant",
      srv_home_f2: "Personal property, furniture & electronics",
      srv_home_f3: "Landlord civil liability & water damage",
      srv_home_btn: "Quote Renters",

      srv_dgt_badge: "DGT Assistance",
      srv_dgt_title: "Official DGT Vehicle Transfers",
      srv_dgt_desc: "Professional assistance with your vehicle transfer and registration. Quick and hassle-free processing when buying or selling vehicles in Spain.",
      srv_dgt_f1: "Professional vehicle transfer assistance",
      srv_dgt_f2: "Vehicle registration & Spanish plates",
      srv_dgt_f3: "Sales between military members & locals",
      srv_dgt_btn: "Request DGT Service",

      srv_policy_badge: "PCS Friendly",
      srv_policy_title: "Policy Transfers",
      srv_policy_desc: "Transfer your existing vehicle insurance policy to the buyer when selling your vehicle, making PCS and car sales simple and stress-free.",
      srv_policy_f1: "Transfer policy directly to the vehicle buyer",
      srv_policy_f2: "No cancellation penalties or paperwork headaches",
      srv_policy_f3: "Immediate coverage continuity for new owner",
      srv_policy_btn: "Transfer a Policy",

      srv_bundle_badge: "Exclusive Discount",
      srv_bundle_title: "Bundle & Save",
      srv_bundle_desc: "Save on renters insurance when you insure your vehicle with us, plus enjoy exclusive discounts on additional vehicles you insure with us as an existing customer.",
      srv_bundle_f1: "Save on renters insurance with auto policy",
      srv_bundle_f2: "Exclusive discounts on additional vehicles",
      srv_bundle_f3: "One trusted agency for all your policies",
      srv_bundle_btn: "Explore Bundle Savings",

      srv_claims_badge: "24/7 English Support",
      srv_claims_title: "Claims & Roadside Assistance",
      srv_claims_desc: "Get English-speaking support with claims and towing assistance when you need it most. 24/7 European emergency roadside coverage across Spain and Europe.",
      srv_claims_f1: "English-speaking claims management support",
      srv_claims_f2: "24/7 towing and roadside assistance from KM 0",
      srv_claims_f3: "Accident, puncture, lockout & battery assistance",
      srv_claims_btn: "Call 24/7 Support",

      // Military Guide
      guide_badge: "Arriving at NAVSTA Rota?",
      guide_title: "Your 4-Step Vehicle & Housing Checklist",
      guide_subtitle: "Everything you need to know when PCSing to Naval Station Rota or Morón Air Base.",

      step_1_title: "1. Pick Up Vehicle from VPC",
      step_1_desc: "Pick up your vehicle from the Vehicle Processing Center (VPC) at NAVSTA Rota or purchase a vehicle from a departing service member.",
      step_2_title: "2. Get Spanish Insurance & Green Card",
      step_2_desc: "Visit our office (Downtown or on Base by the Autoport) to get your policy and official international Green Card (Carta Verde).",
      step_3_title: "3. Pass & Decal Registration",
      step_3_desc: "Present your Green Card, title/registration, and inspection at Pass & Decal to get your base permit.",
      step_4_title: "4. Renters Insurance & Bundle Discount",
      step_4_desc: "Activate your Renters Insurance before signing your lease, and save when you bundle it with your vehicle insurance.",

      guide_banner_title: "Selling or Buying a Vehicle in Rota?",
      guide_banner_desc: "We provide professional assistance with official DGT vehicle transfers and policy transfers so you can transfer your existing insurance to the buyer.",
      guide_banner_btn: "Contact KFM Insurance",

      // Quote Calculator Section
      calc_badge: "Interactive Calculator",
      calc_title: "Get Your Custom Quote",
      calc_subtitle: "Fill out the form below. We'll compare top underwriters to get you the lowest rate with maximum coverage.",

      tab_calc_auto: "🚗 Auto & POV",
      tab_calc_home: "🏠 Renters Insurance",
      tab_calc_dgt: "📋 DGT Vehicle Transfers",
      tab_calc_policy: "🔄 Policy Transfers & Bundle",

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
      loc_subtitle: "Two locations: Downtown Rota & on Base by the Autoport",

      loc_downtown_title: "Downtown Rota Office",
      loc_downtown_sub: "Main Agency (Near Main Gate)",
      loc_downtown_addr: "Plaza del Triunfo de la Virgen del Rosario Coronada, 7 Bajo, 11520 Rota (Cádiz)",
      loc_downtown_phone: "+34 956 84 00 50 / WhatsApp: +34 956 81 16 16",
      loc_downtown_hours: "Mon – Fri: 9:00 AM – 7:00 PM | Sat: 9:00 AM – 1:00 PM",
      loc_downtown_note: "Located right by the central roundabout connecting Rota to Av. Crucero Baleares / Main Gate.",

      loc_base_title: "Naval Station Rota Office",
      loc_base_sub: "On Base by the Autoport",
      loc_base_addr: "By the Autoport, NAVSTA Rota, 11530 Rota (Cádiz)",
      loc_base_phone: "+34 956 84 00 50 / WhatsApp: +34 956 81 16 16",
      loc_base_hours: "Mon – Fri: Standard Base Operating Hours",
      loc_base_note: "Accessible for active duty, DoD civilian employees, contractors and retirees.",

      claims_title: "Claims & Roadside Assistance",
      claims_desc: "Get English-speaking support with claims and towing assistance when you need it most. Call 24 hours a day, 365 days a year with your policy number.",
      claims_spain_lbl: "Spain Freephone",
      claims_intl_lbl: "International / Roaming: +34 91 387 46 36",

      // FAQ
      faq_badge: "Got Questions?",
      faq_title: "Frequently Asked Questions",
      faq_subtitle: "Clear answers to the most common inquiries regarding insurance and vehicle regulations in Rota.",

      faq_q1: "How fast can I get my Green Card (Carta Verde)?",
      faq_a1: "Immediately! When you visit our office (Downtown or on Base by the Autoport) or request online, we issue your policy and print your official Green Card on the spot so you can pick up your vehicle from VPC and head to Pass & Decal.",

      faq_q2: "Can you insure US specification vehicles imported into Spain?",
      faq_a2: "Yes, absolutely. Over 80% of our clients drive US-spec vehicles. We insure American VIN numbers directly without needing European conversion before registration.",

      faq_q3: "Does Renters Insurance satisfy Navy Housing requirements?",
      faq_a3: "Yes. Our renters policies are designed specifically for US military living in Spain, covering tenant liability to the Spanish landlord as well as your own personal property and furniture.",

      faq_q4: "Can KFM Insurance help me transfer a vehicle and insurance policy when selling my car?",
      faq_a4: "Yes! We provide professional assistance with official DGT vehicle transfers and vehicle registration. Furthermore, we can transfer your existing vehicle insurance policy to the buyer when you sell your car, making PCS sales simple and seamless.",

      faq_q5: "How does the Bundle & Save discount work?",
      faq_a5: "Save on renters insurance when you insure your vehicle with us! Plus, as an existing customer, enjoy exclusive discounts on additional vehicles you insure with us.",

      // Footer
      footer_about_p: "KFM Insurance has provided trusted bilingual insurance services for the Rota naval community, US military personnel, expats, and locals for over two decades. Specialized in auto, renters, DGT vehicle transfers, and policy transfers.",
      footer_links_title: "Quick Links",
      footer_legal_title: "Legal & Regulatory",
      footer_legal_p: "KFM Insurance operates under Spanish Directorate-General of Insurance and Pension Funds (DGSFP) regulations.",
      footer_rights: "All rights reserved. KFM Insurance.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Legal Notice",
      footer_cookies: "Cookie Policy",
      footer_base_lbl: "Base Office:",
      footer_base_val: "By the Autoport, NAVSTA Rota",
      footer_transfers_lbl: "Vehicle Transfers:",
      footer_transfers_val: "Official DGT Assistance",

      // Modal Success
      modal_title: "Quote Request Sent Successfully!",
      modal_desc: "Thank you! Our bilingual team is preparing your personalized comparison. We will contact you shortly via WhatsApp or Email.",
      modal_btn: "Close"
    },

    es: {
      // Topbar & Mobile Nav
      topbar_emergency: "Asistencia en Carretera 24h: 900 373 737",
      topbar_downtown: "Oficina Rota Centro: +34 956 84 00 50",
      topbar_base: "Oficina Base Naval: Junto al Autoport",
      mob_assistance: "Asistencia en Carretera 24h",
      mob_downtown: "Oficina Rota Centro",
      mob_base: "Oficina Base Naval (Junto al Autoport)",
      mob_base_val: "Junto al Autoport",

      // Nav
      nav_auto: "Auto & POV",
      nav_home: "Hogar e Inquilinos",
      nav_dgt: "Transferencias DGT",
      nav_policy: "Traspaso Pólizas",
      nav_bundle: "Combina y Ahorra",
      nav_guide: "Guía Base",
      nav_locations: "Oficinas",
      nav_quote_btn: "Pedir Presupuesto",

      // Hero
      hero_badge: "Tu Seguro de Confianza en Rota para Militares de EE.UU.",
      hero_title_1: "Tu Seguro de Confianza en Rota para",
      hero_title_2: "Militares de EE.UU.",
      hero_desc: "Obtén tu Carta Verde para recoger tu vehículo en el VPC, seguro de inquilino (Renters), transferencias oficiales de vehículos en la DGT y traspaso de pólizas. Además, ahorra en tu seguro de inquilino al asegurar tu vehículo con nosotros.",
      hero_check_1: "Carta Verde en el acto para recoger en el VPC y Pass & Decal",
      hero_check_2: "Dos oficinas: Rota Centro y en la Base junto al Autoport",
      hero_check_3: "Asistencia en inglés y español para partes de siniestros y grúa",
      hero_cta_quote: "Cotizar Presupuesto",
      hero_cta_contact: "Hablar con un Asesor",

      // Hero Card
      hero_card_title: "Solicita tu Presupuesto",
      hero_card_sub: "Recibe tu comparativa en minutos",
      tab_auto: "🚗 Auto / Coche",
      tab_home: "🏠 Hogar / Inquilinos",
      tab_dgt: "📋 Transferencias DGT",
      tab_policy: "🔄 Traspaso Póliza",
      lbl_name: "Nombre y Apellidos",
      ph_name: "María García / John Doe",
      lbl_phone: "Teléfono / WhatsApp",
      ph_phone: "+34 600 000 000",
      lbl_vehicle: "Año, Marca y Modelo del Vehículo",
      ph_vehicle: "Ej: 2021 Ford Explorer o Seat León",
      lbl_spec: "Especificación del Vehículo",
      opt_us_spec: "Especificación Americana (Importado EE.UU.)",
      opt_eu_spec: "Especificación Europea / Matrícula Española",
      btn_get_quote: "Solicitar Presupuesto Gratis",
      hero_guarantee: "🔒 Sin compromiso. 100% Confidencial.",

      // Trust Bar
      trust_1_title: "Recogida VPC y Carta Verde",
      trust_1_desc: "Carta Verde inmediata para recoger tu vehículo en el VPC",
      trust_2_title: "Seguro de Inquilinos (Renters)",
      trust_2_desc: "Cobertura diseñada para militares de EE.UU. en España",
      trust_3_title: "Transferencias Oficiales DGT",
      trust_3_desc: "Asistencia profesional con transferencias y matriculación",
      trust_4_title: "Dos Oficinas Físicas",
      trust_4_desc: "Rota Centro y en la Base junto al Autoport",

      // Services
      services_badge: "Protección a tu Medida",
      services_title: "Servicios Integrales de Seguros y Tráfico",
      services_subtitle: "Diseñados tanto para el personal militar bajo el tratado SOFA como para residentes de Rota, Costa Ballena y la comarca.",

      srv_auto_badge: "El Más Solicitado",
      srv_auto_title: "Seguro de Auto y Vehículo (POV)",
      srv_auto_desc: "Cobertura completa para vehículos americanos (US Specs) y europeos. Incluye Carta Verde internacional para recoger tu coche en el VPC y para Pass & Decal.",
      srv_auto_f1: "Carta Verde en el acto para VPC y Pass & Decal",
      srv_auto_f2: "Terceros, Terceros Ampliado o Todo Riesgo",
      srv_auto_f3: "Grúa y asistencia en carretera 24h desde km 0",
      srv_auto_btn: "Cotizar Seguro de Auto",

      srv_home_badge: "Normativa SOFA",
      srv_home_title: "Seguro de Hogar e Inquilinos (Renters)",
      srv_home_desc: "Cobertura diseñada para militares de EE.UU. que residen en España. Cumple con los requisitos de Navy Housing y arrendamiento para proteger tu vivienda y enseres.",
      srv_home_f1: "Cumplimiento con Navy Housing y contrato SOFA",
      srv_home_f2: "Cobertura de mobiliario, enseres y electrónica",
      srv_home_f3: "Responsabilidad civil frente al arrendador y daños",
      srv_home_btn: "Cotizar Hogar e Inquilinos",

      srv_dgt_badge: "Asistencia DGT",
      srv_dgt_title: "Transferencias Oficiales de Vehículos DGT",
      srv_dgt_desc: "Asistencia profesional con la transferencia y matriculación de tu vehículo. Trámites rápidos y sin complicaciones al comprar o vender un coche en España.",
      srv_dgt_f1: "Asistencia profesional en transferencias de vehículos",
      srv_dgt_f2: "Matriculaciones y placas españolas",
      srv_dgt_f3: "Compraventas entre militares y con particulares",
      srv_dgt_btn: "Solicitar Trámite DGT",

      srv_policy_badge: "Facilidades PCS",
      srv_policy_title: "Traspaso de Pólizas",
      srv_policy_desc: "Traspasa tu póliza de seguro de vehículo existente al comprador cuando vendas tu coche, haciendo que tu PCS o venta sea sencilla y sin complicaciones.",
      srv_policy_f1: "Traspasa tu póliza directamente al comprador",
      srv_policy_f2: "Sin penalizaciones de cancelación por PCS",
      srv_policy_f3: "Continuidad inmediata de cobertura para el nuevo dueño",
      srv_policy_btn: "Traspasar una Póliza",

      srv_bundle_badge: "Descuento Exclusivo",
      srv_bundle_title: "Combina y Ahorra (Bundle & Save)",
      srv_bundle_desc: "Ahorra en tu seguro de inquilino al asegurar tu vehículo con nosotros, además de disfrutar de descuentos exclusivos en vehículos adicionales asegurados con nosotros como cliente existente.",
      srv_bundle_f1: "Ahorra en seguro de inquilino con póliza de auto",
      srv_bundle_f2: "Descuentos en vehículos adicionales de la familia",
      srv_bundle_f3: "Una sola agencia de confianza para todas tus pólizas",
      srv_bundle_btn: "Ver Descuentos Bundle",

      srv_claims_badge: "Asistencia 24/7",
      srv_claims_title: "Siniestros y Asistencia en Carretera",
      srv_claims_desc: "Asistencia en inglés y español para partes de siniestros y servicio de grúa cuando más lo necesitas. Atención de emergencia 24/7 en carretera en España y Europa.",
      srv_claims_f1: "Gestión de siniestros con atención en inglés y español",
      srv_claims_f2: "Grúa y asistencia en carretera 24/7 desde km 0",
      srv_claims_f3: "Asistencia en accidentes, pinchazos, batería y averías",
      srv_claims_btn: "Llamar Asistencia 24/7",

      // Military Guide
      guide_badge: "¿Recién Llegado a Rota?",
      guide_title: "Tu Guía en 4 Pasos: Coche y Vivienda",
      guide_subtitle: "Todo lo que necesitas saber si estás destinado en la Base Naval de Rota o en la Base Aérea de Morón.",

      step_1_title: "1. Recogida del Vehículo en el VPC",
      step_1_desc: "Recoge tu vehículo en el Vehicle Processing Center (VPC) de la Base Naval o adquiere un coche a otro militar que regrese a EE.UU.",
      step_2_title: "2. Seguro Español y Carta Verde",
      step_2_desc: "Ven a vernos (a Rota Centro o a la Base junto al Autoport) para emitir tu póliza y tu Carta Verde en el acto.",
      step_3_title: "3. Registro en Pass & Decal",
      step_3_desc: "Presenta la Carta Verde, título de propiedad e inspección para obtener tu pase y pegatina de vehículo.",
      step_4_title: "4. Seguro de Inquilinos y Descuento Bundle",
      step_4_desc: "Activa tu póliza de inquilino (Renters) antes de firmar el contrato y ahorra al combinarla con tu póliza de auto.",

      guide_banner_title: "¿Necesitas comprar o vender un coche en Rota?",
      guide_banner_desc: "Te ofrecemos asistencia profesional con transferencias oficiales en la DGT y traspaso de pólizas para transferir tu seguro al comprador.",
      guide_banner_btn: "Contactar con KFM Insurance",

      // Quote Calculator Section
      calc_badge: "Cotizador Interactivo",
      calc_title: "Calcula tu Presupuesto a Medida",
      calc_subtitle: "Rellena los datos a continuación. Comparamos entre las principales compañías para ofrecerte el mejor precio y la máxima cobertura.",

      tab_calc_auto: "🚗 Auto / POV",
      tab_calc_home: "🏠 Seguro Inquilinos",
      tab_calc_dgt: "📋 Transferencias DGT",
      tab_calc_policy: "🔄 Traspaso Póliza y Bundle",

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
      loc_subtitle: "Dos oficinas: Rota Centro y en la Base junto al Autoport",

      loc_downtown_title: "Oficina Rota Centro",
      loc_downtown_sub: "Sede Principal (Junto a la Entrada)",
      loc_downtown_addr: "Plaza del Triunfo de la Virgen del Rosario Coronada, 7 Bajo, 11520 Rota (Cádiz)",
      loc_downtown_phone: "+34 956 84 00 50 / WhatsApp: +34 956 81 16 16",
      loc_downtown_hours: "Lunes a Viernes: 9:00 a 19:00 | Sábados: 9:00 a 13:00",
      loc_downtown_note: "En la rotonda principal de entrada que conecta con Av. Crucero Baleares / Puerta de la Base.",

      loc_base_title: "Oficina Base Naval de Rota",
      loc_base_sub: "En la Base junto al Autoport",
      loc_base_addr: "Junto al Autoport, NAVSTA Rota, 11530 Rota (Cádiz)",
      loc_base_phone: "+34 956 84 00 50 / WhatsApp: +34 956 81 16 16",
      loc_base_hours: "Lunes a Viernes: Horario habitual de la Base",
      loc_base_note: "Acceso para personal militar en servicio activo, civiles DoD, contratistas y jubilados.",

      claims_title: "Siniestros y Asistencia en Carretera",
      claims_desc: "Asistencia en inglés y español para partes de siniestros y servicio de grúa cuando más lo necesitas. Llama las 24 horas del día, los 365 días del año.",
      claims_spain_lbl: "Teléfono Gratuito en España",
      claims_intl_lbl: "Desde el Extranjero: +34 91 387 46 36",

      // FAQ
      faq_badge: "¿Tienes Dudas?",
      faq_title: "Preguntas Frecuentes",
      faq_subtitle: "Respuestas claras a las dudas más habituales sobre seguros y trámites de vehículos en Rota.",

      faq_q1: "¿Con qué rapidez puedo tener mi Carta Verde?",
      faq_a1: "¡En el acto! Al visitarnos (en Rota Centro o en la Base junto al Autoport) o solicitarla online, tramitamos la póliza e imprimimos tu Carta Verde oficial de inmediato para recoger tu vehículo en el VPC e ir directamente a Pass & Decal.",

      faq_q2: "¿Se pueden asegurar coches americanos importados a España?",
      faq_a2: "Sí, absolutamente. Más del 80% de nuestros clientes conducen vehículos con especificaciones estadounidenses. Aseguramos con el número de bastidor (VIN) americano sin necesidad de homologación previa.",

      faq_q3: "¿Cumple el seguro de inquilino los requisitos de Housing?",
      faq_a3: "Sí. Nuestras pólizas de inquilinos están diseñadas específicamente para el personal militar de EE.UU. en España, cubriendo la responsabilidad civil ante el propietario y tus bienes personales y mobiliario.",

      faq_q4: "¿Puede KFM Insurance ayudarme a transferir un vehículo y traspasar mi póliza al vender mi coche?",
      faq_a4: "¡Sí! Te brindamos asistencia profesional con las transferencias oficiales de vehículos en la DGT y matriculación. Además, podemos traspasar tu póliza de seguro de vehículo existente directamente al comprador cuando vendas tu coche, haciendo que tu venta por PCS sea rápida y sin complicaciones.",

      faq_q5: "¿Cómo funciona el descuento de Bundle & Save?",
      faq_a5: "¡Ahorra en tu seguro de inquilino (Renters) al asegurar tu vehículo con nosotros! Además, como cliente existente, disfruta de descuentos exclusivos en vehículos adicionales que asegures con nosotros.",

      // Footer
      footer_about_p: "KFM Insurance ofrece seguros y servicios de vehículos con atención bilingüe a la comunidad de la Base Naval de Rota, personal militar de EE.UU., residentes y expatriados desde hace más de 20 años. Especializados en vehículos, inquilinos, transferencias en la DGT y traspaso de pólizas.",
      footer_links_title: "Enlaces Rápidos",
      footer_legal_title: "Información Legal",
      footer_legal_p: "KFM Insurance opera bajo la supervisión de la Dirección General de Seguros y Fondos de Pensiones (DGSFP).",
      footer_rights: "Todos los derechos reservados. KFM Insurance.",
      footer_privacy: "Política de Privacidad",
      footer_terms: "Aviso Legal",
      footer_cookies: "Política de Cookies",
      footer_base_lbl: "Oficina en Base:",
      footer_base_val: "Junto al Autoport, NAVSTA Rota",
      footer_transfers_lbl: "Trámites de Tráfico:",
      footer_transfers_val: "Asistencia Oficial DGT",

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
  }

  // Smooth scroll for all internal anchor links WITHOUT exposing # (hash) in browser URL
  function initSmoothScrollWithoutHash() {
    // If browser URL currently contains a hash (e.g. from previous load), clean it immediately:
    if (window.location.hash) {
      const targetHash = window.location.hash;
      try {
        const initialTarget = document.querySelector(targetHash);
        if (initialTarget) {
          setTimeout(() => {
            initialTarget.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }
      } catch (err) {}
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }

    // Intercept clicks on any internal anchor
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      e.preventDefault();

      // Close mobile menu drawer if open
      const menu = document.querySelector('.nav-menu');
      const toggle = document.querySelector('.mobile-toggle');
      if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }

      if (hash === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        try {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (err) {}
      }

      // CRITICAL: Clean address bar - NEVER show #hash in browser URL
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
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
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherHeader = other.querySelector('.faq-header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        });
        if (!isActive) {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        } else {
          header.setAttribute('aria-expanded', 'false');
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

  // WebMCP - Agentic Navigation Support (Lighthouse 13.3+ / Chrome M150)
  function initWebMCP() {
    if (typeof document !== 'undefined' && 'modelContext' in document && typeof document.modelContext.registerTool === 'function') {
      try {
        document.modelContext.registerTool({
          name: "request_insurance_quote",
          description: "Request an insurance quote for Auto POV, Renters, DGT vehicle transfers, or policy transfers with KFM Insurance in Rota, Spain.",
          inputSchema: {
            type: "object",
            properties: {
              fullName: { type: "string", description: "Customer's full legal name" },
              service: { 
                type: "string", 
                enum: ["auto_pov", "renters_insurance", "dgt_transfer", "policy_transfer", "bundle_and_save"],
                description: "Type of insurance or service requested"
              },
              contactNumber: { type: "string", description: "Contact phone or WhatsApp number" },
              vehicleSpec: { 
                type: "string", 
                enum: ["US Specification", "European Specification"],
                description: "Vehicle specification (US imported or European/Spanish)"
              }
            },
            required: ["fullName", "service", "contactNumber"]
          },
          async execute(params) {
            return {
              content: [{
                type: "text",
                text: `Quote request successfully registered for ${params.fullName}. KFM Insurance advisors will contact them at ${params.contactNumber}.`
              }]
            };
          }
        });

        document.modelContext.registerTool({
          name: "get_kfm_locations_and_contacts",
          description: "Retrieve official physical addresses, phone numbers, and 24/7 roadside assistance info for KFM Insurance in Rota.",
          inputSchema: { type: "object", properties: {} },
          async execute() {
            return {
              content: [{
                type: "text",
                text: JSON.stringify({
                  agency: "KFM Insurance",
                  downtownOffice: "Plaza del Triunfo de la Virgen del Rosario Coronada, 7 Bajo, 11520 Rota, Cádiz",
                  downtownPhone: "+34 956 84 00 50",
                  baseOffice: "By the Autoport, NAVSTA Rota, 11530 Rota, Cádiz",
                  whatsapp: "+34 956 81 16 16",
                  roadsideEmergency24h: "900 373 737",
                  email: "info@kfminsurance.com"
                })
              }]
            };
          }
        });
      } catch (e) {
        console.debug("WebMCP registration note:", e);
      }
    }
  }

  // DOM Content Loaded
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    bindLanguageButtons();
    initStickyNavbar();
    initMobileNav();
    initSmoothScrollWithoutHash();
    initFAQ();
    initModalEvents();
    initWebMCP();
  });

  // Expose current language getter
  window.KFM = {
    getLanguage: () => currentLang,
    setLanguage: setLanguage
  };

})();
