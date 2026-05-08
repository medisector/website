import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import PageLayout from "@/components/PageLayout";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MediSector - Krankenfahrten",
    template: "%s • MediSector - Krankenfahrten",
  },
  description:
    "Medizinische Krankentransfere aus Euskirchen. Wir bringen Sie Deutschland weit zu Ihrem Ziel und begleiten Sie Ihrer Gesundheit entsprechend. " +
    "Bei jede Krankenfahrt werden Sie von dem richtigen Profi begleitet, " +
    "der zu Ihrem individuellen Gesundheitszustand passt und Sie angemessen versorgen kann.",
  keywords: [
    "MediSector",
    "Krankenfahrten",
    "Krankentransfer",
    "Euskirchen",
    "Gesundheit",
  ],
  icons: {
    icon: '/images/favicon.png',
  },

  authors: [{ name: "Max Mustermann", url: "https://www.meine-website.de" }],
  creator: "Max Mustermann",
  publisher: "Meine Website",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        suppressHydrationWarning
        className={`bg-[#FCFCFC] ${inter.className} lg:overflow-hidden`}
      >
        <Header />
        <PageLayout>{children}</PageLayout>
        <Script
          src="https://widget.accessgo.de/accessGoWidget.js"
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
