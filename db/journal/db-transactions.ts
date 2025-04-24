import "server-only";
import { db } from "@/db/client";
import { journalEntries } from "@/db/schema";
import { and, desc, eq, gte } from "drizzle-orm";

interface JournalEntry {
  id: number;
  userId: number;
  text: string;
  createdAt: Date | null;
}

export const getJournalEntries = async (): Promise<JournalEntry[]> => {
  return db
    .select()
    .from(journalEntries)
    .orderBy(desc(journalEntries.createdAt));
};

export const createJournalEntry = async ({
  userId,
  text,
}: {
  userId: number;
  text: string;
}): Promise<JournalEntry> => {
  const [newEntry] = await db
    .insert(journalEntries)
    .values({ userId, text })
    .returning();
  return newEntry;
};

export const getRecentWeekdayEntries = async (userId: number): Promise<JournalEntry[]> => {
  const today = new Date();

  const dayOfWeek = today.getDay(); 
  const daysSinceMonday = (dayOfWeek + 6) % 7; 
  const monday = new Date(today);
  monday.setDate(today.getDate() - daysSinceMonday);
  monday.setHours(0, 0, 0, 0); // start of day

  return db
    .select()
    .from(journalEntries)
    .where(
      and(
        eq(journalEntries.userId, userId),
        gte(journalEntries.createdAt, monday)
      )
    )
    .orderBy(desc(journalEntries.createdAt))
    .limit(5);
};