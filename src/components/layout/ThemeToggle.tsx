"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const has = document.documentElement.classList.contains("dark");
    setDark(has);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const applyTheme = (next: boolean) => {
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.cookie = `theme=${
      next ? "dark" : "light"
    }; Path=/; Max-Age=31536000; SameSite=Lax${
      location.protocol === "https:" ? "; Secure" : ""
    }`;
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={() => applyTheme(!dark)}
      aria-pressed={dark}
      aria-label={dark ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
      title={dark ? "Jasny" : "Ciemny"}
      className="flex items-center justify-center w-10 h-10 rounded-md transition
                 bg-[var(--brand-rose)] text-white hover:opacity-90
                 dark:bg-[var(--brand-beige)] dark:text-[var(--brand-green)]"
    >
      {dark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
