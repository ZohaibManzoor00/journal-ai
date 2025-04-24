"use server";

import { createJournalEntry } from "@/db/journal/db-transactions";

export async function createJournalEntryAction(formData: FormData) {
  const text = formData.get("text")?.toString();
  const userId = 1;

  if (!text || !text.trim()) return;

  await createJournalEntry({ userId, text });
}
