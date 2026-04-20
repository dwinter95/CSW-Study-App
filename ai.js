// ── AI Tutor Mode ──
// Calls the Anthropic API. Requires VITE_ANTHROPIC_API_KEY env var
// (set in .env.local for local dev, or as a secret in your deployment).

import { CHAPTERS } from '../data/content.js';
import { state } from '../state.js';

const API_KEY = import.meta.env?.VITE_ANTHROPIC_API_KEY || window.ANTHROPIC_API_KEY || '';

function getSuggestions(ch) {
  if (ch) {
    const chapter = CHAPTERS[ch - 1];
    return [
      `Key facts to memorize for ${chapter.name}`,
      `Explain ${chapter.topics[0]}`,
      `Generate 3 quiz questions on ${chapter.name}`,
      `What regions/grapes should I know in Ch. ${ch}?`,
      `Compare the sub-regions of ${chapter.name}`,
    ];
  }
  return [
    "What's most heavily tested on the CSW exam?",
    "Explain the difference between DOCG and DOC",
    "What is the German Prädikat system?",
    "Compare Champagne production methods",
    "What are the most important wine maps to memorize?",
  ];
}

export function renderAI() {
  const ch = state.currentChapter;
  const chips = getSuggestions(ch).map(s =>
    `<button class="ai-chip" data-prompt="${encodeURIComponent(s)}">${s}</button>`
  ).join('');

  const messages = state.ai.messages.map(m =>
    `<div class="ai-msg ${m.role}">${m.content}</div>`
  ).join('');

  const loading = state.ai.loading
    ? `<div class="ai-msg loading">Thinking...</div>`
    : '';

  const apiWarning = !API_KEY
    ? `<div style="font-size:12px;color:var(--amber);background:var(--amber-light);padding:10px 14px;border-radius:var(--radius-md);margin-bottom:10px">
        ⚠ No API key found. Set VITE_ANTHROPIC_API_KEY in your .env.local file to enable the AI Tutor.
       </div>`
    : '';

  return `
    <div class="ai-wrap">
      ${apiWarning}
      <div class="ai-chips">${chips}</div>
      <div class="ai-messages" id="ai-messages">${messages}${loading}</div>
      <div class="ai-input-row">
        <input type="text" id="ai-input" placeholder="Ask about any wine region, grape variety, or concept..." />
        <button class="btn primary" id="btn-ai-send">Ask</button>
      </div>
    </div>`;
}

export function bindAI(rerender) {
  document.querySelectorAll('.ai-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = decodeURIComponent(chip.dataset.prompt);
      sendMessage(prompt, rerender);
    });
  });

  const input = document.getElementById('ai-input');
  const sendBtn = document.getElementById('btn-ai-send');

  const send = () => {
    const val = input?.value?.trim();
    if (val) { input.value = ''; sendMessage(val, rerender); }
  };

  input?.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
  sendBtn?.addEventListener('click', send);

  // Scroll messages to bottom
  const msgs = document.getElementById('ai-messages');
  if (msgs) msgs.scrollTop = msgs.scrollHeight;
}

async function sendMessage(text, rerender) {
  if (state.ai.loading) return;

  state.ai.messages.push({ role: 'user', content: text });
  state.ai.loading = true;
  rerender();

  const ch = state.currentChapter;
  const chName = ch ? `${CHAPTERS[ch-1].name} (Chapter ${ch})` : 'general CSW exam content';

  const systemPrompt = `You are an expert CSW (Certified Specialist of Wine) exam tutor for the Society of Wine Educators. The student is studying ${chName}.

Your role:
- Give clear, concise, exam-focused answers
- Emphasize what's most likely to appear on the CSW multiple-choice exam (100 questions, 75% passing score)
- When listing regions or facts, use bullet points
- For ordering questions, list items from north to south or as logically appropriate
- When generating quiz questions, use this format:
  Q: [question]
  A) [option]  B) [option]  C) [option]  D) [option]
  Answer: [letter] — [explanation]
- Highlight common exam traps and memory tricks
- Keep answers focused and digestible`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: state.ai.messages.map(m => ({ role: m.role, content: m.content })),
      }),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    const reply = data.content?.map(c => c.text || '').join('') || 'No response received.';
    state.ai.messages.push({ role: 'assistant', content: reply });
  } catch (err) {
    state.ai.messages.push({
      role: 'assistant',
      content: `Error: ${err.message}. Check your API key in .env.local (VITE_ANTHROPIC_API_KEY).`,
    });
  }

  state.ai.loading = false;
  rerender();

  // Scroll to bottom after render
  setTimeout(() => {
    const msgs = document.getElementById('ai-messages');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }, 50);
}
