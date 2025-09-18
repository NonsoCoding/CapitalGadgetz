"use client";
import Link from "next/link";

const Navbar = ({}) => {
  return (
    <section className="bg-white shadow">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img className="h-7 w-7 object-contain" src="./Vector.png" alt="" />
          <p className="font-bold text-xl">
            Capital<span className="text-[#3498DB]">Gadget</span>
          </p>
        </div>
        <nav className="flex">
          <Link
            className="hover:bg-[#3498DB] py-6 px-10 hover:text-white"
            href={"./"}
          >
            Home
          </Link>
          <Link
            className="hover:bg-[#3498DB] py-6 px-10 hover:text-white"
            href={"./"}
          >
            About
          </Link>
          <Link
            className="hover:bg-[#3498DB] py-6 px-10 hover:text-white"
            href={"./"}
          >
            Product
          </Link>
          <Link
            className="hover:bg-[#3498DB] py-6 px-10 hover:text-white"
            href={"./"}
          >
            Contact
          </Link>
        </nav>
        <Link
          className="bg-[#3498DB] px-8 py-3 text-white rounded-xl"
          href={"./"}
        >
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
