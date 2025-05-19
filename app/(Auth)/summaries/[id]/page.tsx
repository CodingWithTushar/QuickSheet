import BgGradient from "@/components/common/bgGradient";
import { MotionDiv } from "@/components/common/motionWrapper";
import { SourceInfo } from "@/components/summary/sourceInfo";
import { SummaryHeader } from "@/components/summary/summaryHeader";
import { SummaryViewer } from "@/components/summary/summaryViewer";
import { getSummaryById } from "@/lib/summaries";
import { FileText } from "lucide-react";
import { notFound } from "next/navigation";

export default async function SummaryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  const summary = await getSummaryById(id);

  if (!summary) {
    notFound();
  }
  const {
    title,
    summary_text,
    file_name,
    word_count,
    created_at,
    original_file_url,
  } = summary;

  const readingTime = Math.ceil((word_count || 0) / 200);

  return (
    <div className="relative isolate min-h-screen bg-linear-to-b from-blue-50/40 to-white">
      <BgGradient />
      <div className="container mx-auto flex flex-col gap-3">
        <div className="ld:py-24 px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <SummaryHeader
              title={title}
              createdAt={created_at}
              readingTime={readingTime}
            />
            {file_name && (
              <SourceInfo
                fileName={file_name}
                originalFileUrl={original_file_url}
                title={title}
                createdAt={created_at}
                summaryText={summary_text}
              />
            )}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mt-4 sm:mt-8 lg:mt-16"
            ></MotionDiv>
            <div className="relative mx-auto max-w-4xl rounded-2xl border border-rose-100/30 bg-white/80 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-2xl sm:rounded-3xl sm:p-6 lg:p-8">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-50/50 via-orange-50 to-transparent opacity-50 sm:rounded-3xl" />

              <div className="text-muted-foreground absolute top-2 right-2 flex items-center gap-1.5 rounded-full bg-white/90 px-2 py-1 text-xs shadow-xs sm:top-4 sm:right-4 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm">
                <FileText className="h-3 w-3 text-blue-400 sm:h-4 sm:w-4" />
                {word_count.toLocaleString()} words
              </div>
              <div className="relative mt-8 flex justify-center sm:mt-6">
                <SummaryViewer summary={summary.summary_text} />
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
