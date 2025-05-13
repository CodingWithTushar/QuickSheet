import { FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function EmptySummaryState() {
  return (
    <div className="text-center py-12 ">
      <div className="flex flex-col items-center gap-3 ">
        <FileText className="w-16 h-16 text-gray-400" />
        <h2 className="text-gray-600 text-xl ">No Summaies yet.</h2>
        <p className="text-gray-500 max-w-md text-medium font-semibold">
          Upload your First PDF to get started with Ai-Powered Summaries.
        </p>
        <Link href={"/upload"}>
          <Button
            variant={"link"}
            className="mt-4 text-white bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:no-underline cursor-pointer "
          >
            {" "}
            Create your First Summary
          </Button>
        </Link>
      </div>
    </div>
  );
}
