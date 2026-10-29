# IHC-11 — Matrícula con Prerrequisitos (Tarjeta 11 · Grupo 4)

## Escenario
- **Persona:** Estudiante de software con prerrequisito académico pendiente.
- **Tarea crítica:** Inscribirse en una asignatura habilitada de su semestre.
- **Restricción obligatoria:** Explicar las restricciones académicas sin revelar datos ajenos y con navegación por teclado.
- **Fallo inicial superado:** El botón inscribir parecía disponible pero fallaba al final.
- **Incidencia Sorpresa Implementada:** *Mostrar prerrequisito y alternativa válida.* La interfaz detecta preventivamente el prerrequisito antes de la confirmación, explica la causa del bloqueo y ofrece una ruta inmediata hacia materias elegibles habilitadas sin perder datos.

## Ejecutar
Abre `prototipo/index.html` en un navegador web.

## Requisitos Verificables
1. **RF-01:** Mostrar el propósito del flujo y la oferta académica disponible.
2. **RF-02:** Operar 100% mediante teclado (`Tab`, `Shift+Tab`, `Enter`, `Escape`).
3. **RF-03:** Validar contextual de prerrequisitos sin exponer información sensible.
4. **RF-04:** Presentar resumen previo antes de la persistencia de matrícula.
5. **RF-05:** Conservar datos ingresados ante cualquier error recuperable (`localStorage`).
6. **RF-06:** Anunciar estados de carga, error y éxito mediante regiones accesibles (`aria-live`).
7. **R7 (Incidencia):** Ofrecer alternativa directa a materias habilitadas al detectar prerrequisito pendiente.

## Flujo de Navegación
`Inicio → Selección de Materia → [Alerta de Prerrequisito → Elección de Alternativa Habilitada] → Revisión de Datos → Confirmación → Comprobante Oficial.`
