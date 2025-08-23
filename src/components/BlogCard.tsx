interface Props {
  title: string;
  excerpt: string;
  slug: string;
}

import Link from "next/link";

export default function BlogCard({ title, excerpt, slug }: Props) {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="text-purple-600 font-medium">
        Czytaj więcej →
      </Link>
    </div>
  );
}
