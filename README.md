# Sol de Casa — unit economics

Proyecto de análisis del Caso C: modelo de adquisición, caja y recomendación para Sol de Casa. El paquete reúne la skill reutilizable, el libro Nivel 1, el dashboard con niveles 2 y 3, documentación y validaciones.

## Empezar

1. Abra [`dist/index.html`](dist/index.html) en un navegador moderno. Es un archivo autocontenido: no requiere instalación, conexión a datos ni credenciales.
2. En **Economía mensual**, pruebe los escenarios y los supuestos editables.
3. En **Caja · 24 meses**, compare los cuatro planes y revise el detalle mensual, las alertas y el pitch.
4. Para ver el modelo de hoja de cálculo, abra [`Sol_de_Casa_Nivel_1.xlsx`](outputs/fase-3-sol-de-casa-unit-economics/Sol_de_Casa_Nivel_1.xlsx) en Excel o impórtelo en Google Sheets.

El dashboard también está publicado en un sitio privado: [Sol de Casa | Unit Economics](https://sol-de-casa-unit-economics.rockypixie22.chatgpt.site). La versión publicada corresponde al entregable de Fase 5; no se publicó una versión nueva durante Fase 6.

El paquete autocontenido está en [`outputs/Sol_de_Casa_Entrega_Final.zip`](outputs/Sol_de_Casa_Entrega_Final.zip).

## Archivos

- `.agents/skills/unit-economics-analyst/`: skill, referencias, ejemplo y validador de Sol de Casa.
- `outputs/fase-3-sol-de-casa-unit-economics/Sol_de_Casa_Nivel_1.xlsx`: supuestos, escenarios, resultados y recomendación del Nivel 1.
- `dist/index.html`: dashboard local con análisis mensual y simulador de caja de 24 meses.
- `docs/guia_de_uso.md`: instrucciones de navegación y lectura.
- `docs/fuentes_y_validacion.md`: procedencia, controles ejecutados, decisiones y límites.
- `docs/presentacion_3_minutos.md`: guion oral para presentar la recomendación.
- `scripts/validate_dashboard.cjs`: pruebas reproducibles del HTML/JavaScript y del modelo de caja, con Node.js estándar.
- `PROGRESO.md`: cronología de fases, aprobaciones y evidencia.

## Validar

Desde la raíz del proyecto:

```text
node scripts/validate_dashboard.cjs
python .agents/skills/unit-economics-analyst/examples/validar_sol_de_casa.py
```

El primer comando verifica cálculos base, conciliación del mes 1, escenarios, alertas, capacidad del técnico y los elementos principales de la página. El segundo ejecuta 21 controles de la skill.

## Alcance y límites

Los valores de ventas son expectativas, no contratos ni garantías. El modelo del Nivel 1 no proyecta caja; esa pregunta se aborda en la pestaña de 24 meses. La mejora de Meta es un supuesto autorizado por el caso, no una conversión observada. La batería no entra en la caja porque no se proporcionaron fechas de cobro o pago. No se incluyó el archivo del modelo de referencia del facilitador, por lo que no se pudo comprobar su tolerancia del 3 %.
