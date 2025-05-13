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
    <div className="flex gap-3 mb-4 justify-between ">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge
            variant={"secondary"}
            className="relative text-blue-500 px-4 py-1.5 text-sm font-medium bg-white/80 backdrop-blur-xs rounded-full hover:bg-white/90 transition-all duration-200 shadow-xs hover:shadow-md "
          >
            <Sparkles className="w-4  h-4  animate-pulse " /> Ai Summary
          </Badge>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="w-4  h-4  text-blue-500" />
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="w-4  h-4  text-blue-500" />
            {readingTime} mint read
          </div>
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold lg:tracking-tight">
          {title}
        </h1>
      </div>
      <div className="self-start">
        <Link href={"/dashboard"}>
          <Button
            variant={"link"}
            size={"sm"}
            className="group flex items-center gap-1 sm:gap-2 hover:bg-white/80 backdrop-blur-xs rounded-full transition-all duration-200 shadow-xs hover:shadow-md border border-blue-100/30 bg-blue-100 px-2 sm:px-3 cursor-pointer group hover:no-underline "
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500  transition-transform duration-200 group-hover:translate-x-0.5 " />
            Back <span className="hidden sm:inline ">to Dashboard </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
