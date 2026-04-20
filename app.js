// ── App Controller ──
// Manages routing between modes, renders sidebar, coordinates re-renders.

import { CHAPTERS } from './data/content.js';
import { state } from './state.js';
import { renderOverview, bindOverview } from './components/overview.js';
import { renderFlashcards, bindFlashcards } from './components/flashcards.js';
import { renderQuiz, bindQuiz } from './components/quiz.js';
import { renderMapQuiz, bindMapQuiz } from './components/mapquiz.js';
import { renderAI, bindAI } from './components/ai.js';

// ── Sidebar ──
function renderSidebar() {
  const nav = document.getElementById('chapter-nav');
  if (!nav) return;

  const allItem = `
    <div class="chapter-item ${state.currentChapter === null ? 'active' : ''}" id="nav-all">
      <span class="ch-num">—</span>All chapters
    </div>`;

  const chapterItems = CHAPTERS.map(ch => {
    const p = state.progress[ch.num];
    const pipClass = p.total === 0 ? '' : p.known >= p.total ? 'done' : 'partial';
    return `
      <div class="chapter-item ${state.currentChapter === ch.num ? 'active' : ''}"
           data-ch="${ch.num}" role="button" tabindex="0"
           aria-label="Chapter ${ch.num}: ${ch.name}">
        <span class="ch-num">${ch.num}</span>
        ${ch.name}
        <span class="pip ${pipClass}" aria-hidden="true"></span>
      </div>`;
  }).join('');

  nav.innerHTML = `
    <div class="nav-section-label">Chapters</div>
    ${allItem}
    ${chapterItems}`;

  document.getElementById('nav-all')?.addEventListener('click', () => setChapter(null));
  nav.querySelectorAll('[data-ch]').forEach(el => {
    const go = () => setChapter(parseInt(el.dataset.ch));
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') go(); });
  });
}

// ── Mode Tabs ──
function bindModeTabs() {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => setMode(btn.dataset.mode));
  });
}

// ── Chapter Title ──
function updateChapterTitle() {
  const el = document.getElementById('chapter-title-label');
  if (!el) return;
  el.textContent = state.currentChapter
    ? `Ch. ${state.currentChapter}: ${CHAPTERS[state.currentChapter - 1].name}`
    : 'All Chapters';
}

// ── Render ──
export function render() {
  const content = document.getElementById('content-area');
  if (!content) return;

  let html = '';
  if      (state.mode === 'overview')   html = renderOverview();
  else if (state.mode === 'flashcards') html = renderFlashcards();
  else if (state.mode === 'quiz')       html = renderQuiz();
  else if (state.mode === 'mapquiz')    html = renderMapQuiz();
  else if (state.mode === 'ai')         html = renderAI();

  content.innerHTML = html;

  // Bind interactions for current mode
  if      (state.mode === 'overview')   bindOverview();
  else if (state.mode === 'flashcards') bindFlashcards(render);
  else if (state.mode === 'quiz')       bindQuiz(render);
  else if (state.mode === 'mapquiz')    bindMapQuiz(render);
  else if (state.mode === 'ai')         bindAI(render);

  renderSidebar();
  updateChapterTitle();
  updateModeTabs();
}

function updateModeTabs() {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === state.mode);
  });
}

// ── Public API ──
export function setMode(mode) {
  state.mode = mode;
  render();
}

export function setChapter(num) {
  state.currentChapter = num;
  // Reset sub-states when chapter changes
  state.fc = { index: 0, flipped: false };
  state.quiz = { index: 0, answered: false, selected: null, _correct: 0 };
  render();
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  bindModeTabs();
  render();
});
