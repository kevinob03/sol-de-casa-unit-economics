# Validaciones, trazabilidad y supuestos

## Registro mínimo de datos

Para cada entrada, conserva:

| Campo | Contenido |
|---|---|
| Identificador | Nombre estable, por ejemplo `precio_instalacion` |
| Valor y unidad | Valor original y moneda/unidad |
| Periodo | Mes, año, cohorte o evento al que corresponde |
| Clase | Dato confirmado, supuesto autorizado, calculado o faltante |
| Fuente | Archivo y página/sección; enlace si se proporcionó |
| Nota | Restricción, transformación o discrepancia relevante |

No conviertas una celda sin dato en cero salvo que la fuente lo indique. Conserva los datos originales junto a cualquier valor transformado.

## Orden de verificación

1. Revisa unidades, porcentajes, periodos, denominadores y etapas del funnel.
2. Recalcula una fila de forma manual con la fórmula y sustitución visible.
3. Prueba cero gasto, cero leads, cero ventas y datos de frontera de una tabla o tope.
4. Confirma que demanda/capacidad y prioridad se aplicaron antes del cierre.
5. Calcula totales desde sumas de numeradores y denominadores, no promedios simples.
6. Compara el resultado contra valores de control independientes y explica cualquier diferencia.
7. Repite con precisión completa; redondea solo al presentar.

## Reglas de evidencia

- Cita hechos con página/sección específica. Si solo hay un documento secundario, dilo.
- Registra conflictos entre fuentes y explica qué fuente prevalece y por qué.
- Distingue observación histórica de proyección, estimación, supuesto y recomendación.
- Un error de IA solo se registra si ocurrió en la interacción real: sugerencia original, comprobación y corrección. No fabriques ejemplos.
- Identifica las limitaciones del modelo: muestras pequeñas, tasas inestables, datos de calendario faltantes, topes y capacidades.

## Controles para modelos de varios periodos

- Conserva el estado histórico inicial; no lo sustituyas por una expectativa del funnel.
- Asigna ingresos y pagos al periodo descrito por la fuente.
- Aplica contrataciones/capacidad en el periodo que corresponda y separa fecha de pago de fecha de productividad.
- Verifica a mano el primer periodo antes de ejecutar una proyección larga.
- Si el modelo ya registra un costo de forma agregada, no agregues de nuevo un CAC que contenga el mismo gasto.
