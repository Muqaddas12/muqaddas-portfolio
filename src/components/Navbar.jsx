"use client"
import { useState, useEffect } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Achievements", to: "achievements" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActive(to);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold text-yellow-300" data-aos="fade-right">
          Muqaddas Malik
        </h1>
        <div className="hidden md:flex space-x-6" data-aos="fade-down">
          {navItems.map((item, idx) => (
            <ScrollLink
              key={idx}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onSetActive={handleSetActive}
              className={`cursor-pointer text-sm transition ${
                active === item.to ? "text-yellow-300" : "hover:text-yellow-300"
              }`}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
        <div className="md:hidden" data-aos="fade-left">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-800 px-6 py-4 space-y-4" data-aos="fade-down">
          {navItems.map((item, idx) => (
            <ScrollLink
              key={idx}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onSetActive={handleSetActive}
              className={`block text-sm cursor-pointer transition ${
                active === item.to ? "text-yellow-300" : "hover:text-yellow-300"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
