# Inventario de Componentes UI (Atomic Design)

**Asignatura:** Interacción Humano–Computador (IHC)  
**Sistema:** Matrícula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 — Variante F (Matrícula)  

El diseño del sistema de matrícula se estructura mediante la metodología **Atomic Design**, asegurando consistencia, accesibilidad WCAG 2.1 AA y modularidad.

---

## 1. Átomos (Elementos base indivisibles)
- **Tipografía y Textos:** Etiquetas `<label>` con asociación `for`, textos descriptivos `id="*-help"`, y títulos jerárquicos `<h1>`, `<h2>`.
- **Campos de Entrada:** Inputs de texto `<input id="studentCode">`, selectores desplegables `<select>` con indicación de cupos.
- **Botones de Acción:** Botón primario (`.primary`), secundario (`.secondary`), destructivo (`.danger`) y botones alternativos de resolución rápida (`.alternative`).
- **Indicadores de Estado:** Badges de disponibilidad (ej. `Cupos: 2`, `Agotado`), spinner SVG animado para procesamiento no bloqueante.
- **Indicador de Foco:** Anillo CSS de alto contraste (`outline: 3px solid #0056b3; outline-offset: 2px`).

---

## 2. Moléculas (Combinaciones funcionales de átomos)
- **Campo de Formulario Validado:** Combinación de `<label>`, `<select>` o `<input>`, y `<p class="error" id="*-error">` vinculado mediante `aria-describedby`.
- **Banner Contextual de Prerrequisitos (Tarjeta 11):** Contenedor con ícono de advertencia, descripción de la materia correlativa faltante y botón directo *"Seleccionar IHC (Habilitada)"*.
- **Grupo de Acciones:** Barra horizontal con botón *"Regresar"*, *"Cancelar borrador"* y *"Continuar a revisión"*.
- **Fila de Resumen:** Par clave-valor accesible (`<strong>Asignatura:</strong> <span>Interacción Humano-Computador</span>`).
- **Alerta Accesible de Conflicto de Cupo (Tarjeta 12):** Notificación dinámica con `role="alert"` y `aria-live="assertive"` con opciones de recuperación rápida en un clic.

---

## 3. Organismos (Secciones funcionales completas)
- **Stepper de Progreso:** Lista ordenada `<ol class="stepper">` con estados semánticos (`active`, `completed`) para orientar la ubicación del usuario en el flujo de 4 pasos.
- **Formulario de Selección Académica:** Organismo central que agrupa los campos de materia, paralelo con cupo en vivo, código de estudiante y validaciones en tiempo real.
- **Panel de Revisión Previa:** Organismo que consolida la información seleccionada para que el estudiante valide antes de la persistencia final.
- **Panel de Resultado y Comprobante:** Organismo que renderiza la confirmación oficial o el estado de conflicto de cupos con alternativas.

---

## 4. Plantillas (Layouts estructurales)
- **Layout Shell Centrado:** Estructura con encabezado institucional UTA, saltador al contenido accesible (`.skip-link`), contenedor principal de 760px con contraste adecuado y pie de página institucional.

---

## 5. Páginas / Vistas
- **Vista 1 (Inicio):** Bienvenida, instrucciones de teclado y botón "Iniciar Matrícula".
- **Vista 2 (Selección y Datos):** Formulario interactivo con detección de prerrequisitos y cupos.
- **Vista 3 (Revisión):** Resumen de selección antes de la confirmación formal.
- **Vista 4 (Resultado):** Manejo de estados (Carga, Conflicto de Cupo / Error Recuperable, o Comprobante Exitoso).
