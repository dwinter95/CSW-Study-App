// ── Quiz Mode ──

import { QUIZ_QUESTIONS, CHAPTERS } from '../data/content.js';
import { state } from '../state.js';

export function renderQuiz() {
  const ch = state.currentChapter;
  if (!ch) {
    return `<div class="empty-state">
      <strong>Select a chapter</strong>
      Choose a chapter from the sidebar to start a quiz.
    </div>`;
  }

  const questions = QUIZ_QUESTIONS[ch];
  if (!questions || questions.length === 0) {
    return `<div class="empty-state">
      <strong>No quiz questions for this chapter yet</strong>
      Use the AI Tutor to generate multiple-choice questions for Chapter ${ch}: ${CHAPTERS[ch-1].name}.
      <br><br>
      <button class="btn primary" id="goto-ai-quiz">Generate quiz questions</button>
    </div>`;
  }

  const { index, answered, selected } = state.quiz;

  if (index >= questions.length) {
    const correct = state.quiz._correct || 0;
    const pct = Math.round(correct / questions.length * 100);
    return `
      <div class="quiz-complete">
        <div class="quiz-complete-score">${pct}%</div>
        <div class="quiz-complete-label">${correct} of ${questions.length} correct — ${pct >= 75 ? 'Passing score!' : 'Keep studying — 75% needed to pass the CSW'}</div>
        <button class="btn primary" id="btn-retry-quiz">Retry Quiz</button>
      </div>`;
  }

  const q = questions[index];
  const optionHTML = q.opts.map((opt, i) => {
    let cls = '';
    if (answered) { cls = i === q.ans ? 'correct' : (selected === i ? 'wrong' : ''); }
    return `<button class="quiz-option ${cls}" data-i="${i}" ${answered ? 'disabled' : ''}>
      <span style="font-weight:500;margin-right:8px;color:var(--gray-400)">${String.fromCharCode(65+i)}.</span>${opt}
    </button>`;
  }).join('');

  return `
    <div class="quiz-wrap">
      <div class="quiz-meta">Chapter ${ch} · Question ${index + 1} of ${questions.length}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">${optionHTML}</div>
      ${answered ? `
        <div class="quiz-feedback ${selected === q.ans ? 'correct' : 'wrong'}">
          ${selected === q.ans ? '✓ Correct' : '✗ Incorrect'} — ${q.exp}
        </div>
        <button class="btn primary quiz-next" id="btn-next-q">Next question →</button>
      ` : ''}
    </div>`;
}

export function bindQuiz(rerender) {
  const ch = state.currentChapter;
  const questions = QUIZ_QUESTIONS[ch];

  document.getElementById('goto-ai-quiz')?.addEventListener('click', () => {
    import('../app.js').then(m => {
      m.setMode('ai');
      setTimeout(() => {
        const inp = document.getElementById('ai-input');
        if (inp) inp.value = `Generate 4 multiple choice quiz questions for Chapter ${ch}: ${CHAPTERS[ch-1].name}`;
      }, 100);
    });
  });

  document.getElementById('btn-retry-quiz')?.addEventListener('click', () => {
    state.quiz = { index: 0, answered: false, selected: null, _correct: 0 };
    rerender();
  });

  if (!questions) return;

  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.quiz.answered) return;
      const i = parseInt(btn.dataset.i);
      state.quiz.selected = i;
      state.quiz.answered = true;
      if (i === questions[state.quiz.index].ans) {
        state.quiz._correct = (state.quiz._correct || 0) + 1;
      }
      rerender();
    });
  });

  document.getElementById('btn-next-q')?.addEventListener('click', () => {
    state.quiz.index++;
    state.quiz.answered = false;
    state.quiz.selected = null;
    rerender();
  });
}
