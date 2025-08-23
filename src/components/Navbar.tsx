"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-10">
      <h1 className="text-xl font-bold">Vita Kociubajło</h1>
      <div className="space-x-6">
        <Link href="/">Strona główna</Link>
        <Link href="/services">Usługi</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Kontakt</Link>
      </div>
    </nav>
  );
}
