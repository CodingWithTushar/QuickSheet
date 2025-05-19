import { FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function EmptySummaryState() {
  return (
    <div className="py-12 text-center">
      <div className="flex flex-col items-center gap-3">
        <FileText className="h-16 w-16 text-gray-400" />
        <h2 className="text-xl text-gray-600">No Summaies yet.</h2>
        <p className="text-medium max-w-md font-semibold text-gray-500">
          Upload your First PDF to get started with Ai-Powered Summaries.
        </p>
        <Link href={"/upload"}>
          <Button
            variant={"link"}
            className="mt-4 cursor-pointer bg-linear-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 hover:no-underline"
          >
            {" "}
            Create your First Summary
          </Button>
        </Link>
      </div>
    </div>
  );
}
