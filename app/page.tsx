import CreateJournalEntry from "@/components/create-journal-entry";
import { getJournalEntries } from "@/db/journal/db-transactions";

export default async function Home() {
  const journalFeed = await getJournalEntries();

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="p-4 text-2xl bg-zinc-800">Manage Me</div>

      <div className="flex flex-1 overflow-hidden">
        {/* Panel 1: Journal Entries */}
        <section className="w-6/12 p-4 overflow-auto">
          <h1 className="text-xl font-bold mb-2 text-center">Journal Entries</h1>
          <CreateJournalEntry />
          <div className="h-4" />
          {journalFeed.map((j) => (
            <div
              key={j.id}
              className="border-1 my-4 rounded-sm hover:opacity-80 cursor-pointer"
            >
              <p className="text-base p-4">{j.text}</p>
            </div>
          ))}
        </section>

        {/* Panel 2: Managers */}
        <section className="w-4/12 bg-zinc-500 p-4 overflow-auto">
          <h2 className="font-bold text-center text-xl">Managers</h2>
          <div className="h-3" />
          <div className="flex justify-center gap-3">
            {/* {["Manager", "Founder", "CEO", "Mentor", "Devils Advocate"].map( */}
            {["Encouraging, Challenging, Pragmatic"].map(
              (role, i) => (
                <div key={i} className="flex flex-col items-center w-20">
                  <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-sm font-semibold text-gray-700">
                    {role[0]}
                  </div>
                  <span className="text-xs mt-1.5 text-center break-words leading-tight">
                    {role}
                  </span>
                </div>
              )
            )}
          </div>
        </section>

        {/* Panel 3: Stat Box */}
        <section className="w-2/12 bg-zinc-400 p-4 overflow-auto">
          <h2 className="font-bold text-center text-xl">Stat Box</h2>
        </section>
      </div>
    </div>
  );
}
