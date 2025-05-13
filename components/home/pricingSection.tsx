import { cn } from "@/utils/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import BgGradient from "@/components/common/bgGradient";
import { Button } from "@/components/ui/button";

type PricingProps = {
  id: string;
  name: string;
  paragraph: string;
  price: number;
  feature: string[];
  paymentLink: string;
};

const Plans = [
  {
    id: "Basic",
    name: "Basic",
    paragraph: "Perfect for Beginners",
    price: 7,
    feature: [
      "5 PDF Uploads/Month",
      "Standard Processing Speed ",
      "Email Support",
      "Simple & Intuitive Interface",
    ],
    paymentLink: "",
  },
  {
    id: "Pro",
    name: "Pro",
    paragraph: "Perfect for Personal",
    price: 13,
    feature: [
      "30 PDF Uploads/Month ",
      "Priority Processing",
      "Dedicated Support (24/7)",
      "Easy Markdown Export",
    ],
    paymentLink: "",
  },
  {
    id: "Premium",
    name: "Premium",
    paragraph: "Perfect for Enterprise",
    price: 19,
    feature: [
      "Unlimited PDF Uploads",
      "Limitless Data Processing",
      "24/7 Priority Support",
      "One-Click Markdown Exports",
    ],
    paymentLink: "",
  },
];

function PricingCard({ id, name, paragraph, price, feature }: PricingProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex flex-col w-full max-w-lag hover:scale-105 hover:transition-all duration-200 rounded-lg z-10 hover:border-blue-500 hover:border-2",
          id === "Pro" && "border-blue-500 border-2 "
        )}
      >
        <div
          className={cn(
            "relative flex flex-col bg-white rounded-lg shadow-md p-4 text-center",
            id === "Pro" &&
              "bg-linear-to-br from-blue-transparent via-blue-100 to-blue-200"
          )}
        >
          <div className="flex items-center justify-center text-4xl font-bold capitalize">
            {name}
          </div>
          <div className="flex items-center justify-center gap-1 ">
            <div>
              <p className="relative inline-block font-extrabold my-1 text-3xl bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                ${price}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-1 text-[8px]">
              <span className="text-gray-800 font-medium">USD</span>
              <span className="text-gray-800 font-medium">/month</span>
            </div>
          </div>
          <div className="text-xs text-gray-700 pb-3">{paragraph}</div>
          <div className="max-w-3xl mx-auto">
            {feature.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm font-semibold mt-2"
              >
                {" "}
                <Check
                  size={16}
                  className="text-blue-600 bg-blue-300 rounded-full w-5 h-5 p-1"
                />
                {feature}
              </li>
            ))}
          </div>
          <div className="flex items-center justify-center mt-4 w-full">
            <Button
              variant={"link"}
              style={{
                textDecoration: "none",
              }}
              className=" flex items-center justify-center w-[210px] bg-linear-to-b from-blue-900 via-blue-700 to-blue-500 text-white font-bold text-xl py-4 rounded-md hover:from-blue-700 hover:via-blue-500 hover:to-blue-300 transition-all duration-300"
            >
              <Link
                href="/#"
                className="flex items-center justify-center "
                style={{
                  textDecoration: "none",
                }}
              >
                Buy Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function PricingSection({}) {
  return (
    <>
      <section>
        <BgGradient />
        <div className="py-12 lg:py-23 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
          <div className="flex flex-col items-center justify-center mb-13">
            <h2 className="font-bold text-2xl uppercase mb-4 text-blue-500 text-center">
              Pricing
            </h2>
          </div>
          <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8">
            {Plans.map((plan) => (
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
