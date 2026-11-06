# Fuentes, validación y límites

## Fuentes

Las fuentes originales permanecen en el archivo recibido `C:\Users\HP8CV\Downloads\Sol_de_Casa_Contexto_Completo_Codex_Antigravity.zip`; no se modificaron ni se duplicaron en el paquete final.

- **Caso C — Sol de Casa**, PDF de 12 páginas. Datos de instalación y caja: pp. 3 y 5; conversiones y batería: p. 4; historial de leads: p. 5; supuesto de respuesta rápida/filtro: p. 6; rangos y reglas del simulador: p. 9; niveles y rúbrica: pp. 11–12.
- **CONTEXTO_MAESTRO_SOL_DE_CASA_CODEX_ANTIGRAVITY.md**: especificación, fórmulas, fases, aprobaciones y cautelas.
- **Fase_1_Sol_de_Casa_Plan_Tecnico.md/.docx**: arquitectura y criterios de aceptación.
- **Mercadeo (transcripción)**: definiciones y contexto sobre contribución, CAC, LTV y embudo.

La interpolación, las cifras de la agencia y las tasas mejoradas conservan su distinción entre historial observado y supuesto. El modelo de referencia del facilitador no venía en las fuentes; por tanto, no se afirma haber reproducido sus cifras dentro del 3 %.

## Controles registrados

- **Skill reutilizable:** el ejemplo de Sol de Casa pasó 21 controles; `quick_validate.py` reportó `Skill is valid!`.
- **Libro Nivel 1:** se comprobaron contribución por venta de USD 1.625; 97,4875 visitas y 22,31625 ventas actuales; sensibilidades, límites de inversión, cálculo manual, fórmulas, exportación/reapertura y conservación de dos gráficos.
- **Dashboard mensual:** paridad del escenario base con el XLSX dentro del 1 %; se revisaron los presets, los embudos, la alerta de capacidad y el restablecimiento.
- **Simulador de caja:** 24 filas por plan; cuatro planes; conciliación independiente del mes 1; capacidad del nuevo técnico desde el mes posterior a contratar; alertas de piso; y regla de inversión no decreciente desde el mes 19.
- **Mes 1 manual del plan actual:** visitas solicitadas/hechas 97,4875; ventas nuevas 22,31625; entradas USD 144.027,8125; salidas USD 140.291,5125; caja final USD 15.736,30. La diferencia frente al motor es menor a USD 0,00000001.
- **Validador conservado:** ejecute `node scripts/validate_dashboard.cjs` para revisar de nuevo la lógica de la página y la caja; ejecute `python .agents/skills/unit-economics-analyst/examples/validar_sol_de_casa.py` para los 21 controles de la skill.

La validación de pantalla en navegador no se completó: el host de navegador CUA no estuvo disponible. La página sí respondió HTTP 200 en el servidor local y sus cálculos e interacciones se comprobaron en un runtime simulado de JavaScript. El despliegue privado de la Fase 5 terminó correctamente.

## Límites

- La mejora de Meta (20 % menos leads, y tasas de contacto, agenda, visita y cierre mayores) es una hipótesis permitida, no un resultado medido.
- Los escenarios mantienen inversión mensual fija; el plan con técnico empieza a pagar USD 1.800 en el mes 1 y recibe +50 de capacidad desde el mes 2.
- La caja no incluye batería, deuda, interés o desembolso de crédito; faltan datos de calendario y condiciones.
- La comparación de caja usa cuatro planes concretos, no una optimización exhaustiva de todas las inversiones y fechas de contratación.
- Los saldos futuros son proyecciones condicionadas a las entradas y reglas documentadas.
- La app publicada es privada. No se publicó una nueva versión con estos documentos de Fase 6.
