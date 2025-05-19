import { Sparkles } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "../common/motionWrapper";
import { ItemsVariants } from "@/utils/constants";

const Uploadheader = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 text-center">
      <MotionDiv
        variants={ItemsVariants}
        className="animate-gradient-x group-hover:animate-gradient-y relative overflow-hidden rounded-full bg-linear-to-r from-blue-500 via-blue-300 to-blue-500 p-[1px] shadow-lg transition-all duration-200"
      >
        <Badge
          variant={"secondary"}
          className="relative rounded-full bg-white px-6 py-2 text-base font-medium transition-colors duration-200 group-hover:bg-gray-50"
        >
          <Sparkles className="mr-2 h-7 w-7 animate-pulse text-blue-600 transition-all duration-200" />
          <p className="text-xl">AI at Work for You</p>
        </Badge>
      </MotionDiv>
      <MotionDiv
        variants={ItemsVariants}
        className="text-3xl font-bold tracking-tight text-gray-900 capitalize sm:text-4xl"
      >
        <h1 className="py-6 text-center text-4xl font-bold">
          "Transform Your PDFs
          <span className="relative inline-block">
            <span className="relative z-7 p-2 text-blue-500">in Seconds</span>{" "}
            <span
              className="absolute inset-0 -rotate-1 -skew-y-1 rounded-lg bg-blue-400/30"
              aria-hidden="true"
            ></span>
          </span>
        </h1>
      </MotionDiv>
      <MotionDiv
        variants={ItemsVariants}
        className="mt-2 max-w-2xl text-center text-lg leading-8 text-gray-600"
      >
        <p>
          "Say goodbye to endless scrolling! 📄 Upload your PDFs here, and let
          our AI-powered magic turn dense documents into crisp, easy-to-digest
          summaries."✨
        </p>
      </MotionDiv>
    </section>
  );
};

export default Uploadheader;
