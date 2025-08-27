"use client";

import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, slug }: BlogCardProps) {
  return (
    <div className="relative group">
      {/* фонова хвиля */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-pulse"></div>

      {/* сама картка */}
      <div className="relative border rounded-lg p-6 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 transition transform">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-indigo-600 font-medium hover:underline"
        >
          Czytaj więcej →
        </Link>
      </div>
    </div>
  );
}
