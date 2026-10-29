// Versión 1 (v1) - Prototipo con fallos iniciales de usabilidad
const screens = [...document.querySelectorAll('.screen')];
const form = document.querySelector('#taskForm');
const confirmButton = document.querySelector('#confirm');

const show = id => {
  screens.forEach(s => s.classList.toggle('hidden', s.id !== id));
};

document.addEventListener('click', e => {
  const next = e.target.dataset.next;
  const back = e.target.dataset.back;
  if (next || back) {
    show(next || back);
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const sub = form.elements['subject'].value;
  const par = form.elements['parallel'].value;
  const code = form.elements['studentCode'].value.trim();

  let hasError = false;
  if (!sub) {
    document.querySelector('#subject-error').textContent = 'Selecciona una materia.';
    hasError = true;
  }
  if (!par) {
    document.querySelector('#parallel-error').textContent = 'Selecciona un paralelo.';
    hasError = true;
  }
  if (!code) {
    document.querySelector('#studentCode-error').textContent = 'Ingresa tu código.';
    hasError = true;
  }

  if (hasError) return;

  new FormData(form).forEach((value, key) => {
    const out = document.querySelector(`[data-value="${key}"]`);
    if (out) out.textContent = value;
  });

  show('review');
});

let firstAttempt = true;
confirmButton.addEventListener('click', () => {
  confirmButton.disabled = true;
  setTimeout(() => {
    confirmButton.disabled = false;
    const box = document.querySelector('#resultMessage');
    const title = document.querySelector('#resultTitle');

    if (firstAttempt) {
      firstAttempt = false;
      // Fallo v1: Error genérico y resetea el formulario completo
      form.reset();
      title.textContent = 'Error en el sistema';
      box.className = 'notice bad';
      box.textContent = 'Fallo en la transacción: No se pudo asignar cupo o prerrequisito no cumplido. Intente de nuevo.';
    } else {
      title.textContent = 'Matrícula Exitosa';
      box.className = 'notice ok';
      box.textContent = 'Matrícula completada. Código: MAT-V1-' + Math.floor(Math.random() * 900000 + 100000);
    }
    show('result');
  }, 600);
});

document.querySelector('#restart').addEventListener('click', () => {
  show('start');
});
