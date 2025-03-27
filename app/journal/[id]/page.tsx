import React from "react"
import Editor, { Entry } from "../_components/Editor"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntry = async (id: string) => {
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  })

  return entry
}

interface JournalPageProps {
  params: { id: string }
}

const JournalPage = async ({ params }: JournalPageProps) => {
  const entry = (await getEntry(params.id)) as Entry
  return (
    <div>
      <Editor entry={entry} />
    </div>
  )
}

export default JournalPage
