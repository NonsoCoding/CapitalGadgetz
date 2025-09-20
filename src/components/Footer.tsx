"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  Facebook,
  Instagram,
  LocationEdit,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { db } from "./settings/FirebaseSettings";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Footer = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "feedbacks"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
      setFormData({name: "", email: "", message: ""})
    } catch (error) {
      console.error("Error submitting feedback", error);
    } finally {
      setLoading(false);
    }
  }
  
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
            <div>
            <div className="flex gap-6 items-center">
              <Phone />
              <div>
                 <p className="container text-[14px]">Call or contact me on WhatsApp</p>
              <Link 
              href={"https://wa.me/2349110379619"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3498DB] font-bold hover:border-b-2 border-[#3498DB]"
              >
              +234 911 037 9619
              </Link>
              </div>
            </div>
            </div>
            <div className="flex gap-6">
              <Mail />
              <Link
              href={"mailto:capitalgadgetz@gmail.com"}
              className="text-[#3498DB] font-bold hover:border-b-2 border-[#3498DB]"
              >capitalgadgetz@gmail.com</Link>
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
          {submitted && (
            <p className="text-[#3498DB] font-bold"> ✅ Thanks for your feedback!!!</p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
             type="text"
             name="name"
             placeholder="Enter name"
             value={formData.name}
             onChange={handleChange}
             required
             className="border text-[16px] px-3 py-2 rounded-sm w-full border-gray-400 shadow-md"
            />
            <input
             type="email"
             name="email"
             placeholder="Enter email"
             value={formData.email}
             onChange={handleChange}
             required
             className="border text-[16px] px-3 py-2 rounded-sm w-full border-gray-400 shadow-md"
            />
            <textarea
              name="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border text-[16px] px-3 py-2 rounded-sm w-full border-gray-400 shadow-md h-24 resize-none"
            />
         <button
              type="submit"
              disabled={loading}
              className="bg-[#3498DB] w-40 h-10 rounded-sm flex items-center justify-center text-white hover:bg-[#217dbb] transition"
            >
              {loading ? "Submitting..." : "Send Feedback"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
