# Proyecto 01 — Prueba Práctica Integradora IHC (Grupo 4)

**Universidad Técnica de Ambato (UTA)**  
**Facultad de Ingeniería en Sistemas, Electrónica e Industrial (FISEI)**  
**Carrera de Software — Quinto Nivel**  
**Asignatura:** Interacción Humano–Computador (IHC)  

---

## 👥 Información del Equipo (Grupo 4)

| Integrante | Usuario GitHub | Rol en el Proyecto |
| :--- | :--- | :--- |
| **Elizabeth De la Cruz** | [@Elizabeth1925](https://github.com/Elizabeth1925) | Coordinación, Prototipado v2, Interacción y Lógica de Recuperación |
| **Sebastián Vaca** | [@Sebas2h](https://github.com/Sebas2h) | Arquitectura de Información, Accesibilidad WCAG (ARIA) y Foco por Teclado |
| **Verónica Jaque** | [@ArteMisa82](https://github.com/ArteMisa82) | Diagnóstico Emocional, Sesión de Pruebas UX y Trazabilidad Heurística |
| **Andrew Lara** | [@alara7u7](https://github.com/alara7u7) | Desarrollo de prototipos, Adaptación de casos IHC y Soporte técnico |

---

## 🎯 Caso Asignado: Variante F — Matrícula Universitaria

- **Sistema:** Módulo de Matrícula y Selección de Asignaturas (SGA UTA).
- **Problema inicial:** Bloqueos imprevistos por prerrequisitos, desactualización de cupos en tiempo real, incertidumbre durante la confirmación y desorientación del estudiante ante la pérdida de cupo.
- **Tarjetas Privadas Aplicadas:**
  - **TARJETA 11 (IHC-11):** Matrícula con prerrequisitos pendientes y alternativa válida.
  - **TARJETA 12 (IHC-12):** Matrícula accesible con lector de pantalla y gestión de conflicto de cupos concurrentes.

---

## 🚀 Cómo Ejecutar los Prototipos

Los prototipos son totalmente autónomos (HTML5, CSS3 semántico y JavaScript estándar): no requieren backend, compilación ni instalación de dependencias externas.

1. **Versión Inicial (v1) — Con fallos iniciales detectados:**
   ```text
   PROYECTO_01_PRUEBA_INTEGRADORA/prototipo/v1/index.html
   ```
2. **Versión Mejorada y Accesible (v2) — Con Incidencias Resueltas:**
   ```text
   PROYECTO_01_PRUEBA_INTEGRADORA/prototipo/v2/index.html
   ```

Abre cualquiera de estos archivos directamente en Google Chrome, Mozilla Firefox o Microsoft Edge.

---

## 🧪 Recorrido de Prueba e Interacción Sugerido (v2)

1. **Navegación exclusiva por teclado:** Presione `Tab` y `Shift + Tab` para recorrer elementos interactivos (foco visible de alto contraste de 3px). Use `Enter` o `Espacio` para accionar botones y `Escape` para cancelar o cerrar alertas modales.
2. **Caso de Prerrequisito Pendiente (Tarjeta 11):** 
   - En el formulario, seleccione la asignatura *Sistemas Distribuidos*.
   - El sistema detectará de forma contextual que tiene pendiente *Redes de Comunicación*, explicando la restricción sin bloquear el flujo y ofreciendo un botón directo para matricularse en una materia alternativa habilitada (*Interacción Humano-Computador*).
3. **Caso de Conflicto de Cupo Concurrente (Tarjeta 12 / Incidencia Sorpresa):**
   - Seleccione paralelo A de *IHC* (cupo limitado). Complete sus datos y avance a la pantalla de Revisión.
   - Al pulsar **Confirmar Matrícula**, el sistema simulará la ocupación simultánea del último cupo disponible por otro estudiante.
   - El sistema **NO confirma falsamente**, **conserva todos los datos ingresados en el borrador** (`localStorage`), actualiza los cupos disponibles visualmente y los anuncia de inmediato a tecnologías de asistencia mediante una región accesible (`aria-live="assertive"`).
   - Ofrece dos alternativas recuperables en un solo clic: **Inscribirse en Paralelo B (disponible)** o **Añadirse a Lista de Espera con notificación**.
4. **Confirmación Exitosa:** Al seleccionar la alternativa disponible y reintentar, se emite el comprobante oficial con código único de matrícula `MAT-UTA-XXXXXX`.

---

## 📁 Estructura Documental del Proyecto

- 📄 [Diagnóstico UX y Curva Emocional](docs/diagnostico.md)
- 📄 [Requisitos Observables (RF-01 a RF-06 + R7 Incidencia)](docs/requisitos.md)
- 📄 [Matriz de Trazabilidad Completa](docs/trazabilidad.md)
- 📄 [Inventario de Componentes (Atomic Design)](docs/componentes.md)
- 📄 [Decisiones de Diseño y Fidelidad](docs/decisiones.md)
- 📄 [Guía para la Defensa Individual y Preguntas Docente](docs/defensa.md)
- 📄 [Diagrama de Navegación y User Flow](diagramas/navegacion.md)
- 📄 [Sitemap Estructurado](diagramas/sitemap.md)
- 📄 [Wireframes Lo-Fi](wireframes/README.md)
- 📄 [Registro de la Sesión de Pruebas UX con Participante](pruebas/sesion.md)
- 📁 [Evidencias y Curvas Emocionales](evidencias/README.md)
