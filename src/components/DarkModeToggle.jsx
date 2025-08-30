"use client";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false); // default false until mounted
  const [mounted, setMounted] = useState(false);

  // Run only on client
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
    setMounted(true); // component is now safe to render
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setDark((prev) => {
      const newTheme = !prev ? "dark" : "light";
      localStorage.setItem("theme", newTheme);

      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return !prev;
    });
  };

  // Avoid hydration mismatch
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-yellow-300 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Toggle Dark Mode"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
