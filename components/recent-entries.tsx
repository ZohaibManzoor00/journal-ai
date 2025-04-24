import { getRecentWeekdayEntries } from "@/db/journal/db-transactions";

const FAKE_USER = 1;
export default async function RecentEntries() {
  const curWeekEntries = await getRecentWeekdayEntries(FAKE_USER);

  return (
    <>
      <div>This Week</div>
      {curWeekEntries.map((j) => (
        <div
          key={j.id}
          className="border-2 my-4 rounded-sm hover:opacity-80 cursor-pointer"
        >
          <p className="text-base p-4">{j.text}</p>
        </div>
      ))}{" "}
    </>
  );
}
