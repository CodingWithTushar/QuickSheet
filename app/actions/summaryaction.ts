"use server";

import { getDbConnection } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";

export async function deleteSummaryAction({
  summaryId,
}: {
  summaryId: string;
}) {
  try {
    const user = await currentUser();
    const userId = user?.id;
    if (!userId) {
      throw new Error("User not Found");
    }

    const sql = await getDbConnection();

    const result = await sql`DELETE FROM pdf_summaries
                   WHERE id = ${summaryId} AND user_id = ${userId} 
                   RETURNING id`;

    if (result.length > 0) {
      revalidatePath("/dashboard");
      toast.success("Summary has been Deleted");
      return { success: true };
    }
    return { success: false };
  } catch (e) {
    console.error(`Error Happened while deleting ${e}`);
    console.log(`Error Happened while deleting ${e}`);
    return { success: false };
  }
}
