"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../../lib/types";
import { FaArrowLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function makeAbsolute(url?: string) {
  if (!url) return "";
  return url.startsWith("http") ? url : `${API_URL}${url}`;
}

export default function PostContent({ post }: { post: Post }) {
  const imageUrl =
    typeof post.coverImage === "string"
      ? post.coverImage
      : post.coverImage?.url;

  return (
    <>
      <div className="sticky top-0 backdrop-blur-sm py-3 z-50 mb-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-(--brand-rose) font-medium hover:underline"
        >
          <FaArrowLeft className="mr-2" /> Wróć do bloga
        </Link>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        {post.title}
      </motion.h1>

      <div className="text-sm text-gray-500 mb-4">
        <p>
          Opublikowano: {new Date(post.publishedAt).toLocaleDateString("pl-PL")}
        </p>
        <p>
          Ostatnia aktualizacja:{" "}
          {new Date(post.updatedAt).toLocaleDateString("pl-PL")}
        </p>
      </div>

      {imageUrl && (
        <div className="relative w-full h-80 mb-6">
          <Image
            src={`${API_URL}${imageUrl}`}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="prose prose-neutral lg:prose-lg max-w-none"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          // TODO: Sanitize HTML if using raw HTML in markdown
          components={{
            img: ({ src = "", alt }) => (
              <Image
                src={makeAbsolute(String(src))}
                alt={alt ?? ""}
                width={1200}
                height={675}
                className="rounded-lg"
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
          {post.content}
        </ReactMarkdown>
      </motion.article>
    </>
  );
}
