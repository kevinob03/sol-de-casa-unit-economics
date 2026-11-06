# Guía por modelo de negocio

Primero define la unidad económica y el horizonte. Las fórmulas siguientes requieren datos del caso; no son valores universales.

## E-commerce

- **Unidad:** pedido para margen por pedido; cliente/cohorte para CAC y LTV.
- Contribución por pedido = ingreso neto del pedido menos producto, preparación, entrega subsidiada, procesamiento de pago, devoluciones y otros costos variables que el caso identifique.
- CAC = costos de adquisición atribuibles / clientes nuevos, no pedidos. Separa CAC publicitario y CAC real cuando haya costos adicionales.
- LTV de contribución = suma de contribuciones de pedidos del cliente durante el horizonte observado o supuesto. Declara horizonte, recompra y método de cohorte.
- ROAS = ingresos atribuidos / gasto publicitario; no es utilidad. Si se usa una tasa de contribución `m` y no existen otros costos, el ROAS de equilibrio publicitario es `1/m`. Ajusta la fórmula si la contribución usada ya resta costos de adquisición distintos a anuncios.
- Payback requiere calendario de cobros, costos y compras repetidas; no se infiere del ROAS.

## Suscripción / SaaS

- **Unidad:** cuenta o suscriptor nuevo, con periodo explícito (normalmente mensual).
- Contribución recurrente por periodo = ingreso recurrente por cuenta menos costos variables de servicio y otros costos recurrentes asignados.
- CAC real = costos de ventas y marketing que el caso atribuya a adquirir cuentas / cuentas nuevas.
- Payback simplificado = CAC / contribución recurrente por periodo, solo si la contribución es estable y positiva; informa el periodo resultante. Para caja real, modela cobros, costes, descuentos y fechas.
- Una aproximación común de LTV es `contribución mensual / churn mensual`, únicamente bajo churn constante, margen estable y una cohorte suficientemente comparable. Para churn variable, contratos con plazo o retención incierta, calcula cohortes/horizonte o declara datos insuficientes.
- No proyectes LTV ilimitado ni interpretes ingresos recurrentes como contribución.

## Generación de leads

- **Unidad:** lead, etapa del funnel, visita atendida y cliente que compra.
- CPL = gasto / leads. CAC de anuncios = anuncios / clientes nuevos. CAC real puede incluir costos de contacto, visitas, muestras o ventas si el caso los requiere.
- Muestra cada etapa del funnel con la tasa condicional correspondiente; documenta dónde se mide cada tasa.
- Aplica límites de demanda y capacidad antes de cierre. Si hay prioridad por canal, úsala para asignar la capacidad.
- Para el total, suma inversión y costos de conversión de canales y divide entre clientes totales; no promedies CAC de canales sin ponderar.
- El lead más barato puede producir clientes más caros si la calidad o conversión es menor. Compara CAC real, contribución, capacidad y payback.
