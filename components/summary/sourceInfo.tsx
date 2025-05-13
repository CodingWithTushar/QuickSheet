import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DownloadSummaryButton from "./downloadSummaryButton";

export function SourceInfo({
  fileName,
  originalFileUrl,
  title,
  summaryText,
  createdAt,
}: {
  fileName: string;
  originalFileUrl: string;
  title: string;
  summaryText: string;
  createdAt: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <div className="flex items-center justify-center gap-3 ">
        <FileText className="w-4 h-4 text-blue-400" />
        <span>Source: {fileName}</span>
      </div>
      <div className="flex gap-3 ">
        <Button
          variant={"ghost"}
          className="h-8 px-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          asChild
        >
          <Link
            href={originalFileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4 mr-1 " /> View Original
          </Link>
        </Button>
        <DownloadSummaryButton
          title={title}
          summaryText={summaryText}
          fileName={fileName}
          createdAt={createdAt}
        />
      </div>
    </div>
  );
}
