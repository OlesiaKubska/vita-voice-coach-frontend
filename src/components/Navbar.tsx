"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-10">
      {/* Logo */}
      <h1 className="text-xl font-bold">Vita Kociubajło</h1>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="/">Strona główna</Link>
        <Link href="/about">O mnie</Link>
        <Link href="/services">Usługi</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Kontakt</Link>
      </div>

      {/* Mobile button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Strona główna
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            O mnie
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Usługi
          </Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
}
