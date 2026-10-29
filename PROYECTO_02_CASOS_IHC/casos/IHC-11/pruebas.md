# Registro de Pruebas Realizadas — IHC-11

- [x] **Navegación secuencial por teclado:** Comprobado con `Tab` y `Shift + Tab` sin atascos de foco.
- [x] **Detección contextual de prerrequisito:** Al seleccionar *Sistemas Distribuidos*, se despliega el banner de advertencia informando el requisito pendiente (*Redes de Comunicación*).
- [x] **Recuperación y oferta de alternativa:** Pulsación del botón sugerido para cambiar inmediatamente a *Interacción Humano-Computador* sin borrar los datos del estudiante.
- [x] **Validación de campos vacíos:** Comprobación de mensajes contextuales enlazados mediante `aria-describedby`.
- [x] **Cancelación controlada:** Diálogo de confirmación que previene el borrado involuntario del borrador.
- [x] **Persistencia de borrador:** Los datos se mantienen en `localStorage` al recargar la página.
- [x] **Emisión de comprobante:** Generación de comprobante con código único ficticio tras confirmación válida.
