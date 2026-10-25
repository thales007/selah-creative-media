import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selah Creative Media",
  description:
    "Selah Creative Media is an independent imprint publishing books by Timothy Hales, including ABCs of GIS.",
  openGraph: {
    title: "Selah Creative Media",
    description:
      "An independent imprint publishing books that help young readers discover the world.",
    url: "https://selahcreativemedia.com",
    siteName: "Selah Creative Media",
    type: "website",
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
    <html lang="en" className={geist.variable}>
      <body>
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
