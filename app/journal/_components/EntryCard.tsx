import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  // CardFooter,
} from "@/components/ui/card"
import { CalendarDays, Clock, 
  // BrainCircuit
 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

type Analysis = {
  subject?: string
  mood?: string
  sentiment?: string
  sentimentScore?: number
  color?: string
  negative?: boolean
}

type Entry = {
  id: string
  content: string
  createdAt: string | Date
  analysis?: Analysis
}

interface EntryCardProps {
  entry: Entry
}
const EntryCard = ({ entry }: EntryCardProps) => {
  const date = new Date(entry.createdAt).toLocaleDateString()
  const time = new Date(entry.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 min-w-60 max-w-92">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">
            {entry.analysis?.subject || "No title"}
          </CardTitle>
          <Badge
            variant={
              entry.analysis?.sentimentScore as number >= 0.5 ? "default" : "destructive"
            }
          >
            {entry.analysis?.sentiment || "Neutral"}
          </Badge>
        </div>

        <div className="flex gap-4 text-sm text-muted-foreground mt-2">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="">
        <p className="line-clamp-3 text-sm">{entry.content}</p>
      </CardContent>

      {/* <Separator /> */}

      {/* <CardFooter className="flex flex-col items-start gap-2 pt-4">
        <div className="flex items-center gap-2 text-sm">
          <BrainCircuit className="h-4 w-4 text-purple-500" />
          <span className="font-medium">Analysis</span>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full text-sm">
          <div>
            <p className="text-muted-foreground">Mood</p>
            <p>{entry.analysis?.mood || "Unknown"}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Sentiment</p>
            <p>{entry.analysis?.sentimentScore?.toFixed(2) || "0.00"}</p>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  )
}

export default EntryCard
