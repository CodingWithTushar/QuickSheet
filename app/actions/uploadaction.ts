"use server";
import { getDbConnection } from "@/lib/db";
import { generatePdfSummaryWithGemini } from "@/lib/GeminiAi";
import { fetchandExtractPdfText } from "@/lib/langchain";
import { formatFileNameAsTitle } from "@/utils/format_utils";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface PdfSummaryPropes {
  userId?: string;
  fileUrl: string;
  summary: string;
  title: string;
  fileName: string;
}

export async function generatePdfSummary(
  uploadResponse: Array<{
    serverData: {
      userId: string;
      file: {
        ufsUrl: string;
        name: string;
      };
    };
    ufsUrl?: string;
  }>
) {
  if (!uploadResponse || uploadResponse.length === 0) {
    console.error("No upload response received");
    return;
  }

  const {
    serverData: {
      userId,
      file: { ufsUrl: pdfUrl, name: fileName },
    },
  } = uploadResponse[0];

  if (!pdfUrl) {
    console.error("File URL not found!");
    return;
  }

  try {
    const PdfText = await fetchandExtractPdfText(pdfUrl);
    console.log(PdfText);

    let summary;
    try {
      summary = await generatePdfSummaryWithGemini(PdfText);
      console.log(summary);
      const fromattedFileName = formatFileNameAsTitle(fileName);
      return {
        success: true,
        message: "Summary generated successfully",
        data: {
          title: fromattedFileName,
          summary,
        },
      };
    } catch (error) {
      console.error("Error generating summary:", error);
    }

    if (!summary) {
      return {
        success: false,
        message: "Failed to generate summary",
      };
    }
  } catch (e) {
    console.error(`File Upload Failed! Because ${e}`);
    throw e;
  }
}

async function savePdfSummary({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryPropes) {
  try {
    const sql = await getDbConnection();
    const [savedSummary] =
      await sql`INSERT INTO pdf_summaries(user_id,original_file_url,summary_text,title,file_name) VALUES (${userId} ,${fileUrl} ,${summary},${title},${fileName}) RETURNING id , summary_text`;
    return savedSummary;
  } catch (error) {
    console.error("Error saving PDF summary:", error);
    throw error;
  }
}

export async function storePDFSummaryAction({
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryPropes) {
  let savedSummary: any;
  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "User not found",
      };
    }
    savedSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    });

    if (!savedSummary) {
      return {
        success: false,
        message: "Failed to save PDF summary , please try again....",
      };
    }
  } catch (e) {
    return {
      success: false,
      message:
        e instanceof Error ? e.message : "Error while storing PDF summary",
    };
  }

  revalidatePath(`/summaries/${savedSummary.id}`);

  return {
    success: true,
    message: "PDF summary saved successfully",
    data: {
      id: savedSummary.id,
    },
  };
}
