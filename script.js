'use strict';

/* =========================================================
   Player data
   Approximate career totals compiled from general knowledge for
   this static demo — not pulled from a live stats API. Treated
   throughout as a fixed snapshot (see SNAPSHOT_LABEL) so the
   dataset can later be swapped for verified, refreshed numbers
   without touching any game logic below.
   ========================================================= */

const SNAPSHOT_LABEL = 'Stats snapshot: 2025 offseason';

const PLAYERS = [
  { name: 'Kareem Abdul-Jabbar', points: 38387, assists: 5660, rebounds: 17440 },
  { name: 'LeBron James', points: 42184, assists: 11214, rebounds: 11404 },
  { name: 'Karl Malone', points: 36928, assists: 5248, rebounds: 14968 },
  { name: 'Kobe Bryant', points: 33643, assists: 6306, rebounds: 7047 },
  { name: 'Michael Jordan', points: 32292, assists: 5633, rebounds: 6672 },
  { name: 'Dirk Nowitzki', points: 31560, assists: 3651, rebounds: 11489 },
  { name: 'Wilt Chamberlain', points: 31419, assists: 4643, rebounds: 23924 },
  { name: 'Shaquille O’Neal', points: 28596, assists: 3026, rebounds: 13099 },
  { name: 'Carmelo Anthony', points: 28289, assists: 2915, rebounds: 6789 },
  { name: 'Moses Malone', points: 27409, assists: 1796, rebounds: 16212 },
  { name: 'Elvin Hayes', points: 27313, assists: 1771, rebounds: 16279 },
  { name: 'Hakeem Olajuwon', points: 26946, assists: 3058, rebounds: 13748 },
  { name: 'Oscar Robertson', points: 26710, assists: 9887, rebounds: 7804 },
  { name: 'Dominique Wilkins', points: 26668, assists: 2264, rebounds: 6651 },
  { name: 'Tim Duncan', points: 26496, assists: 4225, rebounds: 15091 },
  { name: 'Paul Pierce', points: 26397, assists: 4305, rebounds: 5970 },
  { name: 'John Havlicek', points: 26395, assists: 6114, rebounds: 8007 },
  { name: 'Kevin Garnett', points: 26071, assists: 5445, rebounds: 14662 },
  { name: 'Vince Carter', points: 25728, assists: 4053, rebounds: 5606 },
  { name: 'Reggie Miller', points: 25279, assists: 4141, rebounds: 4224 },
  { name: 'Ray Allen', points: 24505, assists: 3558, rebounds: 5272 },
  { name: 'Allen Iverson', points: 24368, assists: 5624, rebounds: 3394 },
  { name: 'Patrick Ewing', points: 24815, assists: 1865, rebounds: 11607 },
  { name: 'Kevin Durant', points: 30571, assists: 5615, rebounds: 7625 },
  { name: 'James Harden', points: 26120, assists: 8065, rebounds: 6298 },
  { name: 'Russell Westbrook', points: 26180, assists: 9721, rebounds: 8687 },
  { name: 'Chris Paul', points: 21913, assists: 12308, rebounds: 4712 },
  { name: 'Stephen Curry', points: 24107, assists: 6613, rebounds: 4831 },
  { name: 'Charles Barkley', points: 23757, assists: 4215, rebounds: 12546 },
  { name: 'Dwyane Wade', points: 23165, assists: 5785, rebounds: 5139 },
  { name: 'David Robinson', points: 20790, assists: 2772, rebounds: 10497 },
  { name: 'Clyde Drexler', points: 22195, assists: 6125, rebounds: 6677 },
  { name: 'Scottie Pippen', points: 18940, assists: 6135, rebounds: 7494 },
  { name: 'Larry Bird', points: 21791, assists: 5695, rebounds: 8974 },
  { name: 'Isiah Thomas', points: 18822, assists: 9061, rebounds: 4133 },
  { name: 'John Stockton', points: 19711, assists: 15806, rebounds: 4051 },
  { name: 'Jason Kidd', points: 17529, assists: 12091, rebounds: 8725 },
  { name: 'Steve Nash', points: 17387, assists: 10335, rebounds: 3939 },
  { name: 'Magic Johnson', points: 17707, assists: 10141, rebounds: 6559 },
  { name: 'Anthony Davis', points: 19824, assists: 1932, rebounds: 9438 },
  { name: 'Paul George', points: 19947, assists: 3612, rebounds: 5734 },
  { name: 'Kyrie Irving', points: 19683, assists: 4721, rebounds: 2914 },
  { name: 'Damian Lillard', points: 20487, assists: 5721, rebounds: 3612 },
  { name: 'Giannis Antetokounmpo', points: 21996, assists: 4783, rebounds: 9721 },
  { name: 'Bradley Beal', points: 15812, assists: 2734, rebounds: 2891 },
  { name: 'Klay Thompson', points: 15318, assists: 1729, rebounds: 2903 },
  { name: 'Jimmy Butler', points: 15764, assists: 3902, rebounds: 4812 },
  { name: 'DeMar DeRozan', points: 21432, assists: 3841, rebounds: 4623 },
  { name: 'Nikola Jokic', points: 16487, assists: 6812, rebounds: 8634 },
  { name: 'Jayson Tatum', points: 15529, assists: 2913, rebounds: 5738 },
  { name: 'Luka Doncic', points: 14523, assists: 5417, rebounds: 5689 },
  { name: 'Donovan Mitchell', points: 13437, assists: 2718, rebounds: 2934 },
  { name: 'Devin Booker', points: 14672, assists: 3618, rebounds: 2872 },
  { name: 'Domantas Sabonis', points: 10921, assists: 3047, rebounds: 6912 },
  { name: 'Trae Young', points: 9812, assists: 4938, rebounds: 1897 },
  { name: 'Jalen Brunson', points: 9317, assists: 2864, rebounds: 1723 },
  { name: 'Draymond Green', points: 7614, assists: 4927, rebounds: 5823 },
  { name: 'Ja Morant', points: 7328, assists: 2896, rebounds: 1734 },
  { name: 'Zion Williamson', points: 5312, assists: 1103, rebounds: 2287 },
];

const CATEGORIES = [
  { id: 'points', label: 'POINTS', statKey: 'points', unitLabel: 'CAREER POINTS' },
  { id: 'assists', label: 'ASSISTS', statKey: 'assists', unitLabel: 'CAREER ASSISTS' },
  { id: 'rebounds', label: 'REBOUNDS', statKey: 'rebounds', unitLabel: 'CAREER REBOUNDS' },
];

const WIN_STREAK = 20;
const MILESTONES = [5, 10, 15];
const REVEAL_COUNT_MS = 2000; // how long Player B's number takes to count up on reveal
const REVEAL_PAUSE_MS = 2800; // must exceed REVEAL_COUNT_MS so the count-up finishes before advancing

function getCategory(id) { return CATEGORIES.find((c) => c.id === id); }
function formatNumber(n) { return n.toLocaleString('en-US'); }
function initials(name) {
  return name.split(' ').filter(Boolean).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
}
function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Counts a number element up from 0 to `target` for a slower, more dramatic
// reveal instead of snapping straight to the answer.
function animateCountUp(el, target, duration) {
  if (duration <= 0) { el.textContent = formatNumber(target); return; }
  const start = performance.now();
  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = formatNumber(Math.round(eased * target));
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* =========================================================
   Persistence — best streak per category, last category, and
   light lifetime totals. Any malformed/missing data quietly
   falls back to defaults instead of breaking the app.
   ========================================================= */

const STORAGE_KEY = 'hilo_state_v1';

function defaultStorage() {
  return {
    bestByCategory: { points: 0, assists: 0, rebounds: 0 },
    lastCategory: null,
    totals: { gamesPlayed: 0, totalCorrect: 0, totalAttempts: 0 },
  };
}

// Coerces a value to a safe non-negative integer, falling back otherwise —
// guards against corrupted localStorage rendering as "BEST NaN"/"BEST oops".
function safeCount(value, fallback) {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : fallback;
}

function loadStorage() {
  let raw;
  try { raw = JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch (e) { raw = null; }
  const base = defaultStorage();
  if (!raw || typeof raw !== 'object') return base;

  const rawBest = raw.bestByCategory && typeof raw.bestByCategory === 'object' ? raw.bestByCategory : {};
  const bestByCategory = {};
  CATEGORIES.forEach((c) => { bestByCategory[c.id] = safeCount(rawBest[c.id], base.bestByCategory[c.id]); });

  const rawTotals = raw.totals && typeof raw.totals === 'object' ? raw.totals : {};
  const totals = {
    gamesPlayed: safeCount(rawTotals.gamesPlayed, base.totals.gamesPlayed),
    totalCorrect: safeCount(rawTotals.totalCorrect, base.totals.totalCorrect),
    totalAttempts: safeCount(rawTotals.totalAttempts, base.totals.totalAttempts),
  };

  return {
    bestByCategory,
    lastCategory: typeof raw.lastCategory === 'string' ? raw.lastCategory : null,
    totals,
  };
}

function saveStorage() { localStorage.setItem(STORAGE_KEY, JSON.stringify(storage)); }

function resetDemo() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

let storage = loadStorage();

/* =========================================================
   Game state
   ========================================================= */

let view = 'landing'; // 'landing' | 'game' | 'gameover' | 'win'
let game = null; // { categoryId, playerA, playerB, streak, best, recent, locked }

const screen = document.getElementById('screen');
const statusEl = document.getElementById('status');
const backBtn = document.getElementById('back-btn');
const helpBtn = document.getElementById('help-btn');

function announce(msg) { statusEl.textContent = msg; }

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { toast.hidden = true; }, 2400);
}

async function copyToClipboard(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch (e) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
      return true;
    } catch (e2) { return false; }
  }
}

/* =========================================================
   Matchup generation
   - never repeats a player that appeared in the last few rounds
   - never presents a tied stat value (ambiguous higher/lower)
   - lightly tunes difficulty (stat closeness) to the streak length
   ========================================================= */

function randomPlayer(excludeNames) {
  const pool = PLAYERS.filter((p) => !excludeNames.has(p.name));
  const list = pool.length ? pool : PLAYERS;
  return list[Math.floor(Math.random() * list.length)];
}

function difficultyTier(streak) {
  if (streak < 10) return 'easy';
  if (streak < 30) return 'mixed';
  return 'hard';
}

function pickOpponent(playerA, statKey, recentNames) {
  const exclude = new Set([playerA.name, ...recentNames]);
  let pool = PLAYERS.filter((p) => !exclude.has(p.name) && p[statKey] !== playerA[statKey]);
  // Relax the recent-history exclusion (but never the tie rule) if the pool runs dry.
  if (pool.length < 3) {
    pool = PLAYERS.filter((p) => p.name !== playerA.name && p[statKey] !== playerA[statKey]);
  }
  if (pool.length === 0) return randomPlayer(new Set([playerA.name]));

  const withDiff = pool
    .map((p) => ({ p, diff: Math.abs(p[statKey] - playerA[statKey]) }))
    .sort((a, b) => a.diff - b.diff);

  const tier = difficultyTier(game ? game.streak : 0);
  const n = withDiff.length;
  let slice;
  if (tier === 'easy') slice = withDiff.slice(Math.floor(n * 0.5)) || withDiff;
  else if (tier === 'hard') slice = withDiff.slice(0, Math.ceil(n * 0.5));
  else slice = withDiff;
  if (!slice.length) slice = withDiff;

  return slice[Math.floor(Math.random() * slice.length)].p;
}

/* =========================================================
   Navigation
   ========================================================= */

function goLanding() {
  view = 'landing';
  backBtn.hidden = true;
  render();
}

function startRun(categoryId) {
  const statKey = getCategory(categoryId).statKey;
  const playerA = randomPlayer(new Set());
  const playerB = pickOpponentBootstrap(playerA, statKey);

  game = {
    categoryId,
    playerA, playerB,
    streak: 0,
    best: storage.bestByCategory[categoryId] || 0,
    recent: [playerA.name, playerB.name],
    locked: false,
  };
  storage.lastCategory = categoryId;
  saveStorage();

  view = 'game';
  backBtn.hidden = false;
  render();
}

// Bootstrapping a run has no streak yet, so opponent selection can
// ignore difficulty tiering and just avoid a tie.
function pickOpponentBootstrap(playerA, statKey) {
  const candidates = PLAYERS.filter((p) => p.name !== playerA.name && p[statKey] !== playerA[statKey]);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

/* =========================================================
   Rendering — landing
   ========================================================= */

function render() {
  if (view === 'landing') renderLanding();
  else if (view === 'game') renderGame();
  else if (view === 'gameover') renderEnd(false);
  else if (view === 'win') renderEnd(true);
  window.scrollTo(0, 0);
}

function renderLanding() {
  const wrap = document.createElement('div');
  wrap.className = 'landing';
  wrap.innerHTML = `
    <div class="landing-logo">NBA<span class="lg-accent">HIGHER/LOWER</span></div>
    <p class="landing-tag">How well do you know NBA history? Pick a stat. Build your streak. <strong>Go ${WIN_STREAK}&ndash;0.</strong></p>
    <div class="goal-banner">CAN YOU GO ${WIN_STREAK}&ndash;0?</div>
    <div class="category-list">
      ${CATEGORIES.map((c) => `
        <button type="button" class="category-btn" data-cat="${c.id}">
          <span class="cat-name">${c.label}</span>
          <span class="cat-best">BEST <strong>${storage.bestByCategory[c.id] || 0}</strong></span>
        </button>
      `).join('')}
    </div>
  `;
  screen.innerHTML = '';
  screen.appendChild(wrap);
  wrap.querySelectorAll('.category-btn').forEach((btn) => {
    btn.addEventListener('click', () => startRun(btn.dataset.cat));
  });
}

/* =========================================================
   Rendering — active game
   ========================================================= */

function renderGame() {
  const cat = getCategory(game.categoryId);
  const wrap = document.createElement('div');
  wrap.className = 'game-view';

  const pct = Math.min(100, Math.round((game.streak / WIN_STREAK) * 100));
  const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  wrap.innerHTML = `
    <div class="game-meta">
      <span class="category-pill">${cat.unitLabel}</span>
      <span class="streak-pill"><span class="fire">\u{1F525}</span>${game.streak}&ndash;0</span>
      <span class="best-pill">BEST <strong>${Math.max(game.best, game.streak)}</strong></span>
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>

    <div class="matchup">
      <div class="player-card" id="card-a">
        <div class="player-avatar">${initials(game.playerA.name)}</div>
        <div class="player-name">${game.playerA.name}</div>
        <div class="player-value">${formatNumber(game.playerA[cat.statKey])}</div>
        <div class="player-stat-label">${cat.label}</div>
      </div>

      <div class="vs-divider">VS</div>

      <div class="player-card" id="card-b">
        <div class="player-avatar">${initials(game.playerB.name)}</div>
        <div class="player-name">${game.playerB.name}</div>
        <div class="player-value is-mystery" id="value-b">???</div>
        <div class="player-stat-label" id="label-b">${cat.label}</div>
        <div id="badge-slot"></div>
      </div>
    </div>

    <p class="prompt-line" id="prompt-line">Does <strong>${game.playerB.name}</strong> have more or fewer ${cat.label.toLowerCase()}?</p>

    <div class="choice-row">
      <button type="button" class="choice-btn" id="btn-lower" data-choice="lower">LOWER<span class="arrow">↓ FEWER</span></button>
      <button type="button" class="choice-btn" id="btn-higher" data-choice="higher">HIGHER<span class="arrow">↑ MORE</span></button>
    </div>
    ${isDesktopPointer ? `<p class="kbd-hint"><kbd>&larr;</kbd> Lower &nbsp; <kbd>&rarr;</kbd> Higher</p>` : ''}
  `;

  screen.innerHTML = '';
  screen.appendChild(wrap);

  wrap.querySelectorAll('.choice-btn').forEach((btn) => {
    btn.addEventListener('click', () => handleChoice(btn.dataset.choice));
  });

  announce(`${game.playerA.name}: ${formatNumber(game.playerA[cat.statKey])} ${cat.label.toLowerCase()}. Compare to ${game.playerB.name}. Choose higher or lower.`);
}

/* =========================================================
   Answer handling + reveal
   ========================================================= */

function handleChoice(choice) {
  if (game.locked) return;
  game.locked = true;

  const cat = getCategory(game.categoryId);
  const statKey = cat.statKey;
  const aVal = game.playerA[statKey];
  const bVal = game.playerB[statKey];
  const actuallyHigher = bVal > aVal; // ties are excluded at matchup-generation time
  const guessedHigher = choice === 'higher';
  const correct = guessedHigher === actuallyHigher;

  const valueB = document.getElementById('value-b');
  const badgeSlot = document.getElementById('badge-slot');
  const chosenBtn = document.getElementById(choice === 'higher' ? 'btn-higher' : 'btn-lower');
  const otherBtn = document.getElementById(choice === 'higher' ? 'btn-lower' : 'btn-higher');

  valueB.classList.remove('is-mystery');
  valueB.classList.add(correct ? 'is-good' : 'is-bad');
  animateCountUp(valueB, bVal, prefersReducedMotion() ? 0 : REVEAL_COUNT_MS);

  badgeSlot.innerHTML = `<span class="result-badge ${correct ? 'is-good' : 'is-bad'}">${correct ? '✓ CORRECT' : '✕ WRONG'}</span>`;

  chosenBtn.classList.add(correct ? 'is-correct' : 'is-wrong');
  otherBtn.classList.add('is-dim');
  document.querySelectorAll('.choice-btn').forEach((b) => { b.disabled = true; });

  document.getElementById('prompt-line').textContent =
    correct ? 'Nice — you called it.' : `${game.playerB.name} had ${formatNumber(bVal)} career ${cat.label.toLowerCase()}.`;

  announce(`${correct ? 'Correct.' : 'Wrong.'} ${game.playerB.name} had ${formatNumber(bVal)} ${cat.label.toLowerCase()}.`);

  recordAttempt(correct);

  const pause = prefersReducedMotion() ? Math.min(600, REVEAL_PAUSE_MS) : REVEAL_PAUSE_MS;
  if (correct) {
    game.streak += 1;
    updateBestIfNeeded();
    setTimeout(() => {
      if (game.streak >= WIN_STREAK) { endRun(true); return; }
      checkMilestone(game.streak);
      advanceRound();
    }, pause);
  } else {
    setTimeout(() => endRun(false), pause);
  }
}

function advanceRound() {
  const statKey = getCategory(game.categoryId).statKey;
  game.playerA = game.playerB;
  game.playerB = pickOpponent(game.playerA, statKey, game.recent);
  game.recent = [...game.recent, game.playerB.name].slice(-8);
  game.locked = false;
  renderGame();
}

function checkMilestone(streak) {
  if (!MILESTONES.includes(streak)) return;
  const banner = document.createElement('div');
  banner.className = 'milestone-banner';
  banner.textContent = `${streak}–0 — KEEP GOING`;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 2200);
}

function updateBestIfNeeded() {
  const catId = game.categoryId;
  if (game.streak > (storage.bestByCategory[catId] || 0)) {
    storage.bestByCategory[catId] = game.streak;
    saveStorage();
  }
}

function recordAttempt(correct) {
  storage.totals.totalAttempts += 1;
  if (correct) storage.totals.totalCorrect += 1;
  saveStorage();
}

/* =========================================================
   Game over / win
   ========================================================= */

function endRun(won) {
  storage.totals.gamesPlayed += 1;
  updateBestIfNeeded();
  saveStorage();
  view = won ? 'win' : 'gameover';
  render();
}

function renderEnd(won) {
  const catId = game.categoryId;
  const best = storage.bestByCategory[catId] || 0;
  const wrap = document.createElement('div');
  wrap.className = 'end-view';

  if (won) {
    wrap.innerHTML = `
      <div class="end-eyebrow">${getCategory(catId).label}</div>
      <div class="end-record is-win">${WIN_STREAK}&ndash;0</div>
      <div class="end-tag">PERFECT RUN. YOU DID IT.</div>
      <div class="confetti-burst" id="confetti"></div>
      <div class="end-actions">
        <button type="button" class="btn btn-primary" id="play-again">PLAY AGAIN</button>
        <button type="button" class="btn btn-ghost" id="change-cat">CHANGE CATEGORY</button>
        <button type="button" class="btn btn-outline" id="share-score">SHARE SCORE</button>
      </div>
    `;
  } else {
    wrap.innerHTML = `
      <div class="end-eyebrow">GAME OVER · ${getCategory(catId).label}</div>
      <div class="end-record is-loss">${game.streak}&ndash;1</div>
      <div class="end-tag">Final record</div>
      <div class="end-stats">
        <div class="end-stat"><div class="es-label">Streak</div><div class="es-value">${game.streak}</div></div>
        <div class="end-stat"><div class="es-label">Best</div><div class="es-value">${best}</div></div>
      </div>
      <div class="end-actions">
        <button type="button" class="btn btn-primary" id="play-again">PLAY AGAIN</button>
        <button type="button" class="btn btn-ghost" id="change-cat">CHANGE CATEGORY</button>
        <button type="button" class="btn btn-outline" id="share-score">SHARE SCORE</button>
      </div>
    `;
  }

  screen.innerHTML = '';
  screen.appendChild(wrap);
  backBtn.hidden = false;

  if (won && !prefersReducedMotion()) spawnConfetti(document.getElementById('confetti'));

  document.getElementById('play-again').addEventListener('click', () => startRun(catId));
  document.getElementById('change-cat').addEventListener('click', goLanding);
  document.getElementById('share-score').addEventListener('click', () => shareScore(won));

  announce(won ? `Perfect run. You went ${WIN_STREAK} and 0.` : `Game over. Final streak ${game.streak}.`);
}

function spawnConfetti(el) {
  if (!el) return;
  const colors = ['#ff7a33', '#ffb066', '#37d67a', '#f6f7f9'];
  let html = '';
  for (let i = 0; i < 20; i++) {
    const angle = (Math.PI * 2 * i) / 20 + Math.random() * 0.3;
    const dist = 60 + Math.random() * 60;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 20;
    const rot = Math.round(Math.random() * 360);
    html += `<span style="--dx:${dx}px;--dy:${dy}px;--rot:${rot}deg;background:${colors[i % colors.length]};animation-delay:${Math.random() * 120}ms;"></span>`;
  }
  el.innerHTML = html;
}

async function shareScore(won) {
  const cat = getCategory(game.categoryId);
  const lines = won
    ? [`NBA HIGHER/LOWER \u{1F3C0}`, cat.unitLabel, `I went ${WIN_STREAK}–0. PERFECT RUN.`, `Think you can match it?`]
    : [`NBA HIGHER/LOWER \u{1F3C0}`, cat.unitLabel, `I went ${game.streak}–1.`, `Can you go ${WIN_STREAK}–0?`];
  const text = lines.join('\n');

  if (navigator.share) {
    try { await navigator.share({ text, url: location.href }); return; } catch (e) { /* cancelled */ }
  }
  const ok = await copyToClipboard(text + '\n' + location.href);
  showToast(ok ? 'Score copied — paste it anywhere!' : 'Could not copy automatically.');
}

/* =========================================================
   Keyboard support (desktop) — Left/Right or L/H, only while
   actively playing and only when no modal is open.
   ========================================================= */

document.addEventListener('keydown', (e) => {
  if (view !== 'game' || !game || game.locked) return;
  if (modalRoot.innerHTML) return; // a modal (e.g. How to Play) is open
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea') return;

  const key = e.key.toLowerCase();
  if (key === 'arrowleft' || key === 'l') { e.preventDefault(); handleChoice('lower'); }
  else if (key === 'arrowright' || key === 'h') { e.preventDefault(); handleChoice('higher'); }
});

/* =========================================================
   How to Play modal
   ========================================================= */

const modalRoot = document.getElementById('modal-root');

function openHelpModal() {
  modalRoot.innerHTML = `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal-sheet" role="dialog" aria-modal="true" aria-labelledby="help-title">
        <h3 id="help-title">How to Play</h3>
        <ol>
          <li>Look at <strong>Player A</strong>'s career stat.</li>
          <li>Guess whether <strong>Player B</strong> has more or fewer.</li>
          <li>Get it right and your streak continues.</li>
          <li>One mistake ends the run.</li>
          <li>Can you go <strong>${WIN_STREAK}&ndash;0</strong>?</li>
        </ol>
        <p class="snapshot-note">${SNAPSHOT_LABEL}. Career totals are a fixed demo dataset, not live stats.</p>
        <button type="button" class="btn btn-primary" id="close-help">GOT IT</button>
      </div>
    </div>
  `;
  document.getElementById('close-help').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  });
}

function closeModal() { modalRoot.innerHTML = ''; }

helpBtn.addEventListener('click', openHelpModal);
backBtn.addEventListener('click', goLanding);

/* =========================================================
   Boot
   ========================================================= */

render();
