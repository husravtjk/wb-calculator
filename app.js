// ===== WB DATA =====
const WB_CATEGORIES = [
  {"name":"Автоаксессуары и доп. оборудование","fbw":26.5,"fbs":30},
  {"name":"Автозапчасти","fbw":26.5,"fbs":30},
  {"name":"Автохимия и автокосметика","fbw":26.5,"fbs":30},
  {"name":"Автоэлектроника","fbw":26.5,"fbs":30},
  {"name":"Аккумуляторы для ТС","fbw":26.5,"fbs":30},
  {"name":"Аксессуары","fbw":34.5,"fbs":38},
  {"name":"Аксессуары для волос","fbw":34.5,"fbs":38},
  {"name":"Аксессуары для электроники","fbw":24.5,"fbs":28},
  {"name":"Белье","fbw":34.5,"fbs":38},
  {"name":"Бижутерия","fbw":28.5,"fbs":32},
  {"name":"Бытовая техника","fbw":25.5,"fbs":29},
  {"name":"Бытовая химия","fbw":29.5,"fbs":33},
  {"name":"Ветаптека","fbw":21.5,"fbs":25},
  {"name":"Всё для садоводства","fbw":29.5,"fbs":29.5},
  {"name":"Головные уборы","fbw":34.5,"fbs":38},
  {"name":"Декор интерьера","fbw":29.5,"fbs":33},
  {"name":"Детское питание","fbw":24.5,"fbs":28},
  {"name":"Для праздника","fbw":32.5,"fbs":36},
  {"name":"Здоровье","fbw":32.5,"fbs":36},
  {"name":"Игровые консоли и игры","fbw":21.5,"fbs":25},
  {"name":"Игрушки","fbw":28.5,"fbs":32},
  {"name":"Канцелярские товары","fbw":29.5,"fbs":33},
  {"name":"Книжная продукция и диски","fbw":29.5,"fbs":33},
  {"name":"Красота","fbw":31.5,"fbs":35},
  {"name":"Крупная бытовая техника","fbw":19.5,"fbs":19.5},
  {"name":"Масла и технические жидкости","fbw":26.5,"fbs":30},
  {"name":"Мебель для сна","fbw":26.5,"fbs":30},
  {"name":"Мебель корпусная","fbw":26.5,"fbs":30},
  {"name":"Мебель мягкая","fbw":21.5,"fbs":25},
  {"name":"Мебель садовая","fbw":23.5,"fbs":27},
  {"name":"Мототовары","fbw":26.5,"fbs":30},
  {"name":"Ноутбуки и компьютеры","fbw":21.5,"fbs":25},
  {"name":"Обувь","fbw":34.5,"fbs":38},
  {"name":"Одежда","fbw":34.5,"fbs":38},
  {"name":"Одежда для малышей","fbw":34.5,"fbs":38},
  {"name":"Оргтехника","fbw":24.5,"fbs":28},
  {"name":"Освещение","fbw":29.5,"fbs":33},
  {"name":"Отделочные материалы","fbw":28.5,"fbs":32},
  {"name":"Периферия и аксессуары","fbw":24.5,"fbs":28},
  {"name":"Посуда и инвентарь","fbw":29.5,"fbs":33},
  {"name":"Продукты","fbw":21.5,"fbs":25},
  {"name":"Рукоделие","fbw":24.5,"fbs":28},
  {"name":"Ручной инструмент","fbw":26.5,"fbs":30},
  {"name":"Садовая техника","fbw":28.5,"fbs":32},
  {"name":"Сантехника","fbw":27.5,"fbs":31},
  {"name":"Сетевое оборудование","fbw":24.5,"fbs":28},
  {"name":"Смартфоны и гаджеты","fbw":24.5,"fbs":28},
  {"name":"Спецодежда и СИЗы","fbw":28.5,"fbs":32},
  {"name":"Спортивная обувь","fbw":34.5,"fbs":38},
  {"name":"Спортивная одежда","fbw":34.5,"fbs":38},
  {"name":"Спортивное питание","fbw":25.5,"fbs":29},
  {"name":"Спортивные аксессуары","fbw":29.5,"fbs":33},
  {"name":"Спортивный товар","fbw":22.5,"fbs":26},
  {"name":"Строительные материалы","fbw":28.5,"fbs":32},
  {"name":"Текстиль для дома","fbw":29.5,"fbs":33},
  {"name":"Телевизоры и аудиотехника","fbw":29,"fbs":32.5},
  {"name":"Техника для кухни","fbw":24.5,"fbs":28},
  {"name":"Товары для взрослых","fbw":29.5,"fbs":33},
  {"name":"Товары для животных","fbw":21.5,"fbs":25},
  {"name":"Товары для курения","fbw":28.5,"fbs":32},
  {"name":"Товары для малышей","fbw":26.5,"fbs":30},
  {"name":"Товары для отдыха","fbw":28.5,"fbs":32},
  {"name":"Умный дом и безопасность","fbw":24.5,"fbs":28},
  {"name":"Фото и видеотехника","fbw":28.5,"fbs":32},
  {"name":"Хозяйственные товары","fbw":29.5,"fbs":33},
  {"name":"Хранение вещей","fbw":26.5,"fbs":30},
  {"name":"Шины и диски","fbw":19,"fbs":19},
  {"name":"Шторы и аксессуары","fbw":29.5,"fbs":33},
  {"name":"Электрика","fbw":28.5,"fbs":32},
  {"name":"Электроинструмент","fbw":31.5,"fbs":35},
  {"name":"Электротранспорт","fbw":30.5,"fbs":34},
  {"name":"Ювелирные украшения","fbw":33,"fbs":33}
];

const WB_WAREHOUSES = [
  {"name":"Ташкент 2 (базовый 100%)","log1":46,"logN":14,"stor":0.08,"coef":100},
  {"name":"Волгоград","log1":50.6,"logN":15.4,"stor":0.09,"coef":110},
  {"name":"Котовск","log1":55.2,"logN":16.8,"stor":0.11,"coef":120},
  {"name":"Рязань (Тюшевское)","log1":57.5,"logN":17.5,"stor":0.11,"coef":125},
  {"name":"Владимир Воршинское","log1":59.8,"logN":18.2,"stor":0.10,"coef":130},
  {"name":"СЦ Крыловская","log1":64.4,"logN":19.6,"stor":0.12,"coef":140},
  {"name":"Воронеж","log1":64.4,"logN":19.6,"stor":0.13,"coef":140},
  {"name":"Алматы Атакент","log1":66.7,"logN":20.3,"stor":0.12,"coef":145},
  {"name":"СЦ Актобе","log1":66.7,"logN":20.3,"stor":0.12,"coef":145},
  {"name":"СЦ Шымкент Асар","log1":66.7,"logN":20.3,"stor":0.12,"coef":145},
  {"name":"СЦ Нижний Новгород","log1":69,"logN":21,"stor":0.12,"coef":150},
  {"name":"СЦ Астрахань","log1":71.3,"logN":21.7,"stor":0.13,"coef":155},
  {"name":"СЦ Ереван","log1":71.3,"logN":21.7,"stor":0.12,"coef":155},
  {"name":"Тула","log1":73.6,"logN":22.4,"stor":0.13,"coef":160},
  {"name":"СЦ Ижевск","log1":73.6,"logN":22.4,"stor":0.13,"coef":160},
  {"name":"Краснодар (Тихорецкая)","log1":75.9,"logN":23.1,"stor":0.13,"coef":165},
  {"name":"Новосемейкино","log1":75.9,"logN":23.1,"stor":0.14,"coef":165},
  {"name":"Новосемейкино: Питание","log1":80.5,"logN":24.5,"stor":0.14,"coef":175},
  {"name":"Сарапул","log1":80.5,"logN":24.5,"stor":0.14,"coef":175},
  {"name":"Электросталь","log1":82.8,"logN":25.2,"stor":0.14,"coef":180},
  {"name":"СЦ Челябинск 2","log1":82.8,"logN":25.2,"stor":0.14,"coef":180},
  {"name":"СЦ Архангельск","log1":82.8,"logN":25.2,"stor":0.14,"coef":180},
  {"name":"СЦ Киров","log1":85.1,"logN":25.9,"stor":0.15,"coef":185},
  {"name":"Екатеринбург","log1":87.4,"logN":26.6,"stor":0.15,"coef":190},
  {"name":"СЦ Оренбург","log1":89.7,"logN":27.3,"stor":0.16,"coef":195},
  {"name":"СЦ Абакан 2","log1":92,"logN":28,"stor":0.16,"coef":200},
  {"name":"Коледино","log1":94.3,"logN":28.7,"stor":0.16,"coef":205},
  {"name":"Подольск","log1":94.3,"logN":28.7,"stor":0.16,"coef":205},
  {"name":"СЦ Барнаул","log1":101.2,"logN":30.8,"stor":0.18,"coef":220}
];

// ===== HELPERS =====
function fmt(n) {
  if (n === undefined || n === null || isNaN(n)) return '0';
  return Math.round(n).toLocaleString('ru-RU');
}

function fmtDec(n, digits = 1) {
  if (n === undefined || n === null || isNaN(n)) return '0';
  return n.toLocaleString('ru-RU', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

function pct(val, total) {
  if (!total) return '0%';
  return fmtDec(val / total * 100) + '%';
}

function getVal(id) {
  const el = document.getElementById(id);
  const v = parseFloat(el.value);
  return isNaN(v) ? 0 : v;
}

// ===== INIT SELECTS =====
function initSelects() {
  const catSelect = document.getElementById('category');
  WB_CATEGORIES.forEach((cat, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = cat.name;
    catSelect.appendChild(opt);
  });

  const whSelect = document.getElementById('warehouse');
  WB_WAREHOUSES.forEach((wh, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${wh.name} (×${wh.coef}%)`;
    whSelect.appendChild(opt);
  });
}

// ===== CATEGORY SEARCH =====
function initCategorySearch() {
  const search = document.getElementById('categorySearch');
  const select = document.getElementById('category');

  search.addEventListener('input', () => {
    const query = search.value.toLowerCase().trim();
    const options = select.options;
    let firstVisible = -1;

    for (let i = 0; i < options.length; i++) {
      const match = !query || options[i].textContent.toLowerCase().includes(query);
      options[i].hidden = !match;
      if (match && firstVisible === -1) firstVisible = i;
    }

    if (firstVisible >= 0) {
      select.selectedIndex = firstVisible;
      updateCommission();
      calculate();
    }
  });

  search.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      search.blur();
    }
  });
}

// ===== SALES MODEL TOGGLE =====
let salesModel = 'fbw';

function initSalesModelToggle() {
  const btnFBW = document.getElementById('btnFBW');
  const btnFBS = document.getElementById('btnFBS');

  btnFBW.addEventListener('click', () => {
    salesModel = 'fbw';
    btnFBW.classList.add('active');
    btnFBS.classList.remove('active');
    updateCommission();
    calculate();
  });

  btnFBS.addEventListener('click', () => {
    salesModel = 'fbs';
    btnFBS.classList.add('active');
    btnFBW.classList.remove('active');
    updateCommission();
    calculate();
  });
}

function updateCommission() {
  const catIdx = document.getElementById('category').value;
  const cat = WB_CATEGORIES[catIdx];
  if (cat) {
    document.getElementById('commission').value = cat[salesModel];
  }
}

// ===== VAT TOGGLE =====
let vatRate = 0;

function initVATToggle() {
  const btns = [
    document.getElementById('vatNone'),
    document.getElementById('vat5'),
    document.getElementById('vat7')
  ];

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      vatRate = parseFloat(btn.dataset.value);
      calculate();
    });
  });
}

// ===== RANGE SLIDERS =====
function initSliders() {
  const spp = document.getElementById('spp');
  const sppLabel = document.getElementById('sppValue');
  spp.addEventListener('input', () => {
    sppLabel.textContent = spp.value + '%';
    calculate();
  });

  const wallet = document.getElementById('walletDiscount');
  const walletLabel = document.getElementById('walletValue');
  wallet.addEventListener('input', () => {
    walletLabel.textContent = wallet.value + '%';
    calculate();
  });
}

// ===== THEME TOGGLE =====
let currentTheme = 'light';

function initTheme() {
  const toggle = document.getElementById('themeToggle');

  toggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
  });
}

// ===== MAIN CALCULATION =====
function calculate() {
  // Step 1 values
  const price = getVal('price');
  const commissionPct = getVal('commission');
  const extraCommPct = getVal('extraCommission');
  const acquiringPct = getVal('acquiring');
  const sppPct = getVal('spp');
  const walletPct = getVal('walletDiscount');

  // Step 2 values
  const whIdx = document.getElementById('warehouse').value;
  const wh = WB_WAREHOUSES[whIdx] || WB_WAREHOUSES[0];
  const dimL = getVal('dimL');
  const dimW = getVal('dimW');
  const dimH = getVal('dimH');
  const redemptionRate = getVal('redemptionRate');
  const storageDays = getVal('storageDays');
  const acceptance = getVal('acceptance');

  // Step 3 values
  const advertisingRub = getVal('advertisingRub');
  const constructorPct = getVal('constructorTariff');

  // Step 4 values
  const taxMode = document.getElementById('taxMode').value;
  const taxRatePct = getVal('taxRate');
  const purchasePrice = getVal('purchasePrice');
  const additionalCosts = getVal('additionalCosts');
  const deliveryToWB = getVal('deliveryToWB');

  // ===== CALCULATIONS =====

  // Volume
  const liters = dimL * dimW * dimH / 1000;

  // Logistics
  const logForward = wh.log1 + wh.logN * Math.max(0, liters - 1);
  const logReturn = logForward; // same formula

  // Effective logistics per sale (accounting for returns)
  const redemptionFraction = Math.max(redemptionRate, 1) / 100;
  const effectiveLogistics = logForward + logReturn * (1 - redemptionFraction) / redemptionFraction;

  // Commission
  const commissionRub = price * (commissionPct + extraCommPct) / 100;

  // Acquiring
  const acquiringRub = price * acquiringPct / 100;

  // Storage
  const storagePerDay = wh.stor * liters;
  const storageTotal = storagePerDay * storageDays;

  // Advertising
  const constructorRub = price * constructorPct / 100;
  const advertisingTotal = advertisingRub + constructorRub;

  // Total WB deductions
  const totalDeductions = commissionRub + acquiringRub + effectiveLogistics + storageTotal + acceptance + advertisingTotal;

  // Payout
  const payout = price - totalDeductions;

  // Cost of goods
  const costOfGoods = purchasePrice + additionalCosts + deliveryToWB;

  // Tax
  let taxBase;
  if (taxMode === 'income') {
    taxBase = payout;
  } else {
    taxBase = Math.max(0, payout - costOfGoods);
  }
  const tax = taxBase * taxRatePct / 100;

  // VAT
  const vatRub = price * vatRate / 100;

  // Net profit
  const netProfit = payout - costOfGoods - tax - vatRub;

  // KPIs
  const marginality = price > 0 ? (netProfit / price * 100) : 0;
  const roi = costOfGoods > 0 ? (netProfit / costOfGoods * 100) : 0;

  // Buyer price
  const buyerPrice = price * (1 - sppPct / 100) * (1 - walletPct / 100);

  // ===== UPDATE DISPLAYS =====

  // Step 2 computed
  document.getElementById('volumeDisplay').textContent = fmtDec(liters) + ' л';
  document.getElementById('logisticsDisplay').textContent = fmt(logForward) + ' ₽';
  document.getElementById('returnLogDisplay').textContent = fmt(logReturn) + ' ₽';
  document.getElementById('storPerDayDisplay').textContent = fmtDec(storagePerDay, 2) + ' ₽';
  document.getElementById('storTotalDisplay').textContent = fmt(storageTotal) + ' ₽';

  // Step 3 computed
  document.getElementById('promoTotalDisplay').textContent = fmt(advertisingTotal) + ' ₽';

  // Step 4 computed
  document.getElementById('costTotalDisplay').textContent = fmt(costOfGoods) + ' ₽';

  // Top KPI bar
  const kpiMarginEl = document.getElementById('kpi-margin');
  const kpiRoiEl = document.getElementById('kpi-roi');
  const kpiProfitEl = document.getElementById('kpi-profit');

  kpiMarginEl.textContent = fmtDec(marginality) + '%';
  kpiRoiEl.textContent = fmtDec(roi) + '%';
  kpiProfitEl.textContent = fmt(netProfit) + ' ₽';

  kpiMarginEl.style.color = marginality >= 0 ? '#34d399' : '#f87171';
  kpiRoiEl.style.color = roi >= 0 ? '#34d399' : '#f87171';
  kpiProfitEl.style.color = netProfit >= 0 ? '#34d399' : '#f87171';

  // Results panel
  document.getElementById('resOurPrice').textContent = fmt(price) + ' ₽';
  document.getElementById('resBuyerPrice').textContent = fmt(buyerPrice) + ' ₽';
  document.getElementById('resTotalDeductions').textContent = fmt(totalDeductions) + ' ₽';
  document.getElementById('resPayout').textContent = fmt(payout) + ' ₽';

  // Breakdown rows
  setRow('rowPrice', 'Цена на WB', price, '100%');
  setRow('rowCommission', 'Комиссия WB', commissionRub, pct(commissionRub, price));
  setRow('rowAcquiring', 'Эквайринг', acquiringRub, pct(acquiringRub, price));
  setRow('rowLogistics', 'Логистика (с учётом выкупа)', effectiveLogistics, pct(effectiveLogistics, price));
  setRow('rowStorage', 'Хранение', storageTotal, pct(storageTotal, price));
  setRow('rowAcceptance', 'Приёмка', acceptance, pct(acceptance, price));
  setRow('rowAdvertising', 'Реклама', advertisingRub, pct(advertisingRub, price));
  setRow('rowConstructor', 'Конструктор тарифов', constructorRub, pct(constructorRub, price));
  setRow('rowTotalDeductions', '= Итого удержания WB', totalDeductions, pct(totalDeductions, price));
  setRow('rowPayout', '= К перечислению', payout, pct(payout, price));
  setRow('rowTaxBase', 'Налоговая база', taxBase, '');
  setRow('rowTax', 'Налог', tax, pct(tax, price));
  setRow('rowVAT', 'НДС', vatRub, pct(vatRub, price));
  setRow('rowCost', 'Себестоимость', costOfGoods, pct(costOfGoods, price));
  setRow('rowProfit', '= ЧИСТАЯ ПРИБЫЛЬ', netProfit, pct(netProfit, price));

  // Profit row coloring
  const profitRow = document.getElementById('rowProfit');
  profitRow.classList.remove('profit-positive', 'profit-negative');
  profitRow.classList.add(netProfit >= 0 ? 'profit-positive' : 'profit-negative');

  // Results KPIs
  const resMarginEl = document.getElementById('resMargin');
  const resROIEl = document.getElementById('resROI');
  const resPerUnitEl = document.getElementById('resPerUnit');

  resMarginEl.textContent = fmtDec(marginality) + '%';
  resROIEl.textContent = fmtDec(roi) + '%';
  resPerUnitEl.textContent = fmt(netProfit) + ' ₽';

  resMarginEl.style.color = marginality >= 0 ? '#34d399' : '#f87171';
  resROIEl.style.color = roi >= 0 ? '#34d399' : '#f87171';
  resPerUnitEl.style.color = netProfit >= 0 ? '#34d399' : '#f87171';

  // Impact analysis
  updateImpactBars({
    'Комиссия WB': commissionRub,
    'Логистика': effectiveLogistics,
    'Хранение': storageTotal,
    'Себестоимость': costOfGoods,
    'Реклама': advertisingTotal,
    'Налог + НДС': tax + vatRub
  });
}

function setRow(id, label, value, percent) {
  const row = document.getElementById(id);
  if (!row) return;
  const spans = row.querySelectorAll('span');
  spans[0].textContent = label;
  spans[1].textContent = fmt(value);
  spans[2].textContent = percent;
}

// ===== IMPACT BARS =====
const impactColors = ['fill-purple', 'fill-blue', 'fill-amber', 'fill-red', 'fill-pink', 'fill-green'];

function updateImpactBars(items) {
  const container = document.getElementById('impactBars');
  const entries = Object.entries(items).sort((a, b) => b[1] - a[1]);
  const maxVal = Math.max(...entries.map(e => Math.abs(e[1])), 1);

  container.innerHTML = '';
  entries.forEach(([name, value], i) => {
    const widthPct = Math.min(100, Math.abs(value) / maxVal * 100);
    const item = document.createElement('div');
    item.className = 'impact-bar-item';
    item.innerHTML = `
      <div class="impact-bar-label">
        <span>${name}</span>
        <span>${fmt(value)} ₽</span>
      </div>
      <div class="impact-bar-track">
        <div class="impact-bar-fill ${impactColors[i % impactColors.length]}" style="width: ${widthPct}%"></div>
      </div>
    `;
    container.appendChild(item);
  });
}

// ===== EVENT LISTENERS =====
function initListeners() {
  // All number inputs
  const numberInputs = document.querySelectorAll('input[type="number"]');
  numberInputs.forEach(input => {
    input.addEventListener('input', calculate);
    input.addEventListener('change', calculate);
    input.addEventListener('keyup', calculate);
  });

  // Selects
  document.getElementById('category').addEventListener('change', () => {
    updateCommission();
    calculate();
  });

  document.getElementById('warehouse').addEventListener('change', calculate);
  document.getElementById('taxMode').addEventListener('change', calculate);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initSelects();
  initCategorySearch();
  initSalesModelToggle();
  initVATToggle();
  initSliders();
  initTheme();
  initListeners();
  updateCommission();
  calculate();
});
