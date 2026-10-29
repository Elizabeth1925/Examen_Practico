# Wireframes Lo-Fi del Sistema de Matrícula Universitaria

**Asignatura:** Interacción Humano–Computador (IHC)  
**Sistema:** Matrícula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 — Variante F (Matrícula)  

A continuación se presentan los cuatro wireframes de baja fidelidad (Lo-Fi) que modelan la estructura visual, la jerarquía de contenidos y los estados de error y recuperación.

---

## 📐 WF-01: Pantalla de Inicio (Acceso y Bienvenida)

```text
+-----------------------------------------------------------------------+
| [Logo UTA]  SISTEMA DE MATRÍCULA UNIVERSITARIA (SGA)     [Usuario]   |
+-----------------------------------------------------------------------+
|                                                                       |
|   MATRÍCULA ORDINARIA — PERÍODO ACADÉMICO 2026-B                      |
|                                                                       |
|   Bienvenido/a al portal de inscripción de asignaturas de la FISEI.   |
|                                                                       |
|   [ ! ] Modo accesible activo: Puede navegar este sistema usando      |
|         exclusivamente el teclado (Tab, Enter, Escape).               |
|                                                                       |
|   Tus selecciones se guardarán automáticamente en tu borrador.       |
|                                                                       |
|                    [ Iniciar Proceso de Matrícula ]                   |
|                                                                       |
+-----------------------------------------------------------------------+
| Universidad Técnica de Ambato · FISEI · Carrera de Software           |
+-----------------------------------------------------------------------+
```

---

## 📐 WF-02: Formulario de Selección con Detección de Prerrequisitos (Tarjeta 11)

```text
+-----------------------------------------------------------------------+
| [1. Inicio] =====> [ 2. Selección de Materia ] ----> [ 3. Revisión ]  |
+-----------------------------------------------------------------------+
|                                                                       |
|   Paso 2: Selección Académica y Datos del Estudiante                  |
|                                                                       |
|   Asignatura a Matricular:                                            |
|   [ Sistemas Distribuidos                             | v ]           |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | /!\ RESTRICCIÓN DE PRERREQUISITO DETECTADA:                   |   |
|   | Esta materia requiere "Redes de Comunicación" aprobada.       |   |
|   | Sugerencia: Puedes matricularte en la materia habilitada:     |   |
|   |       [ >>> Seleccionar Interacción Humano-Computador <<< ]   |   |
|   +---------------------------------------------------------------+   |
|                                                                       |
|   Paralelo Disponible:                                                |
|   [ Paralelo A (1 cupo restante)                      | v ]           |
|                                                                       |
|   Código de Estudiante UTA:                                           |
|   [ 2026-UTA-0412                                         ]           |
|                                                                       |
|   [ Regresar ]            [ Cancelar Borrador ]           [ Continuar ]|
+-----------------------------------------------------------------------+
```

---

## 📐 WF-03: Gestión de Conflicto de Cupo Concurrente (R7 / Tarjeta 12)

```text
+-----------------------------------------------------------------------+
| [1. Inicio] ======> [ 2. Selección ] =======> [ 3. Revisión y Estado ]|
+-----------------------------------------------------------------------+
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | [X] ALERTA DE CONCURRENCIA: CUPO NO DISPONIBLE EN PARALELO A  |   |
|   |                                                               |   |
|   | El último cupo del Paralelo A fue confirmado por otro         |   |
|   | estudiante hace un instante.                                  |   |
|   |                                                               |   |
|   | ¡TUS DATOS Y ASIGNATURA SIGUEN GUARDADOS EN EL BORRADOR!      |   |
|   |                                                               |   |
|   | ¿Cómo deseas continuar?                                       |   |
|   |   [ Opción 1: Matricular en Paralelo B (3 cupos libres) ]    |   |
|   |   [ Opción 2: Registrarme en Lista de Espera con alerta ]    |   |
|   +---------------------------------------------------------------+   |
|                                                                       |
|   [ Modificar Selección ]                        [ Reintentar Envío ] |
+-----------------------------------------------------------------------+
```

---

## 📐 WF-04: Confirmación y Comprobante Oficial Accesible

```text
+-----------------------------------------------------------------------+
| [1. Inicio] ======> [ 2. Selección ] =======> [ 3. Matrícula Exitosa ]|
+-----------------------------------------------------------------------+
|                                                                       |
|   ¡MATRÍCULA CONFIRMADA EXITOSAMENTE!                                 |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | RESUMEN DE LA MATRÍCULA:                                      |   |
|   | · Estudiante:   Código 2026-UTA-0412                          |   |
|   | · Asignatura:   Interacción Humano-Computador                 |   |
|   | · Paralelo:     Paralelo B (Aula 204 - Laboratorio)           |   |
|   | · Período:      2026-B                                        |   |
|   | · CÓDIGO HASH:  MAT-UTA-982145                                |   |
|   | · Estado:       ACTIVA Y ASENTADA EN SISTEMA SGA              |   |
|   +---------------------------------------------------------------+   |
|                                                                       |
|          [ Imprimir / Descargar Comprobante Oficial ]                 |
|          [ Realizar Nueva Matrícula ]                                 |
|                                                                       |
+-----------------------------------------------------------------------+
```
