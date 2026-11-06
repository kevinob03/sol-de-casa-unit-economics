# PROGRESO — Sol de Casa

## Reglas de control
- No iniciar una fase futura sin autorización explícita del usuario.
- `[x]` indica trabajo realmente realizado y verificado.
- Para cifras, restricciones y entregables del Caso C prevalece el PDF; las diferencias se registran, no se corrigen en silencio.

## Estado comprobado — 6 de noviembre de 2026
- [x] Inspeccionado el workspace: proyecto sin archivos previos, solo `.git` sin commits.
- [x] Revisado el ZIP con contexto maestro, PDF del Caso C, transcripción y plan técnico de Fase 1 en `.md` y `.docx`.
- [x] Autorización explícita del usuario para iniciar Fase 2: “implementa fase 2”.
- [x] Las fuentes originales continúan en el ZIP de transferencia; no se copiaron al repositorio.

## Fase 1 — Planificación
- [x] Plan técnico de Fase 1 localizado y revisado.
- [x] El usuario autorizó iniciar Fase 2 explícitamente el 6 de noviembre de 2026.

## Fase 2 — Skill reutilizable
- [x] Creado `.agents/skills/unit-economics-analyst/SKILL.md` con frontmatter válido y flujo de análisis reutilizable.
- [x] Añadidas referencias de conceptos/fórmulas, modelos de negocio y validaciones/supuestos.
- [x] Añadidas entrada y resultados esperados de Sol de Casa con procedencia y cálculos de control.
- [x] Añadido validador reproducible de Sol de Casa con 21 controles.
- [x] Ejecutado el validador del ejemplo: **21 controles pasaron**.
- [x] Ejecutado `quick_validate.py`: **Skill is valid!** (PyYAML se instaló solo bajo `%TEMP%` para esta comprobación; no se añadió dependencia al proyecto).
- [x] Aprobación de Fase 2 registrada al autorizar la siguiente fase.

## Fases 4–6
- [x] Fase 3 Nivel 1 implementada y verificada; el usuario indicó “siguiente” para avanzar a Fase 4 el 6 de noviembre de 2026.
- [x] Revisión de Fase 4 y autorización para Fase 5: el usuario indicó “sigue” el 6 de noviembre de 2026.
- [x] Revisión de Fase 5 y autorización de Fase 6: el usuario indicó “contignua con la fase 6” el 6 de noviembre de 2026.

## Notas y límites
- Fuentes originales revisadas desde `C:\Users\HP8CV\Downloads\Sol_de_Casa_Contexto_Completo_Codex_Antigravity.zip`; no se modificaron.
- El plan técnico de Fase 1 deja CAC/LTV:CAC de la agencia pendientes en una tabla; los controles de esta skill reproducen las cifras del PDF y del contexto maestro.
- E-commerce y suscripción tienen fórmulas y límites conceptuales; la prueba integral incluida es solo Sol de Casa (generación de leads).
- Fase 3 se entregó como un libro XLSX; Fases 4 y 5 se integraron en una sola aplicación web.

## Evidencia de ejecución

```text
python .agents/skills/unit-economics-analyst/examples/validar_sol_de_casa.py
OK: 21 controles pasaron.

python C:\Users\HP8CV\.codex\skills\.system\skill-creator\scripts\quick_validate.py .agents/skills/unit-economics-analyst
Skill is valid!
```

**Estado:** paquete final preparado para revisión. Una publicación nueva queda sujeta a autorización explícita; la aplicación vigente es privada.

## Fase 3 — Modelo Nivel 1
- [x] Autorización explícita para implementar la siguiente fase recibida el 6 de noviembre de 2026.
- [x] Creado `outputs/fase-3-sol-de-casa-unit-economics/Sol_de_Casa_Nivel_1.xlsx` con pestañas Supuestos, Resultados y Recomendación.
- [x] Incluye entradas editables con fuentes, comparación de escenarios, embudo por canal, interpolación acotada al historial, capacidad, CAC real, LTV:CAC, contribución y dos gráficas.
- [x] Separadas la promesa de la agencia (CPL USD 8) y su historial (840 leads a USD 8.000); la propuesta propia mantiene USD 4.000 por canal, supone mejora permitida de Meta y agrega un técnico contratado el mes previo.
- [x] Verificadas cifras clave, reactividad a cambios de entrada, rechazo de inversión fuera del rango, conciliación manual independiente, ausencia de errores de fórmula, exportación/reapertura del XLSX y conservación de dos gráficas.
- [x] Revisada la representación visual y corregidos los encabezados repetidos.
- [x] El usuario indicó “siguiente” y autorizó continuar a Fase 4 el 6 de noviembre de 2026.

## Límites de Fase 3
- Proyección mensual de valores esperados; no son ventas contratadas.
- El modelo no proyecta caja agregada; la contratación exige validar por separado el piso de caja de USD 5.000.
- La mejora de Meta es un supuesto del caso, no un resultado observado.
- El nuevo técnico cuesta USD 1.800/mes desde su contratación y aporta 50 visitas de capacidad desde el mes siguiente.
- La proyección de caja se incorporó en Fase 5 y sus límites constan en su sección.

## Fase 4 — Dashboard Nivel 2
- [x] Aprobación para continuar recibida el 6 de noviembre de 2026 (“siguiente”).
- [x] Creado `dist/index.html`, autocontenido y abrible localmente sin instalación ni dependencias externas.
- [x] Controles editables: presupuestos, tasas de embudo, CPL prometido, costo de visita, capacidad/técnicos, precio, margen, comisión y adopción de batería.
- [x] Cuatro gráficos: dos embudos, CPL frente a CAC real y visitas pedidas/hechas frente a capacidad.
- [x] Incluye escenarios actual, promesa de agencia, historial y propuesta propia; alertas de LTV:CAC y exceso de capacidad; reset a valores base.
- [x] Paridad con XLSX en escenario actual: visitas 97,4875; ventas 22,31625; CAC real USD 620,59; LTV:CAC 2,6185×. Desviación calculada menor a 1 %.
- [x] Pruebas de interacción en runtime simulado: paridad, embudos, capacidad de agencia, propuesta propia, inversión fuera de rango y reset pasaron.
- [x] Creado y desplegado como sitio privado: https://sol-de-casa-unit-economics.rockypixie22.chatgpt.site (despliegue exitoso el 6 de noviembre de 2026).
- [x] El usuario autorizó continuar a Fase 5 (“sigue”) el 6 de noviembre de 2026.

## Límites de Fase 4
- El CPL fijo USD 8 es la promesa de la agencia, no el historial; ambos escenarios se mantienen separados.
- La batería usa contribución esperada editable; valor de inicio 0 % mantiene la paridad base. La muestra histórica fue 15 % (3 de 20).
- No se modelan tiempos de cobro/pago de batería ni caja mensual en este nivel.
- La validación visual en navegador no se completó porque el host de navegador CUA no estaba disponible; el servidor local respondió HTTP 200, el despliegue terminó correctamente y pasaron las comprobaciones de cálculo e interacción.
- Fase 6 consolida el paquete y sus límites constan en su sección.

## Fase 5 — Simulador de caja Nivel 3
- [x] Autorización recibida el 6 de noviembre de 2026 (“sigue”).
- [x] Ampliado el mismo dashboard local/privado de Fase 4 con una vista de caja a 24 meses, evitando crear una aplicación separada.
- [x] Implementadas interpolación Meta/Google, asignación de Google primero, máximo dos técnicos, pago desde contratación y capacidad desde el mes siguiente, gastos fijos, flujos escalonados y piso de USD 5.000.
- [x] Comparados cuatro planes: actual, agencia con historial observado, propuesta propia con mejora supuesta y propuesta propia más técnico contratado en el mes 1.
- [x] Gráficos de caja frente al piso y visitas solicitadas/atendidas frente a capacidad; tabla mensual de 24 filas; alertas de caja y reglas desde mes 19.
- [x] Mes 1 del plan actual conciliado a mano: visitas 97,4875; ventas nuevas 22,31625; entradas USD 144.027,81; salidas USD 140.291,51; caja final USD 15.736,30; diferencia independiente menor que USD 0,00000001.
- [x] En las proyecciones fijas, el plan propio con técnico termina con caja de USD 403.631; su mínimo es la caja inicial de USD 12.000. El plan histórico de la agencia cae bajo el piso y queda marcado como no viable.
- [x] Pruebas automáticas de las 24 filas, cuatro planes, conciliación del mes 1, capacidad diferida del técnico, alerta de piso, gráficas y pitch: pasaron.
- [x] Actualizada y publicada la misma aplicación estática privada; versión de Fase 5 desplegada correctamente el 6 de noviembre de 2026.
- [x] El usuario autorizó continuar a Fase 6 (“contignua con la fase 6”) el 6 de noviembre de 2026.

## Límites de Fase 5
- La proyección mantiene inversiones mensuales fijas; desde el mes 19 se cumple la restricción de inversión no decreciente.
- Las tasas mejoradas de Meta son un supuesto autorizado del caso, no una observación de Sol de Casa.
- Las 22 ventas históricas del mes 0 se usan para los cobros e instalación del mes 1; las ventas nuevas se instalan/cobran la segunda mitad al mes siguiente.
- No se incluye batería ni deuda en la caja por falta de calendario de cobro/pago y condiciones de crédito.
- El ZIP no contenía el modelo de referencia del facilitador; la reproducción con tolerancia del 3 % no pudo compararse. No se afirma validación externa.
- La vista ampliada comparte el mismo dashboard publicado de forma privada: https://sol-de-casa-unit-economics.rockypixie22.chatgpt.site

## Fase 6 — Entrega final
- [x] Creado README con estructura, instrucciones y enlaces a los entregables.
- [x] Creada guía de uso del libro y del dashboard local/privado.
- [x] Documentadas las fuentes, decisiones, pruebas ejecutadas y límites.
- [x] Preparado guion oral de aproximadamente 3 minutos con cifras y riesgos trazables.
- [x] Añadido validador reproducible sin dependencias externas para el dashboard y el simulador de caja.
- [x] Creado `outputs/Sol_de_Casa_Entrega_Final.zip` con skill, libro, dashboard, documentación y evidencia.
- [x] Validado el contenido del ZIP y ejecutados los validadores documentados.
- [ ] Publicar una versión con documentación de Fase 6: pendiente de autorización expresa; el sitio privado vigente corresponde a Fase 5.
- [ ] Revisión final del usuario: pendiente.

## Extension - Session 2 challenge
- [x] User requested completion of the Session 2 ZIP work using the existing project and one integrated implementation.
- [x] Added a third view to the same dashboard: family, neighbor, and owner panel; kept the finance model in place and created no second site.
- [x] Prepared the growth brief, 90-day plan, reward economics, and 3-minute demo script.
- [x] Kept case facts separate from the proposed pilot target and simulated events; no inverter, WhatsApp, scheduling, CRM, or real analytics integration.
- [x] Project validator checked syntax and the family -> neighbor -> simulated request -> owner panel flow; existing unit economics and cash checks passed.
- [x] Corrected an issue in the first draft: the months field rerendered after each key; it now updates after editing ends.
- [x] Updated the final package with the prototype and Session 2 documents.
- [ ] Manual visual browser review unavailable; the browser control bridge did not connect in this session.
