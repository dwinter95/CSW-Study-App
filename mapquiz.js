// ── Map Quiz Mode ──
// Tests geographic knowledge: region locations, north-to-south ordering,
// border countries, river valleys, and spatial relationships.

import { MAP_REGIONS, MAP_QUESTIONS } from '../data/content.js';
import { state } from '../state.js';

function getQuestions() {
  return MAP_QUESTIONS[state.mapquiz.region] || [];
}

export function renderMapQuiz() {
  const { region, index, answered, selected, score, total, orderDraft } = state.mapquiz;
  const questions = getQuestions();

  // Region selector
  const regionTabs = MAP_REGIONS.map(r => `
    <button class="region-chip ${region === r.id ? 'active' : ''}" data-region="${r.id}">
      ${r.label}
    </button>`).join('');

  if (questions.length === 0) {
    return `
      <div class="mapquiz-wrap">
        <div class="mapquiz-header">
          <div class="region-selector">${regionTabs}</div>
        </div>
        <div class="empty-state"><strong>No questions for this region yet</strong></div>
      </div>`;
  }

  if (index >= questions.length) {
    const pct = total > 0 ? Math.round(score / total * 100) : 0;
    return `
      <div class="mapquiz-wrap">
        <div class="mapquiz-header">
          <div class="region-selector">${regionTabs}</div>
        </div>
        <div class="quiz-complete">
          <div class="quiz-complete-score">${pct}%</div>
          <div class="quiz-complete-label">${score} of ${total} correct</div>
          <button class="btn primary" id="btn-map-retry">Try again</button>
        </div>
      </div>`;
  }

  const q = questions[index];
  const scoreBadge = total > 0
    ? `<span class="score-badge">${score} / ${total} correct</span>`
    : '';

  let questionBody = '';

  if (q.type === 'mc') {
    const opts = q.options.map((opt, i) => {
      let cls = '';
      if (answered) {
        cls = opt === q.answer ? 'correct' : (selected === opt ? 'wrong' : '');
      }
      return `<button class="map-option ${cls}" data-opt="${encodeURIComponent(opt)}" ${answered ? 'disabled' : ''}>${opt}</button>`;
    }).join('');

    const feedback = answered ? `
      <div class="map-hint ${selected === q.answer ? '' : 'wrong'}">
        ${selected === q.answer ? '✓ Correct! ' : `✗ The correct answer is <strong>${q.answer}</strong>. `}
        ${q.hint}
      </div>` : '';

    questionBody = `
      <div class="map-options">${opts}</div>
      ${feedback}`;

  } else if (q.type === 'order') {
    // Drag-to-reorder replaced with click-to-position for accessibility
    const draft = orderDraft.length > 0 ? orderDraft : [...q.options].sort(() => Math.random() - 0.5);
    if (orderDraft.length === 0) state.mapquiz.orderDraft = draft;

    if (answered) {
      const isCorrect = draft.join('|') === q.answer.join('|');
      questionBody = `
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
          ${q.answer.map((item, i) => {
            const userItem = draft[i];
            const correct = userItem === item;
            return `<div style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:var(--radius-md);
                    background:${correct ? 'var(--green-light)' : 'var(--red-light)'};
                    border:1px solid ${correct ? 'var(--green)' : 'var(--red)'}">
              <span style="color:var(--gray-400);font-size:12px;min-width:20px">${i+1}.</span>
              <span style="flex:1">${item}</span>
              <span style="font-size:12px;color:${correct ? 'var(--green-dark)' : 'var(--red)'}">
                ${correct ? '✓' : `(you put: ${userItem})`}
              </span>
            </div>`;
          }).join('')}
        </div>
        <div class="map-hint ${draft.join('|') === q.answer.join('|') ? '' : 'wrong'}">
          ${draft.join('|') === q.answer.join('|') ? '✓ Perfect order! ' : '✗ Correct order shown above. '}
          ${q.hint}
        </div>`;
    } else {
      questionBody = `
        <div style="font-size:12px;color:var(--gray-400);margin-bottom:10px">
          Click arrows to reorder from north to south (or as instructed):
        </div>
        <div id="order-list" style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
          ${draft.map((item, i) => `
            <div class="map-option" style="display:flex;align-items:center;gap:10px;cursor:default" data-idx="${i}">
              <span style="color:var(--gray-400);font-size:12px;min-width:20px">${i+1}.</span>
              <span style="flex:1">${item}</span>
              <div style="display:flex;flex-direction:column;gap:2px">
                ${i > 0 ? `<button class="btn" style="padding:2px 8px;font-size:11px" data-move="${i}" data-dir="up">↑</button>` : '<span style="width:32px"></span>'}
                ${i < draft.length-1 ? `<button class="btn" style="padding:2px 8px;font-size:11px" data-move="${i}" data-dir="down">↓</button>` : '<span style="width:32px"></span>'}
              </div>
            </div>`).join('')}
        </div>
        <button class="btn primary" id="btn-submit-order">Submit order</button>`;
    }
  }

  return `
    <div class="mapquiz-wrap">
      <div class="mapquiz-header">
        <div class="region-selector">${regionTabs}</div>
        <div class="mapquiz-score">
          <span style="font-size:12px;color:var(--gray-400)">Q ${index + 1} / ${questions.length}</span>
          ${scoreBadge}
        </div>
      </div>

      <div class="map-question-card">
        <div class="map-q-label">
          ${q.type === 'order' ? 'Ordering question' : 'Multiple choice'} · Map knowledge
        </div>
        <div class="map-question">${q.q}</div>
        ${questionBody}
      </div>

      ${answered ? `<button class="btn primary" id="btn-map-next">Next question →</button>` : ''}
    </div>`;
}

export function bindMapQuiz(rerender) {
  const { region } = state.mapquiz;
  const questions = getQuestions();

  // Region chips
  document.querySelectorAll('.region-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      state.mapquiz.region = btn.dataset.region;
      state.mapquiz.index = 0;
      state.mapquiz.answered = false;
      state.mapquiz.selected = null;
      state.mapquiz.score = 0;
      state.mapquiz.total = 0;
      state.mapquiz.orderDraft = [];
      rerender();
    });
  });

  document.getElementById('btn-map-retry')?.addEventListener('click', () => {
    state.mapquiz.index = 0;
    state.mapquiz.answered = false;
    state.mapquiz.selected = null;
    state.mapquiz.score = 0;
    state.mapquiz.total = 0;
    state.mapquiz.orderDraft = [];
    rerender();
  });

  document.getElementById('btn-map-next')?.addEventListener('click', () => {
    state.mapquiz.index++;
    state.mapquiz.answered = false;
    state.mapquiz.selected = null;
    state.mapquiz.orderDraft = [];
    rerender();
  });

  if (!questions || questions.length === 0 || state.mapquiz.index >= questions.length) return;

  const q = questions[state.mapquiz.index];

  if (q.type === 'mc') {
    document.querySelectorAll('.map-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.mapquiz.answered) return;
        const opt = decodeURIComponent(btn.dataset.opt);
        state.mapquiz.selected = opt;
        state.mapquiz.answered = true;
        state.mapquiz.total++;
        if (opt === q.answer) state.mapquiz.score++;
        rerender();
      });
    });
  }

  if (q.type === 'order') {
    // Move up/down handlers
    document.querySelectorAll('[data-move]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const i = parseInt(btn.dataset.move);
        const dir = btn.dataset.dir;
        const draft = [...state.mapquiz.orderDraft];
        if (dir === 'up' && i > 0) {
          [draft[i-1], draft[i]] = [draft[i], draft[i-1]];
        } else if (dir === 'down' && i < draft.length - 1) {
          [draft[i], draft[i+1]] = [draft[i+1], draft[i]];
        }
        state.mapquiz.orderDraft = draft;
        rerender();
      });
    });

    document.getElementById('btn-submit-order')?.addEventListener('click', () => {
      state.mapquiz.answered = true;
      state.mapquiz.total++;
      if (state.mapquiz.orderDraft.join('|') === q.answer.join('|')) {
        state.mapquiz.score++;
      }
      rerender();
    });
  }
}
