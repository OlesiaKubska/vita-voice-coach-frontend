"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-(--brand-green) text-(--brand-beige) py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <Link href="/" className="flex flex-col items-center md:items-start">
          <div className="relative w-20 h-20 mb-4">
            <Image
              src="/images/branding/voice-logo.png"
              alt="Vita Voice Logo"
              fill
              sizes="(max-width: 768px) 60px, 80px"
              className="object-contain rounded"
              priority
            />
          </div>
          <span className="text-xl font-bold text-(--brand-rose)">
            Vita Voice
          </span>
        </Link>

        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            className="hover:text-(--brand-rose) transition-colors duration-300"
          >
            Strona główna
          </Link>
          <Link
            href="/about"
            className="hover:text-(--brand-rose) transition-colors duration-300"
          >
            O mnie
          </Link>
          <Link
            href="/services"
            className="hover:text-(--brand-rose) transition-colors duration-300"
          >
            Oferta
          </Link>
          <Link
            href="/blog"
            className="hover:text-(--brand-rose) transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-(--brand-rose) transition-colors duration-300"
          >
            Kontakt
          </Link>
        </div>

        <div className="flex justify-center md:justify-end space-x-6">
          {[
            {
              href: "https://www.facebook.com/vita.kociubajlo.vitaVoice",
              icon: FaFacebookF,
            },
            {
              href: "https://www.instagram.com/akademia_dobrego_glosu/?utm_source=qr&igsh=d3AxZTE5OG91MTBk#",
              icon: FaInstagram,
            },
            {
              href: "https://www.youtube.com/vita.kociubajlo.vitaVoice",
              icon: FaYoutube,
            },
            {
              href: "https://www.linkedin.com/in/vita-kociubajlo",
              icon: FaLinkedinIn,
            },
          ].map(({ href, icon: Icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-(--brand-rose) transition-colors duration-300"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>

      <p className="text-center text-sm mt-6 text-(--brand-beige)/70">
        © {new Date().getFullYear()} Vita Kociubajło – Trenerka Głosu i Śpiewu
      </p>
    </footer>
  );
}
