/**
 * KFM Insurance
 * Interactive Quote Engine & Lead Submission
 * Supports: Auto/POV, Renters, DGT Transfers, Policy Transfers & Bundle
 * Outputs: Pre-formatted WhatsApp message + Form Webhook / Email capture
 */

(function () {
  'use strict';

  // Configurable Phone / WhatsApp for KFM Insurance
  const KFM_WHATSAPP_NUMBER = "34956811616";
  const KFM_NOTIFICATION_EMAIL = "info@kfminsurance.com";

  // Elements
  let activeTab = 'auto';

  function initHeroWidget() {
    const heroTabs = document.querySelectorAll('.hero-tab-pill');
    const heroForm = document.getElementById('heroQuickForm');
    if (!heroTabs.length || !heroForm) return;

    heroTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        heroTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.getAttribute('data-target');
        activeTab = target;

        // Sync with calculator tabs
        switchCalcTab(target);
      });
    });

    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('heroName')?.value || '';
      const phone = document.getElementById('heroPhone')?.value || '';
      const vehicle = document.getElementById('heroVehicle')?.value || '';
      const spec = document.getElementById('heroSpec')?.value || 'US Specification';

      // Pre-fill the detailed calculator
      const calcName = document.getElementById('calcName');
      const calcPhone = document.getElementById('calcPhone');
      const calcMake = document.getElementById('calcMake');

      if (calcName) calcName.value = name;
      if (calcPhone) calcPhone.value = phone;
      if (calcMake && vehicle) calcMake.value = vehicle;

      // Smooth scroll to full calculator
      const calcSection = document.getElementById('quote-calculator');
      if (calcSection) {
        calcSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function initCalculatorTabs() {
    const calcTabs = document.querySelectorAll('.calc-nav-tab');
    calcTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        switchCalcTab(target);
      });
    });
  }

  function switchCalcTab(targetTab) {
    activeTab = targetTab;

    // Update nav active state
    document.querySelectorAll('.calc-nav-tab').forEach(t => {
      if (t.getAttribute('data-tab') === targetTab) {
        t.classList.add('active');
        t.setAttribute('aria-selected', 'true');
        try {
          t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } catch (e) {}
      } else {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      }
    });

    // Update form panels
    document.querySelectorAll('.calc-form-panel').forEach(panel => {
      if (panel.id === `calc-panel-${targetTab}`) {
        panel.style.display = 'block';
      } else {
        panel.style.display = 'none';
      }
    });
  }

  // Radio Card Selector
  function initRadioCards() {
    document.querySelectorAll('.radio-card').forEach(card => {
      card.addEventListener('click', () => {
        const name = card.querySelector('input[type="radio"]')?.name;
        if (name) {
          document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
            input.closest('.radio-card')?.classList.remove('selected');
          });
          const radio = card.querySelector('input[type="radio"]');
          if (radio) {
            radio.checked = true;
            card.classList.add('selected');
          }
        }
      });
    });
  }

  // Format WhatsApp Message
  function buildWhatsAppMessage() {
    const lang = (window.KFM && window.KFM.getLanguage()) || 'en';
    const isEn = lang === 'en';

    let text = isEn 
      ? `👋 Hello KFM Insurance! I would like to request an insurance quote:\n\n`
      : `👋 ¡Hola KFM Seguros! Me gustaría solicitar un presupuesto:\n\n`;

    if (activeTab === 'auto') {
      const year = document.getElementById('calcYear')?.value || 'N/A';
      const make = document.getElementById('calcMake')?.value || 'N/A';
      const model = document.getElementById('calcModel')?.value || 'N/A';
      const plate = document.getElementById('calcPlate')?.value || 'N/A';
      const spec = document.getElementById('calcSpec')?.value || 'US Spec';
      const value = document.getElementById('calcVal')?.value || 'N/A';
      const cov = document.querySelector('input[name="autoCoverage"]:checked')?.value || 'Comprehensive';
      const age = document.getElementById('calcAge')?.value || 'N/A';
      const license = document.getElementById('calcLicense')?.value || 'N/A';
      const name = document.getElementById('calcName')?.value || 'Customer';
      const phone = document.getElementById('calcPhone')?.value || '';
      const email = document.getElementById('calcEmail')?.value || '';
      const duty = document.getElementById('calcDuty')?.value || '';

      text += isEn
        ? `*Service:* Auto & POV Insurance\n` +
          `*Vehicle:* ${year} ${make} ${model}\n` +
          `*Specification:* ${spec}\n` +
          `*VIN / License Plate:* ${plate}\n` +
          `*Estimated Value:* ${value}\n` +
          `*Desired Coverage:* ${cov}\n` +
          `*Driver Age / License:* ${age} yrs / ${license} yrs license\n` +
          `*Client Name:* ${name}\n` +
          `*Phone/WhatsApp:* ${phone}\n` +
          `*Email:* ${email}\n` +
          (duty ? `*Duty Station / PSC:* ${duty}\n` : '')
        : `*Servicio:* Seguro de Auto / POV\n` +
          `*Vehículo:* ${year} ${make} ${model}\n` +
          `*Especificación:* ${spec}\n` +
          `*Matrícula / Bastidor:* ${plate}\n` +
          `*Valor Estimado:* ${value}\n` +
          `*Cobertura:* ${cov}\n` +
          `*Edad / Carnet:* ${age} años / ${license} años carnet\n` +
          `*Nombre:* ${name}\n` +
          `*Teléfono:* ${phone}\n` +
          `*Email:* ${email}\n` +
          (duty ? `*Destino / Base:* ${duty}\n` : '');

    } else if (activeTab === 'home') {
      const propType = document.getElementById('homePropType')?.value || 'Apartment';
      const rented = document.getElementById('homeRented')?.value || 'Rented (Inquilino)';
      const addr = document.getElementById('homeAddress')?.value || 'Rota';
      const sqft = document.getElementById('homeSqMeters')?.value || 'N/A';
      const contentsVal = document.getElementById('homeContents')?.value || 'N/A';
      const name = document.getElementById('calcName')?.value || 'Customer';
      const phone = document.getElementById('calcPhone')?.value || '';

      text += isEn
        ? `*Service:* Home & Renters Insurance (SOFA)\n` +
          `*Property Type:* ${propType} (${rented})\n` +
          `*Address/Area:* ${addr}\n` +
          `*Size (m²):* ${sqft}\n` +
          `*Contents Value:* ${contentsVal}\n` +
          `*Client Name:* ${name}\n` +
          `*Phone:* ${phone}\n`
        : `*Servicio:* Seguro de Hogar e Inquilinos\n` +
          `*Tipo Vivienda:* ${propType} (${rented})\n` +
          `*Zona / Dirección:* ${addr}\n` +
          `*Metros cuadrados:* ${sqft}\n` +
          `*Valor Mobiliario:* ${contentsVal}\n` +
          `*Nombre:* ${name}\n` +
          `*Teléfono:* ${phone}\n`;

    } else if (activeTab === 'dgt') {
      const serviceType = document.getElementById('dgtType')?.value || 'Ownership Transfer';
      const plate = document.getElementById('dgtPlate')?.value || 'N/A';
      const buyerSeller = document.getElementById('dgtRole')?.value || 'Buyer';
      const notes = document.getElementById('dgtNotes')?.value || '';
      const name = document.getElementById('calcName')?.value || 'Customer';
      const phone = document.getElementById('calcPhone')?.value || '';

      text += isEn
        ? `*Service:* Official DGT Vehicle Transfer\n` +
          `*Procedure:* ${serviceType}\n` +
          `*Plate / VIN:* ${plate}\n` +
          `*Role:* ${buyerSeller}\n` +
          `*Notes:* ${notes}\n` +
          `*Client Name:* ${name}\n` +
          `*Phone:* ${phone}\n`
        : `*Servicio:* Transferencia Oficial de Vehículos DGT\n` +
          `*Trámite:* ${serviceType}\n` +
          `*Matrícula / VIN:* ${plate}\n` +
          `*Rol:* ${buyerSeller}\n` +
          `*Detalles:* ${notes}\n` +
          `*Nombre:* ${name}\n` +
          `*Teléfono:* ${phone}\n`;

    } else if (activeTab === 'policy') {
      const transferType = document.getElementById('policyType')?.value || 'Transfer policy to buyer when selling vehicle';
      const plateVin = document.getElementById('policyPlate')?.value || 'N/A';
      const policyNum = document.getElementById('policyNumber')?.value || 'N/A';
      const bundle = document.getElementById('policyBundle')?.value || 'No';
      const notes = document.getElementById('policyNotes')?.value || '';
      const name = document.getElementById('calcName')?.value || 'Customer';
      const phone = document.getElementById('calcPhone')?.value || '';

      text += isEn
        ? `*Service:* Policy Transfer & Bundle Inquiry\n` +
          `*Request Type:* ${transferType}\n` +
          `*Plate / VIN:* ${plateVin}\n` +
          `*Current Policy #:* ${policyNum}\n` +
          `*Bundle Discount:* ${bundle}\n` +
          `*Notes:* ${notes}\n` +
          `*Client Name:* ${name}\n` +
          `*Phone:* ${phone}\n`
        : `*Servicio:* Traspaso de Póliza y Consulta Bundle\n` +
          `*Tipo Solicitud:* ${transferType}\n` +
          `*Matrícula / VIN:* ${plateVin}\n` +
          `*Nº Póliza:* ${policyNum}\n` +
          `*Descuento Bundle:* ${bundle}\n` +
          `*Detalles:* ${notes}\n` +
          `*Nombre:* ${name}\n` +
          `*Teléfono:* ${phone}\n`;

    } else { // health / other
      const people = document.getElementById('healthMembers')?.value || '1';
      const ages = document.getElementById('healthAges')?.value || 'N/A';
      const dental = document.getElementById('healthDental')?.value || 'Yes';
      const name = document.getElementById('calcName')?.value || 'Customer';
      const phone = document.getElementById('calcPhone')?.value || '';

      text += isEn
        ? `*Service:* Private Health Insurance\n` +
          `*Insured Members:* ${people} (Ages: ${ages})\n` +
          `*Include Dental:* ${dental}\n` +
          `*Client Name:* ${name}\n` +
          `*Phone:* ${phone}\n`
        : `*Servicio:* Seguro de Salud Privado\n` +
          `*Personas a asegurar:* ${people} (Edades: ${ages})\n` +
          `*Incluir Dental:* ${dental}\n` +
          `*Nombre:* ${name}\n` +
          `*Teléfono:* ${phone}\n`;
    }

    return encodeURIComponent(text);
  }

  function buildEmailPayload() {
    const name = document.getElementById('calcName')?.value.trim() || 'No indicado';
    const phone = document.getElementById('calcPhone')?.value.trim() || 'No indicado';
    const email = document.getElementById('calcEmail')?.value.trim() || 'No indicado';
    const duty = document.getElementById('calcDuty')?.value.trim() || 'N/A';

    const payload = {
      "_subject": `Nuevo Presupuesto Web - KFM Insurance (${activeTab.toUpperCase()}) - ${name}`,
      "_template": "table",
      "_captcha": "false",
      "Servicio Solicitado": activeTab.toUpperCase(),
      "Nombre del Cliente": name,
      "Teléfono / WhatsApp": phone,
      "Email": email,
      "Destino / Barco / PSC": duty
    };

    if (activeTab === 'auto') {
      payload["Año Vehículo"] = document.getElementById('calcYear')?.value || 'N/A';
      payload["Marca"] = document.getElementById('calcMake')?.value || 'N/A';
      payload["Modelo"] = document.getElementById('calcModel')?.value || 'N/A';
      payload["Matrícula o VIN"] = document.getElementById('calcPlate')?.value || 'N/A';
      payload["Especificación"] = document.getElementById('calcSpec')?.value || 'US Spec';
      payload["Valor Estimado"] = document.getElementById('calcVal')?.value || 'N/A';
      payload["Cobertura Deseada"] = document.querySelector('input[name="autoCoverage"]:checked')?.value || 'Comprehensive';
      payload["Edad Conductor"] = document.getElementById('calcAge')?.value || 'N/A';
      payload["Años Carnet"] = document.getElementById('calcLicense')?.value || 'N/A';
    } else if (activeTab === 'home') {
      payload["Tipo Inmueble"] = document.getElementById('homePropType')?.value || 'N/A';
      payload["Régimen"] = document.getElementById('homeRented')?.value || 'N/A';
      payload["Ubicación / Dirección"] = document.getElementById('homeAddress')?.value || 'N/A';
      payload["Metros Cuadrados"] = document.getElementById('homeSqMeters')?.value || 'N/A';
      payload["Valor Contenido"] = document.getElementById('homeContents')?.value || 'N/A';
    } else if (activeTab === 'dgt') {
      payload["Trámite DGT"] = document.getElementById('dgtType')?.value || 'N/A';
      payload["Matrícula o Bastidor"] = document.getElementById('dgtPlate')?.value || 'N/A';
      payload["Rol (Comprador/Vendedor)"] = document.getElementById('dgtRole')?.value || 'N/A';
      payload["Notas Adicionales"] = document.getElementById('dgtNotes')?.value || 'N/A';
    } else if (activeTab === 'policy') {
      payload["Tipo de Traspaso / Solicitud"] = document.getElementById('policyType')?.value || 'N/A';
      payload["Matrícula o Bastidor"] = document.getElementById('policyPlate')?.value || 'N/A';
      payload["Número de Póliza Actual"] = document.getElementById('policyNumber')?.value || 'N/A';
      payload["Consulta Bundle / Vehículo Adicional"] = document.getElementById('policyBundle')?.value || 'N/A';
      payload["Notas Adicionales"] = document.getElementById('policyNotes')?.value || 'N/A';
    } else if (activeTab === 'health') {
      payload["Personas a Asegurar"] = document.getElementById('healthMembers')?.value || 'N/A';
      payload["Edades"] = document.getElementById('healthAges')?.value || 'N/A';
      payload["Incluir Dental"] = document.getElementById('healthDental')?.value || 'N/A';
    }

    return payload;
  }

  function initFormSubmissions() {
    const btnWhatsApp = document.getElementById('btnSubmitWhatsApp');
    const btnEmail = document.getElementById('btnSubmitEmail');
    const quoteForm = document.getElementById('mainQuoteForm');

    if (btnWhatsApp) {
      btnWhatsApp.addEventListener('click', (e) => {
        e.preventDefault();
        const msg = buildWhatsAppMessage();
        const waUrl = `https://wa.me/${KFM_WHATSAPP_NUMBER}?text=${msg}`;
        window.open(waUrl, '_blank');
      });
    }

    if (btnEmail && quoteForm) {
      btnEmail.addEventListener('click', (e) => {
        e.preventDefault();
        // Validation of basic required fields
        const nameInput = document.getElementById('calcName');
        const phoneInput = document.getElementById('calcPhone');

        if (!nameInput?.value.trim()) {
          nameInput?.focus();
          alert('Please enter your full name / Por favor indica tu nombre.');
          return;
        }

        if (!phoneInput?.value.trim()) {
          phoneInput?.focus();
          alert('Please enter your phone or WhatsApp / Por favor indica tu teléfono o WhatsApp.');
          return;
        }

        const isEn = (window.KFM && window.KFM.getLanguage()) === 'en';
        const origText = btnEmail.innerHTML;
        btnEmail.disabled = true;
        btnEmail.innerHTML = isEn ? '⏳ Sending Quote...' : '⏳ Enviando Presupuesto...';

        const payload = buildEmailPayload();

        fetch(`https://formsubmit.co/ajax/${KFM_NOTIFICATION_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
          btnEmail.disabled = false;
          btnEmail.innerHTML = origText;
          if (window.KFMModal) {
            window.KFMModal.open();
          }
          quoteForm.reset();
        })
        .catch(err => {
          console.warn('FormSubmit notice, fallback success modal:', err);
          btnEmail.disabled = false;
          btnEmail.innerHTML = origText;
          if (window.KFMModal) {
            window.KFMModal.open();
          }
          quoteForm.reset();
        });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHeroWidget();
    initCalculatorTabs();
    initRadioCards();
    initFormSubmissions();
  });

})();
