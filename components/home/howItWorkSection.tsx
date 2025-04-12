import {
  BrainCircuitIcon,
  FileCheck2Icon,
  FileText,
  MoveRightIcon,
} from "lucide-react";
import { ReactNode } from "react";
import BgGradient from "../common/bgGradient";

type steps = {
  label: string;
  description: string;
  icon: ReactNode;
};

const Steps: steps[] = [
  {
    label: "Upload your PDF",
    description: "Simply upload your PDF file and we'll handle the rest",
    icon: <FileText size={64} strokeWidth={1.5} className="text-blue-500" />,
  },
  {
    label: "AI Analysis",
    description: "Our AI will analyze the PDF and generate a summary",
    icon: (
      <BrainCircuitIcon size={64} strokeWidth={1.5} className="text-blue-500" />
    ),
  },
  {
    label: "Get Summary",
    description: "Download your summary and use it to improve your work",
    icon: (
      <FileCheck2Icon size={64} strokeWidth={1.5} className="text-blue-500" />
    ),
  },
];

export default function HowItWorkSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-50">
        <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
          <BgGradient />
          <div className="text-center mb-16">
            <h2 className="font-bold text-2xl uppercase mb-4 text-blue-500">
              HOW IT WORKS
            </h2>
            <h3 className="font-bold text-3xl max-w-2xl mx-auto ">
              Transform any PDF into an easy-to-digest summary in three in three
              simple steps
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-6xl mx-auto relative">
            {Steps.map((step, index) => (
              <div className="relative flex items-stretch"  key={index}>
                <div
                 
                  className="relative p-7 bg-white/5 rounded-2xl backdrop-blur-xs border border-white/10 hover:border-blue-500/50  transition-colors group w-full duration-300"
                >
                  <div className="flex flex-col gap-1 h-full">
                    <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-300 to-transparent group-hover:bg-blue-300 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <div className="flex flex-col flex-1 justify-between gap-2 text-blue-500">
                      <h4 className="text-center font-bold text-xl">
                        {step.label}
                      </h4>
                      <p className="text-center text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                {index < Steps.length - 1 && (
                  <MoveRightIcon
                    size={33}
                    strokeWidth={1}
                    className="absolute hidden md:block h-screen top-1/2 -right-4 text-blue-500 transform -translate-y-1/2 z-10"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
