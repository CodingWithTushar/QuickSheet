import BgGradient from "@/components/common/bgGradient";
import { EmptySummaryState } from "@/components/summary/emptySummary";
import { SummaryCard } from "@/components/summary/summaryCard";
import { Button } from "@/components/ui/button";
import { GetSummaries } from "@/lib/summaries";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const uploadlimit = 5;
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    return redirect("sign-in");
  }
  const summaries = await GetSummaries(userId);

  return (
    <main className="min-h-screen">
      <BgGradient />
      <div className="container mx-auto flex flex-col gap-3  ">
        <div className="px-2 py-12 sm:py-24 ">
          <div className="flex gap-3  mb-8 justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold tracking-tight">
                Your Summaries
              </h1>
              <p className="text-gray-600 ">
                Transform your PDFs into concise, actionable insights.
              </p>
            </div>
            <Button
              variant={"link"}
              className="bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-200 group hover:no-underline "
            >
              <Link
                href={"/upload"}
                className="flex items-center text-white font-semibold"
              >
                <Plus className="w-5 h-5 mr-2 " />
                New Summary
              </Link>
            </Button>
          </div>
          <div className="mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800 font-medium">
              <p className="text-sm">
                You've reached the limit of {uploadlimit} uploads summaries on
                the basic plan.
                <Link
                  href={"/#pricing"}
                  className="text-blue-800 underline font-semibold underline-offset-4 inline-flex items-center "
                >
                  {" "}
                  Click here to upgrade to Pro{" "}
                  <ArrowRight className="w-4 h-4 inline-block" />{" "}
                </Link>
                for unlimited uploads.
              </p>
            </div>
          </div>
          {summaries.length === 0 ? (
            <EmptySummaryState />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:px-0 ">
              {summaries.map((summary, index) => (
                <SummaryCard key={index} summary={summary} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
