"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-(--brand-beige) shadow-md fixed w-full z-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.png"
          alt="Vita Voice Logo"
          width={40}
          height={40}
          className="rounded"
        />
        <span className="text-xl font-bold text-(--brand-green) hidden sm:inline">
          Vita Voice
        </span>
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 text-(--brand-green) font-medium">
        <Link href="/" className="hover:text-(--brand-red) transition">
          Strona główna
        </Link>
        <Link href="/about" className="hover:text-(--brand-red) transition">
          O mnie
        </Link>
        <Link href="/services" className="hover:text-(--brand-red) transition">
          Usługi
        </Link>
        <Link href="/blog" className="hover:text-(--brand-red) transition">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-(--brand-red) transition">
          Kontakt
        </Link>
      </div>

      {/* Mobile button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-(--brand-green)"></span>
        <span className="block w-6 h-0.5 bg-(--brand-green)"></span>
        <span className="block w-6 h-0.5 bg-(--brand-green)"></span>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-(--brand-beige) shadow-md flex flex-col items-center space-y-4 py-6 md:hidden text-(--brand-green) font-medium">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-(--brand-red) transition"
          >
            Strona główna
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-(--brand-red) transition"
          >
            O mnie
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="hover:text-(--brand-red) transition"
          >
            Usługi
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="hover:text-(--brand-red) transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-(--brand-red) transition"
          >
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
}
