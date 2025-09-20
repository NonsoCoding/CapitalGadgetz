"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const HooksSection = () => {
  return (
    <section className="mt-15 md:mt-10 lg:mt-0 flex flex-col gap-10 overflow-x-hidden">
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[85%] mx-auto items-center gap-6">
        {/* Text Side */}
        <motion.div
          className="w-full flex flex-col gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full gap-6 flex flex-col">
            <p className="text-2xl lg:text-5xl font-bold">
              Get your next must-have Gadget
            </p>
            <p className="w-full max-w-[550px] text-gray-600 leading-relaxed">
              Collect the innovation you love. Explore our curated selection of
              high-tech wonders, designed to elevate your daily life and inspire
              your passions.
            </p>
          </div>
          <Link
           href={"https://wa.me/2349110379619"}
              target="_blank"
              rel="noopener noreferrer"
          >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3498DB] px-6 py-3 w-50 rounded-md text-white"
          >
            Learn More
          </motion.button>
          </Link>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img className="w-full" src="./Headphone.png" alt="Headphone" />
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-2 w-[85%] mx-auto items-center gap-6">
        {/* Image Side */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img className="w-full" src="./Airpods.png" alt="Airpods" />
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="w-full flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full gap-6 flex flex-col">
            <p className="text-2xl lg:text-5xl font-bold">
              Discover exclusive offers
            </p>
            <p className="w-full text-gray-600 leading-relaxed max-w-[550px]">{`
              Take advantage of our limited-time offers and enjoy discounts of
              up to 30% off. Don't miss out – shop now and elevate your tech
              game today!
`}</p>
          </div>
          <Link 
           href={"https://wa.me/2349110379619"}
              target="_blank"
              rel="noopener noreferrer"
          >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3498DB] px-6 py-3 w-50 rounded-md text-white"
          >
            Learn More
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HooksSection;
