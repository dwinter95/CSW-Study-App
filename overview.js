// ── Overview Mode ──

import { CHAPTERS } from '../data/content.js';
import { state, getOverallStats } from '../state.js';
import { setMode, setChapter } from '../app.js';

export function renderOverview() {
  const s = getOverallStats();

  const chapterCards = CHAPTERS.map(ch => {
    const p = state.progress[ch.num];
    const pct = p.total > 0 ? Math.round(p.known / p.total * 100) : 0;
    return `
      <div class="overview-card" data-ch="${ch.num}" role="button" tabindex="0"
           aria-label="Chapter ${ch.num}: ${ch.name}, ${pct}% mastered">
        <div class="ov-num">Chapter ${ch.num}</div>
        <div class="ov-name">${ch.name}</div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="overview-intro">
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-label">Cards mastered</div>
          <div class="stat-val green">${s.known}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total cards</div>
          <div class="stat-val">${s.total}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Overall progress</div>
          <div class="stat-val ${s.pct >= 75 ? 'green' : s.pct >= 40 ? 'amber' : ''}">${s.pct}%</div>
        </div>
      </div>
      <div class="total-progress-label">
        <span>Flashcard mastery across all chapters</span>
        <span>${s.known} / ${s.total}</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width:${s.pct}%"></div>
      </div>
    </div>

    <div class="overview-grid" id="overview-grid">
      ${chapterCards}
    </div>

    <p style="margin-top:20px;font-size:12px;color:var(--gray-400)">
      Click any chapter to begin flashcards, or choose a mode from the top bar.
    </p>`;
}

export function bindOverview() {
  document.querySelectorAll('.overview-card').forEach(el => {
    const ch = parseInt(el.dataset.ch);
    const go = () => { setChapter(ch); setMode('flashcards'); };
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') go(); });
  });
}
