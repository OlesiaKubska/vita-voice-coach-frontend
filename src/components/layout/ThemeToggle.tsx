"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const has = document.documentElement.classList.contains("dark");
    setDark(has);
  }, []);

  if (!mounted) return null;

  const toggle = (next: boolean) => {
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.cookie = `theme=${
      next ? "dark" : "light"
    }; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <button
      onClick={() => {
        const next = !dark;
        setDark(next);
        toggle(next);
      }}
      className="px-3 py-2 rounded-md transition
                 bg-[var(--brand-rose)] text-white
                 hover:opacity-90
                 dark:bg-[var(--brand-beige)] dark:text-[var(--brand-green)]"
      aria-pressed={dark}
    >
      {dark ? "☀️ Jasny" : "🌙 Ciemny"}
    </button>
  );
}
