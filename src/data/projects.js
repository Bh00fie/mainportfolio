// Project cards, ordered by how relevant they are to software engineering work.
// Adding a project should only ever mean editing this file.
//
// Each entry: what it does (`what`), what was technically interesting (`interesting`),
// the stack, and whatever links actually exist. `note` covers the cases where there
// is no public code to link to, or where the status needs stating honestly.
//
// IMPORTANT: the finance dashboard is described as software only. No figures, no
// balances, no bank names, no screenshots of real data. See the project README.

export const projects = [
  {
    title: 'GCP Associate Cloud Engineer Practice App',
    what: 'A practice-exam app for the Google Cloud ACE certification, with 658 original questions, an explanation after every answer and a timed mock exam.',
    interesting:
      'Plain HTML, CSS and JavaScript with no build step, Firebase Auth and Firestore for cross-device progress, and a Gemini-backed chat routed through a Netlify function so the API key never reaches the browser.',
    tech: ['JavaScript', 'Firebase Auth', 'Firestore', 'Netlify Functions', 'Gemini API', 'PWA'],
    live: 'https://gcpcloudengineering.netlify.app',
    code: 'https://github.com/Bh00fie/cloud-engineering-practice',
  },
  {
    title: 'Personal Finance Dashboard',
    what: 'A local-first dashboard that ingests bank statements and spreadsheets, normalises them into a single transaction model, and renders the results as a browsable report.',
    interesting:
      'A parser layer normalises statement PDFs with no stable schema into one model, a deterministic rules engine categorises them, and ingestion is idempotent so re-importing a file never double-counts.',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'pdfplumber', 'Jinja', 'SVG'],
    note: 'Private repository — happy to walk through the architecture.',
  },
  {
    title: 'Cover Letter Generator',
    what: 'A full-stack web app that takes a CV and a job description and generates a tailored cover letter draft.',
    interesting:
      'Built around the OpenAI API with prompts driven by the parsed CV, it cuts drafting time by roughly 65%.',
    tech: ['React', 'Node.js', 'OpenAI API', 'Netlify'],
    live: 'https://reactcoverlettergenerator.netlify.app',
    code: 'https://github.com/Bh00fie/coverLetterGenerator',
  },
  {
    title: 'Pomo Pet',
    what: 'An iOS Pomodoro timer where every completed focus session hatches a fish into your aquarium, and three of a kind merge into the next growth stage.',
    interesting:
      'Fish are drawn procedurally in Skia, and the timer is an absolute-timestamp state machine, so pause, resume and backgrounding never drift.',
    tech: ['TypeScript', 'React Native', 'Expo', 'Skia', 'Reanimated', 'Zustand', 'Jest'],
    code: 'https://github.com/Bh00fie/pomo-pet-app',
    note: 'MVP feature-complete — on-device testing next, not yet released.',
  },
];
