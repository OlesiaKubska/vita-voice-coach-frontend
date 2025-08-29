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
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-(--brand-green) via-(--brand-sage) to-(--brand-red)/60 animate-pulse"></div>

      <div className="relative border border-(--brand-sage)/30 rounded-lg p-6 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition transform">
        <h2 className="text-2xl font-semibold mb-3 text-(--brand-green)">
          {title}
        </h2>
        <p className="text-(--brand-sage) mb-4">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-(--brand-red) font-medium hover:underline"
        >
          Czytaj więcej →
        </Link>
      </div>
    </div>
  );
}
