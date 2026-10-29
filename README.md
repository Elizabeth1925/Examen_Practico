# Examen Práctico — Interacción Humano–Computador (IHC)

**Universidad Técnica de Ambato (UTA)**  
**Facultad de Ingeniería en Sistemas, Electrónica e Industrial (FISEI)**  
**Carrera de Software — Quinto Nivel**  
**Período Académico:** 2026-B  
**Equipo:** Grupo 4  

---

## 👥 Integrantes del Equipo (Grupo 4)

| Integrante | Cuenta GitHub | Rol y Responsabilidad Principal |
| :--- | :--- | :--- |
| **Elizabeth De la Cruz** | [@Elizabeth1925](https://github.com/Elizabeth1925) | Líder de equipo, Prototipado v2, Lógica de recuperación ante conflictos e integración |
| **Sebastián Vaca** | [@Sebas2h](https://github.com/Sebas2h) | Arquitectura de información, Accesibilidad WCAG (ARIA) y Foco por teclado |
| **Verónica Jaque** | [@ArteMisa82](https://github.com/ArteMisa82) | Diagnóstico emocional, Sesión de pruebas de usabilidad y Trazabilidad de requisitos |
| **Andrew Lara** | [@alara7u7](https://github.com/alara7u7) | Desarrollo de prototipos, Adaptación de casos IHC y Soporte técnico |

---

## 🎯 Caso Asignado: Variante F — Matrícula Universitaria

De acuerdo con la distribución oficial de casos prácticos:
- **Variante:** F
- **Sistema:** Módulo de Matrícula y Selección de Asignaturas (SGA UTA).
- **Problema Inicial:** Cupos, prerrequisitos, navegación y bloqueos.
- **Tarjetas Privadas Evaluadas:**
  - **Tarjeta 11 (IHC-11):** *Matrícula con prerrequisitos* — Estudiante con prerrequisito pendiente. Incidencia: *Mostrar prerrequisito y alternativa válida*.
  - **Tarjeta 12 (IHC-12):** *Matrícula con lector de pantalla* — Estudiante con lector de pantalla y fallo de concurrencia de cupos. Incidencia: *Gestionar conflicto y anunciar nuevo estado accesible*.

---

## 📚 Estructura General del Repositorio

| Directorio / Proyecto | Descripción y Alcance | Acceso Directo |
| :--- | :--- | :---: |
| **01. Prueba Integradora IHC** | Proyecto central de **Matrícula Universitaria**. Incluye diagnóstico UX, curva emocional, 7 requisitos (RF-01 a RF-06 + R7 Incidencia), diagramas, inventario Atomic Design, 4 wireframes, prototipos v1 y v2, registro de prueba empírica y guía de defensa individual. | [Ver Proyecto 01](PROYECTO_01_PRUEBA_INTEGRADORA/README.md) |
| **02. Doce Casos IHC** | Colección de los doce ejercicios independientes de IHC, destacando la resolución de los casos **IHC-11** e **IHC-12** correspondientes a la temática de Matrícula del Grupo 4. | [Ver Proyecto 02](PROYECTO_02_CASOS_IHC/README.md) |

---

## 🚀 Cómo Ejecutar los Prototipos

Los prototipos están desarrollados en tecnologías web estándares (HTML5, CSS3 y JavaScript vanilla): **no requieren instalación de paquetes, backend ni servidores locales**.

1. **Proyecto 01 — Versión Inicial (v1 con fallos identificados):**
   ```text
   PROYECTO_01_PRUEBA_INTEGRADORA/prototipo/v1/index.html
   ```
2. **Proyecto 01 — Versión Refinada (v2 con Incidencias R7, WCAG y Teclado):**
   ```text
   PROYECTO_01_PRUEBA_INTEGRADORA/prototipo/v2/index.html
   ```
3. **Proyecto 02 — Casos Específicos del Grupo 4:**
   - Caso IHC-11 (Prerrequisitos): `PROYECTO_02_CASOS_IHC/casos/IHC-11/prototipo/index.html`
   - Caso IHC-12 (Lector y Concurrencia): `PROYECTO_02_CASOS_IHC/casos/IHC-12/prototipo/index.html`

---

## ♿ Puntos Clave de Usabilidad y Accesibilidad Implementados

- **Operabilidad 100% por Teclado:** Toda la interfaz es navegable secuencialmente con `Tab` y `Shift + Tab`, activable con `Enter`/`Espacio`, con salto al contenido principal (`.skip-link`) y cierre o cancelación con `Escape`.
- **Foco Visible de Alto Contraste:** Anillo de enfoque de 3px (`:focus-visible`) que cumple el criterio de éxito WCAG 2.4.7.
- **Detección Preventiva de Prerrequisitos (Tarjeta 11):** Banner contextual que explica la materia correlativa faltante y proporciona un botón de redirección inmediata a asignaturas habilitadas sin perder datos.
- **Gestión Accesible de Conflicto de Cupos (R7 / Tarjeta 12):** Notificación auditiva y visual inmediata mediante región viva (`aria-live="assertive"`), conservación del borrador en `localStorage` y alternativas de un clic (Paralelo B disponible o Lista de Espera).
- **Reducción del Tiempo de Tarea:** Demostrada empíricamente en pruebas con usuario (reducción de 145s a 48s).

---

## 📖 Enlaces a la Documentación de la Prueba Integradora

- [Diagnóstico UX y Curva Emocional Inicial](PROYECTO_01_PRUEBA_INTEGRADORA/docs/diagnostico.md)
- [Catálogo de Requisitos Observables y R7](PROYECTO_01_PRUEBA_INTEGRADORA/docs/requisitos.md)
- [Matriz de Trazabilidad Requisito → Pantalla → Componente](PROYECTO_01_PRUEBA_INTEGRADORA/docs/trazabilidad.md)
- [Inventario de Componentes UI (Atomic Design)](PROYECTO_01_PRUEBA_INTEGRADORA/docs/componentes.md)
- [Decisiones de Diseño y Justificación de Fidelidad](PROYECTO_01_PRUEBA_INTEGRADORA/docs/decisiones.md)
- [Guía Oficial de Defensa Individual y Respuestas a Preguntas Docente](PROYECTO_01_PRUEBA_INTEGRADORA/docs/defensa.md)
- [Diagramas de Flujo (User Flow) y Navegación](PROYECTO_01_PRUEBA_INTEGRADORA/diagramas/navegacion.md)
- [Sitemap del Sistema](PROYECTO_01_PRUEBA_INTEGRADORA/diagramas/sitemap.md)
- [Wireframes Lo-Fi](PROYECTO_01_PRUEBA_INTEGRADORA/wireframes/README.md)
- [Registro de la Sesión de Pruebas UX con Participante](PROYECTO_01_PRUEBA_INTEGRADORA/pruebas/sesion.md)
- [Evidencias y Curva Emocional Comparativa](PROYECTO_01_PRUEBA_INTEGRADORA/evidencias/README.md)
