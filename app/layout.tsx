import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usman Asad | Python & AI Engineer",
  description:
    "Senior Python & AI Engineer — FastAPI, LLM systems, PostgreSQL, Kubernetes. Lead Developer at ZeusLock.ai, an AI-native Data Loss Prevention platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <meta name="google-site-verification" content="ggWKJgOz1lENFu8n__fDmACwmEPdtGkYRaUOgDXjpvQ" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="https://4ai.chat/embed.js?siteId=NEFJQ0hBVEtFWTEwNQ==&app=web"></script>
      </body>

    </html>
  );
}
