// ── Flashcards Mode ──

import { FLASHCARDS, CHAPTERS } from '../data/content.js';
import { state, markCard, setCardTotal } from '../state.js';

export function renderFlashcards() {
  const ch = state.currentChapter;
  if (!ch) {
    return `<div class="empty-state">
      <strong>Select a chapter</strong>
      Choose a chapter from the sidebar to begin your flashcard review.
    </div>`;
  }

  const cards = FLASHCARDS[ch];
  if (!cards || cards.length === 0) {
    return `<div class="empty-state">
      <strong>No flashcards for this chapter yet</strong>
      Use the AI Tutor to generate questions for Chapter ${ch}: ${CHAPTERS[ch-1].name}.
      <br><br>
      <button class="btn primary" id="goto-ai">Open AI Tutor</button>
    </div>`;
  }

  // Sync total
  setCardTotal(ch, cards.length);

  const { index, flipped } = state.fc;
  const card = cards[index];
  const p = state.progress[ch];

  return `
    <div class="flashcard-area">
      <div class="stats-row" style="width:100%;max-width:600px">
        <div class="stat-card">
          <div class="stat-label">Card</div>
          <div class="stat-val">${index + 1} <span style="font-size:14px;color:var(--gray-400)">/ ${cards.length}</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Mastered</div>
          <div class="stat-val green">${p.known}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Remaining</div>
          <div class="stat-val amber">${cards.length - p.known}</div>
        </div>
      </div>

      <div class="flashcard" id="flashcard" role="button" tabindex="0"
           aria-label="${flipped ? 'Answer revealed. Click to go to next card.' : 'Question. Click to reveal answer.'}">
        <div class="card-tag">${flipped ? 'Answer' : 'Question — click to reveal'}</div>
        <div class="card-front">${card.q}</div>
        ${flipped ? `<div class="card-back">${card.a}</div>` : ''}
      </div>

      ${flipped ? `
        <div class="know-btns">
          <button class="btn warn" id="btn-nope">Still learning</button>
          <button class="btn success" id="btn-got">Got it ✓</button>
        </div>` : `
        <div class="flip-hint">Click the card to reveal the answer</div>
      `}

      <div class="fc-controls">
        <button class="btn" id="btn-prev">← Prev</button>
        <span class="fc-counter">${index + 1} / ${cards.length}</span>
        <button class="btn" id="btn-next">Next →</button>
      </div>

      <div class="progress-bar-wrap" style="width:100%;max-width:600px;margin-top:4px">
        <div class="progress-bar-fill" style="width:${Math.round(p.known/cards.length*100)}%"></div>
      </div>
    </div>`;
}

export function bindFlashcards(rerender) {
  const ch = state.currentChapter;
  const cards = FLASHCARDS[ch];
  if (!cards) {
    document.getElementById('goto-ai')?.addEventListener('click', () => {
      import('../app.js').then(m => m.setMode('ai'));
    });
    return;
  }

  const card = document.getElementById('flashcard');
  card?.addEventListener('click', () => {
    state.fc.flipped = !state.fc.flipped;
    rerender();
  });
  card?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { state.fc.flipped = !state.fc.flipped; rerender(); }
  });

  document.getElementById('btn-next')?.addEventListener('click', () => {
    state.fc.index = (state.fc.index + 1) % cards.length;
    state.fc.flipped = false;
    rerender();
  });

  document.getElementById('btn-prev')?.addEventListener('click', () => {
    state.fc.index = (state.fc.index - 1 + cards.length) % cards.length;
    state.fc.flipped = false;
    rerender();
  });

  document.getElementById('btn-got')?.addEventListener('click', () => {
    markCard(ch, true);
    state.fc.index = (state.fc.index + 1) % cards.length;
    state.fc.flipped = false;
    rerender();
  });

  document.getElementById('btn-nope')?.addEventListener('click', () => {
    markCard(ch, false);
    state.fc.index = (state.fc.index + 1) % cards.length;
    state.fc.flipped = false;
    rerender();
  });
}
