"use client";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > (document.getElementById("hero")?.offsetHeight || 0));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Project", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md text-gray-700"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <a className="flex-shrink-0 cursor-pointer" href="/" >
          <Image
            src="/logo.png"
            alt="Logo"
            width={130}
            height={40}
            className={`object-contain transition-all duration-500 ${
              scrolled ? "" : "filter brightness-0 invert"
            }`}
            priority
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition-colors ${
                  scrolled ? "text-gray-700 hover:text-orange-500" : "text-white hover:text-orange-300"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
{menuOpen && (
  <ul className="md:hidden px-6 py-4 space-y-4 shadow-md bg-white text-black">
    {navLinks.map((link) => (
      <li key={link.name}>
        <a
          href={link.href}
          className="block font-medium text-gray-700 hover:text-orange-500 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
)}

    </nav>
  );
}
