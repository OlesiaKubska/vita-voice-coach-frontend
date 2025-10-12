import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slogan from "@/components/Slogan";
import ScrollToTop from "@/components/ScrollToTop";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vita Kociubajło – Trenerka głosu i śpiewu",
  description:
    "Lekcje śpiewu, rozwój głosu i przygotowanie do wystąpień publicznych. Pomagam kobietom i młodzieży rozwijać głos, pewność siebie i umiejętności komunikacyjne.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initTheme = `
    try {
      const saved = localStorage.getItem("theme");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const enableDark = saved ? saved === "dark" : systemDark;
      document.documentElement.classList.toggle("dark", enableDark);
    } catch (e) {}
  `;

  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: initTheme }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
              bg-[var(--background)] text-[var(--foreground)]
              transition-colors duration-300`}
      >
        <Slogan />
        <Navbar />
        <main className="">{children}</main>
        <ScrollToTop />
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
