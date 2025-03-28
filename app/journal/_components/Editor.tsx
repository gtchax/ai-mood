"use client"

import React, { useState, useEffect, useCallback } from "react"
import { useDebounce } from "use-debounce"
import { Bold, Italic, Underline, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

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
  const [content, setContent] = useState(entry.content)
  const [isSaving, setIsSaving] = useState(false)
  const [debouncedContent] = useDebounce(content, 2000) // Auto-save after 2s

  // Formatting handlers
  const applyFormat = (format: string) => {
    const textarea = document.getElementById(
      "editor-textarea"
    ) as HTMLTextAreaElement
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = content.substring(start, end)

    let formattedText = ""
    switch (format) {
      case "bold":
        formattedText = `**${selectedText}**`
        break
      case "italic":
        formattedText = `*${selectedText}*`
        break
      case "underline":
        formattedText = `_${selectedText}_`
        break
      default:
        formattedText = selectedText
    }

    const newContent =
      content.substring(0, start) + formattedText + content.substring(end)

    setContent(newContent)
  }

  // Save to API
  const saveEntry = useCallback(
    async (content: string) => {
      setIsSaving(true)
      try {
        const response = await fetch(`/api/entries/${entry.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content }),
        })

        if (!response.ok) throw new Error("Failed to save")
        toast.success("Entry saved successfully")
      } catch (error) {
        toast.error("Failed to save entry")
        console.error(error)
      } finally {
        setIsSaving(false)
      }
    },
    [entry.id]
  )

  // Auto-save when content changes
  useEffect(() => {
    if (debouncedContent !== entry.content) {
      saveEntry(debouncedContent)
    }
  }, [debouncedContent, entry.content, saveEntry])

  // Manual save handler
  const handleSave = () => {
    saveEntry(content)
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 border-b">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => applyFormat("bold")}
          aria-label="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => applyFormat("italic")}
          aria-label="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => applyFormat("underline")}
          aria-label="Underline"
        >
          <Underline className="h-4 w-4" />
        </Button>

        <div className="ml-auto">
          <Button size="sm" onClick={handleSave} disabled={isSaving}>
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 p-4 overflow-auto">
        <textarea
          id="editor-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[80vh] outline-none resize-none text-lg leading-relaxed"
          placeholder="Write your thoughts here..."
        />
      </div>

      {/* Status Bar */}
      <div className="text-xs text-muted-foreground p-2 border-t">
        {new Date(entry.updatedAt).toLocaleString()} •{content.length}{" "}
        characters •{content.split(/\s+/).filter(Boolean).length} words
      </div>
    </div>
  )
}

export default Editor
