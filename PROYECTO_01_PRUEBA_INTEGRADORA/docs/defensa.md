# Guía Oficial de Defensa Individual y Respuestas para el Docente

**Asignatura:** Interacción Humano–Computador (IHC) — Quinto Nivel  
**Facultad:** FISEI — Universidad Técnica de Ambato  
**Equipo:** Grupo 4 — Variante F: Matrícula Universitaria  

Esta guía contiene la preparación exhaustiva de las preguntas de defensa individual y los microcambios en vivo exigidos por la rúbrica de evaluación (Sección 8 del documento docente).

---

## 🎤 Preguntas Clave de la Tarjeta Asignada (Grupo 4)

### 1. Pregunta Tarjeta 11: ¿Cómo impide una decisión imposible sin dejar al estudiante sin salida?
> **Respuesta modelo:**  
> *"La interfaz implementa el principio de prevención de errores (Heurística H5 de Nielsen). En lugar de permitir que el estudiante pulse 'Confirmar' para luego mostrarle un error bloqueante que lo frustre, el sistema detecta de forma inmediata y contextual que la asignatura posee un prerrequisito pendiente. Crucialmente, la interfaz no se convierte en un 'callejón sin salida': en el mismo banner contextual explicativo se incorpora un control de acción directa que le ofrece matricularse en una asignatura habilitada de su semestre (por ejemplo, Interacción Humano-Computador). De este modo, se preserva el flujo cognitivo, se mantiene la autonomía del usuario (H3) y se evita que deba reiniciar el trámite desde cero."*

### 2. Pregunta Tarjeta 12: ¿Cómo demuestra que la interfaz nunca confirma un cupo inexistente?
> **Respuesta modelo:**  
> *"Lo demuestro mediante la arquitectura de dos fases de confirmación en JavaScript (`prototipo/v2/app.js`). Cuando el estudiante pulsa 'Confirmar Matrícula', el botón entra en estado de procesamiento (`disabled=true`) para prevenir dobles envíos. El sistema simula la comprobación de concurrencia en el servidor. Si el cupo del Paralelo A fue tomado milisegundos antes por otro usuario, la interfaz **interrumpe la confirmación, nunca emite el código hash `MAT-UTA`** y transiciona a un estado de conflicto visible y audible. En este estado se anuncia mediante una región accesible con `aria-live="assertive"` que el cupo se agotó, manteniendo todos los datos del estudiante intactos en `localStorage` y ofreciendo en pantalla una alternativa inmediata (Paralelo B con cupo disponible o inscripción en lista de espera). Sólo cuando se valida una plaza disponible real, se genera el comprobante definitivo."*

---

## 🎯 Respuestas a las Preguntas Generales de Defensa (Sección 8)

### Pregunta 1: Abra el archivo que implementó y explique qué requisito resuelve y cómo se comprueba.
- **Elizabeth De la Cruz:** Abre `prototipo/v2/app.js`. Resuelve el requisito **R7 (Gestión de conflicto de cupo e incidencia sorpresa)** y **RF-05 (Conservación de borrador)**. Se comprueba al llenar los datos y confirmar: la primera vez simula que el cupo se agotó; los datos no se borran y el usuario puede cambiar a Paralelo B en un solo clic.
- **Sebastián Vaca:** Abre `prototipo/v2/index.html` y `styles.css`. Resuelve el requisito **RF-02 (Accesibilidad 100% por teclado y foco)** y **RF-03 (Atributos semánticos ARIA)**. Se comprueba navegando sin usar el ratón mediante `Tab` y `Shift + Tab`, verificando el anillo de foco azul de 3px y comprobando cómo un lector de pantalla verbaliza los avisos dinámicos mediante `aria-live`.
- **Verónica Ana:** Abre `docs/diagnostico.md`, `diagramas/navegacion.md` y `pruebas/sesion.md`. Resuelve la trazabilidad de los momentos de verdad y la mitigación de los valles emocionales (-2 a +2). Se comprueba mostrando la curva emocional y el registro de la prueba con usuario donde se redujo el tiempo de la tarea de 145s a 48s.

---

### Pregunta 2: Localice un fallo en la curva emocional; enseñe el Issue, su corrección y el nuevo resultado.
- **Fallo identificado:** En el Touchpoint 7 (Pulsación de Confirmar con cupo agotado), la curva caía a `-2` (Frustración crítica) porque el sistema borraba el formulario.
- **Issue enlazado:** `Issue #3: fix(recovery): Pérdida irreversible de selección tras conflicto de concurrencia en cupo`.
- **Corrección aplicada:** En `v2`, se implementó persistencia en `localStorage` y el modal de recuperación con alternativa de Paralelo B.
- **Nuevo resultado:** En la curva después (v2), este punto sube a `+1` (Tranquilidad / Control), ya que el estudiante no pierde su tiempo ni sus datos.

---

### Pregunta 3: Demuestre el recorrido de error sin perder datos del usuario.
- **Demostración en vivo:**
  1. Abrir `prototipo/v2/index.html`.
  2. Presionar `Tab` hasta "Comenzar" y pulsar `Enter`.
  3. Ingresar el código de estudiante `2026-UTA-0412`, seleccionar paralelo A y pulsar "Revisar".
  4. En la pantalla de revisión, pulsar "Confirmar".
  5. Aparece la alerta roja de conflicto: *"El cupo del Paralelo A se agotó hace un instante. Tus datos están guardados."*
  6. Pulsar el botón *"Cambiar a Paralelo B disponible"*.
  7. El estudiante nota que su código y su selección siguen intactos en el formulario sin tener que volver a escribirlos.

---

### Pregunta 4: Explique por qué la técnica y la fidelidad elegidas responden al riesgo del caso.
> *"Elegimos un prototipo funcional en código web nativo (HTML5/CSS/JS) con profundidad media-alta porque el riesgo central del sistema de matrícula es la **accesibilidad universal (WCAG)** y la **pérdida de datos por concurrencia en tiempo real**. Un prototipo estático en Figma o en papel no permite verificar si un lector de pantalla anuncia los cambios de estado (`aria-live`), ni comprobar si el teclado queda atrapado, ni demostrar la persistencia en almacenamiento local ante fallos."*

---

### Pregunta 5: Muéstrenos un PR revisado por usted: ¿qué detectó y qué se corrigió?
> *"En el Pull Request `#2` correspondiente a la rama `feature/accesibilidad-y-conflicto`, durante la revisión cruzada se detectó que el mensaje de cupo agotado utilizaba solo un cambio de color rojo (`.notice.bad`), lo cual violaba el criterio WCAG 1.4.1 (Uso del color) y no era anunciado por NVDA. Se solicitó y aplicó la corrección agregando el atributo `role="alert"` y `aria-live="assertive"`, asegurando que el lector de pantalla interrumpa y verbalice de inmediato el estado al usuario ciego."*

---

## 🛠️ Microcambios en Vivo Preparados (Por si el docente solicita editar código)

1. **Modificar un mensaje de error:**
   - En `prototipo/v2/app.js`, línea 5: cambiar `'Este campo es obligatorio'` por `'Por favor, ingresa tu código de estudiante de la UTA'`.
2. **Cambiar el color o grosor del foco de teclado:**
   - En `prototipo/v2/styles.css`, selector `:focus-visible`: cambiar `3px solid #0056b3` por `4px solid #d9381e` (rojo institucional) o `outline-offset: 4px`.
3. **Cambiar el tiempo de simulación de carga:**
   - En `prototipo/v2/app.js`, en `setTimeout(..., 700)`: cambiar `700` por `1200` milisegundos para mostrar una carga más prolongada.
4. **Agregar un nuevo campo al formulario:**
   - En `index.html`, agregar un `<input id="career" name="career">` y registrar su variable en `app.js`.
