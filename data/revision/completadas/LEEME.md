# Planillas completadas

**Confidencial: no se publica.**

Acá se suben las planillas de revisión ya completadas (el `.xlsx` de `data/revision/`, o el `.md` editado).

1. Descargá la planilla de `data/revision/` (por ejemplo `revision_tanda2_america.xlsx`).
2. Completá "Aprobado" (sí/no), "Revisó" (G = Giuliano, A = Agustina) y, si hace falta, "Comentario".
3. Subila a esta carpeta sin cambiarle el nombre.

En la sesión siguiente se corre `python3 scripts/leer_completadas.py`:

- las filas con "sí", "Revisó" completo y sin comentario pasan a `aprobado` (se guarda quién revisó y la fecha);
- las que tienen "no" o un comentario se corrigen según el comentario y se listan para confirmar;
- la planilla se mueve a `procesadas/` y queda un `informe_<planilla>_<fecha>.md`.
