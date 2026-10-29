# IHC-09 - Registro anónimo UX

## Escenario

- Persona: Investigadora que registra pruebas con participantes anónimos.
- Tarea crítica: Guardar tiempo, errores y satisfacción.
- Restricción obligatoria: No almacenar nombres reales.
- Fallo adicional: Guardar no presenta confirmación.

La incidencia sorpresa está fuera de este caso y solo figura en la documentación general reservada.

## Ejecutar

Abre `prototipo/index.html`. Prueba campos vacíos, recorrido por teclado, cancelación, primer error recuperable, conservación del borrador y segundo intento exitoso.

## Requisitos verificables

1. Mostrar el propósito y estado del flujo.
2. Permitir completar la tarea crítica con teclado.
3. Validar todos los campos y asociar cada mensaje.
4. Presentar un resumen antes de confirmar.
5. Conservar datos ante un error recuperable.
6. Comunicar carga, error y éxito mediante regiones vivas.

## Flujo

Inicio → datos → [error contextual / revisión] → carga → [error recuperable → reintento] / [éxito → comprobante].