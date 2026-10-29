# Registro de Pruebas Realizadas — IHC-12

- [x] **Compatibilidad con lector de pantalla:** Verificación de lectura fluida de encabezados, selectores y avisos dinámicos en NVDA.
- [x] **Simulación de conflicto de cupo concurrido:** El primer intento con *Paralelo A* activa la alerta de cupo agotado por otro estudiante.
- [x] **Anuncio sonoro/accesible del conflicto:** Verbalización inmediata mediante la región viva `aria-live="assertive"` y enfoque programático del mensaje.
- [x] **Conservación íntegra de la información:** Verificación de que el código de estudiante y la materia no se eliminan tras el conflicto.
- [x] **Selección de alternativa de Paralelo B:** Pulsación del botón de recuperación rápida que actualiza el cupo y confirma con éxito.
- [x] **Inscripción en Lista de Espera:** Comprobación del flujo alternativo que emite código `WAIT-UTA-XXXXX`.
- [x] **Navegación completa sin ratón:** Recorrido total evaluado únicamente con teclado.
