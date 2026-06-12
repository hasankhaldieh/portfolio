import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hasan-khaldieh.vercel.app"),
  title: {
    default: "Hasan Khaldieh | Software Engineer",
    template: "%s | Hasan Khaldieh",
  },
  description:
    "Portfolio of Hasan Khaldieh, a full-stack developer focused on React, Next.js, Nest.js, Express.js, Node.js, APIs, and modern web applications.",
  keywords: [
    "Hasan Khaldieh",
    "Software Engineer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Lebanon",
  ],
  authors: [{ name: "Hasan Khaldieh" }],
  creator: "Hasan Khaldieh",
  openGraph: {
    type: "website",
    title: "Hasan Khaldieh | Software Engineer",
    description:
      "Full-stack developer building reliable, responsive, and user-focused web applications.",
    url: "/",
    siteName: "Hasan Khaldieh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasan Khaldieh | Full-Stack Developer",
    description:
      "Full-stack developer building reliable, responsive, and user-focused web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-ink-950 font-sans text-slate-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
