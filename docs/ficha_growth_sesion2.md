# Ficha de growth — Sol de Casa, Sesión 2

**Propuesta:** convertir el ahorro solar de clientes actuales en una razón útil para que sus vecinos pidan una visita. Los anuncios siguen aportando demanda; el prototipo prueba un canal de referidos y no presupone que lo sustituya.

## Ciclo propuesto

Instalación → la familia recibe su ahorro mensual → comparte una tarjeta con enlace personal → el vecino estima su ahorro → agenda una visita → firma e instala → empieza a recibir su propio ahorro y puede compartirlo.

## Problema que atacamos

- **Relación con clientes actuales:** 75 % no sabía cuánto ahorró el mes anterior; 40 % ya enseñó su recibo a alguien; 8 % refiere una familia al año sin que se lo pidan. No reciben mensajes después de instalar.
- **Web de prospectos:** de 100 visitas, 14 abren el formulario y 6 dejan sus datos. La página no muestra primero cuánto podría ahorrar esa persona.
- **Solución del prototipo:** mostrar una estimación de ahorro antes de pedir datos, dar a la familia un enlace para compartir y conservar el identificador del referido hasta la solicitud de visita.

## Métrica y meta del piloto

- **North Star mensual:** instalaciones originadas en clientes actuales (referidos por mes).
- **Señal semanal:** tarjetas de ahorro compartidas por familias.
- **Prueba de 60 días:** asignar 50 familias elegibles al azar: 25 reciben la tarjeta y el enlace; 25 continúan como hoy. **Meta de trabajo propuesta:** que el grupo que recibe la tarjeta genere al menos 1 lead referido adicional frente al control en 60 días. Es un umbral de decisión para esta prueba, no una cifra observada ni una garantía.
- **Contramétrica:** la conversión de visitas referidas a instalación no debe caer por debajo del 45 % registrado en el caso. Registrar también solicitudes de dejar de recibir mensajes.
- Con 25 familias por grupo, el resultado es una señal inicial y puede deberse al azar. No basta para afirmar causalidad ni para proyectar el resultado a las 420 familias.

## Economía de la recomendación

- Ahorro de ejemplo: USD 110 de recibo mensual × 70 % = **USD 77 al mes**, USD 924 al año. Recuperar una instalación de USD 6.500 tomaría cerca de 7 años, sin contar financiamiento ni cambios de tarifa.
- De un lead referido se esperan 0,95 × 0,85 × 0,90 = **0,72675 visitas realizadas** y 0,72675 × 0,45 = **0,32704 ventas**. Son valores esperados, no ventas observadas.
- Visitas por venta referida: 0,72675 ÷ 0,32704 ≈ **2,22**. Costo: 2,22 × USD 60 ≈ **USD 133 por venta**.
- Regla de Andrés: visitas + recompensas ≤ **USD 300 por venta referida**. Ejemplo solo al instalar: limpieza (USD 60) + descuento (USD 100) = USD 160; total con visitas ≈ **USD 293**, dentro del máximo. No se da premio por agendar.

## Capacidad y canales a 90 días

| Periodo | Acción y decisión |
|---|---|
| Días 1–30 | Probar con 25 familias y mantener 25 en control. Mantener Meta y Google como fuentes activas; priorizar Google cuando la capacidad se llene porque su valor estimado por visita es USD 428 frente a USD 233 de Meta. |
| Días 31–60 | Comparar leads referidos por grupo, visitas realizadas y cierres. Revisar que recompensas + costo de visitas se mantengan bajo USD 300. No escalar por clics o tarjetas compartidas solamente. |
| Días 61–90 | Si la señal mejora y la calidad se mantiene, ofrecerlo gradualmente a más familias. Conservar letreros como apoyo: 20 casas generaron 6 leads en 2 meses. Reevaluar capacidad antes de ampliar el volumen. |

Con el rendimiento de referidos del caso, llenar 50 visitas adicionales requiere cerca de 69 leads referidos al mes. Si cada familia aportara el mismo ritmo que un letrero (0,15 leads al mes por casa), harían falta unas 459 familias compartiendo. Las 420 actuales no bastan para llenar por sí solas al técnico adicional. Si referidos y anuncios superan las 100 visitas, se priorizan referidos y Google antes que Meta; contratar al técnico requiere confirmar demanda y caja.

## Qué se construyó y qué queda simulado

La pestaña **Ciclo de referidos** tiene tres recorridos: **Mi ahorro**, **Soy vecino** y **Panel de Andrés**. La calculadora usa USD 110 y 70 % como promedio de referencia; el ahorro acumulado, la familia de ejemplo, las interacciones del navegador y los eventos de visita/firma son demostrativos. El sitio no está conectado al inversor, agenda real, CRM, WhatsApp ni analítica. La solicitud de visita no se envía.

## Revisión del recorrido

- **Familia:** reconoce su ahorro, entiende qué compartir y ve las condiciones de la recompensa.
- **Vecino:** obtiene una estimación antes de entregar datos; sabe qué ocurre al pedir la visita.
- **Andrés:** distingue cifras del caso de clics de demostración y ve los pasos del piloto.

## Error de IA detectado y corregido

En el primer borrador, el control de meses volvía a dibujarse con cada tecla. Eso podía interrumpir la entrada de un número de dos o más dígitos. Se cambió para aplicar el valor al terminar de editar el campo. También comprobamos las unidades del embudo: 0,72675 son visitas realizadas por lead; cerca de 2,22 son visitas por venta referida. No deben intercambiarse.

**Fuentes:** *Caso C — Sol de Casa (Parte 1)*, pp. 3–7; *Caso C — Sol de Casa (Parte 2)*, pp. 2–6; *Guía del facilitador Sesión 2*, pp. 4–5. Valores de la meta del piloto y de demostración se identifican como propuestas, no como datos del caso.
