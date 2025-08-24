"use client";

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-md hover:shadow-xl transition bg-gradient-to-br from-indigo-50 to-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
