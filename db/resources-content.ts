import { env } from 'cloudflare:workers';

export type ImpactStory = { category: string; title: string; lead: string; body: string; image: string };
export type ImpactStat = { value: string; label: string };
export type ResourcesContent = {
  heroTitle: string;
  heroLead: string;
  storiesTitle: string;
  storiesLead: string;
  stories: ImpactStory[];
  impactTitle: string;
  impactLead: string;
  stats: ImpactStat[];
};

export const defaultResourcesContent: ResourcesContent = {
  heroTitle: 'Stories that show what change can look like.',
  heroLead: 'Behind every programme, figure and milestone are people building confidence, finding opportunity and shaping new possibilities for themselves and their communities.',
  storiesTitle: 'Stories of impact',
  storiesLead: 'Change is personal. These stories reflect the determination of community members and the power of knowledge, support and opportunity.',
  stories: [
    {
      category: 'Children and Youth Project',
      title: 'Kevin\'s journey from a lost cause to finding purpose',
      lead: 'From a young man struggling with substance use to a youth leader, social worker and pastor.',
      body: 'Growing up in Langas, Eldoret, Kevin knew what it meant to grow up with limited opportunities. At 17, while in Form Two, he began using bhang, miraa and alcohol. His substance use affected his education and continued after he completed high school and joined a local polytechnic. Over time, people in the community began to see him as a lost cause.\n\nIn 2020, Kevin connected with young Christians from a local youth church. Through friendship, support and mentorship, he reflected on the direction of his life and made the decision to stop using substances. Although studying mechanical engineering, he found himself drawn to helping other people and began to see social work as closer to his purpose.\n\nKevin first connected with EREEP in 2016 through the Msingi Bora Children Learning Activities, then known as Edmund Rice Camps. He became a familiar and trusted person for children and young people, supported secondary-school mentorship and eventually became the youth leader coordinating EREEP volunteers.\n\nIn 2021, EREEP engaged him as a part-time Community Coordinator. A partner training on mobile schools later opened an opportunity for him to become a social worker, and by 2022 he had secured full-time employment. In 2024 he enrolled for a Diploma in Social Work, and in 2025 he was ordained as a pastor. Today, Kevin uses his voice, experience and skills to help others find their own path forward.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=86',
    },
    {
      category: 'Breaking Disability Barriers Project',
      title: 'Clemencia\'s journey from caregiver to entrepreneur',
      lead: 'Turning determination into opportunity while advocating for her child and supporting her family.',
      body: 'At 49, Clemencia is a mother of five living in Langas and the primary caregiver of her youngest child, who was born with a physical disability affecting the left arm and foot. From 2011 to 2022 she worked as a house help, but a chronic back condition eventually forced her to stop, removing an important source of family income.\n\nClemencia was introduced to EREEP in 2023. Despite pain and limited resources, she remained determined to attend caregiver training. With the introduction of the disability project in 2025, she gained a deeper understanding of the rights of children with disabilities and became more confident advocating for her child\'s education, healthcare and protection.\n\nEntrepreneurship training helped her identify business opportunities, manage a small business and make responsible financial decisions. At the beginning of 2026 she joined an EREEP Savings and Internal Lending Community group, saved consistently and qualified for a loan. She used it to start a charcoal business that allows her to earn while remaining close to home.\n\nFor Clemencia, the business represents more than income. It is a path back to financial independence while continuing to care for her family. She is building a livelihood, advocating for her child and creating new possibilities for her household.',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1400&q=86',
    },
    {
      category: 'Wezesha Dada Girls Empowerment Project',
      title: 'Restoring dignity and keeping girls in school',
      lead: 'The impact of sustainable menstrual-health support in Langas.',
      body: 'For girls growing up in poverty, menstruation can become a barrier to dignity, education and participation. In Langas, some girls went home when a period began unexpectedly, stayed away from school during their periods or used whatever materials were available. The fear of leakage, embarrassment and stigma affected confidence and participation.\n\nWezesha Dada brought together reusable sanitary pads and sexual and reproductive health, rights and responsibility education. Girls gained reliable menstrual protection alongside safe spaces to understand their bodies, ask questions and speak openly about issues often surrounded by silence.\n\nWith proper care, reusable pads can last for up to two years, providing protection for most of a girl\'s secondary-school journey while reducing recurring pressure on household finances. Reuse also reduces menstrual waste and contributes to a cleaner environment.\n\nThe document reports that menstrual-related absenteeism among girls reached through the project declined from 18% to 2%. For girls, this means fewer missed lessons, greater confidence and fewer occasions when a period stands between them and their education.',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=86',
    },
  ],
  impactTitle: 'A glimpse of our community reach',
  impactLead: 'These figures reflect the people, schools and community actors connected to EREEP\'s work since its registration in 2018. They remain editable for verification during the final content review.',
  stats: [
    { value: '300', label: 'Langas youths engaged' },
    { value: '5,000', label: 'Teenage students empowered' },
    { value: '800', label: 'Peer educators equipped' },
    { value: '300', label: 'Parents trained on child rights' },
    { value: '200', label: 'Teachers equipped' },
    { value: '200', label: 'Community leaders equipped' },
    { value: '200', label: 'Persons with disabilities empowered' },
    { value: '300', label: 'PWD caregivers empowered' },
    { value: '1,800', label: 'Teenage girls supported with reusable pads' },
    { value: '300', label: 'Teen and young mothers empowered' },
    { value: '50', label: 'Young mothers supported with vocational skills' },
    { value: '50', label: 'Key stakeholders engaged in forums' },
    { value: '20,300', label: 'Total beneficiaries' },
    { value: '50', label: 'Partners and collaborations' },
    { value: '100,000', label: 'Indirect beneficiaries' },
  ],
};

async function ensureContentTable() {
  await env.DB.prepare('CREATE TABLE IF NOT EXISTS site_content (content_key TEXT PRIMARY KEY NOT NULL, value_json TEXT NOT NULL, updated_at INTEGER NOT NULL)').run();
}

export async function getResourcesContent(): Promise<ResourcesContent> {
  try {
    await ensureContentTable();
    const row = await env.DB.prepare('SELECT value_json FROM site_content WHERE content_key = ?').bind('resources').first<{ value_json: string }>();
    if (!row) return defaultResourcesContent;
    return { ...defaultResourcesContent, ...JSON.parse(row.value_json) };
  } catch {
    return defaultResourcesContent;
  }
}

export async function saveResourcesContent(content: ResourcesContent) {
  await ensureContentTable();
  await env.DB.prepare('INSERT INTO site_content (content_key, value_json, updated_at) VALUES (?, ?, ?) ON CONFLICT(content_key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at').bind('resources', JSON.stringify(content), Date.now()).run();
}
