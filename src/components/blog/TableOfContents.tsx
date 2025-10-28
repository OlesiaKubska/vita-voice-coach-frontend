"use client";

import { useEffect, useRef, useState } from "react";

type Heading = { id: string; text: string; level: number };

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const articleSelector = "article[data-post-content]";

  useEffect(() => {
    const article = document.querySelector<HTMLElement>(articleSelector);
    if (!article) return;

    const ensureIds = (els: HTMLElement[]) => {
      const used = new Set<string>();
      els.forEach((el) => {
        if (!el.id) {
          const base: string = slugify(el.textContent || "section");
          let candidate = base || "section";
          let i = 1;
          while (used.has(candidate) || document.getElementById(candidate)) {
            candidate = `${base}-${i++}`;
          }
          el.id = candidate;
          used.add(candidate);
        }
      });
    };

    const collect = () => {
      const nodes = Array.from(article.querySelectorAll<HTMLElement>("h2, h3"));
      ensureIds(nodes);
      const list: Heading[] = nodes.map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: Number(el.tagName.replace("H", "")),
      }));
      setHeadings(list);
    };

    collect();

    const mo = new MutationObserver(() => collect());
    mo.observe(article, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    if (!headings.length) return;
    const article = document.querySelector(articleSelector);
    if (!article) return;

    observerRef.current?.disconnect();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id") || "";
          if (entry.isIntersecting) setActiveId(id);
        });
      },
      {
        rootMargin: "-100px 0px -70% 0px",
        threshold: [0, 1],
      }
    );
    observerRef.current = io;

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 88;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Spis treści"
      className="mb-8 rounded-lg border border-[var(--brand-rose)]/20
                 bg-[var(--brand-beige)]/70 dark:bg-[var(--brand-beige)]/10
                 p-4 text-sm"
    >
      <p className="mb-2 font-semibold text-[var(--brand-green)]">
        Spis treści
      </p>
      <ul className="space-y-2">
        {headings.map((h) => {
          const isActive = h.id === activeId;
          return (
            <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
              <a
                href={`#${h.id}`}
                onClick={(e) => handleClick(e, h.id)}
                aria-current={isActive ? "true" : undefined}
                className={`hover:underline ${
                  isActive
                    ? "text-[var(--brand-rose)] font-semibold"
                    : "text-[var(--brand-rose)]/90"
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
