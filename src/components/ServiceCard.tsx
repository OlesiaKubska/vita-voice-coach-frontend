"use client";

// import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="relative group">
      {/* фонова хвиля */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-pulse"></div>

      {/* сама картка */}
      <div className="relative border rounded-lg p-6 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 transition transform">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
