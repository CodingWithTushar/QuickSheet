import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { cn, formatFileName } from "@/utils/utils";
import { formatDistanceToNow } from "date-fns";
import DeleteButton from "./deleteButton";
import { MotionDiv } from "../common/motionWrapper";
import { ItemsVariants } from "@/utils/constants";

interface SummaryHeaderPorps {
  fileUrl: string;
  title: string | null;
  created_at: string;
}

const SummaryHeader = ({ fileUrl, title, created_at }: SummaryHeaderPorps) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4 ">
      <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mt-1  " />
      <div className="flex-1 min-w-0">
        <h3 className="text-base xl:text-lg font-semibold text-gray-900 truncate w-4/5">
          {" "}
          {title || formatFileName(fileUrl)}
        </h3>
        <p className="text-sm text-gray-500 ">
          {" "}
          {formatDistanceToNow(new Date(created_at), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};

const StatusBagde = ({ status }: { status: string }) => {
  return (
    <span
      className={cn(
        `px-3 py-2 text-xs font-medium rounded-full capitalize `,
        status === "completed"
          ? "bg-green-300 text-green-800"
          : "bg-yellow-300 text-yellow-800 "
      )}
    >
      {status}
    </span>
  );
};

export const SummaryCard = ({ summary }: { summary: any }) => {
  return (
    <MotionDiv
      variants={ItemsVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <Card className="relative h-full hover:scale-105 transition-all duration-200">
        <div className="absolute top-2 right-2 ">
          <DeleteButton summaryId={summary.id} />
        </div>
        <Link href={`/summaries/${summary.id}`} className="block p-4 sm:p-6 ">
          <div className="flex flex-col gap-3 sm:gap-4 ">
            <SummaryHeader
              fileUrl={summary.original_file_url}
              title={summary.title}
              created_at={summary.created_at}
            />
            <p className="text-sm sm:text-base text-gray-600 line-clamp-2 pl-2">
              {summary.summary_text}
            </p>

            <div className="flex justify-between items-center mt-2 sm:mt-4 ">
              <StatusBagde status={summary.status} />
            </div>
          </div>
        </Link>
      </Card>
    </MotionDiv>
  );
};
