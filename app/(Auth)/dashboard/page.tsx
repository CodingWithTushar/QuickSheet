import BgGradient from "@/components/common/bgGradient";
import {
  MotionDiv,
  MotionH1,
  MotionPara,
} from "@/components/common/motionWrapper";
import { EmptySummaryState } from "@/components/summary/emptySummary";
import { SummaryCard } from "@/components/summary/summaryCard";
import { Button } from "@/components/ui/button";
import { GetSummaries } from "@/lib/summaries";
import { ItemsVariants } from "@/utils/constants";
import { currentUser } from "@clerk/nextjs/server";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    return redirect("sign-in");
  }
  const summaries = await GetSummaries(userId);

  return (
    <main className="min-h-screen">
      <BgGradient />
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex flex-col gap-3"
      >
        <MotionDiv className="px-2 py-12 sm:py-24">
          <MotionDiv className="mb-8 flex items-center justify-between gap-3">
            <MotionDiv className="flex flex-col gap-2">
              <MotionH1
                variants={ItemsVariants}
                initial="hidden"
                whileInView="visible"
                className="text-4xl font-bold tracking-tight"
              >
                Your Summaries
              </MotionH1>
              <MotionPara
                variants={ItemsVariants}
                initial="hidden"
                animate="visible"
                className="text-gray-600"
              >
                Transform your PDFs into concise, actionable insights.
              </MotionPara>
            </MotionDiv>
            <MotionDiv
              variants={ItemsVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
              className="self-start"
            >
              <Button
                variant={"link"}
                className="group bg-linear-to-r from-blue-500 to-blue-700 transition-all duration-200 hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:no-underline"
              >
                <Link
                  href={"/upload"}
                  className="flex items-center font-semibold text-white"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  New Summary
                </Link>
              </Button>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv
            variants={ItemsVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          ></MotionDiv>
          {summaries.length === 0 ? (
            <EmptySummaryState />
          ) : (
            <MotionDiv className="grid grid-cols-1 gap-4 sm:gap-6 sm:px-0 md:grid-cols-2 lg:grid-cols-3">
              {summaries.map((summary, index) => (
                <SummaryCard key={index} summary={summary} />
              ))}
            </MotionDiv>
          )}
        </MotionDiv>
      </MotionDiv>
    </main>
  );
}
