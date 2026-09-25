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
    what: 'A practice-exam app for the Google Cloud ACE certification: 658 original questions written against the official exam guide, an explanation after every answer, a timed mock exam that mirrors the real one, and progress tracked across devices.',
    interesting:
      'The whole front end is plain HTML, CSS and JavaScript — no framework, no build step, so it runs by opening the file. The mock exam draws 50 questions in the real exam\'s domain proportions under a 120-minute countdown that auto-submits at zero. Accounts and cross-device progress come from Firebase Auth and Firestore, with the security rules kept in the repo alongside the deployed version. There is also an in-app "explain this term" chat backed by Gemini, routed through a Netlify function so the API key stays server-side and never reaches the browser, with a system prompt that deliberately refuses to reveal which answer is correct. Installable as a PWA.',
    tech: ['JavaScript', 'Firebase Auth', 'Firestore', 'Netlify Functions', 'Gemini API', 'PWA'],
    live: 'https://gcpcloudengineering.netlify.app',
    code: 'https://github.com/Bh00fie/cloud-engineering-practice',
  },
  {
    title: 'Personal Finance Dashboard',
    what: 'A local-first dashboard that ingests bank statements and spreadsheets, normalises them into a single transaction model, and renders the results as a browsable report.',
    interesting:
      'Bank statement PDFs have no stable schema — every institution lays them out differently and changes them without warning. I built a parser layer that detects the format and normalises heterogeneous statements into one model, a deterministic rules engine for categorisation with a review queue for anything it cannot classify confidently, and idempotent ingestion so re-importing the same file never double-counts. Charts are hand-rolled SVG, so the app ships with no client-side JavaScript dependencies at all. It runs entirely offline; nothing leaves the machine.',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'pdfplumber', 'Jinja', 'SVG'],
    note: 'Private repository — happy to walk through the architecture.',
  },
  {
    title: 'Cover Letter Generator',
    what: 'A full-stack web app that takes a CV and a job description and generates a tailored cover letter draft.',
    interesting:
      'Built around the OpenAI API with prompt construction driven by the parsed CV, it cuts drafting time by roughly 65%. The original motivation was helping non-native English speakers applying for university places and graduate roles, where the writing itself is the barrier rather than the qualifications. Runs at a fraction of a penny per generation against services charging around £1.',
    tech: ['React', 'Node.js', 'OpenAI API', 'Netlify'],
    live: 'https://reactcoverlettergenerator.netlify.app',
    code: 'https://github.com/Bh00fie/coverLetterGenerator',
  },
  {
    title: 'Pomo Pet',
    what: 'An iOS Pomodoro timer where every completed focus session hatches a fish into your aquarium. Three of a kind merge into the next growth stage; leave a session early and your newest fish goes grey and sluggish until the next completed session nurses it back.',
    interesting:
      'Fish are drawn procedurally in Skia — body, tail and fins are parametric paths — so growth stages and all five species are parameter sets rather than art assets, and adding a species costs nothing measurable in bundle size. The timer is an absolute-timestamp state machine rather than a decrementing counter, so pause, resume and backgrounding never drift, and the seven-day stats bucket by local calendar day so they hold up across a clock change. Purchases sit behind an interface shaped like a real in-app-purchase SDK, with a mock that deliberately fails one purchase in ten so the error paths get exercised. Unit-tested with Jest.',
    tech: ['TypeScript', 'React Native', 'Expo', 'Skia', 'Reanimated', 'Zustand', 'Jest'],
    code: 'https://github.com/Bh00fie/pomo-pet-app',
    note: 'MVP feature-complete — on-device testing next, not yet released.',
  },
];
