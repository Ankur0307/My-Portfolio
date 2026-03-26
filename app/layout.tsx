import type { Metadata } from "next";
import { Inter, Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankur Gupta | Portfolio",
  description:
    "Data Analytics & Software Development enthusiast. I build data-driven applications and scalable web solutions.",
  keywords: [
    "Ankur Gupta",
    "Portfolio",
    "Data Analytics",
    "Software Developer",
    "Python",
    "Web Development",
  ],
  authors: [{ name: "Ankur Gupta" }],
  openGraph: {
    title: "Ankur Gupta | Portfolio",
    description:
      "Data Analytics & Software Development enthusiast. I build data-driven applications and scalable web solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${firaCode.variable} font-sans antialiased bg-navy-900 text-navy-100`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
