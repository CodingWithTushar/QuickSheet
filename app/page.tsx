import BgGradient from "@/components/common/bgGradient";
import CtaSection from "@/components/home/ctaSection";
import DemoSection from "@/components/home/demoSection";
import HeroSection from "@/components/home/heroSection";
import HowItWorkSection from "@/components/home/howItWorkSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorkSection />
        <CtaSection />
      </div>
    </div>
  );
}
