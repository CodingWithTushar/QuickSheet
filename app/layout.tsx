import type { Metadata } from "next";
import { Merriweather_Sans as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight:['300','400','500','600','700','800']
});

export const metadata: Metadata = {
  title: "Quick Sheet",
  description: "Quick Sheet - AI-powered document summarization for professionals. Transform lengthy documents into actionable insights in seconds, saving valuable time and boosting productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
