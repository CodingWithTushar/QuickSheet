"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { NavigationControl } from "./NavigationControl";
import ProgressBar from "./progressBar";
import { parseSection } from "@/utils/summaryHelper";
import ContentSection from "./contentSection";
import { MotionDiv } from "../common/motionWrapper";
import { easeInOut } from "motion/react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="bg-background/80 sticky top-0 z-10 mb-6 flex flex-col gap-3 pt-2 pb-4 backdrop-blur-xs">
      <h2 className="flex items-center justify-center gap-3 text-center text-3xl font-bold lg:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export function SummaryViewer({ summary }: { summary: string }) {
  const [currentSection, setcurrentSection] = useState(0);

  const handleNext = () =>
    setcurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
  const handlePrevious = () =>
    setcurrentSection((prev) => Math.max(prev - 1, 0));

  const sections = summary
    .split("\n# ")
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection);

  return (
    <Card className="lg:[h-700px] from-background via-background/95 relative h-[500px] w-full overflow-hidden rounded-3xl border border-blue-500/10 bg-linear-to-br to-blue-500/5 px-2 shadow-2xl backdrop-blur-lg sm:h-[600px] xl:w-[600px]">
      <MotionDiv
        key={currentSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: easeInOut }}
        exit={{ opacity: 0 }}
        className="scrollbar-hide h-full overflow-y-auto pt-12 pb-20 sm:pt-16 sm:pb-24"
      >
        <ProgressBar sections={sections} currentSection={currentSection} />

        <div className="px-4 sm:px-6">
          <SectionTitle title={sections[currentSection]?.title || ""} />

          <ContentSection
            title={sections[currentSection]?.title || ""}
            points={sections[currentSection]?.points || []}
          />
        </div>
      </MotionDiv>
      <NavigationControl
        currentSection={currentSection}
        totalSection={sections.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSectionSelect={setcurrentSection}
      />
    </Card>
  );
}
