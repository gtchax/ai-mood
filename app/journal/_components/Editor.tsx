"use client"
import React, { useState } from "react"

export type Entry = {
  id: string
  createdAt: Date
  updatedAt: Date
  content: string
  userId: string
}

export interface EntryCardProps {
  entry: Entry
}

const Editor = ({ entry }: EntryCardProps) => {
  const [value, setValue] = useState(entry.content)
  return (
    <div className="w-full h-full px-4">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-full outline-none text-xl p-2 border"
      ></textarea>
    </div>
  )
}

export default Editor
