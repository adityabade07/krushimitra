// KrushiMitra — app.js (ML-Powered Backend)
// Frontend remains identical — outputs driven by AI/ML scoring algorithms

let currentLang = 'en';
let currentDistKey = 'pune';
let currentSeason = 'kharif';
let currentSoil = 'black';
let currentIrr = 'rainfed';
let appReady = false;

// Current ML result cache (reused across renders)
let _mlResult = null;

// ─── ML RESULT GETTER ─────────────────────────────────────────────────────
function getMLResult(distKey) {
  _mlResult = getMLRecommendation(distKey || currentDistKey, currentSoil, currentSeason, currentIrr);
  return _mlResult;
}

// ─── LANGUAGE ─────────────────────────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.remove('active');
    if (b.dataset.lang === lang) b.classList.add('active');
  });
  applyLang();
  if (appReady) renderAll(DISTRICTS[currentDistKey]);
}

function applyLang() {
  const t = LANG[currentLang];
  Object.keys(t).forEach(k => {
    const el = document.getElementById(k);
    if (el) el.textContent = t[k];
  });
  const locInput = document.getElementById('f-location');
  if (locInput) {
    if (currentLang === 'hi') locInput.placeholder = 'उदा. पुणे, नाशिक, नागपुर';
    else if (currentLang === 'mr') locInput.placeholder = 'उदा. पुणे, नाशिक, नागपूर';
    else locInput.placeholder = 'e.g. Pune, Nashik, Nagpur';
  }
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active-nav'));
  const map = {
    home:'navHome', input:'navInput', climate:'navClimate', recommend:'navRec',
    risk:'navRisk', calendar:'navCal', pest:'navPest', dashboard:'navDash'
  };
  if (map[id]) {
    const el = document.getElementById(map[id]);
    if (el) el.classList.add('active-nav');
  }
  window.scrollTo(0, 0);
}

function setTxt(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ─── DISTRICT INPUT HANDLING ──────────────────────────────────────────────
function onDistrictInput(val) {
  const key = getDistrictKey(val);
  if (key && DISTRICTS[key]) {
    const changed = currentDistKey !== key;
    currentDistKey = key;
    showDistrictBadge(key);
    autoSelectSoil(key);
    updateHomeCard(key);
    if (appReady && changed) {
      _mlResult = null;
      renderAll(DISTRICTS[currentDistKey]);
    }
  } else {
    document.getElementById('district-badge').classList.remove('visible');
  }
}

function showDistrictBadge(key) {
  const d = DISTRICTS[key];
  const badge = document.getElementById('district-badge');
  const t = LANG[currentLang];
  const dname = getDistrictName(key, currentLang);
  document.getElementById('db-title').textContent = dname;
  const grid = document.getElementById('db-grid');
  const rainLabel = currentLang==='hi'?'वर्षा':currentLang==='mr'?'पाऊस':'Rainfall';
  const cropsLabel = currentLang==='hi'?'प्रमुख फसलें':currentLang==='mr'?'प्रमुख पिके':'Main Crops';
  // Use ML to get top crops for this district
  const mlRes = getMLRecommendation(key, d.dominantSoil, currentSeason, currentIrr);
  const topCrops = mlRes ? mlRes.rankedCrops.slice(0,3).map(c=>c.name).join(', ') : d.crops.kharif.slice(0,3).map(c=>c.name).join(', ');
  grid.innerHTML = `
    <div class="db-item">${d.region}</div>
    <div class="db-item">${d.rainfall}mm ${rainLabel}</div>
    <div class="db-item">${d.temp.avg}°C</div>
    <div class="db-item">${d.soilTypes[0]}</div>
    <div class="db-item">${cropsLabel}: ${topCrops}</div>
  `;
  badge.classList.add('visible');
}

function autoSelectSoil(key) {
  const d = DISTRICTS[key];
  if (!d) return;
  document.querySelectorAll('input[name="soil"]').forEach(inp => {
    inp.closest('.radio-option').classList.remove('selected');
    if (inp.value === d.dominantSoil) {
      inp.checked = true;
      inp.closest('.radio-option').classList.add('selected');
      currentSoil = d.dominantSoil;
    }
  });
}

function updateHomeCard(key) {
  const d = DISTRICTS[key];
  if (!d) return;
  // Use ML to get best crop for current season/soil
  const mlRes = getMLRecommendation(key, currentSoil, currentSeason, currentIrr);
  const crop = mlRes && mlRes.topCrop ? mlRes.topCrop : (d.crops[currentSeason] || d.crops.kharif)[0];
  const dname = getDistrictName(key, currentLang);
  setTxt('home-crop-name', crop.name);
  setTxt('home-crop-detail', getSeasonLabel(currentSeason) + ' — ' + dname);
  const adjusted = mlRes && mlRes.estimatedYield ? mlRes.estimatedYield : crop.yield;
  const yieldLead = String(adjusted).split('-')[0].trim();
  const yieldUnit = String(adjusted).replace(/^[\d.\s-]+/, '').trim();
  setTxt('home-yield', yieldUnit ? `${yieldLead} ${yieldUnit}` : yieldLead);
  setTxt('home-msp', crop.msp ? '₹' + crop.msp.toLocaleString() + '/Qtl' : 'N/A');
  const risks = mlRes ? mlRes.risks : { droughtRisk: d.droughtRisk, floodRisk: d.floodRisk, pestRisk: d.pestRisk };
  const riskItems = [
    {id:'home-risk1',type:'drought',val: mlRes ? mlRes.risks.droughtRisk : d.droughtRisk},
    {id:'home-risk2',type:'pest',   val: mlRes ? mlRes.risks.pestRisk    : d.pestRisk},
    {id:'home-risk3',type:'flood',  val: mlRes ? mlRes.risks.floodRisk   : d.floodRisk},
  ];
  riskItems.forEach(r => {
    const el = document.getElementById(r.id);
    if (!el) return;
    const labels = {
      drought:{hi:'सूखा',mr:'दुष्काळ',en:'Drought'},
      pest:   {hi:'कीट', mr:'कीटक',   en:'Pest'},
      flood:  {hi:'बाढ़', mr:'पूर',    en:'Flood'}
    };
    const lbl = labels[r.type][currentLang] || labels[r.type]['en'];
    const lvl = LANG[currentLang][r.val] || r.val;
    el.textContent = lbl + ': ' + lvl;
    el.className = 'risk-pill risk-' + (r.val==='high'?'high':r.val==='medium'?'med':'low');
  });
}

function getSeasonLabel(s) {
  if (currentLang==='hi') return s==='kharif'?'खरीफ':s==='rabi'?'रबी':'ग्रीष्म';
  if (currentLang==='mr') return s==='kharif'?'खरीप':s==='rabi'?'रब्बी':'उन्हाळी';
  return s.charAt(0).toUpperCase()+s.slice(1);
}

function getSoilLabel(soilKey) {
  const t = LANG[currentLang];
  const map = {
    black: t.soilBlack || 'Black Soil',
    red: t.soilRed || 'Red Soil',
    sandy: t.soilSandy || 'Sandy Soil',
    alluvial: t.soilAlluvial || 'Alluvial Soil',
    laterite: t.soilLaterite || 'Laterite Soil'
  };
  return map[soilKey] || soilKey;
}

// ─── FORM SUBMISSION → ML PIPELINE ───────────────────────────────────────
function getRecommendation() {
  currentSeason = document.querySelector('input[name="season"]:checked')?.value || 'kharif';
  currentSoil   = document.querySelector('input[name="soil"]:checked')?.value || 'black';
  currentIrr    = document.querySelector('input[name="irr"]:checked')?.value || 'rainfed';
  const locVal  = document.getElementById('f-location').value.trim();
  const key = getDistrictKey(locVal);
  if (locVal && !key) {
    const msg = currentLang === 'hi'
      ? 'जिला नहीं मिला या अस्पष्ट है। पूरा जिला नाम चुनें (जैसे Pune, Nashik, Nagpur)।'
      : currentLang === 'mr'
        ? 'जिल्हा सापडला नाही किंवा अस्पष्ट आहे. पूर्ण जिल्ह्याचे नाव निवडा (उदा. Pune, Nashik, Nagpur).'
        : 'District not found or ambiguous. Please choose full district name (e.g. Pune, Nashik, Nagpur).';
    window.alert(msg);
    showSection('input');
    return;
  }
  if (key) currentDistKey = key;

  const btn = document.getElementById('submit-btn');
  const loadMsg = LANG[currentLang].loading || 'Analyzing...';
  btn.disabled = true;
  btn.textContent = loadMsg;

  // Simulate ML computation time (actual computation is instant in JS)
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = LANG[currentLang].btnRec || 'Get Recommendation';
    // Run ML pipeline
    _mlResult = getMLResult(currentDistKey);
    appReady = true;
    renderAll(DISTRICTS[currentDistKey]);
    showSection('recommend');
  }, 900);
}

function renderAll(d) {
  if (!d) return;
  // Refresh ML result with current inputs
  _mlResult = getMLResult(currentDistKey);
  renderClimate(d);
  renderRecommendation(d);
  renderRisk(d);
  renderCalendar(d);
  renderPest(d);
  renderDashboard(d);
  updateHomeCard(currentDistKey);
}

// ── CLIMATE ────────────────────────────────────────────────────────────────
function renderClimate(d) {
  const t = LANG[currentLang];
  const dname = getDistrictName(currentDistKey, currentLang);
  setTxt('climateTitle', t.climateTitle);
  setTxt('climateDesc', dname + ' — ' + t.climateDesc);
  setTxt('clTemp', t.clTemp); setTxt('clRain', t.clRain);
  setTxt('clHum', t.clHum);  setTxt('clZone', t.clZone);
  setTxt('chartTitle', t.chartTitle);
  setTxt('cl-temp-val', d.temp.avg + '°C');
  setTxt('cl-rain-val', d.rainfall + 'mm');
  setTxt('cl-hum-val', d.humidity + '%');
  setTxt('cl-region-val', d.agroZone);
  renderRainfallChart(d);
  renderSoilInfo(d);
}

function renderRainfallChart(d) {
  const chart = document.getElementById('bar-chart');
  if (!chart) return;
  const months = ['Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'];
  const rain = d.monthlyRain;
  const max = Math.max(...rain) || 1;
  chart.innerHTML = months.map((m,i) => {
    const h = Math.round((rain[i]/max)*110)+10;
    return `<div class="bar-wrap">
      <div class="bar-val">${rain[i]}</div>
      <div class="bar" style="height:${h}px"></div>
      <div class="bar-label">${m}</div>
    </div>`;
  }).join('');
}

function renderSoilInfo(d) {
  const grid = document.getElementById('soil-info-grid');
  if (!grid) return;
  setTxt('soilInfoTitle', LANG[currentLang].soilInfoTitle);
  const desc = {
    'Deep Black':   {en:'Deep black soil. Excellent for cotton, tur, and soybean.',hi:'गहरी काली मिट्टी — कपास, तुर के लिए उत्कृष्ट।',mr:'खोल काळी माती — कापूस, तूरसाठी उत्तम.'},
    'Medium Black': {en:'Medium black. Good for soybean and jowar.',hi:'मध्यम काली — सोयाबीन, ज्वार के लिए।',mr:'मध्यम काळी — सोयाबीन, ज्वारीसाठी.'},
    'Shallow Black':{en:'Shallow black. Suitable for bajra and gram.',hi:'उथली काली — बाजरा, चने के लिए।',mr:'उथळ काळी — बाजरी, हरभऱ्यासाठी.'},
    'Black Soil':   {en:'Black soil. Ideal for cotton and soybean.',hi:'काली मिट्टी — कपास, सोयाबीन के लिए।',mr:'काळी माती — कापूस, सोयाबीनसाठी.'},
    'Red Soil':     {en:'Red soil. For vegetables and bajra.',hi:'लाल मिट्टी — सब्जियां, बाजरा के लिए।',mr:'लाल माती — भाजीपाला, बाजरीसाठी.'},
    'Shallow Red':  {en:'Shallow red. For bajra and groundnut.',hi:'उथली लाल — बाजरा, मूंगफली के लिए।',mr:'उथळ लाल — बाजरी, शेंगदाण्यासाठी.'},
    'Red Laterite': {en:'Red laterite. Good for paddy and nachni.',hi:'लाल लैटेराइट — चावल, रागी के लिए।',mr:'लाल लॅटेराइट — भात, नाचणीसाठी.'},
    'Laterite':     {en:'Laterite. Suitable for cashew and paddy.',hi:'लैटेराइट — काजू, चावल के लिए।',mr:'लॅटेराइट — काजू, भातासाठी.'},
    'Sandy Loam':   {en:'Sandy loam. Good for vegetables and banana.',hi:'बलुई दोमट — सब्जियां, केला के लिए।',mr:'वालुकामय — भाजीपाला, केळ्यासाठी.'},
    'Alluvial':     {en:'Alluvial. Best for wheat and sugarcane.',hi:'जलोढ़ — गेहूं, गन्ने के लिए उत्तम।',mr:'गाळाची — गहू, उसासाठी उत्तम.'},
    'Coastal Sandy':{en:'Coastal sandy. For coconut and vegetables.',hi:'तटीय बालू — नारियल, सब्जियां के लिए।',mr:'किनारपट्टी वाळू — नारळ, भाजीपाल्यासाठी.'},
  };
  grid.innerHTML = d.soilTypes.map(s => {
    const info = desc[s] || {en:s,hi:s,mr:s};
    const txt = info[currentLang] || info['en'];
    return `<div class="soil-item"><div class="s-name">${s}</div><div class="s-desc">${txt}</div></div>`;
  }).join('');
}

// ── RECOMMENDATION (ML-powered) ───────────────────────────────────────────
function renderRecommendation(d) {
  const t = LANG[currentLang];
  const dname = getDistrictName(currentDistKey, currentLang);

  // Use ML ranked crops — top crop is the AI recommendation
  const ml = _mlResult || getMLResult(currentDistKey);
  const rankedCrops = ml ? ml.rankedCrops : (d.crops[currentSeason] || d.crops.kharif).map(c => ({...c, mlScore:{score:0,features:{}}}));
  const crop = rankedCrops.length > 0 ? rankedCrops[0] : null;
  if (!crop) return;

  setTxt('recTitle', t.recTitle); setTxt('recDesc', t.recDesc);
  setTxt('rec-badge', t.recBadge);
  setTxt('rec-crop-name', crop.name);
  const soilLabel = getSoilLabel(currentSoil);
  setTxt('rec-sub', dname + ' — ' + getSeasonLabel(currentSeason) + ' — ' + soilLabel);
  const adjustedYield = ml && ml.estimatedYield ? ml.estimatedYield : crop.yield;
  setTxt('rec-yield', adjustedYield);
  setTxt('rec-sow', crop.sow);
  setTxt('rec-dur', crop.days + ' ' + t.daysLabel);
  setTxt('rec-msp', crop.msp ? '₹' + crop.msp.toLocaleString() : 'N/A');
  setTxt('rec-yield-k', t.yieldLabel); setTxt('rec-sow-k', t.sowLabel);
  setTxt('rec-dur-k', t.daysLabel);    setTxt('rec-msp-k', t.mspLabel);
  setTxt('rd-soil-k', t.soilFitLabel); setTxt('rd-water-k', t.waterLabel);
  setTxt('rd-temp-k', t.tempLabel);
  setTxt('rd-soil-v', soilLabel);
  setTxt('rd-water-v', crop.water);
  setTxt('rd-temp-v', crop.temp);
  setTxt('analysis-title', t.analysisTitle);

  // ML-generated analysis text
  const analysisText = buildMLAnalysis(crop, d, currentDistKey, currentSoil, currentSeason, currentIrr, currentLang);
  setTxt('analysis-text', analysisText);
  setTxt('all-crops-title', t.allCropsTitle);

  const allCropsEl = document.getElementById('all-crops-list');
  if (allCropsEl) {
    allCropsEl.innerHTML = rankedCrops.map((c, i) => `
      <div class="crop-tab ${i===0?'active-tab':''}" onclick="selectCropML(this,${i})">
        <div class="ct-name">${c.name}</div>
        <div class="ct-yield">${estimateYield(c, d, currentSoil, currentIrr)}${c.mlScore && c.mlScore.score ? ' · Score: '+c.mlScore.score : ''}</div>
        <div class="ct-area">${c.notes.substring(0,80)}...</div>
      </div>`).join('');
  }
}

// ML-aware crop selection (uses ranked crops not positional index)
function selectCropML(el, idx) {
  document.querySelectorAll('.crop-tab').forEach(t => t.classList.remove('active-tab'));
  el.classList.add('active-tab');
  const ml = _mlResult;
  const rankedCrops = ml ? ml.rankedCrops : [];
  const c = rankedCrops[idx];
  if (!c) return;
  const t = LANG[currentLang];
  setTxt('rec-crop-name', c.name);
  const d = DISTRICTS[currentDistKey];
  const adjYield = d ? estimateYield(c, d, currentSoil, currentIrr) : c.yield;
  setTxt('rec-yield', adjYield);
  setTxt('rec-sow', c.sow);
  setTxt('rec-dur', c.days + ' ' + t.daysLabel);
  setTxt('rec-msp', c.msp ? '₹' + c.msp.toLocaleString() : 'N/A');
  setTxt('rd-water-v', c.water);
  setTxt('rd-temp-v', c.temp);
  const analysisText = buildMLAnalysis(c, d, currentDistKey, currentSoil, currentSeason, currentIrr, currentLang);
  setTxt('analysis-text', analysisText);
  renderCalendarForCrop(c);
}

// Keep backward compatibility
function selectCrop(el, idx) { selectCropML(el, idx); }

// ── RISK (ML-powered) ──────────────────────────────────────────────────────
function renderRisk(d) {
  const t = LANG[currentLang];
  const dname = getDistrictName(currentDistKey, currentLang);
  setTxt('riskTitle', t.riskTitle); setTxt('riskDesc', t.riskDesc);
  setTxt('r-drought-t', t.droughtRisk); setTxt('r-flood-t', t.floodRisk); setTxt('r-pest-t', t.pestRisk);
  setTxt('sugTitle', t.sugTitle);

  // Use ML-predicted risks
  const ml = _mlResult || getMLResult(currentDistKey);
  const risks = ml ? ml.risks : { droughtRisk: d.droughtRisk, floodRisk: d.floodRisk, pestRisk: d.pestRisk };

  setRiskCard('drought', risks.droughtRisk);
  setRiskCard('flood',   risks.floodRisk);
  setRiskCard('pest',    risks.pestRisk);

  const riskDistObj = {
    droughtRisk: risks.droughtRisk,
    floodRisk:   risks.floodRisk,
    pestRisk:    risks.pestRisk,
    specialPests: d.specialPests,
    agroZone: d.agroZone,
  };
  const sug = document.getElementById('sug-list');
  if (sug) sug.innerHTML = getRiskSuggestions(riskDistObj, dname).map(s => `<div class="sug-item"><p>${s}</p></div>`).join('');
}

function setRiskCard(type, level) {
  const fill = document.getElementById(type+'-fill');
  const text = document.getElementById(type+'-text');
  const t = LANG[currentLang];
  if (fill) fill.className = 'risk-fill '+level;
  if (text) {
    text.className = 'risk-text-'+level;
    const m = {low:'riskLow',medium:'riskMedium',high:'riskHigh'};
    text.textContent = t[m[level]] || level;
  }
}

function getRiskSuggestions(d, dname) {
  const hi = currentLang==='hi', mr = currentLang==='mr';
  const sugs = [];
  if (d.droughtRisk==='high') {
    sugs.push(hi ? `${dname} में सूखे का जोखिम अधिक है। JS-335 जैसी सूखा-प्रतिरोधी किस्में चुनें। ड्रिप सिंचाई अनिवार्य।` :
      mr ? `${dname}मध्ये दुष्काळाचा धोका जास्त आहे. JS-335 सारख्या दुष्काळ-प्रतिरोधक वाणांचा वापर करा. ठिबक सिंचन आवश्यक.` :
      `${dname} has high drought risk. Use drought-resistant varieties like JS-335. Drip irrigation is essential.`);
    sugs.push(hi ? 'बाजरा और तुर जैसी सूखा-सहिष्णु फसलें भी उगाएं। फार्म पॉन्ड से जल संग्रहण करें।' :
      mr ? 'बाजरी, तूर सारखी दुष्काळ-सहिष्णु पिके घ्या. शेत तळ्याद्वारे जलसंचय करा.' :
      'Grow drought-tolerant crops like bajra and tur. Build farm ponds for water storage.');
  }
  if (d.floodRisk==='high') {
    sugs.push(hi ? `${dname} में बाढ़ का जोखिम अधिक है। खेत में जल निकासी चैनल बनाएं। उन्नत मेड़ बनाएं।` :
      mr ? `${dname}मध्ये पुराचा धोका जास्त आहे. निचऱ्याचे चर काढा. उंच बांध घाला.` :
      `${dname} has high flood risk. Build drainage channels. Raise field bunds.`);
    sugs.push(hi ? 'उठी हुई क्यारियों में बोएं। अगस्त-सितंबर में सतर्क रहें।' :
      mr ? 'उंच वाफ्यांवर पेरणी करा. ऑगस्ट-सप्टेंबरमध्ये सावध राहा.' :
      'Sow on raised beds. Stay alert during Aug-Sep heavy rain.');
  }
  if (d.pestRisk==='high') {
    const pests = d.specialPests || [];
    sugs.push(hi ? `${dname} में कीट का जोखिम अधिक है। मुख्य कीट: ${pests.join(', ')}। फेरोमोन ट्रैप लगाएं।` :
      mr ? `${dname}मध्ये कीटकांचा धोका जास्त आहे. मुख्य कीटक: ${pests.join(', ')}. फेरोमोन ट्रॅप वापरा.` :
      `${dname} has high pest risk. Key pests: ${pests.join(', ')}. Install pheromone traps.`);
    sugs.push(hi ? 'नीम-आधारित जैव कीटनाशक प्रारंभिक अवस्था में उपयोग करें। IPM अपनाएं।' :
      mr ? 'निंब-आधारित कीटकनाशक वापरा. IPM अनुसरण करा.' :
      'Use neem-based bio-pesticides in early stages. Follow IPM approach.');
  }
  if (d.droughtRisk==='low' && d.floodRisk==='low' && d.pestRisk==='low') {
    sugs.push(hi ? `${dname} में कृषि जोखिम कम है। नियमित फसल निगरानी जारी रखें।` :
      mr ? `${dname}मध्ये कृषी धोका कमी आहे. नियमित पीक देखरेख ठेवा.` :
      `${dname} has low agricultural risks. Continue regular crop monitoring.`);
  }
  sugs.push(hi ? 'किसान कॉल सेंटर: 1800-180-1551 (टोल फ्री) पर सलाह लें।' :
    mr ? 'किसान कॉल सेंटर: 1800-180-1551 (टोल फ्री).' :
    'Kisan Call Centre: 1800-180-1551 (Toll Free) for expert advice.');
  return sugs;
}

// ── CALENDAR ───────────────────────────────────────────────────────────────
function renderCalendar(d) {
  const t = LANG[currentLang];
  const dname = getDistrictName(currentDistKey, currentLang);
  // Use ML top crop for calendar
  const ml = _mlResult || getMLResult(currentDistKey);
  const crop = ml && ml.topCrop ? ml.topCrop : (d.crops[currentSeason] || d.crops.kharif)[0];
  setTxt('calTitle', t.calTitle); setTxt('calDesc', t.calDesc);
  setTxt('cal-crop-label', crop.name + ' — ' + getSeasonLabel(currentSeason));
  setTxt('cal-loc-info', dname + ', Maharashtra');
  renderCalendarForCrop(crop);
}

function renderCalendarForCrop(crop) {
  const timeline = document.getElementById('cal-timeline');
  if (!timeline) return;
  const calData = getCalendarData(crop.name, crop.sow);
  const colors = {prep:'ev-prep',sow:'ev-sow',fert:'ev-fert',pest:'ev-pest',irr:'ev-irr',harv:'ev-harv',mon:'ev-mon'};
  const labels = {
    prep: currentLang==='hi'?'तैयारी':currentLang==='mr'?'तयारी':'Prep',
    sow:  currentLang==='hi'?'बुवाई':currentLang==='mr'?'पेरणी':'Sow',
    fert: currentLang==='hi'?'खाद':currentLang==='mr'?'खत':'Fert',
    pest: currentLang==='hi'?'कीट':currentLang==='mr'?'कीटक':'Pest',
    irr:  currentLang==='hi'?'सिंचाई':currentLang==='mr'?'सिंचन':'Water',
    harv: currentLang==='hi'?'कटाई':currentLang==='mr'?'कापणी':'Harvest',
    mon:  currentLang==='hi'?'निगरानी':currentLang==='mr'?'देखरेख':'Monitor'
  };
  timeline.innerHTML = calData.map(m => `
    <div class="month-group">
      <div class="month-label">${m.month}</div>
      <div class="cal-events">
        ${m.events.map(ev => `
          <div class="cal-event">
            <div class="ev-type ${colors[ev.type]||'ev-prep'}">${labels[ev.type]||'+'}</div>
            <div class="ev-details">
              <div class="ev-title">${ev.title}</div>
              <div class="ev-desc">${ev.desc}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

// ── PEST (ML-powered threat scoring) ──────────────────────────────────────
function renderPest(d) {
  const t = LANG[currentLang];
  const dname = getDistrictName(currentDistKey, currentLang);
  setTxt('pestTitle', t.pestTitle); setTxt('pestDesc', t.pestDesc);

  // Use ML-predicted risk for alert banner
  const ml = _mlResult || getMLResult(currentDistKey);
  const pestRisk = ml ? ml.risks.pestRisk : d.pestRisk;

  const alertEl = document.getElementById('dist-pest-alert');
  if (alertEl) {
    if (pestRisk === 'high') {
      alertEl.style.display = 'block';
      alertEl.textContent = currentLang==='hi' ?
        `${dname} में कीट का जोखिम अधिक है। मुख्य खतरे: ${d.specialPests.join(', ')}।` :
        currentLang==='mr' ?
        `${dname}मध्ये कीटकांचा धोका जास्त आहे. मुख्य धोके: ${d.specialPests.join(', ')}.` :
        `${dname} has High Pest Risk. Key threats: ${d.specialPests.join(', ')}.`;
    } else {
      alertEl.style.display = 'none';
    }
  }

  const grid = document.getElementById('pest-grid');
  if (!grid) return;

  // Use ML pest threat scoring — ordered by threat probability
  const scoredPests = ml ? ml.pestThreats : getPestData(currentDistKey);
  const zoneKey = DISTRICTS[currentDistKey]?.pestZone || 'soybean_belt';
  const zone = PEST_ZONES[zoneKey];
  const zoneLabel = (t.pestZoneLabel || 'Pest Zone') + ': ' + (zone?.zoneName || '');

  const lSym  = currentLang==='hi'?'लक्षण':currentLang==='mr'?'लक्षणे':'Symptoms';
  const lPest = currentLang==='hi'?'कीटनाशक':currentLang==='mr'?'कीटकनाशक':'Pesticide';
  const lDose = currentLang==='hi'?'मात्रा':currentLang==='mr'?'मात्रा':'Dosage';
  const lTime = currentLang==='hi'?'छिड़काव समय':currentLang==='mr'?'फवारणी वेळ':'Spray Time';
  const lSafe = currentLang==='hi'?'सुरक्षा':currentLang==='mr'?'सुरक्षा':'Safety';
  const lIpm  = currentLang==='hi'?'IPM सुझाव':currentLang==='mr'?'IPM सूचना':'IPM Tips';
  const lLat  = t.pestLatinLabel || 'Scientific Name';
  const lStg  = t.pestStageLabel || 'Stage';
  const lSsn  = t.pestSeasonLabel || 'Season';

  grid.innerHTML = `<div class="pest-zone-label">${zoneLabel}</div>` +
    scoredPests.map(p => `
      <div class="pest-card">
        <div class="pest-header">
          <div class="pest-title-group">
            <div class="pest-name">${p.name}${p.threatScore ? ` <span style="font-size:11px;color:#4caf7d;font-weight:700">(Threat: ${p.threatScore}%)</span>` : ''}</div>
            <div class="pest-latin">${lLat}: ${p.latinName}</div>
            <div class="pest-stage">${lStg}: ${p.stage}</div>
            <div class="pest-season">${lSsn}: ${p.season}</div>
          </div>
        </div>
        <div class="pest-details">
          <div class="pest-row"><div class="pest-key">${lSym}</div><div class="pest-val">${p.symptoms}</div></div>
          <div class="pest-row"><div class="pest-key">${lPest}</div><div class="pest-val">${p.pesticide}</div></div>
          <div class="pest-row"><div class="pest-key">${lDose}</div><div class="pest-val">${p.dosage} — ${p.volume}</div></div>
          <div class="pest-row"><div class="pest-key">${lTime}</div><div class="pest-val">${p.sprayTime}</div></div>
          <div class="pest-row"><div class="pest-key">${lSafe}</div><div class="pest-val">${p.safety}</div></div>
          <div class="pest-row"><div class="pest-key">${lIpm}</div><div class="pest-val">${p.ipmTip}</div></div>
        </div>
      </div>`).join('');
}

// ── DASHBOARD (ML-powered) ─────────────────────────────────────────────────
function renderDashboard(d) {
  const t = LANG[currentLang];
  const dname = getDistrictName(currentDistKey, currentLang);
  const soilMap = {black:t.soilBlack,red:t.soilRed,sandy:t.soilSandy,alluvial:t.soilAlluvial,laterite:t.soilLaterite};
  const soilLabel = soilMap[currentSoil] || currentSoil;
  const seasonLabel = getSeasonLabel(currentSeason);

  const ml = _mlResult || getMLResult(currentDistKey);
  const crop = ml && ml.topCrop ? ml.topCrop : (d.crops[currentSeason] || d.crops.kharif)[0];
  const risks = ml ? ml.risks : { droughtRisk: d.droughtRisk, floodRisk: d.floodRisk, pestRisk: d.pestRisk };

  setTxt('dashTitle', t.dashTitle); setTxt('dashDesc', t.dashDesc);
  setTxt('dash-welcome', t.dashWelcome);
  setTxt('dash-loc', dname + ', Maharashtra — ' + soilLabel + ' — ' + seasonLabel);
  setTxt('dm-temp', d.temp.avg + '°C');
  setTxt('dm-rain', d.rainfall + 'mm');
  setTxt('dm-sow', crop.sow.split('-')[0].trim());
  setTxt('dm-msp', crop.msp ? '₹' + crop.msp.toLocaleString() : 'N/A');
  setTxt('dm-temp-k', t.clTemp); setTxt('dm-rain-k', t.clRain);
  setTxt('dm-sow-k', t.sowLabel); setTxt('dm-msp-k', t.mspLabel);

  setTxt('dash-rec-title', t.recCropLabel); setTxt('dash-risk-title', t.riskOverLabel);
  setTxt('dk-crop', t.cropLabel); setTxt('dv-crop', crop.name);
  setTxt('dk-yield', t.yldLabel); setTxt('dv-yield', estimateYield(crop, d, currentSoil, currentIrr));
  setTxt('dk-duration', t.durLabel); setTxt('dv-duration', crop.days + ' ' + t.daysLabel);
  setTxt('dk-season', t.seasonLbl); setTxt('dv-season', seasonLabel);
  setTxt('dk-soil', t.soilLbl); setTxt('dv-soil', soilLabel);
  setTxt('dk-drought', t.droughtLbl); setTxt('dv-drought', t[risks.droughtRisk] || risks.droughtRisk);
  setTxt('dk-flood', t.floodLbl);   setTxt('dv-flood',   t[risks.floodRisk]   || risks.floodRisk);
  setTxt('dk-pest', t.pestLbl);     setTxt('dv-pest',    t[risks.pestRisk]    || risks.pestRisk);
  setTxt('dk-zone', t.zoneLbl);     setTxt('dv-zone', d.region);
  setTxt('nt-label', t.nextTaskLabel);

  // Use ML-scored pests for next task
  const pests = ml ? ml.pestThreats : getPestData(currentDistKey);
  if (pests.length > 0) {
    setTxt('nt-task', (currentLang==='hi'?'निगरानी करें':currentLang==='mr'?'देखरेख करा':'Monitor') + ': ' + pests[0].name);
    setTxt('nt-date', pests[0].season);
  }
}

// ── INIT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.radio-option input').forEach(inp => {
    inp.addEventListener('change', function() {
      this.closest('.radio-group').querySelectorAll('.radio-option').forEach(o => o.classList.remove('selected'));
      this.closest('.radio-option').classList.add('selected');
      if (this.name === 'season') { currentSeason = this.value; if (appReady) { _mlResult = null; renderAll(DISTRICTS[currentDistKey]); } }
      if (this.name === 'soil')   { currentSoil   = this.value; _mlResult = null; if (appReady) renderAll(DISTRICTS[currentDistKey]); }
      if (this.name === 'irr')    { currentIrr    = this.value; _mlResult = null; if (appReady) renderAll(DISTRICTS[currentDistKey]); }
    });
  });

  applyLang();
  // Initial ML run for default district (Pune)
  _mlResult = getMLResult('pune');
  const defaultD = DISTRICTS['pune'];
  renderClimate(defaultD);
  renderRecommendation(defaultD);
  renderRisk(defaultD);
  renderCalendar(defaultD);
  renderPest(defaultD);
  renderDashboard(defaultD);
  appReady = true;
  document.getElementById('navHome')?.classList.add('active-nav');
});
