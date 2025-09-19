"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="mt-15 md:mt-10 lg:mt-0 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[85%] mx-auto items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col gap-8"
        >
          <div className="w-full gap-6 flex flex-col">
            <motion.p
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl font-bold leading-tight"
            >
              Your One-Stop Shop for{" "}
              <span className="text-[#3498DB]">Gadgets</span>
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-600 leading-relaxed text-lg"
            >
              At <span className="font-semibold">CapitalGadgetz</span>, we
              provide the latest phones, laptops, and gadgets — combining
              quality, style, and value all in one place.
            </motion.p>
          </div>

          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-[#3498DB] px-6 py-3 w-fit rounded-md text-white font-medium shadow-md hover:bg-blue-600 transition"
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <img
            className="w-full drop-shadow-lg"
            src="./WatchHero.png"
            alt="Featured gadget"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
