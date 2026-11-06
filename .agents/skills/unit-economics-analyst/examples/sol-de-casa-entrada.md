# Caso de validación — Sol de Casa: entrada

## Fuente y alcance

Fuente numérica primaria: `Caso C - Sol de Casa.pdf`, págs. 3–6 y 9. La transcripción `mercadeo(1).docx` aporta el encargo general de una skill reutilizable y conceptos pedagógicos, pero no modifica cifras ni restricciones del PDF. El plan técnico de Fase 1 es apoyo de diseño, no fuente primaria del caso.

Caso de generación de leads de instalaciones solares residenciales. Moneda: USD. Tasas, inversiones y embudos del escenario mensual, salvo donde se indique otra cosa.

## Datos confirmados

| Dato | Valor | Procedencia |
|---|---:|---|
| Precio de instalación | $6.500 | PDF p. 3 |
| Cobro al firmar / al instalar el mes siguiente | 50 % / 50 % | PDF p. 3 |
| Equipos, pagados al firmar | 55 % del precio | PDF p. 3 |
| Instalación/materiales, pagados al instalar | 17 % del precio | PDF p. 3 |
| Comisión comercial, pagada al firmar | 3 % del precio | PDF p. 3 |
| Costo de visita realizada | $60 | PDF p. 3 |
| Capacidad actual | 100 visitas/mes | PDF p. 3 |
| Gasto actual Meta / Google | $4.000 / $4.000 | PDF p. 4 |
| Leads actuales Meta / Google | 500 / 100 | PDF p. 4 |
| Funnel Meta: contacto → agenda → visita hecha → cierre | 55 % → 30 % → 70 % → 18 % | PDF p. 4 |
| Funnel Google: contacto → agenda → visita hecha → cierre | 85 % → 55 % → 85 % → 30 % | PDF p. 4 |
| Leads históricos Meta a $0/$2k/$4k/$6k/$8k/$10k | 0/280/500/680/840/960 | PDF pp. 5–6 y regla de $0 en p. 9 |
| Leads históricos Google a $0/$2k/$4k/$6k/$8k | 0/55/100/135/160/160 | PDF pp. 5–6 y regla de $0 en p. 9 |
| Prioridad de capacidad | Google primero, luego Meta | PDF p. 6 |
| Leads de mes 0 que venden antes del inicio de simulación | 22 ventas reales | PDF p. 4; caja/nivel 3 en pp. 5 y 9 |

## Supuestos permitidos y límites

- Interpolar linealmente el historial; no mantener CPL constante al escalar. Topes: Meta $10.000 y Google $8.000 por mes para el nivel 3 (PDF p. 9).
- Escenario agencia separado: su cuenta usa CPL constante de $8; contrastarla con el historial real de 840 leads con $8.000 en Meta (PDF pp. 2, 5–6).
- Mejora de Meta opcional: 20 % menos leads y tasas 80 %/40 %/75 %/22 %, solo si se marca como supuesto permitido del caso (PDF p. 6).
- Teléfonos inválidos: diagnóstico 18 % Meta y 3 % Google; no restarlos otra vez de la tasa de contacto (PDF p. 4 y regla del caso).
- Batería: $3.000, margen bruto 20 %, comisión 3 %; 3 de 20 clientes la añadieron. El 15 % solo puede usarse como supuesto de esa muestra. No hay calendario de caja para batería (PDF p. 4).
- Las ventas fraccionarias son valores esperados. No son contratos observados.
