# Requisitos observables

| ID | Requisito | Comprobación |
|---|---|---|
| RF-01 | Mostrar tutores y horarios disponibles | Se ve una lista antes de reservar |
| RF-02 | Permitir elegir asignatura, tutor y horario | Los tres campos son operables con teclado |
| RF-03 | Validar campos en contexto | Cada error se asocia mediante aria-describedby |
| RF-04 | Mostrar revisión previa | Se presenta un resumen antes de confirmar |
| RF-05 | Conservar datos ante error recuperable | El borrador persiste tras el primer fallo simulado |
| RF-06 | Emitir confirmación | Se muestra un código ficticio y estado de éxito |

## Sitemap

Inicio → Reserva → Revisión → Resultado (error recuperable o éxito).

## Navegación y user flow

Inicio → comenzar → completar → [inválido: corregir campo] → revisar → confirmar → carga → [error: conservar y reintentar] / [éxito: comprobante].