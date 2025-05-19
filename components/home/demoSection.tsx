import { LucidePizza } from "lucide-react";
import { MotionDiv, MotionH3, MotionSection } from "../common/motionWrapper";
import { ContainerVariants } from "@/utils/constants";
import { SummaryViewer } from "../summary/summaryViewer";
import { DemoSummary } from "@/utils/demoSummary";

export default function DemoSection() {
  return (
    <>
      <MotionSection className="relative">
        <MotionDiv
          variants={ContainerVariants}
          className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-11"
        >
          <MotionDiv
            aria-hidden="true"
            className="animate-float pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
          >
            <MotionDiv
              style={{
                clipPath:
                  "polygon(50% 0%, 65% 20%, 85% 10%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 15% 15%, 35% 25%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72rem] rotate-[30deg] bg-gradient-to-br from-sky-300/30 via-blue-300/40 to-cyan-300/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[90rem]"
            ></MotionDiv>
          </MotionDiv>
          <MotionDiv className="flex flex-col items-center justify-center space-x-4">
            <MotionDiv className="inline-flex items-center justify-center rounded-2xl border border-gray-500/20 bg-white p-2 backdrop-blur-sm">
              <LucidePizza className="h-7 w-7 text-blue-500" />
            </MotionDiv>
            <MotionH3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl py-9 text-center text-3xl font-bold lg:py-12"
            >
              Watch how Quick Sheet transform{" "}
              <span className="rounded bg-linear-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text p-1 text-transparent">
                this Next.js course pdf
              </span>{" "}
              into an easy-to-read summary!
            </MotionH3>
          </MotionDiv>
          <MotionDiv className="flex items-center justify-center px-2 sm:px-4 lg:px-6">
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SummaryViewer summary={DemoSummary} />
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      </MotionSection>
    </>
  );
}
