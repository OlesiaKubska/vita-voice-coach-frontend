"use client";

import BlogCard from "../../components/BlogCard";
import { getPosts } from "../../lib/api";
import { Post } from "../../lib/types";
import { motion } from "framer-motion";

import React, { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);

  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Blog
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <BlogCard
              title={post.title}
              excerpt={
                post.content ? post.content.substring(0, 100) + "..." : ""
              }
              slug={post.slug}
              date={post.publishedAt}
              image={
                typeof post.coverImage === "string"
                  ? post.coverImage
                  : post.coverImage?.url
              }
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
