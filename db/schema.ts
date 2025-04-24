import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";

export const journalEntries = pgTable("entries", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  text: text("text").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
