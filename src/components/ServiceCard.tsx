"use client";

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="relative group perspective">
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-(--brand-green)/40 via-(--brand-sage)/40 to-(--brand-rose)/40 animate-pulse"></div>

      <div
        className="relative border border-(--brand-rose)/30 rounded-lg p-6 shadow-md bg-white/80 backdrop-blur-sm 
                   hover:shadow-2xl transition-transform transform-gpu 
                   group-hover:scale-105 group-hover:-rotate-1"
      >
        <h2 className="text-xl font-bold mb-2 text-(--brand-green)">{title}</h2>
        <p className="text-(--brand-sage)">{description}</p>
      </div>
    </div>
  );
}
