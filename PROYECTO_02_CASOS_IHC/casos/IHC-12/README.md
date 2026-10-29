# IHC-12 — Matrícula con Lector de Pantalla y Conflicto de Cupos (Tarjeta 12 · Grupo 4)

## Escenario
- **Persona:** Estudiante de software que utiliza lector de pantalla (NVDA / VoiceOver).
- **Tarea crítica:** Seleccionar paralelo con cupos disponibles y confirmar matrícula.
- **Restricción obligatoria:** Etiquetas y mensajes dinámicos verbalizados por lector de pantalla (`aria-live="assertive"`).
- **Fallo inicial superado:** El cupo cambiaba al confirmar sin aviso audible ni visual.
- **Incidencia Sorpresa Implementada:** *Gestionar conflicto y anunciar nuevo estado.* Al detectarse que el cupo fue tomado simultáneamente por otro alumno, el sistema **no confirma falsamente**, preserva los datos del usuario en borrador, anuncia el evento mediante región viva accesible y ofrece selección en Paralelo B o ingreso a Lista de Espera.

## Ejecutar
Abre `prototipo/index.html` en un navegador web.

## Requisitos Verificables
1. **RF-01:** Exponer cupos y paralelos mediante elementos semánticos nativos.
2. **RF-02:** Operar 100% con teclado, con indicador de foco de 3px de alto contraste.
3. **RF-03:** Anunciar dinámicamente mensajes mediante regiones vivas `aria-live`.
4. **RF-04:** Presentar pantalla de revisión estructurada antes de enviar la solicitud.
5. **RF-05:** Persistencia local de datos en `localStorage` ante desconexión o conflicto.
6. **RF-06:** Generación de comprobante accesible con código hash único `MAT-UTA-XXXXXX`.
7. **R7 (Incidencia):** Detección de conflicto concurrente de cupos, preservación de datos y redirección a paralelo disponible o lista de espera.

## Flujo de Navegación
`Inicio → Selección de Paralelo → Revisión → Procesamiento → [Conflicto de Cupo Concurrente → Anuncio Assertive → Selección de Paralelo B / Lista de Espera] → Confirmación Exitosa.`
