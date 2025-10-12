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

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-2 rounded-md transition
                 bg-[var(--brand-rose)] text-white
                 hover:opacity-90
                 dark:bg-[var(--brand-beige)] dark:text-[var(--brand-green)]"
      aria-pressed={dark}
      title={dark ? "Jasny motyw" : "Ciemny motyw"}
    >
      {dark ? "☀️ Jasny" : "🌙 Ciemny"}
    </button>
  );
}
