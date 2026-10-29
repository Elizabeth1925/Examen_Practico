# UNIVERSIDAD TÉCNICA DE AMBATO
## FACULTAD DE INGENIERÍA EN SISTEMAS, ELECTRÓNICA E INDUSTRIAL (FISEI)
### CARRERA DE SOFTWARE — QUINTO NIVEL
**ASIGNATURA:** INTERACCIÓN HUMANO–COMPUTADOR (IHC)  
**TEMA:** INFORME TÉCNICO DE LA PRUEBA PRÁCTICA INTEGRADORA — MATRÍCULA UNIVERSITARIA (SGA)  
**EQUIPO:** GRUPO 4 (VARIANTE F)  
**INTEGRANTES:**  
- Elizabeth De la Cruz (@Elizabeth1925)  
- Sebastián Vaca (@SebastianVaca)  
- Verónica Ana (@anavero162)  
- Andrew Lara (@AndrewLara)  
**FECHA:** 29 de octubre de 2026  

---

# ÍNDICE GENERAL DEL DOCUMENTO
1. Resumen Ejecutivo y Alcance del Caso (Variante F)
2. Fase 1: Diagnóstico Emocional, Heurísticas y Touchpoints
3. Fase 2: Arquitectura de la Información, Requisitos y Wireframes
4. Fase 3: Prototipado Web, Interacción y Accesibilidad (v1 vs v2)
5. Fase 4: Pruebas Empíricas de Usabilidad con Observación y Métricas
6. Fase 5: Resolución de Incidencias Sorpresa (Tarjetas 11 y 12)
7. Trazabilidad de GitHub (Issues, Ramas, Pull Request y Merge)
8. Guía para la Defensa Individual y Respuestas al Docente

---

# DiagnÃ³stico UX y EvaluaciÃ³n Emocional

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC)  
**Equipo:** Grupo 4  
**Caso de Estudio:** Variante F â€” Sistema de MatrÃ­cula Universitaria (SGA UTA)  

---

## 1. Mapa de Touchpoints y Curva Emocional Inicial (Estimada)

Se mapeÃ³ el recorrido del estudiante durante el proceso crÃ­tico de inscripciÃ³n de asignaturas en el sistema acadÃ©mico. La escala de emociÃ³n oscila entre **-2 (FrustraciÃ³n / Desconcierto severo)** y **+2 (Confianza / Logro alto)**.

| # | Touchpoint (Punto de Contacto) | EmociÃ³n Estimada (-2 a +2) | Riesgo Identificado |
| :-: | :--- | :-: | :--- |
| **1** | **Acceso al portal SGA y selecciÃ³n de perÃ­odo** | `0` (Neutral) | Lentitud del servidor al autenticar y sobrecarga visual en la pÃ¡gina inicial. |
| **2** | **Consulta de malla curricular y materias abiertas** | `+1` (Positiva) | InformaciÃ³n dispersa sobre prerrequisitos y crÃ©ditos aprobados. |
| **3** | **SelecciÃ³n de asignatura con prerrequisito pendiente** *(Momento de Verdad 1)* | `-2` (FrustraciÃ³n crÃ­tica) | **Fallo H5/H1:** La asignatura aparenta estar habilitada para inscripciÃ³n; tras intentar inscribirse, se muestra un error tardÃ­o sin explicar quÃ© prerrequisito falta ni dar alternativas. |
| **4** | **RevisiÃ³n de cupos por paralelo** | `0` (Incertidumbre) | **Fallo H1:** Los cupos mostrados no son en tiempo real; el estudiante confÃ­a en un nÃºmero desactualizado. |
| **5** | **Ingreso de datos del estudiante y modalidad** | `+1` (Aceptable) | PÃ©rdida de datos si se recarga la pÃ¡gina por error. |
| **6** | **Pantalla de RevisiÃ³n previa** | `+1` (Alivio temporal) | Ausencia de verificaciÃ³n de concurrencia de cupo antes del clic final. |
| **7** | **PulsaciÃ³n de "Confirmar MatrÃ­cula" con cupo agotado** *(Momento de Verdad 2)* | `-2` (Ansiedad mÃ¡xima) | **Fallo H9/H3:** El cupo fue tomado milisegundos antes por otro usuario; la pantalla se bloquea, se borra el formulario y el alumno queda sin materia ni alternativas. |
| **8** | **ObtenciÃ³n del Comprobante Oficial de MatrÃ­cula** | `+2` (SatisfacciÃ³n plena) | SensaciÃ³n de seguridad, trazabilidad acadÃ©mica y cierre de la tarea. |

### ðŸ“Œ Momentos de Verdad (Moments of Truth - MoT)
1. **Momento de Verdad 1 (Touchpoint 3 - ValidaciÃ³n de Prerrequisitos):** El instante en que el estudiante decide matricular una materia. Si el sistema oculta el bloqueo hasta el final, genera frustraciÃ³n inmediata y abandono.
2. **Momento de Verdad 2 (Touchpoint 7 - ConfirmaciÃ³n y Concurrencia de Cupos):** El momento culminante de la transacciÃ³n acadÃ©mica. La incertidumbre sobre si la matrÃ­cula se consolidÃ³ o si el cupo se perdiÃ³ de forma irreversible determina la confianza en el sistema.

---

## 2. AnÃ¡lisis Emocional Multinivel (Don Norman)

- **Nivel Visceral:** En la versiÃ³n inicial (v1), la interfaz satura con texto denso, colores de alerta agresivos (rojos chillones) y falta de jerarquÃ­a tipogrÃ¡fica. En la versiÃ³n corregida (v2), se utiliza una paleta institucional limpia, alto contraste para baja visiÃ³n, espaciado generoso y badges de estado con Ã­conos comprensibles al primer vistazo.
- **Nivel Conductual:** El usuario valora la eficiencia y la predictibilidad. En v2 se garantiza la conservaciÃ³n permanente del borrador en memoria local (`localStorage`), navegaciÃ³n 100% por teclado (`Tab`, `Enter`, `Escape`) y retroalimentaciÃ³n inmediata sobre la disponibilidad real de cupos y prerrequisitos sin tener que llegar al final.
- **Nivel Reflexivo:** El estudiante finaliza el proceso con la certeza jurÃ­dica y acadÃ©mica de su inscripciÃ³n mediante un cÃ³digo hash de comprobante (`MAT-UTA-XXXXXX`), sintiendo que tuvo el control del proceso en todo momento y no fue vÃ­ctima de un fallo arbitrario del sistema.

---

## 3. Hallazgos HeurÃ­sticos de Usabilidad (Jakob Nielsen)

| ID Hallazgo | HeurÃ­stica de Nielsen | DescripciÃ³n del Problema Detectado | Criterio de CorrecciÃ³n Aplicado en v2 |
| :--- | :--- | :--- | :--- |
| **H-01** | **H1: Visibilidad del estado del sistema** | Los cupos de los paralelos cambian en el servidor pero la interfaz no notifica la disponibilidad actualizada, induciendo a errores de concurrencia. AdemÃ¡s, los usuarios de lectores de pantalla no se enteran de las alertas dinÃ¡micas. | ImplementaciÃ³n de regiones vivas ARIA (`aria-live="polite"` y `aria-live="assertive"`), badges con estados actualizados en vivo y foco programÃ¡tico directo al mensaje. |
| **H-02** | **H5: PrevenciÃ³n de errores / H3: Control del usuario** | El botÃ³n "Inscribir" se muestra activo incluso si el estudiante no cumple con la materia correlativa anterior. Al fallar, el formulario borraba la selecciÃ³n previa. | Alerta contextual anticipada que desglosa el prerrequisito faltante, preserva los campos ya completados y ofrece un botÃ³n de redirecciÃ³n inmediata a materias alternativas habilitadas. |
| **H-03** | **H9: Reconocer, diagnosticar y recuperarse de errores** | Los mensajes de error eran genÃ©ricos (*"Error en el servidor"* o *"OperaciÃ³n rechazada"*), culpando al usuario y sin camino de escape ni soluciÃ³n viable. | Mensaje empÃ¡tico y constructivo que explica: *"El Ãºltimo cupo del Paralelo A fue tomado recientemente. Tus datos estÃ¡n a salvo. Puedes optar por el Paralelo B (disponible) o registrarte en lista de espera."* |

---

## 4. Registro de Issues en GitHub (Fase 1)

Para cumplir con las reglas de autenticidad y trazabilidad del repositorio, se documentan los 3 Issues fundamentales:

### ðŸ“Œ Issue #1
- **TÃ­tulo:** `fix(ux): Bloqueo silencioso al seleccionar materia con prerrequisito pendiente`
- **Severidad:** Alta (Bloqueante)
- **Responsable:** `@Elizabeth1925` (Elizabeth De la Cruz)
- **Evidencia:** El alumno intenta inscribir *Sistemas Distribuidos* sin haber aprobado *Redes*; el sistema falla al final sin indicar la causa.
- **Criterio de Cierre:** Mostrar banner contextual anticipado que informe la materia faltante y proporcione un botÃ³n para seleccionar materias habilitadas (*IHC* o *IngenierÃ­a de Software*) sin perder los datos personales. Enlazado al commit final.

### ðŸ“Œ Issue #2
- **TÃ­tulo:** `feat(a11y): Soporte de lector de pantalla y alertas en vivo para cupos de matrÃ­cula`
- **Severidad:** Media (Accesibilidad)
- **Responsable:** `@SebastianVaca` (SebastiÃ¡n Vaca)
- **Evidencia:** Personas con discapacidad visual o usuarios que navegan exclusivamente con teclado no reciben notificaciÃ³n de los cambios en los cupos de paralelo.
- **Criterio de Cierre:** AÃ±adir atributos semÃ¡nticos `aria-live="assertive"`, `aria-describedby` para cada campo y anillo de foco visible (`outline: 3px solid #0056b3`).

### ðŸ“Œ Issue #3
- **TÃ­tulo:** `fix(recovery): PÃ©rdida irreversible de selecciÃ³n tras conflicto de concurrencia en cupo`
- **Severidad:** CrÃ­tica (Integridad de datos)
- **Responsable:** `@anavero162` (VerÃ³nica Ana)
- **Evidencia:** Cuando dos alumnos intentan tomar el Ãºltimo cupo al mismo tiempo, el que llega un instante despuÃ©s pierde toda la informaciÃ³n ingresada.
- **Criterio de Cierre:** Conservar el borrador en `localStorage`, mostrar modal accesible de resoluciÃ³n de conflicto y ofrecer cambio automÃ¡tico a paralelo disponible o lista de espera.


---

# Requisitos Observables y Funcionales

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC)  
**Sistema:** Sistema de MatrÃ­cula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 â€” Variante F (MatrÃ­cula)  

---

## ðŸ“‹ CatÃ¡logo de Requisitos Observables (RF-01 a RF-06 + R7 Incidencia)

| ID Requisito | Tipo | Enunciado del Requisito | Criterio de AceptaciÃ³n y ComprobaciÃ³n Observable |
| :--- | :---: | :--- | :--- |
| **RF-01** | Observable | **CatÃ¡logo de asignaturas y paralelos con disponibilidad visible.** | La interfaz presenta de forma clara las materias ofertadas, sus paralelos y el nÃºmero de cupos disponibles en tiempo real antes de iniciar la selecciÃ³n. |
| **RF-02** | Accesible | **Operabilidad 100% por teclado y foco visible.** | Todos los controles (botones, selectores, campos de texto y enlaces) pueden enfocarse y accionarse mediante `Tab`, `Shift + Tab`, `Enter` y `Espacio`, contando con un indicador de foco visible de alto contraste (anillo de 3px). |
| **RF-03** | Contextual | **ValidaciÃ³n en contexto de prerrequisitos sin revelaciÃ³n indebida (Tarjeta 11).** | Si se selecciona una asignatura que posea prerrequisitos acadÃ©micos pendientes, el sistema advierte inmediatamente mediante un mensaje asociado (`aria-describedby`), explicando la causa sin exponer datos ajenos y ofreciendo una ruta hacia materias habilitadas. |
| **RF-04** | Preventivo | **Pantalla de revisiÃ³n y resumen antes de la confirmaciÃ³n.** | Antes de enviar la transacciÃ³n de matrÃ­cula a la base de datos, se presenta una pantalla de confirmaciÃ³n estructurada con el resumen de la asignatura, paralelo, horario y cÃ³digo del estudiante, con opciÃ³n de corregir o editar. |
| **RF-05** | Tolerancia | **Persistencia de borrador ante fallo o error recuperable.** | Los datos ingresados por el estudiante se guardan localmente en memoria (`localStorage`). Si ocurre una interrupciÃ³n de red o fallo de validaciÃ³n, la informaciÃ³n permanece intacta y no se borra. |
| **RF-06** | RetroalimentaciÃ³n | **EmisiÃ³n de comprobante oficial de matrÃ­cula accesible.** | Tras una confirmaciÃ³n exitosa, el sistema presenta un comprobante legible con un cÃ³digo hash Ãºnico de matrÃ­cula (`MAT-UTA-XXXXXX`), anunciado por lector de pantalla mediante regiÃ³n viva. |
| **R7 (Incidencia)** | **Imprevisto** | **GestiÃ³n de conflicto de cupo concurrente y anuncio accesible (Tarjeta 12).** | Si el cupo seleccionado se agota en el momento de pulsar "Confirmar MatrÃ­cula", el sistema simula el conflicto, **evita una confirmaciÃ³n falsa**, actualiza el estado de disponibilidad mediante `aria-live="assertive"`, conserva todos los datos ingresados y ofrece alternativas inmediatas (Paralelo alternativo B o ingreso a Lista de Espera). |

---

## ðŸ—ºï¸ Sitemap Estructurado del Proceso

```text
SGA MatrÃ­cula (Inicio)
 â”œâ”€â”€ 1. Panel Informativo (PerÃ­odo AcadÃ©mico, Requisitos y Acceso Teclado)
 â”œâ”€â”€ 2. Formulario de SelecciÃ³n e InscripciÃ³n
 â”‚    â”œâ”€â”€ SelecciÃ³n de Asignatura (ValidaciÃ³n automÃ¡tica de prerrequisitos)
 â”‚    â”œâ”€â”€ SelecciÃ³n de Paralelo (Indicador de cupos en tiempo real)
 â”‚    â”œâ”€â”€ Datos del Estudiante (CÃ³digo y validaciÃ³n contextual)
 â”‚    â””â”€â”€ [AcciÃ³n Cancelar con confirmaciÃ³n segura]
 â”œâ”€â”€ 3. Pantalla de RevisiÃ³n Previa
 â”‚    â”œâ”€â”€ Resumen consolidado de la matrÃ­cula
 â”‚    â”œâ”€â”€ [BotÃ³n Editar / Modificar datos]
 â”‚    â””â”€â”€ [BotÃ³n Confirmar MatrÃ­cula]
 â”œâ”€â”€ 4. GestiÃ³n de Excepciones y Conflictos (R7 / Tarjetas 11 y 12)
 â”‚    â”œâ”€â”€ Rama A: Conflicto de Cupo Concurrente (Ofrecer Paralelo B / Lista de espera)
 â”‚    â””â”€â”€ Rama B: Prerrequisito Pendiente (RedirecciÃ³n a materia electiva habilitada)
 â””â”€â”€ 5. Pantalla de Resultado
      â”œâ”€â”€ Estado de Ã‰xito: Comprobante oficial con cÃ³digo Ãºnico `MAT-UTA-XXXXXX`
      â””â”€â”€ OpciÃ³n de Nueva MatrÃ­cula o Cierre de SesiÃ³n
```

---

## ðŸ”€ User Flow (Flujo del Usuario con Rama de Ã‰xito y de Conflicto)

```text
[Inicio] 
   â”‚
   â–¼
[Formulario de MatrÃ­cula]
   â”‚
   â”œâ”€â–º Â¿Tiene prerrequisito pendiente? (Tarjeta 11)
   â”‚     â”œâ”€â–º SÃ: Muestra aviso contextual explicativo + botÃ³n "Elegir materia alternativa"
   â”‚     â””â”€â–º NO: Permite continuar
   â”‚
   â–¼
[Completar Paralelo y CÃ³digo de Estudiante]
   â”‚
   â”œâ”€â–º Â¿Campo vacÃ­o o invÃ¡lido? â”€â”€â–º [Marca campo + mensaje aria-describedby + Foco en error]
   â”‚
   â–¼
[Pantalla de RevisiÃ³n]
   â”‚
   â–¼
[Pulsar "Confirmar MatrÃ­cula"] â”€â”€â–º [Estado de Carga: Spinner y botÃ³n deshabilitado temporalmente]
   â”‚
   â”œâ”€â–º [RAMA DE CONFLICTO R7 / Tarjeta 12]:
   â”‚     Cupo tomado concurrentemente por otro estudiante
   â”‚     â”œâ”€ Preserva todos los datos en borrador
   â”‚     â”œâ”€ RegiÃ³n aria-live anuncia: "El cupo del Paralelo A se agotÃ³ hace un instante"
   â”‚     â”œâ”€ Ofrece opciones de recuperaciÃ³n:
   â”‚     â”‚    â”œâ”€ Cambiar a Paralelo B (disponible)
   â”‚     â”‚    â””â”€ Inscribirse en Lista de Espera con notificaciÃ³n
   â”‚     â””â”€ Permite reintentar sin reescribir nada
   â”‚
   â””â”€â–º [RAMA DE Ã‰XITO]:
         â”œâ”€ ConfirmaciÃ³n oficial registrada
         â”œâ”€ Muestra cÃ³digo Ãºnico MAT-UTA-XXXXXX
         â”œâ”€ Anuncio por lector de pantalla (aria-live="polite")
         â””â”€ Limpieza controlada del borrador y opciÃ³n de finalizar
```


---

# Matriz de Trazabilidad Completa

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC)  
**Sistema:** MatrÃ­cula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 â€” Variante F (MatrÃ­cula)  

---

## ðŸ”— Matriz Requisito â†’ Pantalla â†’ Flujo â†’ Componente â†’ Wireframe

| ID Req. | Requisito Observable | Pantalla / Vista | Paso en el User Flow | Componentes UI (Atomic Design) | Wireframe Asociado |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **RF-01** | CatÃ¡logo de asignaturas y paralelos con disponibilidad visible | Pantalla 1: Inicio / Pantalla 2: Formulario | Inicio â†’ SelecciÃ³n | Lista desplegable `<select>`, badges de cupos, banner informativo | **WF-01 / WF-02** |
| **RF-02** | Operabilidad 100% por teclado y foco visible | Todas las pantallas (1 a 4) | Todo el recorrido | Anillo de foco CSS (`:focus-visible`), botÃ³n saltar al contenido (`skip-link`), eventos `keydown` | **WF-01 a WF-04** |
| **RF-03** | ValidaciÃ³n de prerrequisitos contextual sin revelar datos ajenos (T11) | Pantalla 2: Formulario | SelecciÃ³n de asignatura | Banner de advertencia contextual, botÃ³n selector de materia habilitada, texto `aria-describedby` | **WF-02** |
| **RF-04** | Pantalla de revisiÃ³n y resumen antes de confirmar | Pantalla 3: RevisiÃ³n | RevisiÃ³n previa | Contenedor de resumen en dos columnas, botÃ³n secundario "Modificar", botÃ³n primario "Confirmar" | **WF-04** |
| **RF-05** | Persistencia de borrador ante fallo o error recuperable | Pantalla 2: Formulario / Pantalla 4: Resultado | Error / Reintento | Almacenamiento local `localStorage`, manejador `input` y `change`, funciÃ³n `restoreDraft` | **WF-03** |
| **RF-06** | EmisiÃ³n de comprobante oficial de matrÃ­cula accesible | Pantalla 4: Resultado | Ã‰xito y comprobante | Contenedor de comprobante, cÃ³digo hash dinÃ¡mico `MAT-UTA-XXXXXX`, regiÃ³n `aria-live="polite"` | **WF-04** |
| **R7 (Incidencia)** | GestiÃ³n de conflicto de cupos concurrentes y anuncio accesible (T12) | Pantalla 3: RevisiÃ³n â†’ Pantalla 4: Conflicto | Confirmar â†’ Conflicto de cupo | Alerta `role="alert"` (`aria-live="assertive"`), botones de alternativa ("Cambiar a Paralelo B" / "Lista de espera") | **WF-03 (Incidencia)** |

---

## ðŸ“Œ JustificaciÃ³n de Trazabilidad para la EvaluaciÃ³n

1. **GarantÃ­a de no regresiÃ³n:** La adiciÃ³n del requisito **R7 (Incidencia Sorpresa de Tarjeta 12 y 11)** no destruye los flujos previos de RF-01 a RF-06; los amplÃ­a agregando una bifurcaciÃ³n de recuperaciÃ³n ante estados no previstos.
2. **Defensa ante el evaluador:** Cada elemento visible en la interfaz tiene un origen formal en los requisitos y un reflejo directo en los wireframes y el cÃ³digo JavaScript.


---

# Inventario de Componentes UI (Atomic Design)

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC)  
**Sistema:** MatrÃ­cula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 â€” Variante F (MatrÃ­cula)  

El diseÃ±o del sistema de matrÃ­cula se estructura mediante la metodologÃ­a **Atomic Design**, asegurando consistencia, accesibilidad WCAG 2.1 AA y modularidad.

---

## 1. Ãtomos (Elementos base indivisibles)
- **TipografÃ­a y Textos:** Etiquetas `<label>` con asociaciÃ³n `for`, textos descriptivos `id="*-help"`, y tÃ­tulos jerÃ¡rquicos `<h1>`, `<h2>`.
- **Campos de Entrada:** Inputs de texto `<input id="studentCode">`, selectores desplegables `<select>` con indicaciÃ³n de cupos.
- **Botones de AcciÃ³n:** BotÃ³n primario (`.primary`), secundario (`.secondary`), destructivo (`.danger`) y botones alternativos de resoluciÃ³n rÃ¡pida (`.alternative`).
- **Indicadores de Estado:** Badges de disponibilidad (ej. `Cupos: 2`, `Agotado`), spinner SVG animado para procesamiento no bloqueante.
- **Indicador de Foco:** Anillo CSS de alto contraste (`outline: 3px solid #0056b3; outline-offset: 2px`).

---

## 2. MolÃ©culas (Combinaciones funcionales de Ã¡tomos)
- **Campo de Formulario Validado:** CombinaciÃ³n de `<label>`, `<select>` o `<input>`, y `<p class="error" id="*-error">` vinculado mediante `aria-describedby`.
- **Banner Contextual de Prerrequisitos (Tarjeta 11):** Contenedor con Ã­cono de advertencia, descripciÃ³n de la materia correlativa faltante y botÃ³n directo *"Seleccionar IHC (Habilitada)"*.
- **Grupo de Acciones:** Barra horizontal con botÃ³n *"Regresar"*, *"Cancelar borrador"* y *"Continuar a revisiÃ³n"*.
- **Fila de Resumen:** Par clave-valor accesible (`<strong>Asignatura:</strong> <span>InteracciÃ³n Humano-Computador</span>`).
- **Alerta Accesible de Conflicto de Cupo (Tarjeta 12):** NotificaciÃ³n dinÃ¡mica con `role="alert"` y `aria-live="assertive"` con opciones de recuperaciÃ³n rÃ¡pida en un clic.

---

## 3. Organismos (Secciones funcionales completas)
- **Stepper de Progreso:** Lista ordenada `<ol class="stepper">` con estados semÃ¡nticos (`active`, `completed`) para orientar la ubicaciÃ³n del usuario en el flujo de 4 pasos.
- **Formulario de SelecciÃ³n AcadÃ©mica:** Organismo central que agrupa los campos de materia, paralelo con cupo en vivo, cÃ³digo de estudiante y validaciones en tiempo real.
- **Panel de RevisiÃ³n Previa:** Organismo que consolida la informaciÃ³n seleccionada para que el estudiante valide antes de la persistencia final.
- **Panel de Resultado y Comprobante:** Organismo que renderiza la confirmaciÃ³n oficial o el estado de conflicto de cupos con alternativas.

---

## 4. Plantillas (Layouts estructurales)
- **Layout Shell Centrado:** Estructura con encabezado institucional UTA, saltador al contenido accesible (`.skip-link`), contenedor principal de 760px con contraste adecuado y pie de pÃ¡gina institucional.

---

## 5. PÃ¡ginas / Vistas
- **Vista 1 (Inicio):** Bienvenida, instrucciones de teclado y botÃ³n "Iniciar MatrÃ­cula".
- **Vista 2 (SelecciÃ³n y Datos):** Formulario interactivo con detecciÃ³n de prerrequisitos y cupos.
- **Vista 3 (RevisiÃ³n):** Resumen de selecciÃ³n antes de la confirmaciÃ³n formal.
- **Vista 4 (Resultado):** Manejo de estados (Carga, Conflicto de Cupo / Error Recuperable, o Comprobante Exitoso).


---

# Sitemap del Sistema de MatrÃ­cula Universitaria

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC)  
**Sistema:** MatrÃ­cula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 â€” Variante F (MatrÃ­cula)  

---

## ðŸ—ºï¸ Mapa del Sitio (Sitemap)

```mermaid
graph TD
    A["Inicio (SGA MatrÃ­cula)"] --> B["SelecciÃ³n de Asignaturas y Datos"]
    B --> C{"ValidaciÃ³n de Prerrequisitos (T11)"}
    C -- "Pendiente" --> D["Aviso de Prerrequisito y Oferta de Materia Habilitada"]
    D --> B
    C -- "Aprobado" --> E["Completar Paralelo y CÃ³digo"]
    E --> F["RevisiÃ³n Previa de la MatrÃ­cula"]
    F --> G{"Procesamiento y Concurrencia de Cupo"}
    G -- "Conflicto de Cupo (R7 / T12)" --> H["ResoluciÃ³n de Conflicto (Paralelo B / Lista de Espera)"]
    H --> F
    G -- "Cupo Confirmado" --> I["Resultado Exitoso y Comprobante Oficial"]
```

### DescripciÃ³n de Niveles:
1. **Nivel 1 â€” Entrada:** Vista de bienvenida, instrucciones de accesibilidad por teclado y botÃ³n de inicio.
2. **Nivel 2 â€” Formulario:** Entrada de datos, selecciÃ³n de asignatura, detecciÃ³n automÃ¡tica de correlativas y selecciÃ³n de paralelo con cupos visibles.
3. **Nivel 3 â€” RevisiÃ³n:** Resumen completo previo a la escritura en base de datos para prevenir envÃ­os accidentales.
4. **Nivel 4 â€” Excepciones y RecuperaciÃ³n:** GestiÃ³n de conflicto de concurrencia y reasignaciÃ³n de cupos sin pÃ©rdida de datos.
5. **Nivel 5 â€” Cierre Transaccional:** GeneraciÃ³n y descarga del comprobante formal con cÃ³digo `MAT-UTA-XXXXXX`.


---

# Diagrama de NavegaciÃ³n y Flujo de Usuario (User Flow)

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC)  
**Sistema:** MatrÃ­cula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 â€” Variante F (MatrÃ­cula)  

---

## ðŸ”€ Diagrama de Flujo Completo con Ramas de ExcepciÃ³n (Mermaid)

```mermaid
flowchart TD
    Inicio["1. Inicio: Portal de MatrÃ­cula"] -->|"Comenzar [Enter/Clic]"| Form["2. Formulario de SelecciÃ³n"]
    
    Form -->|"Selecciona Asignatura"| CheckPre{"Â¿Prerrequisito pendiente? (T11)"}
    CheckPre -- "SÃ­" --> BannerPre["Alerta contextual: Prerrequisito no cumplido\n+ BotÃ³n: Seleccionar materia alternativa"]
    BannerPre -->|"Elegir alternativa"| Form
    CheckPre -- "No" --> InputData["Ingresar Paralelo y CÃ³digo de Estudiante"]
    
    InputData -->|"Cancelar"| ModalCancel{"Â¿Seguro de cancelar?"}
    ModalCancel -- "Confirmar cancelaciÃ³n" --> Inicio
    ModalCancel -- "Deshacer / Regresar" --> Form
    
    InputData -->|"ValidaciÃ³n local"| ValCheck{"Â¿Campos vÃ¡lidos?"}
    ValCheck -- "No" --> FormError["Mostrar error junto al campo\nFocus programÃ¡tico al primer error"]
    FormError --> Form
    ValCheck -- "SÃ­" --> Review["3. Pantalla de RevisiÃ³n Previa"]
    
    Review -->|"Modificar datos"| Form
    Review -->|"Confirmar MatrÃ­cula"| Loading["Estado de Procesamiento (Spinner + disabled)"]
    
    Loading --> CheckSlot{"Â¿Cupo disponible simultÃ¡neamente? (R7 / T12)"}
    
    CheckSlot -- "No: Cupo tomado por otro" --> ConflictState["Estado de Conflicto de Cupo\n- Conserva datos en localStorage\n- Anuncio por lector: aria-live='assertive'\n- Ofrece: Cambiar a Paralelo B o Lista de espera"]
    ConflictState -->|"Cambiar a Paralelo B"| Review
    
    CheckSlot -- "SÃ­: Cupo asegurado" --> Success["4. Comprobante Oficial Generado\n- CÃ³digo Ãºnico MAT-UTA-XXXXXX\n- Limpieza segura de borrador\n- Feedback accesible aria-live='polite'"]
    
    Success -->|"Finalizar / Nueva matrÃ­cula"| Inicio
```

### Reglas de NavegaciÃ³n por Teclado:
- `Tab` / `Shift + Tab`: Desplazamiento secuencial a travÃ©s del Ã¡rbol DOM interactivo.
- `Enter` / `Espacio`: EjecuciÃ³n de la acciÃ³n seleccionada.
- `Escape`: Cierre de diÃ¡logos de advertencia o foco al botÃ³n de cancelaciÃ³n cuando se encuentra en el formulario.


---

# Wireframes Lo-Fi del Sistema de MatrÃ­cula Universitaria

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC)  
**Sistema:** MatrÃ­cula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 â€” Variante F (MatrÃ­cula)  

A continuaciÃ³n se presentan los cuatro wireframes de baja fidelidad (Lo-Fi) que modelan la estructura visual, la jerarquÃ­a de contenidos y los estados de error y recuperaciÃ³n.

---

## ðŸ“ WF-01: Pantalla de Inicio (Acceso y Bienvenida)

```text
+-----------------------------------------------------------------------+
| [Logo UTA]  SISTEMA DE MATRÃCULA UNIVERSITARIA (SGA)     [Usuario]   |
+-----------------------------------------------------------------------+
|                                                                       |
|   MATRÃCULA ORDINARIA â€” PERÃODO ACADÃ‰MICO 2026-B                      |
|                                                                       |
|   Bienvenido/a al portal de inscripciÃ³n de asignaturas de la FISEI.   |
|                                                                       |
|   [ ! ] Modo accesible activo: Puede navegar este sistema usando      |
|         exclusivamente el teclado (Tab, Enter, Escape).               |
|                                                                       |
|   Tus selecciones se guardarÃ¡n automÃ¡ticamente en tu borrador.       |
|                                                                       |
|                    [ Iniciar Proceso de MatrÃ­cula ]                   |
|                                                                       |
+-----------------------------------------------------------------------+
| Universidad TÃ©cnica de Ambato Â· FISEI Â· Carrera de Software           |
+-----------------------------------------------------------------------+
```

---

## ðŸ“ WF-02: Formulario de SelecciÃ³n con DetecciÃ³n de Prerrequisitos (Tarjeta 11)

```text
+-----------------------------------------------------------------------+
| [1. Inicio] =====> [ 2. SelecciÃ³n de Materia ] ----> [ 3. RevisiÃ³n ]  |
+-----------------------------------------------------------------------+
|                                                                       |
|   Paso 2: SelecciÃ³n AcadÃ©mica y Datos del Estudiante                  |
|                                                                       |
|   Asignatura a Matricular:                                            |
|   [ Sistemas Distribuidos                             | v ]           |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | /!\ RESTRICCIÃ“N DE PRERREQUISITO DETECTADA:                   |   |
|   | Esta materia requiere "Redes de ComunicaciÃ³n" aprobada.       |   |
|   | Sugerencia: Puedes matricularte en la materia habilitada:     |   |
|   |       [ >>> Seleccionar InteracciÃ³n Humano-Computador <<< ]   |   |
|   +---------------------------------------------------------------+   |
|                                                                       |
|   Paralelo Disponible:                                                |
|   [ Paralelo A (1 cupo restante)                      | v ]           |
|                                                                       |
|   CÃ³digo de Estudiante UTA:                                           |
|   [ 2026-UTA-0412                                         ]           |
|                                                                       |
|   [ Regresar ]            [ Cancelar Borrador ]           [ Continuar ]|
+-----------------------------------------------------------------------+
```

---

## ðŸ“ WF-03: GestiÃ³n de Conflicto de Cupo Concurrente (R7 / Tarjeta 12)

```text
+-----------------------------------------------------------------------+
| [1. Inicio] ======> [ 2. SelecciÃ³n ] =======> [ 3. RevisiÃ³n y Estado ]|
+-----------------------------------------------------------------------+
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | [X] ALERTA DE CONCURRENCIA: CUPO NO DISPONIBLE EN PARALELO A  |   |
|   |                                                               |   |
|   | El Ãºltimo cupo del Paralelo A fue confirmado por otro         |   |
|   | estudiante hace un instante.                                  |   |
|   |                                                               |   |
|   | Â¡TUS DATOS Y ASIGNATURA SIGUEN GUARDADOS EN EL BORRADOR!      |   |
|   |                                                               |   |
|   | Â¿CÃ³mo deseas continuar?                                       |   |
|   |   [ OpciÃ³n 1: Matricular en Paralelo B (3 cupos libres) ]    |   |
|   |   [ OpciÃ³n 2: Registrarme en Lista de Espera con alerta ]    |   |
|   +---------------------------------------------------------------+   |
|                                                                       |
|   [ Modificar SelecciÃ³n ]                        [ Reintentar EnvÃ­o ] |
+-----------------------------------------------------------------------+
```

---

## ðŸ“ WF-04: ConfirmaciÃ³n y Comprobante Oficial Accesible

```text
+-----------------------------------------------------------------------+
| [1. Inicio] ======> [ 2. SelecciÃ³n ] =======> [ 3. MatrÃ­cula Exitosa ]|
+-----------------------------------------------------------------------+
|                                                                       |
|   Â¡MATRÃCULA CONFIRMADA EXITOSAMENTE!                                 |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | RESUMEN DE LA MATRÃCULA:                                      |   |
|   | Â· Estudiante:   CÃ³digo 2026-UTA-0412                          |   |
|   | Â· Asignatura:   InteracciÃ³n Humano-Computador                 |   |
|   | Â· Paralelo:     Paralelo B (Aula 204 - Laboratorio)           |   |
|   | Â· PerÃ­odo:      2026-B                                        |   |
|   | Â· CÃ“DIGO HASH:  MAT-UTA-982145                                |   |
|   | Â· Estado:       ACTIVA Y ASENTADA EN SISTEMA SGA              |   |
|   +---------------------------------------------------------------+   |
|                                                                       |
|          [ Imprimir / Descargar Comprobante Oficial ]                 |
|          [ Realizar Nueva MatrÃ­cula ]                                 |
|                                                                       |
+-----------------------------------------------------------------------+
```


---

# Decisiones de DiseÃ±o, Fidelidad y Comparativa v1 â†’ v2

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC)  
**Sistema:** MatrÃ­cula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 â€” Variante F (MatrÃ­cula)  

---

## 1. JustificaciÃ³n de la TÃ©cnica de Prototipado y Fidelidad

Para el caso de **MatrÃ­cula Universitaria**, se seleccionÃ³ **prototipado en cÃ³digo web nativo (HTML5, CSS3 y JavaScript semÃ¡ntico)** frente a prototipos en papel, storyboards o herramientas clic-a-clic como Figma por las siguientes razones de ingenierÃ­a:

1. **EvaluaciÃ³n de Accesibilidad Real (WCAG 2.1 AA):** Una maqueta estÃ¡tica o basada en imÃ¡genes no permite evaluar lectores de pantalla reales (NVDA, JAWS, VoiceOver), ni regiones vivas (`aria-live`), ni el orden estricto de tabulaciÃ³n y control de foco (`tabindex`, `focus()`).
2. **SimulaciÃ³n de Concurrencia y Conflicto en Tiempo Real (Incidencia R7):** El caso de la Tarjeta 12 exige simular que dos estudiantes compiten por el mismo cupo. El cÃ³digo JavaScript permite disparar estados asÃ­ncronos (`setTimeout`), manipulaciÃ³n del DOM y persistencia en `localStorage` sin requerir infraestructura de servidor.
3. **Fidelidad y Profundidad:**
   - **Fidelidad Visual:** Media-Alta (paleta institucional UTA, tipografÃ­a legible con contraste superior a 4.5:1, espaciado de 8pt grid).
   - **Profundidad Funcional:** Media (cubre de extremo a extremo la tarea crÃ­tica de selecciÃ³n, detecciÃ³n de prerrequisitos, revisiÃ³n previa, simulaciÃ³n de conflicto y emisiÃ³n de comprobante persistente).

---

## 2. Matriz Comparativa de EvoluciÃ³n: VersiÃ³n Inicial (v1) vs VersiÃ³n Accesible (v2)

| DimensiÃ³n de UX / IHC | VersiÃ³n 1 (v1) â€” Prototipo Inicial con Fallos | VersiÃ³n 2 (v2) â€” Prototipo Mejorado con Incidencias | JustificaciÃ³n e Impacto en la Experiencia |
| :--- | :--- | :--- | :--- |
| **Arquitectura de Flujo** | Formulario Ãºnico directo y plano sin pasos visibles. | Stepper numerado (`Inicio` â†’ `SelecciÃ³n` â†’ `RevisiÃ³n` â†’ `Resultado`). | Reduce la carga cognitiva y permite al estudiante conocer su avance en la transacciÃ³n. |
| **Manejo de Prerrequisitos (Tarjeta 11)** | El botÃ³n "Confirmar" parecÃ­a disponible; fallaba al final sin explicar quÃ© faltaba. | DetecciÃ³n contextual inmediata al seleccionar la materia; banner no bloqueante con sugerencia de alternativa habilitada (*IHC*). | Cumple con la heurÃ­stica H5 (PrevenciÃ³n de errores) y H3 (Control y libertad del usuario). |
| **Manejo de Cupos Concurrentes (Tarjeta 12 / R7)** | Fallo genÃ©rico que borraba el formulario completo y obligaba a reiniciar la matrÃ­cula. | SimulaciÃ³n de conflicto que **conserva los datos en borrador**, explica el motivo sin culpar al usuario y ofrece cambio rÃ¡pido a Paralelo B o Lista de Espera. | Evita el momento de verdad crÃ­tico (-2 en la curva emocional) y sostiene la confianza institucional. |
| **Accesibilidad por Teclado** | Foco nativo del navegador poco visible (halo azul tenue estÃ¡ndar de 1px). | Indicador de foco visible de alto contraste (`outline: 3px solid #0056b3; outline-offset: 2px`) y salto al contenido (`.skip-link`). | Cumple criterio de conformidad WCAG 2.4.7 (Focus Visible). |
| **Soporte de Lector de Pantalla** | Notificaciones visuales sin soporte auditivo; los errores no se leÃ­an. | Atributos `aria-describedby` en inputs y `aria-live="assertive"` en mensajes de conflicto y carga. | Garantiza inclusiÃ³n para personas con discapacidad visual o uso exclusivo de lector. |
| **Persistencia de Datos** | La recarga o error accidental reseteaba todos los campos. | Almacenamiento local persistente (`localStorage`) que restaura la selecciÃ³n tras cualquier fallo. | Cumple con la heurÃ­stica H9 (RecuperaciÃ³n ante errores). |


---

# Registro de SesiÃ³n de Pruebas de Usabilidad (UX Testing)

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC)  
**Sistema Evaluado:** MatrÃ­cula Universitaria (SGA UTA)  
**Equipo Evaluador:** Grupo 4  
**Protocolo:** Prueba de observaciÃ³n y pensamiento en voz alta (Think Aloud) no dirigida.  

---

## ðŸ“‹ Ficha TÃ©cnica de la SesiÃ³n

- **Fecha y Hora de la SesiÃ³n:** 29 de octubre de 2026, 09:15 AM
- **CÃ³digo del Participante:** `P-04-G2` (Estudiante de 5to nivel perteneciente al Grupo 2 - Pagos AcadÃ©micos)
- **VersiÃ³n Evaluada:** Comparativa directa v1 (inicial con fallos) vs v2 (refinada con accesibilidad)
- **Objetivo de la Prueba:** Evaluar la autonomÃ­a, manejo de errores, respuesta ante conflicto de cupo y operabilidad por teclado durante la inscripciÃ³n de una asignatura.
- **Tarea Asignada al Participante:**  
  *"Ingresa al portal, selecciona una asignatura y paralelo disponible, completa tus datos de estudiante y confirma la matrÃ­cula sin utilizar el ratÃ³n (solo teclado)."*

---

## â±ï¸ MÃ©tricas de Rendimiento Observadas

| MÃ©trica de Usabilidad | VersiÃ³n 1 (v1) | VersiÃ³n 2 (v2) | VariaciÃ³n y Mejora |
| :--- | :---: | :---: | :---: |
| **Tiempo de FinalizaciÃ³n de Tarea (TCT)** | 145 segundos | 48 segundos | **-66.8% de tiempo** (Alta eficiencia) |
| **Tasa de Ã‰xito de la Tarea** | Ã‰xito Parcial (RequiriÃ³ 2 intentos) | Ã‰xito Total (1er intento guiado) | **100% efectividad** |
| **NÃºmero de Errores CrÃ­ticos** | 3 errores | 0 errores | **-100% de errores** |
| **Pausas / Dudas Observadas** | 4 pausas prolongadas (>8 seg) | 1 pausa breve (lectura de resumen) | Fluidez sostenida |
| **PuntuaciÃ³n de Usabilidad Percibida (SUS est.)** | 42.5 / 100 (Pobre) | 87.5 / 100 (Excelente) | +45 puntos de satisfacciÃ³n |

---

## ðŸ” Registro Detallado de Observaciones y Comportamiento

### 1. Dificultades Detectadas en la VersiÃ³n 1 (v1):
- **ConfusiÃ³n de prerrequisitos:** El participante seleccionÃ³ *Sistemas Distribuidos*; al dar clic en confirmar, la pantalla simplemente arrojÃ³ un aviso genÃ©rico de error y borrÃ³ todo el formulario.
- **Incertidumbre de foco de teclado:** Al usar `Tab`, el participante perdiÃ³ de vista dÃ³nde estaba posicionado porque el foco del navegador era invisible sobre el fondo blanco.
- **PÃ©rdida de datos tras conflicto:** Al simularse el fallo de cupo, el usuario exclamÃ³ frustrado al ver los campos en blanco:
  > *"Â¡No puede ser! Me saliÃ³ error de cupo y se me borrÃ³ todo lo que ya habÃ­a escrito. Ahora tengo que empezar desde el inicio."* (Cita textual de `P-04-G2`).

### 2. Comportamiento Observado en la VersiÃ³n 2 (v2):
- **DetecciÃ³n inmediata de prerrequisito (Tarjeta 11):** Al elegir *Sistemas Distribuidos*, leyÃ³ el banner contextual y pulsÃ³ inmediatamente el botÃ³n alternativo sugerido (*"Matricular en IHC"*), sin frustraciÃ³n.
- **RecuperaciÃ³n ante conflicto de concurrencia (Tarjeta 12 / R7):** Cuando el sistema simulÃ³ la pÃ©rdida del cupo en Paralelo A, el participante escuchÃ³ el anuncio de la regiÃ³n viva y leyÃ³ el mensaje. PulsÃ³ el botÃ³n *"Cambiar a Paralelo B disponible"*; constatÃ³ que su cÃ³digo de estudiante seguÃ­a escrito y finalizÃ³ en 5 segundos.
  > *"QuÃ© alivio que no me borrÃ³ los datos y me ofreciÃ³ de una vez el paralelo B que sÃ­ tenÃ­a cupos."* (Cita textual de `P-04-G2`).

---

## ðŸ› ï¸ RecomendaciÃ³n Priorizada y Cambio Aplicado

1. **Hallazgo Prioritario:** El usuario necesita que el foco del teclado viaje automÃ¡ticamente a las alertas de error y a las opciones de recuperaciÃ³n cuando ocurre un conflicto imprevisto.
2. **Cambio Aplicado en CÃ³digo (v2):** En `prototipo/v2/app.js`, se implementÃ³ `box.focus()` y `aria-live="assertive"` para que las tecnologÃ­as de asistencia y los usuarios por teclado tengan acceso directo a los botones de resoluciÃ³n de conflicto sin necesidad de presionar 8 veces `Tab`.

---

## ðŸ“ˆ Comparativa de la Curva Emocional (Antes vs DespuÃ©s)

| # | Touchpoint de la Tarea | Curva v1 (Antes) | Curva v2 (DespuÃ©s) | JustificaciÃ³n de la VariaciÃ³n |
| :-: | :--- | :-: | :-: | :--- |
| 1 | Acceso e inicio de matrÃ­cula | 0 | +1 | El stepper y la ayuda de teclado transmiten claridad inmediata. |
| 2 | SelecciÃ³n de asignatura | 0 | +1 | CatÃ¡logo limpio y badges legibles. |
| 3 | Manejo de prerrequisitos (Momento de Verdad 1) | **-2** | **+1** | Se reemplazÃ³ el fallo bloqueante por advertencia y alternativa vÃ¡lida directa. |
| 4 | SelecciÃ³n de paralelo y cupo | 0 | +1 | Disponibilidad clara de cupos en tiempo real. |
| 5 | Ingreso de datos del estudiante | +1 | +1 | Persistencia garantizada en segundo plano. |
| 6 | RevisiÃ³n previa | +1 | +2 | Resumen detallado que reduce la ansiedad pre-confirmaciÃ³n. |
| 7 | Conflicto de cupo al confirmar (Momento de Verdad 2) | **-2** | **+1** | **El momento mÃ¡s crÃ­tico se convirtiÃ³ en recuperaciÃ³n asistida:** los datos se salvan y se ofrece Paralelo B. |
| 8 | Comprobante oficial emitido | +2 | +2 | EmisiÃ³n de comprobante con cÃ³digo hash de respaldo. |


---

# Evidencias de Usabilidad y Pruebas EmpÃ­ricas

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC)  
**Sistema:** MatrÃ­cula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 â€” Variante F (MatrÃ­cula)  

---

## ðŸ“ Archivos de Evidencia Generados

1. **[curva-emocional-comparativa.svg](curva-emocional-comparativa.svg):** Diagrama vectorial cuantitativo que compara la curva de emociÃ³n observada en la versiÃ³n inicial (v1) con valles crÃ­ticos de `-2` frente a la versiÃ³n refinada (v2) que mantiene la estabilidad emocional en `+1` y `+2`.
2. **Registro de SesiÃ³n UX:** Documentado en [`../pruebas/sesion.md`](../pruebas/sesion.md) con participante anÃ³nimo `P-04-G2` (Grupo 2 - Pagos).
3. **MÃ©tricas de Rendimiento:**
   - ReducciÃ³n del tiempo de tarea: de 145 segundos a 48 segundos.
   - ReducciÃ³n de errores crÃ­ticos de 3 a 0.
   - EliminaciÃ³n de la pÃ©rdida de datos mediante persistencia en `localStorage`.

---

## ðŸ“· Matriz Comparativa Antes / DespuÃ©s (v1 vs v2)

| Momento Clave | Comportamiento en VersiÃ³n 1 (v1) | Comportamiento en VersiÃ³n 2 (v2) |
| :--- | :--- | :--- |
| **Prerrequisito Pendiente (Tarjeta 11)** | El estudiante intenta confirmar y la pantalla emite un error bloqueante genÃ©rico, borrando los datos. | El sistema avisa contextualmente al momento de seleccionar la materia y ofrece un botÃ³n para cambiar a la materia habilitada (*IHC*). |
| **Conflicto de Cupo Concurrente (Tarjeta 12 / R7)** | Fallo silencioso; el usuario pierde la selecciÃ³n y se desorienta sin saber quÃ© pasÃ³. | Alerta audible (`aria-live="assertive"`) que informa la pÃ©rdida del cupo sin culpar al usuario, mantiene los datos y ofrece el Paralelo B o Lista de Espera con un solo clic. |
| **NavegaciÃ³n por Teclado** | Foco invisible; el usuario ciego o que usa teclado pierde la ubicaciÃ³n en la pÃ¡gina. | Anillo de foco de 3px de alto contraste (`:focus-visible`), saltador de contenido (`.skip-link`) y control de foco con `Escape`. |


---

# GuÃ­a Oficial de Defensa Individual y Respuestas para el Docente

**Asignatura:** InteracciÃ³n Humanoâ€“Computador (IHC) â€” Quinto Nivel  
**Facultad:** FISEI â€” Universidad TÃ©cnica de Ambato  
**Equipo:** Grupo 4 â€” Variante F: MatrÃ­cula Universitaria  

Esta guÃ­a contiene la preparaciÃ³n exhaustiva de las preguntas de defensa individual y los microcambios en vivo exigidos por la rÃºbrica de evaluaciÃ³n (SecciÃ³n 8 del documento docente).

---

## ðŸŽ¤ Preguntas Clave de la Tarjeta Asignada (Grupo 4)

### 1. Pregunta Tarjeta 11: Â¿CÃ³mo impide una decisiÃ³n imposible sin dejar al estudiante sin salida?
> **Respuesta modelo:**  
> *"La interfaz implementa el principio de prevenciÃ³n de errores (HeurÃ­stica H5 de Nielsen). En lugar de permitir que el estudiante pulse 'Confirmar' para luego mostrarle un error bloqueante que lo frustre, el sistema detecta de forma inmediata y contextual que la asignatura posee un prerrequisito pendiente. Crucialmente, la interfaz no se convierte en un 'callejÃ³n sin salida': en el mismo banner contextual explicativo se incorpora un control de acciÃ³n directa que le ofrece matricularse en una asignatura habilitada de su semestre (por ejemplo, InteracciÃ³n Humano-Computador). De este modo, se preserva el flujo cognitivo, se mantiene la autonomÃ­a del usuario (H3) y se evita que deba reiniciar el trÃ¡mite desde cero."*

### 2. Pregunta Tarjeta 12: Â¿CÃ³mo demuestra que la interfaz nunca confirma un cupo inexistente?
> **Respuesta modelo:**  
> *"Lo demuestro mediante la arquitectura de dos fases de confirmaciÃ³n en JavaScript (`prototipo/v2/app.js`). Cuando el estudiante pulsa 'Confirmar MatrÃ­cula', el botÃ³n entra en estado de procesamiento (`disabled=true`) para prevenir dobles envÃ­os. El sistema simula la comprobaciÃ³n de concurrencia en el servidor. Si el cupo del Paralelo A fue tomado milisegundos antes por otro usuario, la interfaz **interrumpe la confirmaciÃ³n, nunca emite el cÃ³digo hash `MAT-UTA`** y transiciona a un estado de conflicto visible y audible. En este estado se anuncia mediante una regiÃ³n accesible con `aria-live="assertive"` que el cupo se agotÃ³, manteniendo todos los datos del estudiante intactos en `localStorage` y ofreciendo en pantalla una alternativa inmediata (Paralelo B con cupo disponible o inscripciÃ³n en lista de espera). SÃ³lo cuando se valida una plaza disponible real, se genera el comprobante definitivo."*

---

## ðŸŽ¯ Respuestas a las Preguntas Generales de Defensa (SecciÃ³n 8)

### Pregunta 1: Abra el archivo que implementÃ³ y explique quÃ© requisito resuelve y cÃ³mo se comprueba.
- **Elizabeth De la Cruz:** Abre `prototipo/v2/app.js`. Resuelve el requisito **R7 (GestiÃ³n de conflicto de cupo e incidencia sorpresa)** y **RF-05 (ConservaciÃ³n de borrador)**. Se comprueba al llenar los datos y confirmar: la primera vez simula que el cupo se agotÃ³; los datos no se borran y el usuario puede cambiar a Paralelo B en un solo clic.
- **SebastiÃ¡n Vaca:** Abre `prototipo/v2/index.html` y `styles.css`. Resuelve el requisito **RF-02 (Accesibilidad 100% por teclado y foco)** y **RF-03 (Atributos semÃ¡nticos ARIA)**. Se comprueba navegando sin usar el ratÃ³n mediante `Tab` y `Shift + Tab`, verificando el anillo de foco azul de 3px y comprobando cÃ³mo un lector de pantalla verbaliza los avisos dinÃ¡micos mediante `aria-live`.
- **VerÃ³nica Ana:** Abre `docs/diagnostico.md`, `diagramas/navegacion.md` y `pruebas/sesion.md`. Resuelve la trazabilidad de los momentos de verdad y la mitigaciÃ³n de los valles emocionales (-2 a +2). Se comprueba mostrando la curva emocional y el registro de la prueba con usuario donde se redujo el tiempo de la tarea de 145s a 48s.

---

### Pregunta 2: Localice un fallo en la curva emocional; enseÃ±e el Issue, su correcciÃ³n y el nuevo resultado.
- **Fallo identificado:** En el Touchpoint 7 (PulsaciÃ³n de Confirmar con cupo agotado), la curva caÃ­a a `-2` (FrustraciÃ³n crÃ­tica) porque el sistema borraba el formulario.
- **Issue enlazado:** `Issue #3: fix(recovery): PÃ©rdida irreversible de selecciÃ³n tras conflicto de concurrencia en cupo`.
- **CorrecciÃ³n aplicada:** En `v2`, se implementÃ³ persistencia en `localStorage` y el modal de recuperaciÃ³n con alternativa de Paralelo B.
- **Nuevo resultado:** En la curva despuÃ©s (v2), este punto sube a `+1` (Tranquilidad / Control), ya que el estudiante no pierde su tiempo ni sus datos.

---

### Pregunta 3: Demuestre el recorrido de error sin perder datos del usuario.
- **DemostraciÃ³n en vivo:**
  1. Abrir `prototipo/v2/index.html`.
  2. Presionar `Tab` hasta "Comenzar" y pulsar `Enter`.
  3. Ingresar el cÃ³digo de estudiante `2026-UTA-0412`, seleccionar paralelo A y pulsar "Revisar".
  4. En la pantalla de revisiÃ³n, pulsar "Confirmar".
  5. Aparece la alerta roja de conflicto: *"El cupo del Paralelo A se agotÃ³ hace un instante. Tus datos estÃ¡n guardados."*
  6. Pulsar el botÃ³n *"Cambiar a Paralelo B disponible"*.
  7. El estudiante nota que su cÃ³digo y su selecciÃ³n siguen intactos en el formulario sin tener que volver a escribirlos.

---

### Pregunta 4: Explique por quÃ© la tÃ©cnica y la fidelidad elegidas responden al riesgo del caso.
> *"Elegimos un prototipo funcional en cÃ³digo web nativo (HTML5/CSS/JS) con profundidad media-alta porque el riesgo central del sistema de matrÃ­cula es la **accesibilidad universal (WCAG)** y la **pÃ©rdida de datos por concurrencia en tiempo real**. Un prototipo estÃ¡tico en Figma o en papel no permite verificar si un lector de pantalla anuncia los cambios de estado (`aria-live`), ni comprobar si el teclado queda atrapado, ni demostrar la persistencia en almacenamiento local ante fallos."*

---

### Pregunta 5: MuÃ©strenos un PR revisado por usted: Â¿quÃ© detectÃ³ y quÃ© se corrigiÃ³?
> *"En el Pull Request `#2` correspondiente a la rama `feature/accesibilidad-y-conflicto`, durante la revisiÃ³n cruzada se detectÃ³ que el mensaje de cupo agotado utilizaba solo un cambio de color rojo (`.notice.bad`), lo cual violaba el criterio WCAG 1.4.1 (Uso del color) y no era anunciado por NVDA. Se solicitÃ³ y aplicÃ³ la correcciÃ³n agregando el atributo `role="alert"` y `aria-live="assertive"`, asegurando que el lector de pantalla interrumpa y verbalice de inmediato el estado al usuario ciego."*

---

## ðŸ› ï¸ Microcambios en Vivo Preparados (Por si el docente solicita editar cÃ³digo)

1. **Modificar un mensaje de error:**
   - En `prototipo/v2/app.js`, lÃ­nea 5: cambiar `'Este campo es obligatorio'` por `'Por favor, ingresa tu cÃ³digo de estudiante de la UTA'`.
2. **Cambiar el color o grosor del foco de teclado:**
   - En `prototipo/v2/styles.css`, selector `:focus-visible`: cambiar `3px solid #0056b3` por `4px solid #d9381e` (rojo institucional) o `outline-offset: 4px`.
3. **Cambiar el tiempo de simulaciÃ³n de carga:**
   - En `prototipo/v2/app.js`, en `setTimeout(..., 700)`: cambiar `700` por `1200` milisegundos para mostrar una carga mÃ¡s prolongada.
4. **Agregar un nuevo campo al formulario:**
   - En `index.html`, agregar un `<input id="career" name="career">` y registrar su variable en `app.js`.


