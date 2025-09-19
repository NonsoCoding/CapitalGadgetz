"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {name: "Home", href: "#home"}, 
    {name: "About", href: "#about"}, 
    {name: "Product", href: "#product"}, 
    {name: "Contact", href: "#contact"}, 
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-[92%] mx-auto flex justify-between items-center py-3 lg:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="h-7 w-7 object-contain"
            src="./Vector.png"
            alt="Logo"
          />
          <p className="font-bold text-lg tracking-tight">
            Capital
            <span className="text-[#3498DB]">Gadget</span>
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="uppercase text-[11px] font-medium text-gray-700 hover:text-[#3498DB] transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3498DB] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="ml-4 bg-[#3498DB] px-5 py-2 rounded-lg text-sm font-medium text-white shadow hover:bg-[#2980B9] transition-colors duration-200">
            Contact Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-999 text-[#3498DB] p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav (Slide-in) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center pt-16 gap-2">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="w-[20%] h-8 text-center uppercase text-[11px] hover:text-[#3498DB] transition-colors duration-200 group py-2 text-gray-700 font-medium relative"
            >
              {item.name}
               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3498DB] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="mt-3 bg-[#3498DB] px-6 py-2 rounded-sm text-sm font-medium text-white shadow hover:bg-[#2980B9] transition-colors duration-200">
            Contact Me
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;

