"use server";

import { createJournalEntry } from "@/lib/journal/actions";

export async function createJournalEntryAction(formData: FormData) {
  const text = formData.get("text")?.toString();
  const userId = 1;

  console.log(text)
  if (!text || !text.trim()) return;

  console.log(text, userId)
  await createJournalEntry({ userId, text });
}
