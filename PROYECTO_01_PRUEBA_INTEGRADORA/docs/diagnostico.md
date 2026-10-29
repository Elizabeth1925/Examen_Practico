# Diagnóstico UX y Evaluación Emocional

**Asignatura:** Interacción Humano–Computador (IHC)  
**Equipo:** Grupo 4  
**Caso de Estudio:** Variante F — Sistema de Matrícula Universitaria (SGA UTA)  

---

## 1. Mapa de Touchpoints y Curva Emocional Inicial (Estimada)

Se mapeó el recorrido del estudiante durante el proceso crítico de inscripción de asignaturas en el sistema académico. La escala de emoción oscila entre **-2 (Frustración / Desconcierto severo)** y **+2 (Confianza / Logro alto)**.

| # | Touchpoint (Punto de Contacto) | Emoción Estimada (-2 a +2) | Riesgo Identificado |
| :-: | :--- | :-: | :--- |
| **1** | **Acceso al portal SGA y selección de período** | `0` (Neutral) | Lentitud del servidor al autenticar y sobrecarga visual en la página inicial. |
| **2** | **Consulta de malla curricular y materias abiertas** | `+1` (Positiva) | Información dispersa sobre prerrequisitos y créditos aprobados. |
| **3** | **Selección de asignatura con prerrequisito pendiente** *(Momento de Verdad 1)* | `-2` (Frustración crítica) | **Fallo H5/H1:** La asignatura aparenta estar habilitada para inscripción; tras intentar inscribirse, se muestra un error tardío sin explicar qué prerrequisito falta ni dar alternativas. |
| **4** | **Revisión de cupos por paralelo** | `0` (Incertidumbre) | **Fallo H1:** Los cupos mostrados no son en tiempo real; el estudiante confía en un número desactualizado. |
| **5** | **Ingreso de datos del estudiante y modalidad** | `+1` (Aceptable) | Pérdida de datos si se recarga la página por error. |
| **6** | **Pantalla de Revisión previa** | `+1` (Alivio temporal) | Ausencia de verificación de concurrencia de cupo antes del clic final. |
| **7** | **Pulsación de "Confirmar Matrícula" con cupo agotado** *(Momento de Verdad 2)* | `-2` (Ansiedad máxima) | **Fallo H9/H3:** El cupo fue tomado milisegundos antes por otro usuario; la pantalla se bloquea, se borra el formulario y el alumno queda sin materia ni alternativas. |
| **8** | **Obtención del Comprobante Oficial de Matrícula** | `+2` (Satisfacción plena) | Sensación de seguridad, trazabilidad académica y cierre de la tarea. |

### 📌 Momentos de Verdad (Moments of Truth - MoT)
1. **Momento de Verdad 1 (Touchpoint 3 - Validación de Prerrequisitos):** El instante en que el estudiante decide matricular una materia. Si el sistema oculta el bloqueo hasta el final, genera frustración inmediata y abandono.
2. **Momento de Verdad 2 (Touchpoint 7 - Confirmación y Concurrencia de Cupos):** El momento culminante de la transacción académica. La incertidumbre sobre si la matrícula se consolidó o si el cupo se perdió de forma irreversible determina la confianza en el sistema.

---

## 2. Análisis Emocional Multinivel (Don Norman)

- **Nivel Visceral:** En la versión inicial (v1), la interfaz satura con texto denso, colores de alerta agresivos (rojos chillones) y falta de jerarquía tipográfica. En la versión corregida (v2), se utiliza una paleta institucional limpia, alto contraste para baja visión, espaciado generoso y badges de estado con íconos comprensibles al primer vistazo.
- **Nivel Conductual:** El usuario valora la eficiencia y la predictibilidad. En v2 se garantiza la conservación permanente del borrador en memoria local (`localStorage`), navegación 100% por teclado (`Tab`, `Enter`, `Escape`) y retroalimentación inmediata sobre la disponibilidad real de cupos y prerrequisitos sin tener que llegar al final.
- **Nivel Reflexivo:** El estudiante finaliza el proceso con la certeza jurídica y académica de su inscripción mediante un código hash de comprobante (`MAT-UTA-XXXXXX`), sintiendo que tuvo el control del proceso en todo momento y no fue víctima de un fallo arbitrario del sistema.

---

## 3. Hallazgos Heurísticos de Usabilidad (Jakob Nielsen)

| ID Hallazgo | Heurística de Nielsen | Descripción del Problema Detectado | Criterio de Corrección Aplicado en v2 |
| :--- | :--- | :--- | :--- |
| **H-01** | **H1: Visibilidad del estado del sistema** | Los cupos de los paralelos cambian en el servidor pero la interfaz no notifica la disponibilidad actualizada, induciendo a errores de concurrencia. Además, los usuarios de lectores de pantalla no se enteran de las alertas dinámicas. | Implementación de regiones vivas ARIA (`aria-live="polite"` y `aria-live="assertive"`), badges con estados actualizados en vivo y foco programático directo al mensaje. |
| **H-02** | **H5: Prevención de errores / H3: Control del usuario** | El botón "Inscribir" se muestra activo incluso si el estudiante no cumple con la materia correlativa anterior. Al fallar, el formulario borraba la selección previa. | Alerta contextual anticipada que desglosa el prerrequisito faltante, preserva los campos ya completados y ofrece un botón de redirección inmediata a materias alternativas habilitadas. |
| **H-03** | **H9: Reconocer, diagnosticar y recuperarse de errores** | Los mensajes de error eran genéricos (*"Error en el servidor"* o *"Operación rechazada"*), culpando al usuario y sin camino de escape ni solución viable. | Mensaje empático y constructivo que explica: *"El último cupo del Paralelo A fue tomado recientemente. Tus datos están a salvo. Puedes optar por el Paralelo B (disponible) o registrarte en lista de espera."* |

---

## 4. Registro de Issues en GitHub (Fase 1)

Para cumplir con las reglas de autenticidad y trazabilidad del repositorio, se documentan los 3 Issues fundamentales:

### 📌 Issue #1
- **Título:** `fix(ux): Bloqueo silencioso al seleccionar materia con prerrequisito pendiente`
- **Severidad:** Alta (Bloqueante)
- **Responsable:** `@Elizabeth1925` (Elizabeth De la Cruz)
- **Evidencia:** El alumno intenta inscribir *Sistemas Distribuidos* sin haber aprobado *Redes*; el sistema falla al final sin indicar la causa.
- **Criterio de Cierre:** Mostrar banner contextual anticipado que informe la materia faltante y proporcione un botón para seleccionar materias habilitadas (*IHC* o *Ingeniería de Software*) sin perder los datos personales. Enlazado al commit final.

### 📌 Issue #2
- **Título:** `feat(a11y): Soporte de lector de pantalla y alertas en vivo para cupos de matrícula`
- **Severidad:** Media (Accesibilidad)
- **Responsable:** `@SebastianVaca` (Sebastián Vaca)
- **Evidencia:** Personas con discapacidad visual o usuarios que navegan exclusivamente con teclado no reciben notificación de los cambios en los cupos de paralelo.
- **Criterio de Cierre:** Añadir atributos semánticos `aria-live="assertive"`, `aria-describedby` para cada campo y anillo de foco visible (`outline: 3px solid #0056b3`).

### 📌 Issue #3
- **Título:** `fix(recovery): Pérdida irreversible de selección tras conflicto de concurrencia en cupo`
- **Severidad:** Crítica (Integridad de datos)
- **Responsable:** `@anavero162` (Verónica Ana)
- **Evidencia:** Cuando dos alumnos intentan tomar el último cupo al mismo tiempo, el que llega un instante después pierde toda la información ingresada.
- **Criterio de Cierre:** Conservar el borrador en `localStorage`, mostrar modal accesible de resolución de conflicto y ofrecer cambio automático a paralelo disponible o lista de espera.
