import { env } from 'cloudflare:workers';

export type ContactContent = {
  heroTitle: string;
  heroLead: string;
  formTitle: string;
  formLead: string;
  responseNote: string;
  email: string;
  phone: string;
  address: string;
  hours: string;
};

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: string;
  created_at: number;
};

export const defaultContactContent: ContactContent = {
  heroTitle: 'Start a conversation with EREEP.',
  heroLead: 'Whether you want to understand our work, explore a partnership or ask about participating in a programme, we would be glad to hear from you.',
  formTitle: 'How can we help?',
  formLead: 'Share a few details below and the EREEP team will respond through the email address or phone number you provide.',
  responseNote: 'Please allow the team time to review your message and connect it with the right programme or person.',
  email: '',
  phone: '',
  address: '',
  hours: '',
};

async function ensureContactTables() {
  await env.DB.batch([
    env.DB.prepare('CREATE TABLE IF NOT EXISTS site_content (content_key TEXT PRIMARY KEY NOT NULL, value_json TEXT NOT NULL, updated_at INTEGER NOT NULL)'),
    env.DB.prepare('CREATE TABLE IF NOT EXISTS contact_messages (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, phone TEXT, subject TEXT NOT NULL, message TEXT NOT NULL, status TEXT NOT NULL DEFAULT \'new\', created_at INTEGER NOT NULL)'),
    env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at)'),
  ]);
}

export async function getContactContent(): Promise<ContactContent> {
  try {
    await ensureContactTables();
    const row = await env.DB.prepare('SELECT value_json FROM site_content WHERE content_key = ?').bind('contact').first<{ value_json: string }>();
    if (!row) return defaultContactContent;
    return { ...defaultContactContent, ...JSON.parse(row.value_json) };
  } catch {
    return defaultContactContent;
  }
}

export async function saveContactContent(content: ContactContent) {
  await ensureContactTables();
  await env.DB.prepare('INSERT INTO site_content (content_key, value_json, updated_at) VALUES (?, ?, ?) ON CONFLICT(content_key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at').bind('contact', JSON.stringify(content), Date.now()).run();
}

export async function addContactMessage(input: Omit<ContactMessage, 'id' | 'status' | 'created_at'>) {
  await ensureContactTables();
  await env.DB.prepare('INSERT INTO contact_messages (name, email, phone, subject, message, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)').bind(input.name, input.email.toLowerCase(), input.phone, input.subject, input.message, 'new', Date.now()).run();
}

export async function listContactMessages(): Promise<ContactMessage[]> {
  try {
    await ensureContactTables();
    const result = await env.DB.prepare('SELECT id, name, email, phone, subject, message, status, created_at FROM contact_messages ORDER BY created_at DESC LIMIT 100').all<ContactMessage>();
    return result.results;
  } catch {
    return [];
  }
}
