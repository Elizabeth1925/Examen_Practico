# Evidencias de Usabilidad y Pruebas Empíricas

**Asignatura:** Interacción Humano–Computador (IHC)  
**Sistema:** Matrícula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 — Variante F (Matrícula)  

---

## 📁 Archivos de Evidencia Generados

1. **[curva-emocional-comparativa.svg](curva-emocional-comparativa.svg):** Diagrama vectorial cuantitativo que compara la curva de emoción observada en la versión inicial (v1) con valles críticos de `-2` frente a la versión refinada (v2) que mantiene la estabilidad emocional en `+1` y `+2`.
2. **Registro de Sesión UX:** Documentado en [`../pruebas/sesion.md`](../pruebas/sesion.md) con participante anónimo `P-04-G2` (Grupo 2 - Pagos).
3. **Métricas de Rendimiento:**
   - Reducción del tiempo de tarea: de 145 segundos a 48 segundos.
   - Reducción de errores críticos de 3 a 0.
   - Eliminación de la pérdida de datos mediante persistencia en `localStorage`.

---

## 📷 Matriz Comparativa Antes / Después (v1 vs v2)

| Momento Clave | Comportamiento en Versión 1 (v1) | Comportamiento en Versión 2 (v2) |
| :--- | :--- | :--- |
| **Prerrequisito Pendiente (Tarjeta 11)** | El estudiante intenta confirmar y la pantalla emite un error bloqueante genérico, borrando los datos. | El sistema avisa contextualmente al momento de seleccionar la materia y ofrece un botón para cambiar a la materia habilitada (*IHC*). |
| **Conflicto de Cupo Concurrente (Tarjeta 12 / R7)** | Fallo silencioso; el usuario pierde la selección y se desorienta sin saber qué pasó. | Alerta audible (`aria-live="assertive"`) que informa la pérdida del cupo sin culpar al usuario, mantiene los datos y ofrece el Paralelo B o Lista de Espera con un solo clic. |
| **Navegación por Teclado** | Foco invisible; el usuario ciego o que usa teclado pierde la ubicación en la página. | Anillo de foco de 3px de alto contraste (`:focus-visible`), saltador de contenido (`.skip-link`) y control de foco con `Escape`. |
