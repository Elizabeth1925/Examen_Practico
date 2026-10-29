# Registro de Sesión de Pruebas de Usabilidad (UX Testing)

**Asignatura:** Interacción Humano–Computador (IHC)  
**Sistema Evaluado:** Matrícula Universitaria (SGA UTA)  
**Equipo Evaluador:** Grupo 4  
**Protocolo:** Prueba de observación y pensamiento en voz alta (Think Aloud) no dirigida.  

---

## 📋 Ficha Técnica de la Sesión

- **Fecha y Hora de la Sesión:** 29 de octubre de 2026, 09:15 AM
- **Código del Participante:** `P-04-G2` (Estudiante de 5to nivel perteneciente al Grupo 2 - Pagos Académicos)
- **Versión Evaluada:** Comparativa directa v1 (inicial con fallos) vs v2 (refinada con accesibilidad)
- **Objetivo de la Prueba:** Evaluar la autonomía, manejo de errores, respuesta ante conflicto de cupo y operabilidad por teclado durante la inscripción de una asignatura.
- **Tarea Asignada al Participante:**  
  *"Ingresa al portal, selecciona una asignatura y paralelo disponible, completa tus datos de estudiante y confirma la matrícula sin utilizar el ratón (solo teclado)."*

---

## ⏱️ Métricas de Rendimiento Observadas

| Métrica de Usabilidad | Versión 1 (v1) | Versión 2 (v2) | Variación y Mejora |
| :--- | :---: | :---: | :---: |
| **Tiempo de Finalización de Tarea (TCT)** | 145 segundos | 48 segundos | **-66.8% de tiempo** (Alta eficiencia) |
| **Tasa de Éxito de la Tarea** | Éxito Parcial (Requirió 2 intentos) | Éxito Total (1er intento guiado) | **100% efectividad** |
| **Número de Errores Críticos** | 3 errores | 0 errores | **-100% de errores** |
| **Pausas / Dudas Observadas** | 4 pausas prolongadas (>8 seg) | 1 pausa breve (lectura de resumen) | Fluidez sostenida |
| **Puntuación de Usabilidad Percibida (SUS est.)** | 42.5 / 100 (Pobre) | 87.5 / 100 (Excelente) | +45 puntos de satisfacción |

---

## 🔍 Registro Detallado de Observaciones y Comportamiento

### 1. Dificultades Detectadas en la Versión 1 (v1):
- **Confusión de prerrequisitos:** El participante seleccionó *Sistemas Distribuidos*; al dar clic en confirmar, la pantalla simplemente arrojó un aviso genérico de error y borró todo el formulario.
- **Incertidumbre de foco de teclado:** Al usar `Tab`, el participante perdió de vista dónde estaba posicionado porque el foco del navegador era invisible sobre el fondo blanco.
- **Pérdida de datos tras conflicto:** Al simularse el fallo de cupo, el usuario exclamó frustrado al ver los campos en blanco:
  > *"¡No puede ser! Me salió error de cupo y se me borró todo lo que ya había escrito. Ahora tengo que empezar desde el inicio."* (Cita textual de `P-04-G2`).

### 2. Comportamiento Observado en la Versión 2 (v2):
- **Detección inmediata de prerrequisito (Tarjeta 11):** Al elegir *Sistemas Distribuidos*, leyó el banner contextual y pulsó inmediatamente el botón alternativo sugerido (*"Matricular en IHC"*), sin frustración.
- **Recuperación ante conflicto de concurrencia (Tarjeta 12 / R7):** Cuando el sistema simuló la pérdida del cupo en Paralelo A, el participante escuchó el anuncio de la región viva y leyó el mensaje. Pulsó el botón *"Cambiar a Paralelo B disponible"*; constató que su código de estudiante seguía escrito y finalizó en 5 segundos.
  > *"Qué alivio que no me borró los datos y me ofreció de una vez el paralelo B que sí tenía cupos."* (Cita textual de `P-04-G2`).

---

## 🛠️ Recomendación Priorizada y Cambio Aplicado

1. **Hallazgo Prioritario:** El usuario necesita que el foco del teclado viaje automáticamente a las alertas de error y a las opciones de recuperación cuando ocurre un conflicto imprevisto.
2. **Cambio Aplicado en Código (v2):** En `prototipo/v2/app.js`, se implementó `box.focus()` y `aria-live="assertive"` para que las tecnologías de asistencia y los usuarios por teclado tengan acceso directo a los botones de resolución de conflicto sin necesidad de presionar 8 veces `Tab`.

---

## 📈 Comparativa de la Curva Emocional (Antes vs Después)

| # | Touchpoint de la Tarea | Curva v1 (Antes) | Curva v2 (Después) | Justificación de la Variación |
| :-: | :--- | :-: | :-: | :--- |
| 1 | Acceso e inicio de matrícula | 0 | +1 | El stepper y la ayuda de teclado transmiten claridad inmediata. |
| 2 | Selección de asignatura | 0 | +1 | Catálogo limpio y badges legibles. |
| 3 | Manejo de prerrequisitos (Momento de Verdad 1) | **-2** | **+1** | Se reemplazó el fallo bloqueante por advertencia y alternativa válida directa. |
| 4 | Selección de paralelo y cupo | 0 | +1 | Disponibilidad clara de cupos en tiempo real. |
| 5 | Ingreso de datos del estudiante | +1 | +1 | Persistencia garantizada en segundo plano. |
| 6 | Revisión previa | +1 | +2 | Resumen detallado que reduce la ansiedad pre-confirmación. |
| 7 | Conflicto de cupo al confirmar (Momento de Verdad 2) | **-2** | **+1** | **El momento más crítico se convirtió en recuperación asistida:** los datos se salvan y se ofrece Paralelo B. |
| 8 | Comprobante oficial emitido | +2 | +2 | Emisión de comprobante con código hash de respaldo. |
