// Work history and education, kept as data so the timeline component stays presentational.
// Source of truth is the CV in src/assets/documents. Keep the two in sync.
//
// NOTE: the Accenture client is under NDA. Describe the programme and the stack,
// never the client name.

export const experience = [
  {
    role: 'Data Engineer',
    company: 'Lloyds Banking Group',
    location: 'Leeds',
    start: 'Sep 2025',
    end: 'Present',
    current: true,
    summary: 'Economic Crime Prevention Platform — Agentic AI team.',
    bullets: [
      'Build and enhance AI agents supporting customer fraud journeys on the Economic Crime Prevention Platform, working in Python with Google ADK on GCP.',
      'Contribute to the front end for those journeys in React and TypeScript, on the Interstellar framework.',
      'Previously in the Balance Sheet Management & Regulatory Reporting Lab (Source Extract Database team), developing and maintaining data and reporting solutions across securitisation, funds transfer pricing, liquidity coverage ratio (LCR) and asset encumbrance in C#, SQL Server, SSIS, SSRS and SSAS.',
    ],
    tech: [
      'Python',
      'Google ADK',
      'GCP',
      'React',
      'TypeScript',
      'C#',
      'SQL Server',
      'SSIS',
      'SSAS',
      'SSRS',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'Accenture',
    location: 'Newcastle upon Tyne',
    start: 'Mar 2025',
    end: 'Sep 2025',
    summary: 'Data engineering on a large-scale fintech programme for a UK financial institution.',
    bullets: [
      'Built and maintained data pipelines and reporting on a large-scale fintech programme, working in Python, SQL, Azure and Databricks with Power BI for downstream reporting.',
      'Designed and shipped a cloud ETL pipeline end to end in a five-week delivery, covering the full SDLC from initiation through to deployment and monitoring.',
      'Supported recruitment, school outreach and community engagement alongside delivery work.',
    ],
    tech: ['Python', 'SQL', 'Azure', 'Databricks', 'Power BI', 'AWS'],
  },
  {
    role: 'NPI Manufacturing Engineer',
    company: 'Cummins Inc.',
    location: 'Daventry',
    start: 'Aug 2022',
    end: 'Aug 2023',
    summary: 'New product introduction for engine programmes, working with global engineering teams.',
    bullets: [
      'Introduced virtual reality and 3D printing into prototype assessment, cutting production costs by 15% and shortening the prototype feedback loop.',
      'Led phases of projects with budgets up to $5 million, using data-driven analysis to resolve design, manufacturing and electronics issues.',
      'Presented manufacturing analysis at component design reviews and engine integration meetings for teams across several countries.',
    ],
    tech: ['Manufacturing analysis', 'VR prototyping', '3D printing', 'Design for manufacture'],
  },
];

export const education = {
  qualification: 'MEng Mechanical Engineering / Aerospace Engineering',
  grade: '2:1',
  institution: 'University of Southampton',
  location: 'Southampton',
  start: '2019',
  end: '2024',
  dissertation: 'Solid Lubrication in Space with Nitrogen-doped MoS₂',
};

// Grouped rather than rated. Progress bars and star ratings are unfalsifiable.
export const skills = [
  { group: 'Languages', items: ['Python', 'C#', 'SQL', 'TypeScript', 'JavaScript'] },
  { group: 'AI & agents', items: ['Google ADK', 'Agentic workflows', 'OpenAI API'] },
  { group: 'Cloud', items: ['GCP', 'Azure', 'AWS (S3, EC2, Lambda)'] },
  {
    group: 'Data & warehousing',
    items: ['SQL Server', 'SSIS', 'SSAS', 'SSRS', 'Databricks', 'Redshift'],
  },
  { group: 'Front end & BI', items: ['React', 'Power BI'] },
];
