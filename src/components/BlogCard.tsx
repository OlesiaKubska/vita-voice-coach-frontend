"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image?: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
  image,
}: BlogCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-(--brand-green) via-(--brand-sage) to-(--brand-rose)/60 animate-pulse"></div>

      <div className="relative border border-(--brand-rose)/30 rounded-lg p-6 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition transform">
        {image && (
          <div className="relative w-full h-48 mb-4">
            <Image
              src={`http://localhost:1337${image}`}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover rounded-md"
            />
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-3 text-(--brand-green)">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          {new Date(date).toLocaleDateString("pl-PL")}
        </p>
        <p className="text-(--brand-sage) mb-4">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-(--brand-rose) font-medium hover:underline"
        >
          Czytaj więcej <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
