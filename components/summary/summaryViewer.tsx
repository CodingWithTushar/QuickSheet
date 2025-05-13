"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { NavigationControl } from "./NavigationControl";
import ProgressBar from "./progressBar";
import { parseSection } from "@/utils/summaryHelper";
import ContentSection from "./contentSection";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-3 mb-6 sticky top-0 pt-2 pb-4 bg-background/80 backdrop-blur-xs z-10 ">
      <h2 className="flex text-3xl lg:text-4xl text-center font-bold items-center justify-center gap-3 ">
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
    <Card className="relative px-2 h-[500px] sm:h-[600px] lg:[h-700px] w-full xl:w-[600px] overflow-hidden bg-linear-to-br from-background via-background/95 to-blue-500/5 backdrop-blur-lg shadow-2xl rounded-3xl border border-blue-500/10 ">
      <div className="h-full overflow-y-auto scrollbar-hide pt-12 sm:pt-16 pb-20 sm:pb-24">
        <ProgressBar sections={sections} currentSection={currentSection} />

        <div className="px-4 sm:px-6 ">
          <SectionTitle title={sections[currentSection]?.title || ""} />

          <ContentSection
            title={sections[currentSection]?.title || ""}
            points={sections[currentSection]?.points || []}
          />
        </div>
      </div>
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
