import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Titillium_Web } from "next/font/google";

import { Providers } from "./providers";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const titillium_Web = Titillium_Web({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "JamNest",
    template: `%s - JamNest`,
  },
  description: "JamNest",
  icons: {
    icon: "/favicon.ico",
  },
};

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
      <head />
      <body
        className={clsx("min-h-screen bg-background font-sans antialiased")}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Header />
          <main className="container mx-auto flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
