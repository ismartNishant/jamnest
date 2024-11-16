import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import {  Titillium_Web} from "next/font/google";

import { Providers } from "./providers";


const titillium_Web = Titillium_Web({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "900"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.globalkartel.com"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/site.webmanifest",
  title: {
    default: "JamNest",
    template: "%s - JamNest"
  },
  twitter: {
    card: "summary_large_image",
    title: "JamNest." ,
    description: "At JamNest, we are dedicated to shaping the future of brands in an ever-evolving landscape",
    siteId: '1467726470533754880',
    creator: 'Trantrawave',
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 650
      }
    ]
  },
  category: "Marketing And entertainment",
  description: "At JamNest., we are dedicated to shaping the future of brands in an ever-evolving landscape",
  keywords: "JamNest, brands, marketing",
  openGraph: {
    title: {
      default: "JamNest",
      template: "%s - JamNest"
    },

    description: "At JamNest., we are dedicated to shaping the future of brands in an ever-evolving landscape",
    type: "website",
    url: "https://www.globalkartel.com",
    siteName: "JamNest",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 650
      }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={titillium_Web.className}
      lang="en"
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={clsx("min-h-screen bg-background  antialiased")}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
