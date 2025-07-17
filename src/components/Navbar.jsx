import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Education", to: "education" },
    { label: "Achievements", to: "achievements" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-indigo-900/80 backdrop-blur text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider">Muqaddas</h1>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-yellow-300 transition text-sm md:text-base"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 text-yellow-300 hover:text-yellow-500 transition text-xl"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;