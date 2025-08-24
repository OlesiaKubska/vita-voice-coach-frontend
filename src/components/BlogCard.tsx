"use client";

import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, slug }: BlogCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-lg transition bg-white">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="text-indigo-600 font-medium hover:underline"
      >
        Czytaj więcej →
      </Link>
    </div>
  );
}
