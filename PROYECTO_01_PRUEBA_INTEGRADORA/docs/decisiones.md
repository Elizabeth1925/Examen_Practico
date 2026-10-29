# Decisiones de Diseño, Fidelidad y Comparativa v1 → v2

**Asignatura:** Interacción Humano–Computador (IHC)  
**Sistema:** Matrícula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 — Variante F (Matrícula)  

---

## 1. Justificación de la Técnica de Prototipado y Fidelidad

Para el caso de **Matrícula Universitaria**, se seleccionó **prototipado en código web nativo (HTML5, CSS3 y JavaScript semántico)** frente a prototipos en papel, storyboards o herramientas clic-a-clic como Figma por las siguientes razones de ingeniería:

1. **Evaluación de Accesibilidad Real (WCAG 2.1 AA):** Una maqueta estática o basada en imágenes no permite evaluar lectores de pantalla reales (NVDA, JAWS, VoiceOver), ni regiones vivas (`aria-live`), ni el orden estricto de tabulación y control de foco (`tabindex`, `focus()`).
2. **Simulación de Concurrencia y Conflicto en Tiempo Real (Incidencia R7):** El caso de la Tarjeta 12 exige simular que dos estudiantes compiten por el mismo cupo. El código JavaScript permite disparar estados asíncronos (`setTimeout`), manipulación del DOM y persistencia en `localStorage` sin requerir infraestructura de servidor.
3. **Fidelidad y Profundidad:**
   - **Fidelidad Visual:** Media-Alta (paleta institucional UTA, tipografía legible con contraste superior a 4.5:1, espaciado de 8pt grid).
   - **Profundidad Funcional:** Media (cubre de extremo a extremo la tarea crítica de selección, detección de prerrequisitos, revisión previa, simulación de conflicto y emisión de comprobante persistente).

---

## 2. Matriz Comparativa de Evolución: Versión Inicial (v1) vs Versión Accesible (v2)

| Dimensión de UX / IHC | Versión 1 (v1) — Prototipo Inicial con Fallos | Versión 2 (v2) — Prototipo Mejorado con Incidencias | Justificación e Impacto en la Experiencia |
| :--- | :--- | :--- | :--- |
| **Arquitectura de Flujo** | Formulario único directo y plano sin pasos visibles. | Stepper numerado (`Inicio` → `Selección` → `Revisión` → `Resultado`). | Reduce la carga cognitiva y permite al estudiante conocer su avance en la transacción. |
| **Manejo de Prerrequisitos (Tarjeta 11)** | El botón "Confirmar" parecía disponible; fallaba al final sin explicar qué faltaba. | Detección contextual inmediata al seleccionar la materia; banner no bloqueante con sugerencia de alternativa habilitada (*IHC*). | Cumple con la heurística H5 (Prevención de errores) y H3 (Control y libertad del usuario). |
| **Manejo de Cupos Concurrentes (Tarjeta 12 / R7)** | Fallo genérico que borraba el formulario completo y obligaba a reiniciar la matrícula. | Simulación de conflicto que **conserva los datos en borrador**, explica el motivo sin culpar al usuario y ofrece cambio rápido a Paralelo B o Lista de Espera. | Evita el momento de verdad crítico (-2 en la curva emocional) y sostiene la confianza institucional. |
| **Accesibilidad por Teclado** | Foco nativo del navegador poco visible (halo azul tenue estándar de 1px). | Indicador de foco visible de alto contraste (`outline: 3px solid #0056b3; outline-offset: 2px`) y salto al contenido (`.skip-link`). | Cumple criterio de conformidad WCAG 2.4.7 (Focus Visible). |
| **Soporte de Lector de Pantalla** | Notificaciones visuales sin soporte auditivo; los errores no se leían. | Atributos `aria-describedby` en inputs y `aria-live="assertive"` en mensajes de conflicto y carga. | Garantiza inclusión para personas con discapacidad visual o uso exclusivo de lector. |
| **Persistencia de Datos** | La recarga o error accidental reseteaba todos los campos. | Almacenamiento local persistente (`localStorage`) que restaura la selección tras cualquier fallo. | Cumple con la heurística H9 (Recuperación ante errores). |
