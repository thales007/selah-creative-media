import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Selah Creative Media creates content for the web and publishes children's books, including ABCs of GIS by Timothy Hales.";

export const metadata: Metadata = {
  title: "Selah Creative Media",
  description: DESCRIPTION,
  openGraph: {
    title: "Selah Creative Media",
    description: DESCRIPTION,
    url: "https://selahcreativemedia.com",
    siteName: "Selah Creative Media",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Selah Creative Media",
    description: DESCRIPTION,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2JTRQGWV5H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2JTRQGWV5H');
          `}
        </Script>
      </body>
    </html>
  );
}
