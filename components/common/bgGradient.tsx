import React from "react";

export default function BgGradient({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative isolate ${className}`}>
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
      >
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 65% 20%, 85% 10%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 15% 15%, 35% 25%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72rem] rotate-[30deg] bg-gradient-to-br from-sky-300/30 via-blue-300/40 to-cyan-300/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[90rem]"
        ></div>
      </div>
      {children}
    </div>
  );
}
