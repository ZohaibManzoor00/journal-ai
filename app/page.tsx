import { getJournalEntries } from "@/actions/journal";

export default async function Home() {
  const journalFeed = await getJournalEntries();

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="p-4 text-2xl">Manage Me</div>
      <div className="flex flex-1 overflow-hidden">
        {/* Left - Journal Feed */}
        <section className="w-2/3 bg-emerald-500 p-4 overflow-auto">
          <h1 className="text-xl font-bold mb-2">Journal Entries</h1>
          {journalFeed.map((j) => (
            <div key={j.id} className="border-2 rounded-sm hover:opacity-80 cursor-pointer">
              <p className="text-base p-4">{j.text}</p>
            </div>
          ))}
        </section>

        {/* Right Sidebar */}
        <div className="w-1/3 flex flex-col">
          <section className="flex-1 bg-red-500 p-4 overflow-auto">
            <h2 className="font-bold">Recent Entries</h2>
          </section>
          <section className="flex-1 bg-blue-800 p-4 overflow-auto">
            <h2 className="font-bold">Stat Box</h2>
          </section>
        </div>
      </div>
    </div>
  );
}
