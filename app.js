(() => {
  'use strict';

  let scenarioActive = false;

  const data = window.DEMO_DATA;
  if (!data || data.meta?.mode !== 'demo' || data.meta?.fictional !== true) {
    document.body.innerHTML = '<main style="padding:40px;font-family:system-ui;color:#fff;background:#07110f;min-height:100vh"><h1>Demo unavailable</h1><p>The sanitized fictional dataset could not be verified.</p></main>';
    return;
  }

  const $ = s => document.querySelector(s);
  const welcome = $('#welcome');
  const background = [...document.querySelectorAll('.demo-banner, .shell')];
  const money = v => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);
  const setText = (s, v) => { const n = $(s); if (n) n.textContent = v; };

  /* ── Renderers ─────────────────────────────────────────────── */

  function renderSummary() {
    setText('#householdName', data.household.name);
    setText('#primaryName', `${data.household.primaryName}.`);
    setText('#headline', data.household.headline);
    setText('#healthScore', data.summary.financialHealth);
    setText('#healthLabel', data.summary.healthLabel);
    setText('#healthTitle', `Financial health score ${data.summary.financialHealth}, ${data.summary.healthLabel.toLowerCase()}`);
    setText('#netWorth', money(data.summary.netWorth));
    setText('#runway', data.summary.runwayMonths);
    setText('#investmentsValue', money(data.summary.investments));
    setText('#investmentChange', `+${data.summary.investmentChange}% this month`);
    setText('#taxReserve', money(data.summary.taxReserve));
    setText('#monthlyIncome', money(data.summary.monthlyIncome));
    setText('#monthlySpending', money(data.summary.monthlySpending));
    setText('#monthlySurplus', money(data.summary.monthlySurplus));
    // Spark from real history data
    const sparkEl = document.querySelector('.spark');
    if (sparkEl && data.investments?.history) {
      const hist = data.investments.history.slice(-8);
      const sMin = Math.min(...hist), sMax = Math.max(...hist);
      const range = sMax - sMin || 1;
      sparkEl.innerHTML = hist.map(v => {
        const pct = Math.round(14 + ((v - sMin) / range) * 80);
        return `<i style="height:${pct}%"></i>`;
      }).join('');
    }
  }

  function renderFlow() {
    const max = Math.max(...data.flow.map(i => i.value));
    $('#flowBars').innerHTML = data.flow.slice(1).map(i =>
      `<div class="flow-row"><span>${i.label}</span><div class="track"><div class="fill" style="width:${Math.max(8, i.value / max * 100)}%"></div></div><strong>${money(i.value)}</strong></div>`
    ).join('');
  }

  function renderInsights() {
    const sc = scenarioActive ? data.scenarios.recommended : data.scenarios.base;
    const insights = [data.insights[0], data.insights[1], sc.insightThird];
    $('#insights').innerHTML = insights.map((ins, idx) => {
      const isAttention = ins.type === 'attention';
      const isActionCard = idx === 2 && isAttention;
      return `<article class="insight${isAttention ? ' attention' : ''}${isActionCard ? ' action-card' : ''}">
        <div class="insight-top"><span class="insight-dot"></span><h3>${ins.title}</h3></div>
        <p>${ins.body}</p>
        ${isActionCard ? '<button class="insight-action" id="reviewImpactBtn" type="button">Review impact \u2197</button>' : ''}
      </article>`;
    }).join('');
    $('#reviewImpactBtn')?.addEventListener('click', () => {
      $('#decisionCard')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  function renderGoals() {
    $('#goalGrid').innerHTML = data.goals.map(g => {
      const p = Math.min(100, Math.round(g.current / g.target * 100));
      return `<article class="goal"><div><span class="goal-icon">${g.icon}</span><h3>${g.name}</h3><small>${money(g.current)} of ${money(g.target)}</small></div><div><div class="goal-progress"><strong>${p}%</strong><span>${g.due}</span></div><div class="track"><div class="fill" style="width:${p}%"></div></div></div></article>`;
    }).join('');
  }

  function renderInvestments() {
    setText('#portfolioTotal', money(data.summary.investments));
    setText('#projectionRange', `${money(data.investments.projected55Low)}\u2013${money(data.investments.projected55High)}`);

    // Chart meta labels
    const h = data.investments.history;
    const min = Math.min(...h), max = Math.max(...h);
    setText('#chartStart', `$${Math.round(h[0] / 1000)}K \u00b7 Jan 2025`);
    setText('#chartEnd', `$${Math.round(h[h.length - 1] / 1000)}K \u00b7 Jul 2026`);

    // Bars
    $('#historyChart').innerHTML = h.map((v, i) =>
      `<i style="height:${24 + ((v - min) / (max - min)) * 76}%" title="${money(v)}"><span>${i === h.length - 1 ? money(v) : ''}</span></i>`
    ).join('');

    // Takeaway sentence
    const gain = h[h.length - 1] - h[0];
    const gainPct = ((gain / h[0]) * 100).toFixed(1);
    setText('#chartTakeaway', `${money(gain)} gain (+${gainPct}%) over 18 months \u00b7 ${money(data.investments.contributionMonthly)}/mo contributed`);

    // Allocation ring — data-driven conic gradient
    const investedPct = data.allocation.reduce((s, a) => a.label !== 'Cash' ? s + a.value : s, 0);
    setText('#allocationPct', `${investedPct}%`);
    const ringColors = ['#b8ff74', '#78e8c8', '#ffd36d', 'rgba(255,255,255,.12)'];
    let cum = 0;
    const stops = data.allocation.map((a, i) => {
      const s = cum; cum += a.value;
      return `${ringColors[i] || '#8fa098'} ${s}% ${cum}%`;
    });
    const ringEl = document.querySelector('.allocation-ring');
    if (ringEl) ringEl.style.background = `conic-gradient(${stops.join(',')})`;

    // Allocation list with matched dot colors
    $('#allocationList').innerHTML = data.allocation.map((a, i) =>
      `<div><span><b style="background:${ringColors[i]}"></b>${a.label}</span><strong>${a.value}%</strong></div>`
    ).join('');

    $('#investmentNotes').innerHTML = data.investments.notes.map(n =>
      `<div><span>\u2713</span><p>${n}</p></div>`
    ).join('');
  }

  function renderTransition() {
    const t = data.transition;
    const p = Math.round(t.fundCurrent / t.fundTarget * 100);
    setText('#readinessScore', `${t.readinessScore}%`);
    setText('#transitionFund', `${money(t.fundCurrent)} of ${money(t.fundTarget)}`);
    setText('#transitionDate', t.targetDate);
    $('#transitionProgress').style.width = `${p}%`;
    setText('#currentTransfer', `${money(t.monthlyTransfer)}/mo`);
    setText('#recommendedTransfer', `${money(t.recommendedTransfer)}/mo`);
    $('#currencyList').innerHTML = t.currencies.map(c =>
      `<div class="currency"><div><strong>${c.code}</strong><span>${c.label}</span></div><div class="currency-track"><i style="width:${c.share}%"></i></div><b>${c.share}%</b></div>`
    ).join('');
    $('#milestoneList').innerHTML = t.milestones.map(m =>
      `<div class="milestone ${m.status}"><i></i><div><strong>${m.label}</strong><span>${m.date}</span></div></div>`
    ).join('');
    $('#riskList').innerHTML = t.risks.map(r =>
      `<div class="risk"><div><strong>${r.label}</strong><span>${r.note}</span></div><b>${r.level}</b></div>`
    ).join('');
  }

  /* ── Copilot ────────────────────────────────────────────────── */

  function buildAnswerNodes(answer) {
    const label = Object.assign(document.createElement('p'), {
      className: 'answer-label',
      textContent: 'COPILOT ANALYSIS \u00b7 FICTIONAL DEMO'
    });
    const sections = [
      { key: 'recommendation', eyebrow: 'RECOMMENDATION' },
      { key: 'why',            eyebrow: 'WHY IT MATTERS' },
      { key: 'changes',        eyebrow: 'WHAT CHANGES' },
      { key: 'watch',          eyebrow: 'WHAT TO WATCH' }
    ];
    const nodes = [label];
    sections.forEach(({ key, eyebrow }) => {
      if (!answer[key]) return;
      const div = document.createElement('div');
      div.className = 'answer-section';
      const eye = Object.assign(document.createElement('p'), { className: 'answer-eyebrow', textContent: eyebrow });
      const body = Object.assign(document.createElement('p'), { textContent: answer[key] });
      div.append(eye, body);
      nodes.push(div);
    });
    return nodes;
  }

  function resetCopilot() {
    document.querySelectorAll('.prompt').forEach(x => {
      x.classList.remove('active');
      x.setAttribute('aria-pressed', 'false');
    });
    $('#answerBox').replaceChildren(
      Object.assign(document.createElement('p'), { textContent: 'Select a question to begin.' })
    );
  }

  function renderCopilot() {
    const grid = $('#promptGrid'), box = $('#answerBox');
    grid.innerHTML = data.copilot.prompts.map(p =>
      `<button class="prompt" type="button" data-prompt="${p}" aria-pressed="false">${p}</button>`
    ).join('');
    grid.addEventListener('click', e => {
      const btn = e.target.closest('[data-prompt]');
      if (!btn) return;
      document.querySelectorAll('.prompt').forEach(x => { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const key = btn.dataset.prompt;
      const answer = key === 'Review our Portugal relocation plan'
        ? (scenarioActive ? data.scenarios.recommended : data.scenarios.base).copilotPortugal
        : data.copilot.answers[key];
      box.replaceChildren(...buildAnswerNodes(answer));
    });
  }

  /* ── Scenario ───────────────────────────────────────────────── */

  function applyScenario(active) {
    scenarioActive = active;
    const sc = active ? data.scenarios.recommended : data.scenarios.base;

    // Toggle button visual state
    const baseBtn = $('#scenarioBase'), applyBtn = $('#scenarioApply');
    baseBtn?.classList.toggle('active', !active);
    applyBtn?.classList.toggle('active', active);
    applyBtn?.classList.toggle('applied', active);
    baseBtn?.setAttribute('aria-pressed', String(!active));
    applyBtn?.setAttribute('aria-pressed', String(active));

    // Patch live metrics
    setText('#readinessScore', `${sc.readinessScore}%`);
    setText('#readinessLabel', active ? 'On track \u2014 transfer confirmed' : 'On plan, with one funding decision');
    setText('#currentTransfer', `${money(sc.monthlyTransfer)}/mo`);
    setText('#monthlySurplus', money(sc.monthlySurplus));
    setText('#runway', sc.runwayMonths);

    // Patch Command Brief insight panel
    renderInsights();

    // Update conclusion
    updateConclusion();

    // If Portugal prompt is active, refresh answer
    const activePrompt = document.querySelector('.prompt.active');
    if (activePrompt?.dataset.prompt === 'Review our Portugal relocation plan') {
      $('#answerBox')?.replaceChildren(...buildAnswerNodes(sc.copilotPortugal));
    }
  }

  function updateConclusion() {
    const sc = scenarioActive ? data.scenarios.recommended : data.scenarios.base;
    setText('#conclusionText', sc.conclusionText);
  }

  /* ── Navigation & reveal ────────────────────────────────────── */

  function setupNavigation() {
    const links = [...document.querySelectorAll('.nav-item')];
    const sections = links.map(l => $(l.getAttribute('href'))).filter(Boolean);
    const o = new IntersectionObserver(es => {
      const v = es.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!v) return;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${v.target.id}`));
    }, { threshold: [.15, .4, .7], rootMargin: '-10% 0px -55% 0px' });
    sections.forEach(s => o.observe(s));
  }

  function setupReveal() {
    const o = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target); }
    }), { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(n => o.observe(n));
  }

  /* ── Welcome / modal ────────────────────────────────────────── */

  function setBackgroundInteractive(interactive) {
    background.forEach(node => {
      node.inert = !interactive;
      node.setAttribute('aria-hidden', String(!interactive));
    });
  }

  function scrollToTopImmediately() {
    const root = document.documentElement, prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.scrollTop = 0;
    document.body.scrollTop = 0;
    root.style.scrollBehavior = prev;
  }

  function openWelcome() {
    welcome?.classList.remove('hidden');
    welcome?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('welcome-open');
    setBackgroundInteractive(false);
    scrollToTopImmediately();
    requestAnimationFrame(() => $('#enterDemo')?.focus({ preventScroll: true }));
  }

  function enterDemo() {
    welcome?.classList.add('hidden');
    welcome?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('welcome-open');
    setBackgroundInteractive(true);
    const today = $('#today');
    today?.classList.add('visible');
    today?.setAttribute('tabindex', '-1');
    today?.focus({ preventScroll: true });
  }

  function trapWelcomeFocus(event) {
    if (!document.body.classList.contains('welcome-open')) return;
    if (event.key === 'Escape') { event.preventDefault(); enterDemo(); return; }
    if (event.key !== 'Tab') return;
    const focusable = [...welcome.querySelectorAll('button:not([disabled]),a[href]')];
    if (!focusable.length) { event.preventDefault(); welcome.focus(); return; }
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  /* ── Health ring animation ──────────────────────────────────── */

  function animateHealthRing() {
    const el = document.querySelector('.orbit-value');
    if (!el) return;
    const circ = 521, score = data.summary.financialHealth, target = circ * (1 - score / 100);
    let start = null;
    el.style.strokeDashoffset = circ;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1), e = 1 - Math.pow(1 - p, 3);
      el.style.strokeDashoffset = circ - (circ - target) * e;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ── Reset ──────────────────────────────────────────────────── */

  function resetDemo() {
    // Reset scenario to base
    scenarioActive = false;
    const baseBtn = $('#scenarioBase'), applyBtn = $('#scenarioApply');
    baseBtn?.classList.add('active');
    applyBtn?.classList.remove('active', 'applied');
    baseBtn?.setAttribute('aria-pressed', 'true');
    applyBtn?.setAttribute('aria-pressed', 'false');

    // Restore base metrics
    const sc = data.scenarios.base;
    setText('#readinessScore', `${sc.readinessScore}%`);
    setText('#readinessLabel', 'On plan, with one funding decision');
    setText('#currentTransfer', `${money(sc.monthlyTransfer)}/mo`);
    setText('#monthlySurplus', money(sc.monthlySurplus));
    setText('#runway', sc.runwayMonths);

    // Reset Copilot and insights
    resetCopilot();
    renderInsights();
    updateConclusion();

    // Reset nav active state
    document.querySelectorAll('.nav-item').forEach(link =>
      link.classList.toggle('active', link.getAttribute('href') === '#today')
    );

    openWelcome();
  }

  /* ── Init ───────────────────────────────────────────────────── */

  renderSummary();
  renderFlow();
  renderInsights();
  renderGoals();
  renderInvestments();
  renderTransition();
  renderCopilot();
  setupNavigation();
  setupReveal();
  animateHealthRing();
  updateConclusion();
  openWelcome();

  /* ── Event wiring ───────────────────────────────────────────── */

  document.addEventListener('keydown', trapWelcomeFocus);
  $('#enterDemo')?.addEventListener('click', enterDemo);
  $('#resetDemo')?.addEventListener('click', resetDemo);
  $('#footerReset')?.addEventListener('click', resetDemo);
  $('#replayBtn')?.addEventListener('click', resetDemo);
  $('#reviewBtn')?.addEventListener('click', () => $('#flow')?.scrollIntoView({ behavior: 'smooth' }));
  $('#scenarioBase')?.addEventListener('click', () => { if (scenarioActive) applyScenario(false); });
  $('#scenarioApply')?.addEventListener('click', () => { if (!scenarioActive) applyScenario(true); });
})();
