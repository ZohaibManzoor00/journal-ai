import "server-only";
import { db } from "@/db/client";
import { journalEntries } from "@/db/schema";
import { desc } from "drizzle-orm";

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
  userId = 1,
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
