# Examen Práctico — Interacción Humano-Computador (IHC)

Repositorio académico dedicado al análisis, diseño y evaluación de experiencias de usuario mediante prototipos web interactivos. Reúne una **prueba integradora** y **doce casos prácticos de IHC**, con énfasis en usabilidad, accesibilidad, validación, retroalimentación y recuperación ante errores.

> **Nota:** Los escenarios, diagnósticos y recorridos de prueba incluidos son materiales de práctica o simulaciones. No deben presentarse como resultados de evaluaciones reales con participantes.

## 📚 Contenido del repositorio

| Proyecto | Descripción | Acceso |
| --- | --- | --- |
| **01. Prueba integradora IHC** | Escenario de reserva de tutorías universitarias. Incluye análisis UX, requisitos, diagramas, prototipos v1 y v2, documentación y guía de pruebas. | [Ver proyecto 01](PROYECTO_01_PRUEBA_INTEGRADORA/README.md) |
| **02. Doce casos IHC** | Colección de doce ejercicios independientes, cada uno con un prototipo web y archivos de apoyo. | [Ver proyecto 02](PROYECTO_02_CASOS_IHC/README.md) |

## 🎯 Objetivos

- Aplicar principios de interacción humano-computador al diseño de interfaces.
- Documentar requisitos, navegación, componentes y decisiones de diseño.
- Diseñar flujos que comuniquen estados de carga, error y éxito.
- Practicar validaciones, accesibilidad por teclado y recuperación de errores.
- Comparar una versión inicial y una versión mejorada de un prototipo.

## 🛠️ Tecnologías

- **HTML5:** estructura de las interfaces.
- **CSS3:** presentación y estilos visuales.
- **JavaScript:** interacciones, validaciones y estados de los prototipos.
- **Markdown:** documentación, diagramas descriptivos y guías de prueba.

Los prototipos son estáticos: **no requieren instalar dependencias, configurar una base de datos ni ejecutar un backend**.

## 📁 Estructura principal

```text
Examen_Practico-main/
├── README.md
├── PROYECTO_01_PRUEBA_INTEGRADORA/
│   ├── README.md
│   ├── diagramas/
│   │   ├── navegacion.md
│   │   └── sitemap.md
│   ├── docs/
│   │   ├── componentes.md
│   │   ├── decisiones.md
│   │   ├── defensa.md
│   │   ├── diagnostico.md
│   │   ├── requisitos.md
│   │   └── trazabilidad.md
│   ├── evidencias/
│   ├── prototipo/
│   │   ├── v1/
│   │   └── v2/
│   ├── pruebas/
│   │   └── sesion.md
│   └── wireframes/
└── PROYECTO_02_CASOS_IHC/
    ├── README.md
    ├── casos/
    │   ├── IHC-01/
    │   ├── IHC-02/
    │   ├── ...
    │   └── IHC-12/
    ├── componentes/
    └── documentacion/
        └── incidencias-sorpresa.md
```

Cada carpeta `IHC-XX` del segundo proyecto incluye `README.md`, `wireframes.md`, `pruebas.md` y un directorio `prototipo/` con `index.html`, `styles.css` y `app.js`.

## 🚀 Cómo ejecutar los prototipos

1. Descarga o clona el repositorio.
2. Abre la carpeta del proyecto que deseas revisar.
3. Abre el archivo `index.html` correspondiente en un navegador moderno.

**Proyecto 01 — versión inicial:**

```text
PROYECTO_01_PRUEBA_INTEGRADORA/prototipo/v1/index.html
```

**Proyecto 01 — versión mejorada:**

```text
PROYECTO_01_PRUEBA_INTEGRADORA/prototipo/v2/index.html
```

**Proyecto 02 — ejemplo del caso IHC-01:**

```text
PROYECTO_02_CASOS_IHC/casos/IHC-01/prototipo/index.html
```

Para los demás casos, cambia `IHC-01` por el identificador correspondiente, hasta `IHC-12`.

## 🧩 Proyecto 01: prueba integradora

El escenario consiste en **reservar una tutoría universitaria**. Se documenta el recorrido del usuario desde el inicio de la reserva hasta su confirmación.

Se incluyen dos versiones del prototipo:

- **v1:** estructura funcional inicial y retroalimentación básica.
- **v2:** mejoras en jerarquía visual, resumen previo, foco visible, mensajes accesibles y recuperación de errores.

**Recorrido sugerido:** intentar enviar campos vacíos, completar el formulario, revisar los datos, provocar el error recuperable previsto y reintentar. También se recomienda navegar con `Tab`, `Shift + Tab`, `Enter` y `Escape`.

**Documentos destacados:** [Requisitos](PROYECTO_01_PRUEBA_INTEGRADORA/docs/requisitos.md) · [Diagnóstico UX](PROYECTO_01_PRUEBA_INTEGRADORA/docs/diagnostico.md) · [Decisiones](PROYECTO_01_PRUEBA_INTEGRADORA/docs/decisiones.md) · [Trazabilidad](PROYECTO_01_PRUEBA_INTEGRADORA/docs/trazabilidad.md) · [Sesión de pruebas](PROYECTO_01_PRUEBA_INTEGRADORA/pruebas/sesion.md).

## 🧪 Proyecto 02: doce casos prácticos

Contiene los casos `IHC-01` a `IHC-12`, organizados como ejercicios independientes. Cada caso ofrece un escenario, requisitos, un prototipo navegable y archivos para revisar wireframes y pruebas.

Para explorar un caso:

1. Lee su `README.md` para conocer el escenario y la tarea crítica.
2. Abre su prototipo `index.html`.
3. Prueba los campos, la navegación por teclado y los mensajes de estado.
4. Observa el error recuperable simulado en el primer intento de confirmación y el resultado del reintento.
5. Consulta `pruebas.md` y `wireframes.md` para contrastar el recorrido.

La documentación general incluye un archivo de incidencias sorpresa. Estas incidencias se registran como material documental y no deben confundirse con funcionalidades implementadas en los prototipos.

## ♿ Aspectos de UX e IHC trabajados

- Claridad de las acciones y del estado del sistema.
- Prevención y comunicación de errores.
- Conservación de datos ante fallos recuperables.
- Navegación mediante teclado.
- Retroalimentación durante la carga y la confirmación.
- Documentación de flujos, componentes y trazabilidad.

## 📌 Alcance y limitaciones

Este repositorio es una **entrega académica de prototipos**, no una aplicación de producción. Las confirmaciones, errores y resultados visibles forman parte de los escenarios simulados. No hay persistencia real de reservas ni integración con servicios externos.

Las evidencias, incidencias de GitHub, commits, solicitudes de cambio y resultados de participantes reales solo deben reportarse como realizados cuando efectivamente se hayan ejecutado y documentado.

## 📖 Navegación rápida

- [Documentación del Proyecto 01](PROYECTO_01_PRUEBA_INTEGRADORA/README.md)
- [Documentación del Proyecto 02](PROYECTO_02_CASOS_IHC/README.md)
- [Sitemap del Proyecto 01](PROYECTO_01_PRUEBA_INTEGRADORA/diagramas/sitemap.md)
- [Navegación del Proyecto 01](PROYECTO_01_PRUEBA_INTEGRADORA/diagramas/navegacion.md)

---

**Asignatura:** Interacción Humano-Computador (IHC)  
**Tipo de trabajo:** Proyecto académico / examen práctico  
**Estado:** Material de práctica y prototipos disponibles para revisión.
