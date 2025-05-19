import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="mb-4 text-center text-2xl font-bold text-blue-500 uppercase">
          Turn Your PDFs into Bite-Sized Learning!
        </h2>
        <p className="my-7 max-w-7xl px-11 text-center font-medium text-gray-800 lg:px-23">
          Struggling with long documents? Let us do the heavy lifting. Our smart
          tool transforms your PDFs into clear, concise study cards—perfect for
          fast, focused learning. Whether you're cramming for an exam or just
          want to absorb more in less time, we help you study smarter, not
          harder.
        </p>
        <Button
          variant={"link"}
          className="flex items-center justify-center rounded-xl bg-linear-to-b from-blue-900 via-blue-700 to-blue-500 py-4 text-xl font-bold text-white transition-all duration-300 hover:from-blue-700 hover:via-blue-500 hover:to-blue-300"
        >
          <Link href={"/#"} className="flex items-center gap-1">
            Get Started
            <ArrowRight size={13} />
          </Link>
        </Button>
      </div>
    </>
  );
}
