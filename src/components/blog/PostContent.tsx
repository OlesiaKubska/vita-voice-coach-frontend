"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";
import { FaArrowLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { pickImageUrl, formatDate, makeAbsolute } from "@/lib/utils";
import TableOfContents from "@/components/blog/TableOfContents";

export default function PostContent({ post }: { post: Post }) {
  const attrs = post;
  const coverUrl = pickImageUrl(attrs.coverImage, attrs.title);
  const html = attrs.content ?? "";

  return (
    <>
      <div className="sticky top-0 backdrop-blur-sm py-3 z-50 mb-4">
        <Link
          href="/blog"
          aria-label="Wróć do bloga"
          className="inline-flex items-center text-[var(--brand-rose)] font-medium hover:underline"
        >
          <FaArrowLeft className="mr-2" /> Wróć do bloga
        </Link>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-3 text-[var(--brand-green)]"
      >
        {attrs.title}
      </motion.h1>

      <div className="text-sm text-[var(--brand-sage)]/90 mb-6">
        <p>Opublikowano: {formatDate(attrs.publishedAt)}</p>
        <p>Ostatnia aktualizacja: {formatDate(attrs.updatedAt)}</p>
      </div>

      {coverUrl?.url && (
        <div className="relative w-full h-56 md:h-[28rem] lg:h-[32rem] mb-6">
          <Image
            src={coverUrl.url}
            alt={coverUrl.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
            loading="lazy"
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <TableOfContents />

      <motion.article
        data-post-content
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
            rehypeRaw,
            rehypeSanitize,
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

            a: ({ href = "", children }) => {
              const url = String(href);
              const isExternal = /^https?:\/\//i.test(url);
              return isExternal ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ) : (
                <Link href={url}>{children}</Link>
              );
            },
          }}
        >
          {html}
        </ReactMarkdown>
      </motion.article>
    </>
  );
}
