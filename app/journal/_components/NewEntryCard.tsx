"use client"
import { Button } from "@/components/ui/button"
import { PlusCircleIcon } from "lucide-react"
import React from "react"

const NewEntryCard = () => {
  const handleOnClick = () => {}

  return (
    <Button onClick={handleOnClick} className="cursor-pointer w-32">
      <PlusCircleIcon className="size-4" />
      <span className="">New Entry</span>
    </Button>
  )
}

export default NewEntryCard
