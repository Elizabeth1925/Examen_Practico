# IHC-12 - Matrícula con lector de pantalla

## Escenario

- Persona: Estudiante que usa lector de pantalla.
- Tarea crítica: Seleccionar un paralelo con cupos.
- Restricción obligatoria: Etiquetas y mensajes anunciados por lector.
- Fallo adicional: El cupo cambia al confirmar sin aviso.

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