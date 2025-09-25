"use client";
import { motion } from "framer-motion";

export default function Slogan() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center py-3 bg-white/60 backdrop-blur-sm shadow-md"
    >
      <h2
        className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text
        bg-gradient-to-r from-[var(--brand-rose)] via-[var(--brand-sage)] to-[var(--brand-green)]
        animate-gradient-x italic tracking-wide"
      >
        Twój głos jest Twoją siłą
      </h2>
    </motion.div>
  );
}
