# Matriz de Trazabilidad Completa

**Asignatura:** Interacción Humano–Computador (IHC)  
**Sistema:** Matrícula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 — Variante F (Matrícula)  

---

## 🔗 Matriz Requisito → Pantalla → Flujo → Componente → Wireframe

| ID Req. | Requisito Observable | Pantalla / Vista | Paso en el User Flow | Componentes UI (Atomic Design) | Wireframe Asociado |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **RF-01** | Catálogo de asignaturas y paralelos con disponibilidad visible | Pantalla 1: Inicio / Pantalla 2: Formulario | Inicio → Selección | Lista desplegable `<select>`, badges de cupos, banner informativo | **WF-01 / WF-02** |
| **RF-02** | Operabilidad 100% por teclado y foco visible | Todas las pantallas (1 a 4) | Todo el recorrido | Anillo de foco CSS (`:focus-visible`), botón saltar al contenido (`skip-link`), eventos `keydown` | **WF-01 a WF-04** |
| **RF-03** | Validación de prerrequisitos contextual sin revelar datos ajenos (T11) | Pantalla 2: Formulario | Selección de asignatura | Banner de advertencia contextual, botón selector de materia habilitada, texto `aria-describedby` | **WF-02** |
| **RF-04** | Pantalla de revisión y resumen antes de confirmar | Pantalla 3: Revisión | Revisión previa | Contenedor de resumen en dos columnas, botón secundario "Modificar", botón primario "Confirmar" | **WF-04** |
| **RF-05** | Persistencia de borrador ante fallo o error recuperable | Pantalla 2: Formulario / Pantalla 4: Resultado | Error / Reintento | Almacenamiento local `localStorage`, manejador `input` y `change`, función `restoreDraft` | **WF-03** |
| **RF-06** | Emisión de comprobante oficial de matrícula accesible | Pantalla 4: Resultado | Éxito y comprobante | Contenedor de comprobante, código hash dinámico `MAT-UTA-XXXXXX`, región `aria-live="polite"` | **WF-04** |
| **R7 (Incidencia)** | Gestión de conflicto de cupos concurrentes y anuncio accesible (T12) | Pantalla 3: Revisión → Pantalla 4: Conflicto | Confirmar → Conflicto de cupo | Alerta `role="alert"` (`aria-live="assertive"`), botones de alternativa ("Cambiar a Paralelo B" / "Lista de espera") | **WF-03 (Incidencia)** |

---

## 📌 Justificación de Trazabilidad para la Evaluación

1. **Garantía de no regresión:** La adición del requisito **R7 (Incidencia Sorpresa de Tarjeta 12 y 11)** no destruye los flujos previos de RF-01 a RF-06; los amplía agregando una bifurcación de recuperación ante estados no previstos.
2. **Defensa ante el evaluador:** Cada elemento visible en la interfaz tiene un origen formal en los requisitos y un reflejo directo en los wireframes y el código JavaScript.
