"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg 
                   border border-(--brand-rose) bg-(--brand-beige) text-(--brand-rose) 
                   hover:bg-(--brand-rose) hover:text-(--brand-beige) transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="h-6 w-6" />
      </motion.button>
    )
  );
}
