import { pgTable, serial, varchar, timestamp, text } from 'drizzle-orm/pg-core';

export const pages = pgTable('pages', {
	id: serial('id').primaryKey().notNull(),
	title: varchar('title', { length: 255 }).notNull(),
	slug: varchar('slug', { length: 255 }).notNull(),
	content: text('content').notNull(),
	created_at: timestamp('created_at').defaultNow().notNull(),
	updated_at: timestamp('updated_at').defaultNow().notNull()
});
