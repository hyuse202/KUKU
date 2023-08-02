import "./globals.css";
import { Roboto } from "next/font/google";
import { Metadata } from "next";
import Header from "@/partials/Header";
import { Footer } from "@/partials/Footer";
const APP_NAME = "Kuku Manga";
const APP_DEFAULT_TITLE = "Kuku Manga | Read manga where you want";
const APP_DESCRIPTION = "Read your favourite manga with ease and no ads";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  manifest: "/manifest.json",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
};

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <html data-theme="night" lang="en" className={roboto.className}>
      <body>
        <Header />
        <div className="min-h-screen block">{children}</div>
        <Footer />
      </body>
    </html>
  </>
  );
}
