// import { AppSidebar } from "@/components/general/app-sidebar"
// import { ThemeToggle } from "@/components/general/ThemeToggle"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
// import { UserButton } from "@clerk/nextjs"
import NewEntryCard from "./_components/NewEntryCard"
import EntryCard from "./_components/EntryCard"
import Link from "next/link"

const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  })
  return entries
}

export default async function Page() {
  const entries = await getEntries()

  return (
    <div className="flex flex-1  flex-col gap-4 p-4 pt-0">
      <NewEntryCard />
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  )
}
