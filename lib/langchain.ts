import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function fetchandExtractPdfText(fileUrl: string) {
  const response = await fetch(fileUrl);

  const bolb = await response.blob();

  const arrayBuffer = await bolb.arrayBuffer();
  
  const loader = new PDFLoader(new Blob([arrayBuffer]));

  const docs = await loader.load();

  return docs.map((doc) => doc.pageContent).join("\n");
}
