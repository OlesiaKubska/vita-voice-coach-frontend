"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Service } from "../lib/types";
import { FaArrowLeft } from "react-icons/fa";

export default function ServiceContent({ service }: { service: Service }) {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-(--brand-rose) mb-6 hover:underline"
      >
        <FaArrowLeft /> Powrót do oferty
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 text-(--brand-green)"
      >
        {service.title}
      </motion.h1>

      {service.image && (
        <Image
          src={service.image}
          alt={service.title}
          width={800}
          height={400}
          className="rounded-lg mb-6 object-cover"
        />
      )}

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="prose max-w-none text-(--brand-sage)"
      >
        <div dangerouslySetInnerHTML={{ __html: service.description }} />
      </motion.article>
    </main>
  );
}
