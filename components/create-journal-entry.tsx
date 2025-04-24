"use client";

import { createJournalEntryAction } from "@/actions/create-journal-entry";
import { useRef } from "react";

export default function CreateJournalEntry() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitAction = async (formData: FormData) => {
    await createJournalEntryAction(formData);
    formRef.current?.reset();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const isCmdOrCtrl = e.metaKey || e.ctrlKey;
    if (isCmdOrCtrl && e.key === "Enter") {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return (
    <form ref={formRef} action={handleSubmitAction} className="flex">
      <textarea
        name="text"
        className="w-full p-3 border-1 rounded resize-none"
        rows={3}
        placeholder="What have you done today..."
        onKeyDown={handleKeyDown}
        required
      />
      <button
        type="submit"
        className="px-1 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}
