"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";
import { getPosts } from "@/lib/api";
import type { Post } from "@/lib/types";
import { pickImageUrl, makeExcerptFromHtml } from "@/lib/utils";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((fetchedPosts) =>
        setPosts(Array.isArray(fetchedPosts) ? fetchedPosts : [])
      )
      .catch((err) => {
        console.error("Błąd podczas pobierania postów:", err);
        setPosts([]);
      })
      .finally(() => setLoading(false));
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

      {loading && (
        <p className="text-center text-[var(--brand-green)]">
          Ładowanie wpisów…
        </p>
      )}

      {!loading && !posts.length && (
        <p className="text-center text-[var(--brand-green)]">
          Jeszcze brak wpisów — wkrótce się pojawią!
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch auto-rows-fr">
        {posts.map((post, index) => {
          const image = pickImageUrl(post.coverImage ?? null, post.title);
          const excerpt = makeExcerptFromHtml(post.content ?? "", 160);

          return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <BlogCard
                title={post.title ?? "Bez tytułu"}
                excerpt={excerpt}
                slug={post.slug ?? "#"}
                date={post.publishedAt ?? ""}
                image={image?.url ?? ""}
              />
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
