# Caso de validación — Sol de Casa: resultados esperados

Los datos de entrada y límites están en [sol-de-casa-entrada.md](sol-de-casa-entrada.md). Cifras calculadas con precisión completa y redondeadas aquí a 4 decimales cuando procede. Los resultados proceden de las fórmulas y el PDF; no representan ventas observadas.

## Contribución por instalación

```text
$6.500 × (1 − 0,55 − 0,17 − 0,03) = $1.625
```

La comisión de $195 se resta en contribución. La visita realizada de $60 se incluye en CAC real, no se resta de nuevo en contribución.

## Escenario actual — Meta $4.000 + Google $4.000

| Medida | Meta | Google | Total |
|---|---:|---:|---:|
| Leads | 500 | 100 | 600 |
| Contactados | 275 | 85 | 360 |
| Agendados | 82,5 | 46,75 | 129,25 |
| Visitas solicitadas/hechas | 57,75 | 39,7375 | 97,4875 |
| Ventas esperadas | 10,3950 | 11,92125 | 22,31625 |
| CAC de anuncios | $384,8004 | $335,5353 | $358,4832 |
| CAC real | $718,1337 | $535,5353 | $620,5904 |
| LTV:CAC | 2,2628 | 3,0343 | 2,6185 |
| Valor neto por visita | $232,50 | $427,50 | No promediar sin definir método |

Fórmulas por canal: `visitas = leads × contacto × agenda × visita_realizada`; `ventas = visitas × cierre`; `CAC real = (anuncios + $60 × visitas) / ventas`. En el escenario base la capacidad no se rebasa.

### Fila de verificación manual

```text
Google visitas = 100 × 0,85 × 0,55 × 0,85 = 39,7375
Google ventas = 39,7375 × 0,30 = 11,92125
Google CAC real = ($4.000 + $60 × 39,7375) / 11,92125
               = $6.384,25 / 11,92125
               = $535,5352836… por venta esperada
```

### Total correctamente ponderado

```text
CAC real total = ($4.000 + $4.000 + $60 × 97,4875) / 22,31625
               = $620,5904…
```

No es el promedio simple de los CAC de Meta y Google.

## Propuesta agencia

| Variante | Leads Meta | Visitas pedidas | Visitas hechas | Ventas esperadas | CAC real |
|---|---:|---:|---:|---:|---:|
| Cuenta de agencia, CPL fijo $8 | 1.000 | 115,5 | 100 (límite) | 18 | $777,7778 |
| Historial del caso con gasto Meta $8.000 | 840 | 97,02 | 97,02 | 17,4636 | $791,4290 |

El historial reduce las ventas esperadas frente al escenario actual en `22,31625 − 17,4636 = 4,85265` al mes. El supuesto de agencia rebasa la capacidad solicitada, así que se hacen solo 100 visitas. Nunca etiquetar 1.000 leads como dato histórico.

## Capacidad compartida y prioridad

Con 1.000 leads Meta y el escenario base de Google simultáneamente: Google solicita 39,7375 visitas, recibe primero esa capacidad; Meta solicita 115,5 y recibe el remanente `100 − 39,7375 = 60,2625`. Total atendido = 100, nunca 139,7375. Este caso estresa la prioridad de Google.

## Payback por instalación

Antes de marketing: flujo del mes de firma `+$3.250 − $3.575 − $195 = −$520`; flujo de instalación/cobro al mes siguiente `+$3.250 − $1.105 = +$2.145`. Al incluir CAC real al inicio, el escenario actual acumulado permanece negativo en la firma y cruza a positivo en el mes 1 para los canales y total del caso. CAC ya incluye anuncios y visitas: no agregarlos otra vez.

## Casos límite

- Gasto de canal = 0 → 0 leads; CPL y CAC sin denominador válido = `N/D`.
- Meta $2.000 → 280 leads; $6.000 → 680; $8.000 → 840 por historial.
- Google $8.000 → 160 leads; el tope no se supera.
- Con agencias 1.000 leads, visitas solicitadas = 115,5; visitas realizadas se limitan a 100.
- Con contribución `tasa_cierre × $1.625 − $60`, valor neto de visita: Meta $232,50; Google $427,50.
- Con batería, contribución unitaria antes de marketing = `$3.000 × (0,20 − 0,03) = $510`; aporte esperado por instalación sería $76,50 solo bajo el supuesto muestral 15 %. No incorporarlo al payback/caja mensual sin calendario de cobros y pagos.
