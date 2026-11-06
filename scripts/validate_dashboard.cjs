const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const html = fs.readFileSync('dist/index.html', 'utf8');
const workbook = 'outputs/fase-3-sol-de-casa-unit-economics/Sol_de_Casa_Nivel_1.xlsx';
assert(fs.existsSync(workbook), 'Nivel 1 workbook exists');
assert(!/<script[^>]+src\s*=\s*["']https?:/i.test(html), 'dashboard has no remote script dependency');
assert(html.includes('prueba de reproducción al 3 % no está disponible'), 'reference-model limitation is disclosed');

const scriptStart = html.indexOf('<script>') + '<script>'.length;
const scriptEnd = html.indexOf('</script>', scriptStart);
assert(scriptStart >= '<script>'.length && scriptEnd > scriptStart, 'inline app script exists');
new vm.Script(html.slice(scriptStart, scriptEnd), { filename: 'dist/index.html inline script' });

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
