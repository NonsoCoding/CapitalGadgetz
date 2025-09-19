"use client";

import { motion } from "framer-motion";
import { CarIcon, Package, ShieldCheck, Headphones } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto w-[90%] lg:w-[80%] flex flex-col gap-16">
        
        {/* Heading */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto text-center max-w-2xl flex flex-col gap-6"
        >
          <p className="font-bold text-2xl lg:text-3xl">
            ABOUT Capital<span className="text-[#3498DB]">Gadgetz</span>
          </p>
          <p className="text-gray-600 leading-relaxed">
            At CapitalGadgetz, we bring you the latest and greatest in tech.
            Our curated collection of gadgets combines quality, innovation, and
            value — all backed by excellent customer service. We aim to make
            your shopping experience simple, fast, and reliable.
          </p>

          {/* Owner Picture */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 mt-6"
          >
            <img
              src="./CEO.jpg" // replace with actual image path
              alt="Owner"
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
            <p className="font-semibold text-lg text-gray-800">
              Obi Ifeanyi Kasimir
            </p>
            <p className="text-sm text-gray-500">Founder & CEO</p>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <CarIcon className="h-8 w-8 text-white" />,
              title: "Fast Delivery",
              desc: "Quick and reliable shipping, so you get your gadgets when you need them — with real-time tracking every step of the way.",
            },
            {
              icon: <Package className="h-8 w-8 text-white" />,
              title: "Quality Products",
              desc: "We handpick only top-quality electronics and accessories that are durable, innovative, and worth your investment.",
            },
            {
              icon: <ShieldCheck className="h-8 w-8 text-white" />,
              title: "Secure Shopping",
              desc: "Shop with confidence — our secure checkout and trusted payment methods keep your information safe.",
            },
            {
              icon: <Headphones className="h-8 w-8 text-white" />,
              title: "24/7 Support",
              desc: "Our friendly support team is always ready to assist you — before, during, and after your purchase.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col gap-4 text-center"
            >
              <div className="h-16 w-16 mx-auto rounded-xl bg-[#3498DB] flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
