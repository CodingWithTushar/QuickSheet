import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";
import { GoogleGenAI } from "@google/genai";
import toast from "react-hot-toast";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generatePdfSummaryWithGemini(PdfText: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      config: {
        temperature: 0.7,
        maxOutputTokens: 1500,
      },
      contents:[{role: 'user', parts: [{text: SUMMARY_SYSTEM_PROMPT}, {text: `Transform this into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting\n\n${PdfText}`}]}]
    });

    const summary = await response.text;

    if (!response.text) {
      throw new Error('Empty response from Gemini Api')
    }

    return summary;
  } catch (error: any) {
    toast.error("Gemini API error", error);
    console.log("Gemini API error", error);
  }
}
