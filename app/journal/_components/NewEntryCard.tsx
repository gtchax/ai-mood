"use client"
import { Button } from "@/components/ui/button"
import { createNewEntry } from "@/utils/api"
import { PlusCircleIcon } from "lucide-react"
import React from "react"
import { useRouter } from "next/navigation"

const NewEntryCard = () => {
  const router = useRouter()

  const handleOnClick = async () => {
    const data = await createNewEntry()
    router.push(`/journal/${data?.id}`)
  }

  return (
    <Button onClick={handleOnClick} className="cursor-pointer w-32">
      <PlusCircleIcon className="size-4" />
      <span className="">New Entry</span>
    </Button>
  )
}

export default NewEntryCard
