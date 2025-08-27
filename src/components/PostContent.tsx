"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Post } from "../lib/types";

export default function PostContent({ post }: { post: Post }) {
  const imageUrl =
    typeof post.coverImage === "string"
      ? post.coverImage
      : post.coverImage?.url;

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        {post.title}
      </motion.h1>

      {imageUrl && (
        <Image
          src={`http://localhost:1337${imageUrl}`}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
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
