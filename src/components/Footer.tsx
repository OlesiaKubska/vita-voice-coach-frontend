"use client";
import Link from "next/link";
import Image from "next/image";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-(--brand-green) text-white text-center py-8 mt-10">
      <Link href="/" className="flex items-center space-x-2 ml-10">
        <Image
          src="/images/voice-logo.png"
          alt="Vita Voice Logo"
          width={80}
          height={80}
          className="rounded"
        />
        <span className="text-xl font-bold text-(--brand-red) hidden sm:inline">
          Vita Voice
        </span>
      </Link>

      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-(--brand-red) transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-(--brand-red) transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-(--brand-red) transition"
        >
          <FaYoutube size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-(--brand-beige)/80">
        © {new Date().getFullYear()} Vita Kociubajło – Trenerka Głosu i Śpiewu
      </p>
    </footer>
  );
}
