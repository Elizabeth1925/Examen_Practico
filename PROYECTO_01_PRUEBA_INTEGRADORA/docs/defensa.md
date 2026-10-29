# Guía GitHub y defensa

## Flujo auténtico sugerido

`git init` → `git add .` → `git commit -m "docs: agrega diagnóstico inicial"`.

Cada integrante crea su rama con `git switch -c nombre/tarea`, realiza commits funcionales y abre un Pull Request. Un compañero revisa el PR con un comentario fundamentado. Los Issues deben contener evidencia, severidad, responsable y decisión de cierre. Vincula con mensajes como `fixes #12`. Para conflictos: actualizar la rama, identificar ambas intenciones, editar, probar, `git add` y continuar el merge/rebase según el acuerdo del equipo.

No se incluyen usuarios, historial, revisiones ni contribuciones ficticias.

## Defensa individual

Cada persona debe poder: localizar su requisito y archivo; demostrar el camino de error sin pérdida; explicar fidelidad y técnica; mostrar un PR realmente revisado; y efectuar en vivo un cambio pequeño de campo, mensaje, retorno o foco.