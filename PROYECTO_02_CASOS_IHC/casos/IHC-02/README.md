# IHC-02 - Reprogramar tutoría

## Escenario

- Persona: Docente con agenda saturada y traslado frecuente.
- Tarea crítica: Reprogramar una tutoría aceptada.
- Restricción obligatoria: Completar en máximo tres pasos.
- Fallo adicional: La cancelación se ejecuta sin confirmación.

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