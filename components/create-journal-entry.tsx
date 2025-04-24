"use client";

import { createJournalEntryAction } from "@/actions/create-journal-entry";
import { useRef } from "react";

export default function CreateJournalEntry() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitAction = async (formData: FormData) => {
    await createJournalEntryAction(formData);
    formRef.current?.reset();
  };

  return (
    <form action={handleSubmitAction}>
      <textarea
        name="text"
        className="w-full p-3 border-2 rounded resize-none"
        rows={3}
        placeholder="What have you done today..."
        required
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Entry
      </button>
    </form>
  );
}
