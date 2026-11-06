# Conceptos y fórmulas

Usa las definiciones del caso cuando existan; estas fórmulas son una guía y no sustituyen la lectura de las fuentes. Mantén moneda, unidad y periodo consistentes.

## Contribución

La contribución es el ingreso que queda después de los costos variables definidos para la unidad. Es el monto que puede cubrir adquisición y costos fijos.

```text
contribución por unidad = ingreso por unidad − costos variables de esa unidad
tasa de contribución = contribución por unidad / ingreso por unidad
```

Incluye comisiones u otros costos en la contribución cuando el caso los asigne allí. No restes un costo por segunda vez en CAC o caja.

## Adquisición

```text
CPL = gasto publicitario / leads
CAC de anuncios = gasto publicitario / clientes nuevos
CAC real = costos necesarios de adquisición y conversión / clientes nuevos
```

El numerador de CAC real debe enumerar sus componentes según la definición del caso (por ejemplo, anuncios y visitas realizadas). Si no hubo leads o ventas, informa `N/D`; no devuelvas infinito ni cero como si fuera un costo válido. Para el total, suma primero gastos, costos y clientes de todos los canales y luego divide.

## LTV y relación LTV:CAC

```text
LTV = contribución acumulada esperada de un cliente durante un horizonte declarado
LTV:CAC = LTV / CAC real
```

Usa contribución, no facturación bruta. El horizonte debe corresponder al modelo: una compra si así lo define el caso, pedidos repetidos observados/estimados en e-commerce o meses retenidos en una suscripción. No incluyas recompras futuras sin datos o supuesto explícito. La razón LTV:CAC no informa por sí sola cuándo se recupera efectivo.

## Funnel y capacidad

Para etapas secuenciales con tasas condicionadas a la etapa anterior:

```text
etapa_siguiente = etapa_actual × tasa_de_paso
ventas esperadas = personas que llegan a la etapa de venta × tasa de cierre
```

Cuando existe capacidad limitada, aplica la regla de prioridad del caso antes de calcular cierres. No cuentes solicitudes de atención como atenciones realizadas. No descuentes de nuevo una tasa diagnóstica de pérdida si ya está comprendida en otra tasa del funnel.

## Payback en caja

Ordena entradas y salidas por el momento en que ocurren. Para payback por cliente:

```text
flujo neto del periodo = cobros del periodo − pagos del periodo
flujo acumulado = flujo acumulado anterior + flujo neto del periodo
payback = primer periodo en que flujo acumulado >= 0
```

Si se inicia con CAC real como desembolso, no vuelvas a sumar los mismos costos de adquisición en el flujo por cliente. Si no se recupera dentro del horizonte conocido, declara que no se observa payback en ese horizonte. En un modelo agregado, registra los gastos publicitarios y operativos una sola vez.

## Redondeo y cero

Conserva precisión completa en cálculos intermedios; redondea solo para mostrar. Los volúmenes fraccionarios en un modelo determinista suelen ser valores esperados, no eventos observados. Ante denominador cero o ausente, usa `N/D` con explicación.
