/**
 * Sistema de Matrícula Universitaria — Versión Accesible (v2)
 * Asignatura: Interacción Humano-Computador (IHC)
 * Grupo 4 — Variante F (Matrícula)
 * Tarjeta 11 (Prerrequisitos) & Tarjeta 12 / R7 (Conflicto Concurrente de Cupos)
 */

document.addEventListener('DOMContentLoaded', () => {
  const screens = [...document.querySelectorAll('.screen')];
  const form = document.querySelector('#taskForm');
  const confirmButton = document.querySelector('#confirm');
  const subjectSelect = document.querySelector('#subject');
  const parallelSelect = document.querySelector('#parallel');
  const prereqNotice = document.querySelector('#prereqNotice');
  const btnSwitchAltSubject = document.querySelector('#btnSwitchAltSubject');
  const formStatus = document.querySelector('#formStatus');
  const conflictAlternatives = document.querySelector('#conflictAlternatives');
  const btnChooseParallelB = document.querySelector('#btnChooseParallelB');
  const btnJoinWaitlist = document.querySelector('#btnJoinWaitlist');
  const resultMessage = document.querySelector('#resultMessage');
  const resultTitle = document.querySelector('#resultTitle');

  const STORAGE_KEY = 'sga-matricula-draft-g4';
  let simulateConflict = true; // Simulación de conflicto de concurrencia R7 (Tarjeta 12)

  // 1. Navegación y Control de Foco
  const showScreen = id => {
    screens.forEach(s => s.classList.toggle('hidden', s.id !== id));
    const target = document.querySelector('#' + id);
    if (target) {
      const focusable = target.querySelector('h1, h2, button, input, select, textarea');
      if (focusable) focusable.focus();
    }
  };

  const setStepper = stepIndex => {
    document.querySelectorAll('.stepper li').forEach((li, index) => {
      li.classList.toggle('active', index <= stepIndex);
    });
  };

  document.addEventListener('click', e => {
    const next = e.target.dataset.next;
    const back = e.target.dataset.back;
    if (next) {
      const stepMap = { start: 0, form: 1, review: 2, result: 3 };
      showScreen(next);
      setStepper(stepMap[next] ?? 0);
    }
    if (back) {
      const stepMap = { start: 0, form: 1, review: 2, result: 3 };
      showScreen(back);
      setStepper(stepMap[back] ?? 1);
    }
  });

  // 2. Manejo de Prerrequisitos (Tarjeta 11)
  const checkPrerequisites = () => {
    const selected = subjectSelect.value;
    if (selected === 'Sistemas Distribuidos') {
      prereqNotice.classList.remove('hidden');
      formStatus.textContent = 'Alerta: Sistemas Distribuidos requiere el prerrequisito Redes de Comunicación.';
    } else {
      prereqNotice.classList.add('hidden');
    }
  };

  subjectSelect.addEventListener('change', checkPrerequisites);

  btnSwitchAltSubject.addEventListener('click', () => {
    subjectSelect.value = 'Interacción Humano-Computador';
    checkPrerequisites();
    saveDraft();
    formStatus.textContent = 'Asignatura cambiada exitosamente a Interacción Humano-Computador (Habilitada).';
    subjectSelect.focus();
  });

  // 3. Persistencia de Borrador (localStorage)
  const saveDraft = () => {
    const data = Object.fromEntries(new FormData(form));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const restoreDraft = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      Object.entries(saved).forEach(([key, val]) => {
        if (form.elements[key]) {
          form.elements[key].value = val;
        }
      });
      checkPrerequisites();
    } catch (err) {
      console.warn('Error al recuperar borrador:', err);
    }
  };

  form.addEventListener('input', e => {
    const field = e.target;
    const errorEl = document.querySelector('#' + field.id + '-error');
    if (errorEl) {
      errorEl.textContent = '';
      field.classList.remove('invalid');
      field.setAttribute('aria-invalid', 'false');
    }
    saveDraft();
  });

  form.addEventListener('change', saveDraft);

  // 4. Cancelar Borrador Seguro (con confirmación)
  document.querySelector('#cancel').addEventListener('click', () => {
    if (confirm('¿Deseas cancelar el proceso? Se eliminará el borrador actual.')) {
      form.reset();
      localStorage.removeItem(STORAGE_KEY);
      prereqNotice.classList.add('hidden');
      showScreen('start');
      setStepper(0);
    }
  });

  // 5. Validación Accesible de Formulario
  const validateForm = () => {
    let isValid = true;
    let firstErrorField = null;

    // Validación de Prerrequisito bloqueante
    if (subjectSelect.value === 'Sistemas Distribuidos') {
      const errorEl = document.querySelector('#subject-error');
      errorEl.textContent = 'Debes aprobar Redes de Comunicación o seleccionar una materia habilitada.';
      subjectSelect.classList.add('invalid');
      subjectSelect.setAttribute('aria-invalid', 'true');
      isValid = false;
      firstErrorField = subjectSelect;
    }

    form.querySelectorAll('[required]').forEach(field => {
      const errorEl = document.querySelector('#' + field.id + '-error');
      let msg = '';

      if (!field.value.trim()) {
        msg = 'Este campo es obligatorio para la matrícula.';
      } else if (field.id === 'studentCode' && field.value.trim().length < 5) {
        msg = 'Ingresa un código o cédula válido (mínimo 5 caracteres).';
      }

      if (msg) {
        field.classList.add('invalid');
        field.setAttribute('aria-invalid', 'true');
        if (errorEl) errorEl.textContent = msg;
        if (!firstErrorField) firstErrorField = field;
        isValid = false;
      } else if (field.id !== 'subject' || subjectSelect.value !== 'Sistemas Distribuidos') {
        field.classList.remove('invalid');
        field.setAttribute('aria-invalid', 'false');
        if (errorEl) errorEl.textContent = '';
      }
    });

    if (firstErrorField) {
      firstErrorField.focus();
    }
    return isValid;
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm()) return;

    // Actualizar Resumen de Revisión
    new FormData(form).forEach((value, key) => {
      const out = document.querySelector(`[data-value="${key}"]`);
      if (out) out.textContent = value;
    });

    const selectedOption = parallelSelect.options[parallelSelect.selectedIndex];
    const schedule = selectedOption.dataset.schedule || 'Horario por asignar';
    document.querySelector('#summarySchedule').textContent = schedule;

    showScreen('review');
    setStepper(2);
  });

  // 6. Confirmación y Gestión de Conflicto de Cupos (R7 / Tarjeta 12)
  confirmButton.addEventListener('click', () => {
    confirmButton.disabled = true;
    confirmButton.innerHTML = '<span class="spinner" aria-hidden="true"></span> Procesando matrícula en servidor...';

    setTimeout(() => {
      confirmButton.disabled = false;
      confirmButton.textContent = 'Confirmar Matrícula Definitiva';

      const selectedParallel = parallelSelect.value;

      // Disparador del caso imprevisto: Si eligió Paralelo A en el primer intento
      if (simulateConflict && selectedParallel === 'Paralelo A') {
        simulateConflict = false; // El reintento o cambio será exitoso

        // Estado de conflicto R7 (Tarjeta 12)
        resultTitle.textContent = '⚠️ Conflicto de Concurrencia de Cupo';
        resultMessage.className = 'notice bad';
        resultMessage.setAttribute('aria-live', 'assertive');
        resultMessage.innerHTML = `
          <strong>No se pudo confirmar en Paralelo A:</strong>
          <p>El último cupo disponible fue confirmado por otro estudiante milisegundos antes de tu solicitud.</p>
          <p><strong>Tus datos personales y asignaturas siguen guardados.</strong> Por favor selecciona una de las alternativas disponibles a continuación para no perder tu turno.</p>
        `;

        conflictAlternatives.classList.remove('hidden');
        showScreen('result');
        setStepper(3);
        resultMessage.focus();
      } else {
        // Confirmación Exitosa
        conflictAlternatives.classList.add('hidden');
        const code = 'MAT-UTA-' + String(Math.floor(100000 + Math.random() * 900000));

        resultTitle.textContent = '✅ ¡Matrícula Confirmada Exitosamente!';
        resultMessage.className = 'notice ok';
        resultMessage.setAttribute('aria-live', 'polite');
        resultMessage.innerHTML = `
          <strong>Operación Registrada en el SGA UTA:</strong>
          <p>Se ha emitido tu comprobante oficial con código único: <strong style="font-size:1.15rem; color:#14532d;">${code}</strong>.</p>
          <p><strong>Asignatura:</strong> ${subjectSelect.value} · <strong>Paralelo:</strong> ${parallelSelect.value}.</p>
          <p>Se ha enviado una copia digital a tu correo institucional (@uta.edu.ec).</p>
        `;

        localStorage.removeItem(STORAGE_KEY);
        showScreen('result');
        setStepper(3);
        resultMessage.focus();
      }
    }, 750);
  });

  // Alternativa 1: Cambiar a Paralelo B (Inmediato)
  btnChooseParallelB.addEventListener('click', () => {
    parallelSelect.value = 'Paralelo B';
    const optB = parallelSelect.options[parallelSelect.selectedIndex];
    document.querySelector('#summaryParallel').textContent = 'Paralelo B (3 cupos libres)';
    document.querySelector('#summarySchedule').textContent = optB.dataset.schedule || 'Martes y Jueves 10:00 - 12:00';
    saveDraft();

    // Proceder inmediatamente a confirmar el nuevo cupo seguro
    conflictAlternatives.classList.add('hidden');
    confirmButton.click();
  });

  // Alternativa 2: Lista de Espera
  btnJoinWaitlist.addEventListener('click', () => {
    conflictAlternatives.classList.add('hidden');
    const waitCode = 'WAIT-UTA-' + String(Math.floor(10000 + Math.random() * 90000));
    resultTitle.textContent = '📋 Registrado en Lista de Espera';
    resultMessage.className = 'notice info';
    resultMessage.innerHTML = `
      <strong>Inscripción en Lista de Espera Confirmada:</strong>
      <p>Has quedado registrado en la posición <strong>#1</strong> para el Paralelo A con el código <strong style="color:#0369a1;">${waitCode}</strong>.</p>
      <p>Recibirás una notificación prioritaria vía SMS y correo institucional en caso de que un cupo sea liberado.</p>
    `;
    localStorage.removeItem(STORAGE_KEY);
    resultMessage.focus();
  });

  // Reiniciar
  document.querySelector('#restart').addEventListener('click', () => {
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    simulateConflict = true;
    prereqNotice.classList.add('hidden');
    conflictAlternatives.classList.add('hidden');
    showScreen('start');
    setStepper(0);
  });

  // Atajo de Accesibilidad por Teclado: Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const formScreen = document.querySelector('#form');
      if (!formScreen.classList.contains('hidden')) {
        document.querySelector('#cancel').focus();
      }
    }
  });

  // Restaurar borrador inicial
  restoreDraft();
});
