import {
  BrainCircuitIcon,
  FileCheck2Icon,
  FileText,
  MoveRightIcon,
} from "lucide-react";
import { ReactNode } from "react";
import BgGradient from "@/components/common/bgGradient";
import { MotionDiv, MotionH2, MotionH3 } from "../common/motionWrapper";

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
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24 lg:pt-12">
          <BgGradient />
          <div className="mb-16 text-center">
            <MotionH2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-2xl font-bold text-blue-500 uppercase"
            >
              HOW IT WORKS
            </MotionH2>
            <MotionH3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl text-3xl font-bold"
            >
              Transform any PDF into an easy-to-digest summary in three in three
              simple steps
            </MotionH3>
          </div>
          <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-9 md:grid-cols-3">
            {Steps.map((step, index) => (
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="relative flex items-stretch"
                key={index}
              >
                <div className="group relative w-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xs transition-colors duration-300 hover:border-blue-500/50">
                  <div className="flex h-full flex-col gap-1">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-300 to-transparent transition-colors duration-300 group-hover:bg-blue-300">
                      {step.icon}
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-2 text-blue-500">
                      <h4 className="text-center text-xl font-bold">
                        {step.label}
                      </h4>
                      <p className="text-center text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                {index < Steps.length - 1 && (
                  <MoveRightIcon
                    size={33}
                    strokeWidth={1}
                    className="absolute top-1/2 -right-4 z-10 hidden h-screen -translate-y-1/2 transform text-blue-500 md:block"
                  />
                )}
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
