"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Strona główna" },
    { href: "/about", label: "O mnie" },
    { href: "/services", label: "Oferta" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Kontakt" },
  ];

  const linkBase =
    "transition-colors duration-300 hover:text-[var(--brand-rose)]";
  const active =
    "text-[var(--brand-rose)] font-semibold border-b-2 border-[var(--brand-rose)] pb-1";

  return (
    <nav className="w-full flex justify-between items-center p-4 bg-[var(--brand-beige)] shadow-md z-50 transition-colors duration-300">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/branding/logo.png"
          alt="Vita Voice Logo"
          width={40}
          height={40}
          className="rounded"
          priority
        />
        <span className="text-xl font-bold text-[var(--brand-green)] hidden sm:inline">
          Vita Voice
        </span>
      </Link>

      <ThemeToggle />

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 text-[var(--brand-green)] font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${linkBase} ${pathname === link.href ? active : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-[var(--brand-green)]"></span>
        <span className="block w-6 h-0.5 bg-[var(--brand-green)]"></span>
        <span className="block w-6 h-0.5 bg-[var(--brand-green)]"></span>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute z-50 top-0 left-0 w-full bg-[var(--brand-beige)] shadow-md flex flex-col items-center space-y-4 py-6 md:hidden text-[var(--brand-green)] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${linkBase} ${pathname === link.href ? active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
