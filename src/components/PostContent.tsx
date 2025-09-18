"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../lib/types";
import { FaArrowLeft } from "react-icons/fa";

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
            src={`http://localhost:1337${imageUrl}`}
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
        className="prose max-w-none"
      >
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </motion.article>
    </>
  );
}
