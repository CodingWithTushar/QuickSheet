import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, Clock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SummaryHeader({
  title,
  createdAt,
  readingTime,
}: {
  title: string;
  createdAt: string;
  readingTime: number;
}) {
  return (
    <div className="mb-4 flex justify-between gap-3">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge
            variant={"secondary"}
            className="relative rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-blue-500 shadow-xs backdrop-blur-xs transition-all duration-200 hover:bg-white/90 hover:shadow-md"
          >
            <Sparkles className="h-4 w-4 animate-pulse" /> Ai Summary
          </Badge>
          <div className="text-muted-foreground flex items-center gap-3 text-sm">
            <Calendar className="h-4 w-4 text-blue-500" />
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="text-muted-foreground flex items-center gap-3 text-sm">
            <Clock className="h-4 w-4 text-blue-500" />
            {readingTime} mint read
          </div>
        </div>
        <h1 className="text-2xl font-bold lg:text-3xl lg:tracking-tight">
          {title}
        </h1>
      </div>
      <div className="self-start">
        <Link href={"/dashboard"}>
          <Button
            variant={"link"}
            size={"sm"}
            className="group group flex cursor-pointer items-center gap-1 rounded-full border border-blue-100/30 bg-blue-100 px-2 shadow-xs backdrop-blur-xs transition-all duration-200 hover:bg-white/80 hover:no-underline hover:shadow-md sm:gap-2 sm:px-3"
          >
            <ChevronLeft className="h-3 w-3 text-blue-500 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
            Back <span className="hidden sm:inline">to Dashboard </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
