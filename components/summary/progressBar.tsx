import { cn } from "@/utils/utils";

export default function ProgressBar({
  sections,
  currentSection,
}: {
  sections: any[];
  currentSection: number;
}) {
  return (
    <div className="bg-background/80 absolute top-0 right-0 left-0 z-20 border-b border-blue-50/10 pt-4 pb-2 backdrop-blur-xs">
      <div className="flex gap-2 px-4">
        {sections.map((_, index) => (
          <div
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-blue-500/10"
            key={index}
          >
            <div
              key={index}
              className={cn(
                "h-full rounded-2xl bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 transition-all duration-500",
                index === currentSection
                  ? "w-full"
                  : currentSection > index
                    ? "w-full opacity-10"
                    : "w-0",
              )}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
