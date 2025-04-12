import { LucidePizza } from "lucide-react";

export default function DemoSection() {
  return (
    <>
      <section className="relative">
        <div className="py-12 lg:py-11 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8  ">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60 animate-float"
          >
            <div
              style={{
                clipPath:
                  "polygon(50% 0%, 65% 20%, 85% 10%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 15% 15%, 35% 25%)",
              }}
              className="relative left-[calc(50%-11rem)] w-[72rem] aspect-[1155/678] rotate-[30deg] bg-gradient-to-br from-sky-300/30 via-blue-300/40 to-cyan-300/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[90rem]"
            ></div>
          </div>
          <div className="flex flex-col items-center justify-center space-x-4">
            <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-white backdrop-blur-sm border border-gray-500/20">
              <LucidePizza className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="font-bold text-3xl max-w-2xl py-9 lg:py-12 text-center">
              Watch how Quick Sheet transform{" "}
              <span className="bg-linear-to-r from-blue-300 via-blue-500 to-blue-700 rounded p-1 bg-clip-text text-transparent">
                this Next.js course pdf
              </span>{" "}
              into an easy-to-read summary!
            </h3>
          </div>
          <div className="flex items-center justify-center px-2 sm:px-4 lg:px-6 ">
            {/* Summary Viewer */}
          </div>
        </div>
      </section>
    </>
  );
}
