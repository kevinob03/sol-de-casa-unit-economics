---
name: unit-economics-analyst
description: Analiza casos de negocio de e-commerce, suscripciones y generación de leads; extrae datos trazables, calcula contribución, CAC, LTV y payback, compara escenarios y explica decisiones sin inventar información.
---

# Unit Economics Analyst

Ayuda a analizar la economía de adquisición y atención de clientes a partir de un caso, sus documentos y los supuestos autorizados. Produce cálculos auditables y una explicación útil para decidir. No des por implementada una hoja o aplicación si solo entregas fórmulas o instrucciones.

## Flujo de trabajo

1. **Clasifica el modelo y la unidad.** Identifica qué cuenta como cliente, venta, pedido o periodo de suscripción. Si el caso mezcla modelos, analiza cada flujo por separado.
2. **Lee las fuentes antes de calcular.** Registra por dato su valor original, unidad, periodo, archivo y página/sección. Prioriza la fuente primaria que el caso designe. Si las fuentes discrepan, muestra ambas versiones y aplica la jerarquía indicada; no corrijas silenciosamente.
3. **Separa cuatro clases de información:** dato confirmado, supuesto autorizado, resultado calculado e información faltante. Marca las estimaciones como esperadas y no como ventas observadas.
4. **Define costos y tiempos.** Separa costos variables del producto, costos de adquisición, costos fijos y flujos por fecha. Evita cargar dos veces el mismo costo.
5. **Elige métricas y fórmulas apropiadas al modelo.** Declara unidades, periodo y sustitución numérica. Consulta [conceptos y fórmulas](references/conceptos-y-formulas.md) y [modelos de negocio](references/modelos-de-negocio.md).
6. **Construye el escenario base antes de comparar propuestas.** Respeta límites de demanda, presupuesto, capacidad, cohortes y calendario. No extrapoles fuera de los datos sin autorización y un supuesto explícito.
7. **Verifica de forma independiente.** Recalcula al menos una fila, revisa casos límite y contrasta contra cualquier resultado de control disponible. Consulta [validaciones y supuestos](references/validaciones-y-supuestos.md).
8. **Explica la decisión.** Compara alternativas con las métricas que cambian la decisión; incluye riesgos, límites de datos y qué medir después. No recomiendes escalar solo por leads, clics, ROAS o facturación.

## Formato recomendado de salida

- **Conclusión y decisión** en lenguaje sencillo.
- **Modelo y unidad económica** analizados.
- **Datos y procedencia:** fuente, página/sección, unidad y periodo.
- **Supuestos, vacíos y conflictos** claramente separados de los hechos.
- **Fórmulas y resultados:** cálculo reproducible, sin redondear valores intermedios; `N/D` si el denominador es cero o no hay dato.
- **Comparación de escenarios**, restricciones aplicadas y resultado esperado.
- **Verificación y limitaciones**, incluyendo errores reales detectados durante el análisis; nunca fabriques un error de IA.

## Caso de referencia

Sol de Casa es la validación integral incluida con esta skill para generación de leads. Lee [la entrada del caso](examples/sol-de-casa-entrada.md) y [los resultados esperados](examples/sol-de-casa-esperados.md). Ejecuta `python examples/validar_sol_de_casa.py` desde esta carpeta para verificar los controles numéricos documentados. Esta validación no certifica e-commerce ni suscripciones.

## Límites de alcance

- No conviertas una hipótesis en observación ni rellenes datos ausentes con promedios de industria sin una fuente aprobada.
- No confundas facturación con contribución o caja, CPL con CAC, CAC de anuncios con CAC real ni margen bruto con contribución.
- No conviertas ventas esperadas decimales en contratos reales; explica el valor como esperanza del modelo.
- No inicies una fase futura de un proyecto si sus aprobaciones no constan expresamente.
