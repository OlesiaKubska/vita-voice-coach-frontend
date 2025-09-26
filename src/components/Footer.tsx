"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-(--brand-green) text-(--brand-beige) py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
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

        <div className="flex flex-col items-center space-y-2 md:items-center">
          <Link
            href="/"
            className="hover:text-(--brand-rose) transition-colors"
          >
            Strona główna
          </Link>
          <Link
            href="/about"
            className="hover:text-(--brand-rose) transition-colors"
          >
            O mnie
          </Link>
          <Link
            href="/services"
            className="hover:text-(--brand-rose) transition-colors"
          >
            Oferta
          </Link>
          <Link
            href="/blog"
            className="hover:text-(--brand-rose) transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-(--brand-rose) transition-colors"
          >
            Kontakt
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-6">
            {[
              {
                href: "https://www.facebook.com/vita.kociubajlo.vitaVoice",
                icon: FaFacebookF,
                label: "Facebook",
              },
              {
                href: "https://www.instagram.com/akademia_dobrego_glosu",
                icon: FaInstagram,
                label: "Instagram",
              },
              {
                href: "https://www.youtube.com/vita.kociubajlo.vitaVoice",
                icon: FaYoutube,
                label: "YouTube",
              },
            ].map(({ href, icon: Icon, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-(--brand-rose) transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:vkociubajlo@gmail.com"
                className="hover:text-(--brand-rose) transition"
              >
                vkociubajlo@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              <a
                href="tel:+48517522820"
                className="hover:text-(--brand-rose) transition"
              >
                +48 517 522 820
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <a
                href="https://maps.app.goo.gl/m6YoKnzVkgY19QpL9"
                className="hover:text-(--brand-rose) transition"
              >
                Białystok, Polska
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-(--brand-beige)/20 mt-8 py-4 text-center text-sm flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6 gap-3">
        <div className="flex gap-6">
          <Link
            href="/polityka-prywatnosci"
            className="hover:text-(--brand-rose) transition"
          >
            Polityka Prywatności
          </Link>
          <Link
            href="/regulamin"
            className="hover:text-(--brand-rose) transition"
          >
            Regulamin
          </Link>
        </div>
        <p className="text-(--brand-beige)/70">
          © {new Date().getFullYear()} Vita Kociubajło – Trenerka Głosu i
          Pewności Siebie.
        </p>
      </div>
    </footer>
  );
}
