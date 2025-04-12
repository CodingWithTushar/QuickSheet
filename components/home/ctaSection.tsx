import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <>
    
      <div className="flex flex-col items-center justify-center py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className=" font-bold text-2xl uppercase mb-4 text-blue-500 text-center">Turn Your PDFs into Bite-Sized Learning!</h2>
        <p className="text-gray-800 max-w-7xl text-center font-medium px-11 lg:px-23 my-7">
        Struggling with long documents? Let us do the heavy lifting. Our smart tool transforms your PDFs into clear, concise study cards—perfect for fast, focused learning. Whether you're cramming for an exam or just want to absorb more in less time, we help you study smarter, not harder.
        </p>
        <Button variant={"link"} className=" flex items-center justify-center bg-linear-to-b from-blue-900 via-blue-700 to-blue-500 text-white font-bold text-xl py-4 rounded-xl hover:from-blue-700 hover:via-blue-500 hover:to-blue-300 transition-all duration-300">
          <Link href={"/#"} className="flex items-center gap-1  ">
          Get Started
          <ArrowRight size={13}/>
          </Link>
        </Button>
      </div>
    </>
  );
}
