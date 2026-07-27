// Project cards, ordered by how relevant they are to data engineering work.
// Adding a project should only ever mean editing this file.
//
// Each entry: what it does (`what`), what was technically interesting (`interesting`),
// the stack, and whatever links actually exist. `note` covers the cases where there
// is no public code to link to.
//
// IMPORTANT: the finance dashboard is described as software only. No figures, no
// balances, no bank names, no screenshots of real data. See the project README.

export const projects = [
  {
    title: 'GCP Associate Cloud Engineer Practice App',
    what: 'A practice-exam app for the Google Cloud ACE certification: 658 original questions written against the official exam guide, an explanation after every answer, and progress tracked across devices.',
    interesting:
      'The whole front end is plain HTML, CSS and JavaScript — no framework, no build step, so it runs by opening the file. Accounts and cross-device progress come from Firebase Auth and Firestore, with the security rules kept in the repo alongside the deployed version. There is also an in-app "explain this term" chat backed by Gemini, routed through a Netlify function so the API key stays server-side and never reaches the browser, with a system prompt that deliberately refuses to reveal which answer is correct. Installable as a PWA, with proper tap targets and safe-area handling on phones.',
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
    title: 'Cloud ETL Pipeline',
    what: 'An end-to-end ETL pipeline for a simulated retail business, delivered as a five-week project covering the full software development lifecycle.',
    interesting:
      'Ingestion into S3, transformation on EC2 and Lambda, loading into Redshift, with CloudWatch for monitoring and alerting on pipeline failures. The interesting part was less the individual services than the operational side: making failures visible, making reruns safe, and taking the thing from initiation through to a deployed, monitored pipeline rather than stopping at a working script.',
    tech: ['Python', 'AWS S3', 'EC2', 'Lambda', 'Redshift', 'CloudWatch'],
    note: 'Delivered during my time at Accenture — no public repository.',
  },
  {
    title: 'Battery Manufacturing Simulation',
    what: 'A model of a battery production line that calculates achievable production rates and return on investment for aluminium and lithium cell variants.',
    interesting:
      'A discrete model of the manufacturing line with cost accumulation over time, used to compare the two chemistries on cumulative cost and payback rather than unit cost alone. This one comes from the mechanical engineering side of my background, and it is where modelling a physical process and analysing the resulting data turned out to be the same job.',
    tech: ['Python', 'NumPy', 'Matplotlib'],
    code: 'https://github.com/Bh00fie/Manufacturing-CW2',
  },
];

// Smaller builds, listed rather than given a card of their own.
export const otherProjects = [
  { name: 'Weight Tracker', link: 'https://weight-tracker-project.netlify.app/' },
  { name: 'Workout Kitchen', link: 'https://allen-ec.github.io/workout_kitchen/' },
  {
    name: 'Arduino temperature & humidity monitor',
    link: 'https://github.com/Bh00fie/ArduinoTemperatureCheck',
  },
];
