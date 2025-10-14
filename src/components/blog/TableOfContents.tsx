"use client";

import { useEffect, useRef, useState } from "react";

type Heading = { id: string; text: string; level: number };

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const article = document.querySelector("article[data-post-content]");
    if (!article) return;

    const nodes = article.querySelectorAll("h2, h3");
    const list: Heading[] = Array.from(nodes).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: Number(el.tagName.replace("H", "")),
    }));
    setHeadings(list);
  }, []);

  if (!headings.length) return null;

  return (
    <nav
      ref={containerRef}
      aria-label="Spis treści"
      className="mb-8 rounded-lg border border-[var(--brand-rose)]/20
                 bg-[var(--brand-beige)]/70 dark:bg-[var(--brand-beige)]/10
                 p-4 text-sm"
    >
      <p className="mb-2 font-semibold text-[var(--brand-green)]">
        Spis treści
      </p>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${h.id}`}
              className="text-[var(--brand-rose)] hover:underline"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
