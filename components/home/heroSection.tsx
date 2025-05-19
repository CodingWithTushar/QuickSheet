import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionPara,
  MotionSection,
  MotionSpan,
} from "@/components/common/motionWrapper";
import {
  ButtonVariants,
  ContainerVariants,
  ItemsVariants,
} from "@/utils/constants";

export default function HeroSection() {
  return (
    <>
      <MotionSection
        variants={ContainerVariants}
        initial="hidden"
        animate="visible"
        className="animate-in relative z-0 mx-auto flex max-w-7xl flex-col items-center justify-center px-13 py-17 transition-all duration-200 sm:py-21 lg:pb-29"
      >
        <MotionDiv
          variants={ItemsVariants}
          className="animate-gradient-x group-hover:animate-gradient-y relative overflow-hidden rounded-full bg-linear-to-r from-blue-500 via-blue-300 to-blue-500 px-1 py-1 transition-all duration-200"
        >
          <Badge
            className="relative flex items-center rounded-full border-none px-2 py-1 text-base font-medium transition-colors duration-200 group-hover:bg-gray-500"
            variant={"secondary"}
          >
            <Sparkles className="mr-1 h-7 w-7 animate-pulse text-blue-500 transition-all duration-200" />
            <MotionPara className="text-xl">Powered By Ai</MotionPara>
          </Badge>
        </MotionDiv>
        <MotionH1
          variants={ItemsVariants}
          className="py-6 text-center text-4xl font-bold"
        >
          "Turn Lengthy Documents into
          <MotionSpan className="relative inline-block">
            <MotionSpan
              whileHover={ButtonVariants}
              className="relative z-7 p-1 text-blue-500"
            >
              Quick Insights
            </MotionSpan>{" "}
            <MotionSpan
              className="absolute inset-0 -rotate-1 -skew-y-1 rounded-lg bg-blue-400/50"
              aria-hidden="true"
            ></MotionSpan>
          </MotionSpan>
          -AI Summarization at Your Fingertips!"{" "}
        </MotionH1>
        <MotionH2
          variants={ItemsVariants}
          className="px-4 text-center text-lg text-gray-600 sm:text-xl lg:max-w-4xl lg:px-0 lg:text-2xl"
        >
          Get a beautiful summary of your documents in seconds
        </MotionH2>
        <MotionDiv variants={ItemsVariants} whileHover={ButtonVariants}>
          <Button
            variant={"link"}
            className="hover:scale-105mt-6 rounded-full bg-linear-to-r from-blue-400 to-blue-600 px-7 py-6 text-base font-bold text-white shadow-lg transition-all duration-200 hover:from-blue-600 hover:to-blue-400 sm:px-10 sm:py-7 sm:text-lg lg:mt-16 lg:px-12 lg:py-8 lg:text-xl"
          >
            <Link href={"/sign-in"} className="flex items-center gap-1.5">
              <MotionSpan>Try Quick Sheet</MotionSpan>
              <ArrowRight className="h-4 w-4 animate-pulse" />
            </Link>
          </Button>
        </MotionDiv>
      </MotionSection>
    </>
  );
}
