# Guía de uso

## Abrir el dashboard

Abra `dist/index.html` directamente desde el explorador de archivos. El cálculo y los gráficos se ejecutan en el navegador, sin instalación ni servicios externos. El enlace web privado es opcional.

## Economía mensual

La primera pestaña actualiza las métricas al cambiar un campo. Use los botones para comparar el mix actual, la promesa de CPL de la agencia, el historial de la agencia y la propuesta propia. **Volver al PDF** restaura los valores base de esta vista.

Los presupuestos históricos se interpolan en línea recta entre los puntos del Caso C. El rango permitido es Meta de USD 0 a 10.000 y Google de USD 0 a 8.000; fuera de esos rangos el modelo no extrapola. Google recibe visitas primero cuando la demanda supera la capacidad.

## Caja a 24 meses

La segunda pestaña tiene cuatro planes fijos para comparar:

1. **Actual:** USD 4.000 en Meta y USD 4.000 en Google.
2. **Agencia — historial:** USD 8.000 en Meta, con los 840 leads históricos; no convierte la promesa de 1.000 leads en un dato observado.
3. **Propio — respuesta + filtro:** USD 4.000 por canal y tasas de mejora de Meta autorizadas por el caso, sin técnico adicional.
4. **Propio + técnico:** mismo presupuesto y mejora; se contrata un técnico en el mes 1. Se paga desde ese mes y añade 50 visitas de capacidad desde el mes 2.

Seleccione una tarjeta para ver sus 24 filas, entradas y salidas. Revise la caja mínima y la alerta del piso de USD 5.000 antes de considerar el saldo del mes 24. El plan de agencia basado en el historial cae bajo el piso en esta proyección y queda marcado como no viable.

La caja inicial es USD 12.000; hay USD 18.000 de costos fijos mensuales. El mes 1 incluye las 22 ventas históricas del mes 0. Las ventas nuevas cobran 50 % en el mes de firma y 50 % al instalar al mes siguiente; equipos y comisión se pagan al firmar, instalación al mes siguiente. La hoja mensual evita añadir el CAC real otra vez como salida, porque ya registra anuncios y visitas.

## Hoja de cálculo

En `Sol_de_Casa_Nivel_1.xlsx`, edite los campos amarillos de **Supuestos**; revise **Resultados** y **Recomendación**. La hoja registra por separado la promesa y el historial de la agencia. La pestaña de caja de 24 meses está en el dashboard HTML; el XLSX corresponde al Nivel 1.

## Interpretación

- No lea un CPL bajo como prueba de rentabilidad: CAC real incluye gasto publicitario y costo de las visitas atendidas.
- Un plan que cruza el piso de caja incumple la regla aunque muestre saldo final calculado.
- Desde el mes 19, los planes fijos mantienen la inversión publicitaria; por eso cumplen la restricción de no reducirla.
- La proyección de mayor caja entre estos cuatro planes no demuestra un óptimo global; no se evaluaron todas las combinaciones posibles.
- La adopción de batería afecta la contribución esperada en la vista mensual, pero se excluye del simulador de caja por falta de calendario de cobros y pagos.
