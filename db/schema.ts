import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const siteContent = sqliteTable('site_content', {
  contentKey: text('content_key').primaryKey(),
  valueJson: text('value_json').notNull(),
  updatedAt: integer('updated_at').notNull(),
});

export const newsletterSubscribers = sqliteTable('newsletter_subscribers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  status: text('status').notNull().default('active'),
  createdAt: integer('created_at').notNull(),
});
