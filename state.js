// ── State Management ──
// Single source of truth. Persists progress to localStorage.

import { CHAPTERS } from './data/content.js';

const STORAGE_KEY = 'csw_study_progress_v1';

function defaultProgress() {
  const p = {};
  CHAPTERS.forEach(ch => { p[ch.num] = { known: 0, total: 0, quizScore: null }; });
  return p;
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const saved = JSON.parse(raw);
    const base = defaultProgress();
    Object.keys(base).forEach(k => {
      if (saved[k]) base[k] = { ...base[k], ...saved[k] };
    });
    return base;
  } catch {
    return defaultProgress();
  }
}

function saveProgress(progress) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch {}
}

export const state = {
  currentChapter: null,
  mode: 'overview',
  progress: loadProgress(),

  // Flashcard state
  fc: { index: 0, flipped: false },

  // Quiz state
  quiz: { index: 0, answered: false, selected: null },

  // Map quiz state
  mapquiz: {
    region: 'france',
    index: 0,
    answered: false,
    selected: null,
    score: 0,
    total: 0,
    // For ordering questions
    orderDraft: [],
  },

  // AI tutor state
  ai: { messages: [], loading: false },
};

export function markCard(chapterNum, known) {
  const p = state.progress[chapterNum];
  if (known && p.known < p.total) p.known = Math.min(p.known + 1, p.total);
  saveProgress(state.progress);
}

export function setCardTotal(chapterNum, total) {
  state.progress[chapterNum].total = total;
  saveProgress(state.progress);
}

export function resetProgress() {
  state.progress = defaultProgress();
  saveProgress(state.progress);
}

export function getOverallStats() {
  let known = 0, total = 0;
  CHAPTERS.forEach(ch => {
    known += state.progress[ch.num].known;
    total += state.progress[ch.num].total;
  });
  return { known, total, pct: total > 0 ? Math.round(known / total * 100) : 0 };
}
