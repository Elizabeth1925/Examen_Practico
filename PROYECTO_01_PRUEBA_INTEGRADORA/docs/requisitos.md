# Requisitos Observables y Funcionales

**Asignatura:** Interacción Humano–Computador (IHC)  
**Sistema:** Sistema de Matrícula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 — Variante F (Matrícula)  

---

## 📋 Catálogo de Requisitos Observables (RF-01 a RF-06 + R7 Incidencia)

| ID Requisito | Tipo | Enunciado del Requisito | Criterio de Aceptación y Comprobación Observable |
| :--- | :---: | :--- | :--- |
| **RF-01** | Observable | **Catálogo de asignaturas y paralelos con disponibilidad visible.** | La interfaz presenta de forma clara las materias ofertadas, sus paralelos y el número de cupos disponibles en tiempo real antes de iniciar la selección. |
| **RF-02** | Accesible | **Operabilidad 100% por teclado y foco visible.** | Todos los controles (botones, selectores, campos de texto y enlaces) pueden enfocarse y accionarse mediante `Tab`, `Shift + Tab`, `Enter` y `Espacio`, contando con un indicador de foco visible de alto contraste (anillo de 3px). |
| **RF-03** | Contextual | **Validación en contexto de prerrequisitos sin revelación indebida (Tarjeta 11).** | Si se selecciona una asignatura que posea prerrequisitos académicos pendientes, el sistema advierte inmediatamente mediante un mensaje asociado (`aria-describedby`), explicando la causa sin exponer datos ajenos y ofreciendo una ruta hacia materias habilitadas. |
| **RF-04** | Preventivo | **Pantalla de revisión y resumen antes de la confirmación.** | Antes de enviar la transacción de matrícula a la base de datos, se presenta una pantalla de confirmación estructurada con el resumen de la asignatura, paralelo, horario y código del estudiante, con opción de corregir o editar. |
| **RF-05** | Tolerancia | **Persistencia de borrador ante fallo o error recuperable.** | Los datos ingresados por el estudiante se guardan localmente en memoria (`localStorage`). Si ocurre una interrupción de red o fallo de validación, la información permanece intacta y no se borra. |
| **RF-06** | Retroalimentación | **Emisión de comprobante oficial de matrícula accesible.** | Tras una confirmación exitosa, el sistema presenta un comprobante legible con un código hash único de matrícula (`MAT-UTA-XXXXXX`), anunciado por lector de pantalla mediante región viva. |
| **R7 (Incidencia)** | **Imprevisto** | **Gestión de conflicto de cupo concurrente y anuncio accesible (Tarjeta 12).** | Si el cupo seleccionado se agota en el momento de pulsar "Confirmar Matrícula", el sistema simula el conflicto, **evita una confirmación falsa**, actualiza el estado de disponibilidad mediante `aria-live="assertive"`, conserva todos los datos ingresados y ofrece alternativas inmediatas (Paralelo alternativo B o ingreso a Lista de Espera). |

---

## 🗺️ Sitemap Estructurado del Proceso

```text
SGA Matrícula (Inicio)
 ├── 1. Panel Informativo (Período Académico, Requisitos y Acceso Teclado)
 ├── 2. Formulario de Selección e Inscripción
 │    ├── Selección de Asignatura (Validación automática de prerrequisitos)
 │    ├── Selección de Paralelo (Indicador de cupos en tiempo real)
 │    ├── Datos del Estudiante (Código y validación contextual)
 │    └── [Acción Cancelar con confirmación segura]
 ├── 3. Pantalla de Revisión Previa
 │    ├── Resumen consolidado de la matrícula
 │    ├── [Botón Editar / Modificar datos]
 │    └── [Botón Confirmar Matrícula]
 ├── 4. Gestión de Excepciones y Conflictos (R7 / Tarjetas 11 y 12)
 │    ├── Rama A: Conflicto de Cupo Concurrente (Ofrecer Paralelo B / Lista de espera)
 │    └── Rama B: Prerrequisito Pendiente (Redirección a materia electiva habilitada)
 └── 5. Pantalla de Resultado
      ├── Estado de Éxito: Comprobante oficial con código único `MAT-UTA-XXXXXX`
      └── Opción de Nueva Matrícula o Cierre de Sesión
```

---

## 🔀 User Flow (Flujo del Usuario con Rama de Éxito y de Conflicto)

```text
[Inicio] 
   │
   ▼
[Formulario de Matrícula]
   │
   ├─► ¿Tiene prerrequisito pendiente? (Tarjeta 11)
   │     ├─► SÍ: Muestra aviso contextual explicativo + botón "Elegir materia alternativa"
   │     └─► NO: Permite continuar
   │
   ▼
[Completar Paralelo y Código de Estudiante]
   │
   ├─► ¿Campo vacío o inválido? ──► [Marca campo + mensaje aria-describedby + Foco en error]
   │
   ▼
[Pantalla de Revisión]
   │
   ▼
[Pulsar "Confirmar Matrícula"] ──► [Estado de Carga: Spinner y botón deshabilitado temporalmente]
   │
   ├─► [RAMA DE CONFLICTO R7 / Tarjeta 12]:
   │     Cupo tomado concurrentemente por otro estudiante
   │     ├─ Preserva todos los datos en borrador
   │     ├─ Región aria-live anuncia: "El cupo del Paralelo A se agotó hace un instante"
   │     ├─ Ofrece opciones de recuperación:
   │     │    ├─ Cambiar a Paralelo B (disponible)
   │     │    └─ Inscribirse en Lista de Espera con notificación
   │     └─ Permite reintentar sin reescribir nada
   │
   └─► [RAMA DE ÉXITO]:
         ├─ Confirmación oficial registrada
         ├─ Muestra código único MAT-UTA-XXXXXX
         ├─ Anuncio por lector de pantalla (aria-live="polite")
         └─ Limpieza controlada del borrador y opción de finalizar
```
