import 'server-only'
import { db } from '@/db/client'
import { journalEntries } from '@/db/schema'
import { desc } from 'drizzle-orm'

export const getJournalEntries = async () => {
    return db.select().from(journalEntries).orderBy(desc(journalEntries.createdAt))
}
