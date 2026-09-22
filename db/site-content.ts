import { env } from 'cloudflare:workers';

export type HomeContent = {
  heroTitle: string;
  heroBody: string;
  introTitle: string;
  introBodyOne: string;
  introBodyTwo: string;
  newsletterTitle: string;
  newsletterBody: string;
};

export const defaultHomeContent: HomeContent = {
  heroTitle: 'Empowering people. Transforming communities.',
  heroBody: 'Creating opportunities for children, girls, young people, women, persons with disabilities and vulnerable communities to learn, grow, participate and shape their own future.',
  introTitle: 'Change begins when people have the opportunity to lead it.',
  introBodyOne: 'Edmund Rice Eldoret Empowerment Program (EREEP) is a community-based organisation working with children, girls, youth, women, persons with disabilities and other vulnerable groups in Langas and the surrounding communities of Eldoret.',
  introBodyTwo: 'Through learning, mentorship, skills development, awareness and community support, EREEP helps people build their capacity, exercise their rights and contribute to positive and lasting change.',
  newsletterTitle: 'Stories, learning and opportunities — straight to your inbox.',
  newsletterBody: 'Stay connected to the people, programmes and community action shaping positive change in Langas.',
};

async function ensureTables() {
  await env.DB.batch([
    env.DB.prepare('CREATE TABLE IF NOT EXISTS site_content (content_key TEXT PRIMARY KEY NOT NULL, value_json TEXT NOT NULL, updated_at INTEGER NOT NULL)'),
    env.DB.prepare('CREATE TABLE IF NOT EXISTS newsletter_subscribers (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL UNIQUE, status TEXT NOT NULL DEFAULT \'active\', created_at INTEGER NOT NULL)'),
  ]);
}

export async function getHomeContent(): Promise<HomeContent> {
  try {
    await ensureTables();
    const row = await env.DB.prepare('SELECT value_json FROM site_content WHERE content_key = ?').bind('home').first<{ value_json: string }>();
    if (!row) return defaultHomeContent;
    return { ...defaultHomeContent, ...JSON.parse(row.value_json) };
  } catch {
    return defaultHomeContent;
  }
}

export async function saveHomeContent(content: HomeContent) {
  await ensureTables();
  await env.DB.prepare('INSERT INTO site_content (content_key, value_json, updated_at) VALUES (?, ?, ?) ON CONFLICT(content_key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at').bind('home', JSON.stringify(content), Date.now()).run();
}

export async function addNewsletterSubscriber(email: string) {
  await ensureTables();
  await env.DB.prepare('INSERT INTO newsletter_subscribers (email, status, created_at) VALUES (?, ?, ?) ON CONFLICT(email) DO UPDATE SET status = excluded.status').bind(email.toLowerCase(), 'active', Date.now()).run();
}
