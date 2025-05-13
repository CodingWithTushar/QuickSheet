import { Sparkles } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";

const Uploadheader = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 text-center">
      <div className="relative  p-[1px] shadow-lg overflow-hidden rounded-full bg-linear-to-r from-blue-500 via-blue-300 to-blue-500 animate-gradient-x group-hover:animate-gradient-y transition-all duration-200">
        <Badge
          variant={"secondary"}
          className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200 "
        >
          <Sparkles className="w-7 h-7 text-blue-600 mr-2 transition-all duration-200 animate-pulse" />
          <p className="text-xl">AI at Work for You</p>
        </Badge>
      </div>
      <div className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <h1 className="text-center text-4xl font-bold py-6">
          "Transform Your PDFs
          <span className="relative inline-block ">
            <span className="relative z-7 p-2 text-blue-500">in Seconds</span>{" "}
            <span
              className="absolute  bg-blue-400/30 inset-0 -rotate-1 rounded-lg -skew-y-1"
              aria-hidden="true"
            ></span>
          </span>
        </h1>
      </div>
      <div className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
        <p>
          "Say goodbye to endless scrolling! 📄 Upload your PDFs here, and let
          our AI-powered magic turn dense documents into crisp, easy-to-digest
          summaries."✨
        </p>
      </div>
    </section>
  );
};

export default Uploadheader;
