# Diagnóstico UX simulado

> Ejemplo de preparación. No corresponde a observación de participantes reales.

## Touchpoints y emoción estimada

| # | Touchpoint | Emoción estimada (-2 a +2) | Riesgo |
|---|---|---:|---|
| 1 | Acceso al portal | 0 | No saber dónde iniciar |
| 2 | Búsqueda de tutor | +1 | Información dispersa |
| 3 | Selección de asignatura | 0 | Etiquetas ambiguas |
| 4 | Selección de horario | +1 | Disponibilidad desactualizada |
| 5 | Ingreso de motivo | 0 | Pérdida del texto |
| 6 | Revisión | +1 | Falta de costo/condiciones |
| 7 | Confirmación | -2 | Horario desaparece |
| 8 | Comprobante | +2 | Cierre y confianza |

Momentos de verdad: selección de horario y confirmación final.

## Hallazgos hipotéticos

1. El horario puede cambiar sin explicación: H1 visibilidad del estado y H9 recuperación.
2. El formulario no protege el borrador: H3 control y libertad; H5 prevención de errores.
3. Etiquetas distintas para la misma acción: H4 consistencia.

## Análisis emocional

- Visceral: una interfaz ordenada y con contraste reduce la primera impresión de complejidad.
- Conductual: el resumen y la conservación de datos sostienen control y eficacia.
- Reflexivo: el comprobante permite confiar y justificar la reserva después.

Curva inicial estimada: 0, +1, 0, +1, 0, +1, -2, +2. Debe reemplazarse por mediciones reales si se ejecuta una prueba.

## Issues de ejemplo, no creados en GitHub

- ISSUE-DEMO-01 (alta): el horario desaparece al confirmar. Criterio: informar conflicto y conservar datos.
- ISSUE-DEMO-02 (media): etiquetas inconsistentes. Criterio: usar “Confirmar reserva” de forma uniforme.
- ISSUE-DEMO-03 (alta): borrado del motivo tras error. Criterio: restaurar todos los campos.