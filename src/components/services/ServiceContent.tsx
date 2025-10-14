"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Service } from "../../lib/types";
import { FaArrowLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { makeAbsolute } from "@/lib/utils";

export default function ServiceContent({ service }: { service: Service }) {
  const imageUrl =
    typeof service.image === "string" ? service.image : service.image?.url;
  const coverUrl = makeAbsolute(imageUrl);

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <div className="sticky top-0 backdrop-blur-sm py-3 z-50 mb-4">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[var(--brand-rose)] mb-6 hover:underline"
        >
          <FaArrowLeft /> Powrót do oferty
        </Link>
      </div>

      {coverUrl && (
        <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-96 mb-6">
          <Image
            src={coverUrl}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4 text-[var(--brand-green)]"
      >
        {service.title}
      </motion.h1>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="
          prose prose-brand lg:prose-lg max-w-none
          dark:prose-invert flow-headings
          leading-relaxed
        "
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
          ]}
          components={{
            img: ({ src = "", alt }) => (
              <Image
                src={makeAbsolute(String(src))}
                alt={alt ?? ""}
                width={1200}
                height={675}
                sizes="100vw"
                className="rounded-lg"
                loading="lazy"
              />
            ),
            a: ({ href = "", children }) => (
              <a
                href={makeAbsolute(href)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          }}
        >
          {service.description}
        </ReactMarkdown>
      </motion.article>
    </main>
  );
}
