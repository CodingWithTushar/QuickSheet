"use client";
import {
  generatePdfSummary,
  storePDFSummaryAction,
} from "@/app/actions/uploadaction";
import BgGradient from "@/components/common/bgGradient";
import { MotionDiv } from "@/components/common/motionWrapper";
import Uploadform from "@/components/upload/uploadform";
import Uploadheader from "@/components/upload/uploadheader";
import { useUploadThing } from "@/lib/uploadthing";
import { ContainerVariants } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

const Schema = z.object({
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 24 * 1024 * 1024,
      "🗒️File should be less then 24 MB "
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "🗒️Only PDFs are allowed"
    ),
});

const UploadPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setisLoading] = useState(false);
  const Router = useRouter();

  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast.success("✅Successfully");
    },
    onUploadError: (err) => {
      toast.error("❌Error Occurred while uploading ");
    },
    onUploadBegin: ({ file }) => {
      console.log(`Upload has begun for ${file}`);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setisLoading(true);
      const formData = new FormData(e.currentTarget);
      const file = formData.get("file") as File;
      const ValidatedFields = Schema.safeParse({ file });

      if (!ValidatedFields.success) {
        toast.error("❌Invalid file");
        console.log(
          ValidatedFields.error.flatten().fieldErrors.file?.[0] ??
            "InValid File"
        );
        setisLoading(false);
        return;
      }

      toast.success("📄Processing PDF");

      const response = await startUpload([file]);

      if (!response) {
        toast.error("❌Something went wrong");
        setisLoading(false);
        return;
      }

      console.log({ response });

      toast.success("📄PDF Uploaded");

      const result = await generatePdfSummary(response);

      const { data = null, message = null } = result || {};

      console.log({ data }, { result });

      if (data) {
        let storeResult: any;
        toast.success("Saving the Pdf...");
        if (data.summary) {
          storeResult = await storePDFSummaryAction({
            fileUrl: response[0].serverData.file.ufsUrl,
            summary: data.summary,
            title: data.title,
            fileName: file.name,
          });
          toast.success("📄Summary Generated and Saved");
          formRef.current?.reset();
          Router.push(`/summaries/${storeResult.data.id}`);
        }
      }
    } catch (e) {
      console.log(`Error Occured ${e}`);
      setisLoading(false);
      formRef.current?.reset();
    } finally {
      setisLoading(false);
    }
  };

  return (
    <section className="min-h-screen  ">
      <BgGradient />
      <MotionDiv
        variants={ContainerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto  max-w-7xl px-6 py-24 sm:py-32"
      >
        <div className="flex flex-col items-center justify-center gap-6 text-center ">
          <Uploadheader />
          <div className="w-full flex flex-col gap-8 mx-auto max-w-2xl">
            <Uploadform
              isLoading={isLoading}
              ref={formRef}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </MotionDiv>
    </section>
  );
};

export default UploadPage;
