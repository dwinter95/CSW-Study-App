# CSW Study App

A study application for the **Society of Wine Educators Certified Specialist of Wine (CSW)** exam. Built as a vanilla JS + Vite app — no framework dependencies, easy to host anywhere.

## Features

| Mode | Description |
|------|-------------|
| **Overview** | Chapter-by-chapter progress dashboard with mastery tracking |
| **Flashcards** | Active-recall cards with spaced repetition tracking (persisted to localStorage) |
| **Quiz** | Multiple-choice questions with explanations, scored by chapter |
| **Map Quiz** | Geographic knowledge: north-to-south ordering, river valleys, borders, and regional placement — the most heavily tested and hardest-to-study area of the CSW |
| **AI Tutor** | Claude-powered tutor, pre-prompted as a CSW expert. Ask for explanations, mnemonics, or generate new quiz questions on demand |

## Local Development

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/csw-study-app.git
cd csw-study-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your Anthropic API key
```bash
cp .env.example .env.local
# Edit .env.local and add your key from https://console.anthropic.com/
```

### 4. Run the dev server
```bash
npm run dev
# Opens at http://localhost:5173
```

## Deployment — GitHub Pages (Automatic)

The included GitHub Actions workflow builds and deploys on every push to `main`.

### One-time setup:

1. **Push this repo to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/csw-study-app.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repo → **Settings** → **Pages**
   - Under *Source*, select **GitHub Actions**

3. **Add your API key as a GitHub secret**
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `VITE_ANTHROPIC_API_KEY`
   - Value: your Anthropic API key

4. **Push any change to `main`** — the workflow will build and deploy automatically.
   Your app will be live at: `https://YOUR_USERNAME.github.io/csw-study-app/`

> **Important:** If your repo is at `username.github.io/csw-study-app` (not a custom domain),
> update `base` in `vite.config.js` to `'/csw-study-app/'` before deploying.

## Alternative Deployments

### Netlify
```bash
npm run build
# Drag the `dist/` folder to netlify.com/drop
# Or connect your GitHub repo and set VITE_ANTHROPIC_API_KEY as an environment variable
```

### Vercel
```bash
npm install -g vercel
vercel
# Set VITE_ANTHROPIC_API_KEY in the Vercel dashboard → Project → Settings → Environment Variables
```

## Project Structure

```
csw-study-app/
├── index.html                    # Entry point
├── vite.config.js                # Build config
├── package.json
├── .env.example                  # API key template (copy to .env.local)
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml            # Auto-deploy to GitHub Pages
└── src/
    ├── app.js                    # Main controller: routing, sidebar, render loop
    ├── state.js                  # Global state + localStorage persistence
    ├── data/
    │   └── content.js            # All flashcards, quiz Qs, and map quiz Qs
    ├── components/
    │   ├── overview.js           # Overview dashboard
    │   ├── flashcards.js         # Flashcard mode
    │   ├── quiz.js               # Multiple choice quiz
    │   ├── mapquiz.js            # Geographic map quiz
    │   └── ai.js                 # AI Tutor (calls Anthropic API)
    └── styles/
        └── main.css              # All styles (no CSS framework)
```

## Adding Content

All study content lives in `src/data/content.js`. To add:

- **Flashcards**: Add entries to the `FLASHCARDS` object under the chapter number key
- **Quiz questions**: Add to `QUIZ_QUESTIONS` under the chapter key
- **Map questions**: Add to `MAP_QUESTIONS` under the region key (`france`, `italy`, `spain`, `germany`, `newworld`). Two types supported:
  - `type: 'mc'` — multiple choice
  - `type: 'order'` — north-to-south ordering with up/down arrows

## CSW Exam Quick Reference

- **Format**: 100 multiple choice questions
- **Time**: varies (online via Pearson VUE)
- **Passing score**: 75%
- **Administered by**: Society of Wine Educators (societyofwineeducators.org)
- **Study guide**: Official CSW Study Guide + Workbook (Jane Nickles, SWE)
- **Free prep course**: Available to SWE Professional Members with exam credit

## License

MIT — free to use, modify, and share.
