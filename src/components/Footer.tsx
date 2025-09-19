"use client";

import {
  Facebook,
  Instagram,
  LocationEdit,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="contact" className="bg-[#BBDEFB]">
      <div className="w-[85%] py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 lg:gap-0">
        <div className="gap-8 flex flex-col">
          <p className="text-xl font-semibold">Contact Us</p>
          <div className="flex gap-4 flex-col text-[14px]">
            <div className="flex gap-6 text-[14px]">
              <LocationEdit />
              <p>Banex Plaza, Opposite Zenith bank, Wuse, Abuja, Nigeria</p>
            </div>
            <div className="flex gap-6">
              <Phone />
              <p>+234 911 037 9619</p>
            </div>
            <div className="flex gap-6">
              <Mail />
              <p>capitalgadgetz@gmail.com</p>
            </div>
          </div>
        </div>
        {/* <div className="gap-8 flex flex-col">
          <p className="text-xl font-semibold">Quick Links</p>
          <div className="flex flex-col text-[14px]">
            <Link
              className="pb-2 hover:border-b-1 border-[#3498DB] w-fit"
              href={"./"}
            >
              Home
            </Link>
            <Link
              className="py-2 hover:border-b-1 border-[#3498DB] w-fit"
              href={"./"}
            >
              About
            </Link>
            <Link
              className="py-2 hover:border-b-1 border-[#3498DB] w-fit"
              href={"./"}
            >
              Product
            </Link>
            <Link
              className="py-2 hover:border-b-1 border-[#3498DB] w-fit"
              href={"./"}
            >
              Contact
            </Link>
          </div>
        </div> */}
        <div className="gap-14 flex flex-col lg:mx-auto">
          <div className="flex flex-col gap-8">
            <p className="text-xl font-semibold">Social Handles</p>
            <div className="flex gap-3">
              <Instagram className="animate-spin" />
              <Twitter className="animate-spin"/>
              <Facebook className="animate-spin"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="font-semibold text-xl">
            Give us feedback from your purchase
          </p>
          <p className="text-[14px]">
            Buy a gadget today to be the first to receive latest news about our products.
          </p>
          <input type="email" />
          <button className="bg-[#3498DB] w-40 h-10 rounded-sm">
            <p className="text-white">Subscribe</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
