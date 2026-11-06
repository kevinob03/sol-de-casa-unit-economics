const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const html = fs.readFileSync('dist/index.html', 'utf8');
const referralJs = fs.readFileSync('dist/referral.js', 'utf8');
const workbook = 'outputs/fase-3-sol-de-casa-unit-economics/Sol_de_Casa_Nivel_1.xlsx';
assert(fs.existsSync(workbook), 'Nivel 1 workbook exists');
assert(!/<script[^>]+src\s*=\s*["']https?:/i.test(html), 'dashboard has no remote script dependency');
assert(html.includes('id="tabReferrals"') && html.includes('id="referralPage"'), 'referral prototype is integrated as a third tab');
assert(html.includes('referral.css') && html.includes('referral.js'), 'referral assets are linked locally');
assert(html.includes('prueba de reproducción al 3 % no está disponible'), 'reference-model limitation is disclosed');

const scriptStart = html.indexOf('<script>') + '<script>'.length;
const scriptEnd = html.indexOf('</script>', scriptStart);
assert(scriptStart >= '<script>'.length && scriptEnd > scriptStart, 'inline app script exists');
new vm.Script(html.slice(scriptStart, scriptEnd), { filename: 'dist/index.html inline script' });
new vm.Script(referralJs, { filename: 'dist/referral.js' });

const elements = new Map();
function element(id) {
  if (!elements.has(id)) {
    let value = '', type = 'text', checked = false;
    const openingTag = html.match(new RegExp('<(?:input|select)[^>]*id="' + id + '"[^>]*>'));
    if (openingTag) {
      value = (openingTag[0].match(/value="([^"]*)"/) || [])[1] || '';
      type = (openingTag[0].match(/type="([^"]*)"/) || [])[1] || 'select-one';
      checked = /checked/.test(openingTag[0]);
    }
    elements.set(id, { id, value, type, checked, textContent: '', innerHTML: '', className: '', events: {},
      addEventListener(name, fn) { this.events[name] = fn; }, setAttribute() {},
      classList: { toggle() {}, remove() {} } });
  }
  return elements.get(id);
}
const presetButtons = ['current', 'agency', 'history', 'own'].map(preset => ({
  dataset: { preset }, events: {}, classList: { toggle() {}, remove() {} },
  addEventListener(name, fn) { this.events[name] = fn; },
}));
let cashButtons = [];
function findCashButtons() {
  cashButtons = [...element('planCards').innerHTML.matchAll(/data-cash-plan="([^"]+)"/g)].map(match => ({
    dataset: { cashPlan: match[1] }, events: {}, classList: { toggle() {}, remove() {} },
    addEventListener(name, fn) { this.events[name] = fn; },
  }));
  return cashButtons;
}
const context = { document: { getElementById: element, querySelectorAll(selector) {
  if (selector === '.preset') return presetButtons;
  if (selector === '[data-cash-plan]') return findCashButtons();
  return [];
}}, Intl, Math, Number, Array, String, console };
vm.runInNewContext(html.slice(scriptStart, scriptEnd), context, { filename: 'dashboard runtime checks' });

assert.equal(element('parityBadge').textContent, 'Nivel 1 · coincide <1%', 'base metrics match the XLSX');
assert.equal(element('salesKpi').textContent, '22,32', 'base expected sales');
assert.equal((element('cashMonthRows').innerHTML.match(/<tr>/g) || []).length, 24, '24 monthly rows');
assert.equal((element('cashPlanRows').innerHTML.match(/<tr>/g) || []).length, 4, 'four compared plans');
assert(element('manualProof').textContent.includes('coincide'), 'independent month 1 check reconciles');
assert(element('cashPlanRows').innerHTML.includes('$403,631'), 'own plan with technician ranks highest among valid plans');
assert(element('cashPlanRows').innerHTML.includes('Bajo piso'), 'historical agency scenario is flagged');
assert(element('cashBalanceChart').innerHTML.includes('<polyline'), 'cash chart rendered');
assert(element('cashVisitsChart').innerHTML.includes('<polyline'), 'visits chart rendered');

cashButtons.find(button => button.dataset.cashPlan === 'tech').events.click();
assert(element('cashMonthRows').innerHTML.includes('100,00') && element('cashMonthRows').innerHTML.includes('150,00'),
  'technician increases capacity from month 2');
assert(!element('cashMonthRows').innerHTML.includes('BAJO PISO'), 'selected technician plan remains above floor');
cashButtons.find(button => button.dataset.cashPlan === 'agency').events.click();
assert(element('cashMonthRows').innerHTML.includes('BAJO PISO'), 'agency history triggers floor alert');
cashButtons.find(button => button.dataset.cashPlan === 'current').events.click();
assert(element('cashMonthRows').innerHTML.includes('$15,736'), 'reset to current plan');

console.log('OK: dashboard syntax, XLSX parity, 24 months, four plans, month 1 reconciliation, deferred technician capacity, cash alerts, two charts and reset.');

const referralRoot = { innerHTML: '', events: {}, addEventListener(name, fn) { this.events[name] = fn; } };
const referralElements = { neighborBill: { value: '110' } };
const storage = new Map();
const referralContext = {
  document: { getElementById(id) { return id === 'referralPage' ? referralRoot : referralElements[id] || null; } },
  location: { href: 'https://example.test/?ref=CASA-TEST', search: '?ref=CASA-TEST' },
  localStorage: { getItem(key) { return storage.get(key) || null; }, setItem(key, value) { storage.set(key, value); } },
  navigator: {}, URL, URLSearchParams, Intl, Math, Number, JSON, alert() {}, window: { prompt() {} },
};
vm.runInNewContext(referralJs, referralContext, { filename: 'referral prototype runtime checks' });
assert(referralRoot.innerHTML.includes('Mi ahorro') && referralRoot.innerHTML.includes('Tu casa ahorró') && referralRoot.innerHTML.includes('77'), 'family view displays the case based savings estimate');
referralRoot.events.change({ target: { id: 'refMonths', value: '36' } });
assert(referralRoot.innerHTML.includes('value="36"') && /2[\s\u00a0\u202f.,]*772/.test(referralRoot.innerHTML), 'multi digit savings period updates after editing');
;(async()=>{
  const clickView = async view => referralRoot.events.click({ target: { closest(selector) { return selector === '[data-view]' ? { dataset: { view } } : null; } } });
  const clickAction = async action => referralRoot.events.click({ target: { closest(selector) { return selector === '[data-action]' ? { dataset: { action } } : null; } } });
  await clickView('neighbor');
  assert(referralRoot.innerHTML.includes('Soy vecino') && referralRoot.innerHTML.includes('CASA-TEST'), 'neighbor flow retains referral source');
  let prevented = false;
  referralRoot.events.submit({ preventDefault() { prevented = true; }, target: { id: 'neighborCalc' } });
  assert(prevented && referralRoot.innerHTML.includes('Ahorro estimado:') && referralRoot.innerHTML.includes('7 años'), 'neighbor calculator and payback estimate render');
  await clickAction('appointment');
  assert(referralRoot.innerHTML.includes('appointmentForm'), 'neighbor can open the appointment request step');
  referralRoot.events.submit({ preventDefault() {}, target: { id: 'appointmentForm' } });
  assert(referralRoot.innerHTML.includes('Solicitud simulada registrada'), 'appointment confirmation is clearly simulated');
  await clickView('owner');
  assert(referralRoot.innerHTML.includes('Datos simulados / de referencia') && referralRoot.innerHTML.includes('420'), 'owner dashboard separates demo activity from case references');
  console.log('OK: referral prototype syntax, family-to-neighbor flow, savings calculation, simulated appointment and owner dashboard.');
})().catch(error=>{console.error(error);process.exitCode=1;});
