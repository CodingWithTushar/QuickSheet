import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="relative mx-auto flex flex-col items-center justify-center z-0 py-17 sm:py-21 lg:pb-29 transition-all duration-200 animate-in px-13 max-w-7xl">
        <div className="relative px-1 py-1 overflow-hidden rounded-full bg-linear-to-r from-blue-500 via-blue-300 to-blue-500 animate-gradient-x group-hover:animate-gradient-y transition-all duration-200">
          <Badge
            className="flex items-center rounded-full relative px-2 py-1 text-base font-medium group-hover:bg-gray-500 transition-colors duration-200 border-none"
            variant={"secondary"}
          >
            <Sparkles className="w-7 h-7 text-blue-500 mr-1 transition-all duration-200 animate-pulse" />
            <p className="text-xl">Powered By Ai</p>
          </Badge>
        </div>
        <h1 className="text-center text-4xl font-bold py-6">
          "Turn Lengthy Documents into
          <span className="relative inline-block">
            <span className="relative z-7 p-1 text-blue-500">
              Quick Insights
            </span>{" "}
            <span
              className="absolute bg-blue-400/50 inset-0 -rotate-1 rounded-lg -skew-y-1"
              aria-hidden="true"
            ></span>
          </span>
          -AI Summarization at Your Fingertips!"{" "}
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
          Get a beautiful summary of your documents in seconds
        </h2>
        <div>
          <Button
            variant={"link"}
            className="rounded-full text-white bg-linear-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 hover:scale-105mt-6 text-base sm:text-lg lg:text-xl px-7 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 font-bold shadow-lg  transition-all duration-200  "
          >
            <Link href={"/#pricing"} className="flex items-center gap-1.5">
              <span>Try Quick Sheet</span>
              <ArrowRight className="w-4 h-4 animate-pulse " />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
