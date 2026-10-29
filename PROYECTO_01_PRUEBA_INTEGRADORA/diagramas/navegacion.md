# Diagrama de Navegación y Flujo de Usuario (User Flow)

**Asignatura:** Interacción Humano–Computador (IHC)  
**Sistema:** Matrícula Universitaria (SGA UTA)  
**Equipo:** Grupo 4 — Variante F (Matrícula)  

---

## 🔀 Diagrama de Flujo Completo con Ramas de Excepción (Mermaid)

```mermaid
flowchart TD
    Inicio["1. Inicio: Portal de Matrícula"] -->|"Comenzar [Enter/Clic]"| Form["2. Formulario de Selección"]
    
    Form -->|"Selecciona Asignatura"| CheckPre{"¿Prerrequisito pendiente? (T11)"}
    CheckPre -- "Sí" --> BannerPre["Alerta contextual: Prerrequisito no cumplido\n+ Botón: Seleccionar materia alternativa"]
    BannerPre -->|"Elegir alternativa"| Form
    CheckPre -- "No" --> InputData["Ingresar Paralelo y Código de Estudiante"]
    
    InputData -->|"Cancelar"| ModalCancel{"¿Seguro de cancelar?"}
    ModalCancel -- "Confirmar cancelación" --> Inicio
    ModalCancel -- "Deshacer / Regresar" --> Form
    
    InputData -->|"Validación local"| ValCheck{"¿Campos válidos?"}
    ValCheck -- "No" --> FormError["Mostrar error junto al campo\nFocus programático al primer error"]
    FormError --> Form
    ValCheck -- "Sí" --> Review["3. Pantalla de Revisión Previa"]
    
    Review -->|"Modificar datos"| Form
    Review -->|"Confirmar Matrícula"| Loading["Estado de Procesamiento (Spinner + disabled)"]
    
    Loading --> CheckSlot{"¿Cupo disponible simultáneamente? (R7 / T12)"}
    
    CheckSlot -- "No: Cupo tomado por otro" --> ConflictState["Estado de Conflicto de Cupo\n- Conserva datos en localStorage\n- Anuncio por lector: aria-live='assertive'\n- Ofrece: Cambiar a Paralelo B o Lista de espera"]
    ConflictState -->|"Cambiar a Paralelo B"| Review
    
    CheckSlot -- "Sí: Cupo asegurado" --> Success["4. Comprobante Oficial Generado\n- Código único MAT-UTA-XXXXXX\n- Limpieza segura de borrador\n- Feedback accesible aria-live='polite'"]
    
    Success -->|"Finalizar / Nueva matrícula"| Inicio
```

### Reglas de Navegación por Teclado:
- `Tab` / `Shift + Tab`: Desplazamiento secuencial a través del árbol DOM interactivo.
- `Enter` / `Espacio`: Ejecución de la acción seleccionada.
- `Escape`: Cierre de diálogos de advertencia o foco al botón de cancelación cuando se encuentra en el formulario.
