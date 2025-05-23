import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import type { Metadata } from "next";
import { Merriweather_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { ORIGIN_URL } from "@/utils/helpers";

const fontSans = FontSans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Quick Sheet",
  description:
    "Quick Sheet - AI-powered document summarization for professionals. Transform lengthy documents into actionable insights in seconds, saving valuable time and boosting productivity.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    images: [
      {
        url: "/openGraphImage.png",
      },
    ],
  },
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={fontSans.variable}>
        <body className="font-sans antialiased">
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
