"use client";

import { motion } from "framer-motion";

const BestSellers = () => {
  const cards = [
    {
      img: "./watch1.jpg",
      title: "Smart Watch",
      desc: "Stylish & feature-packed",
    },
    {
      img: "./laptop1.jpg",
      title: "Laptop",
      desc: "Powerful & reliable",
    },
    {
      img: "./smartphone.jpg",
      title: "Smartphone",
      desc: "Fast & sleek",
    },
  ];

  return (
    <section id="product" className="py-16 bg-gray-50 overflow-x-hidden">
      <div className="w-[85%] mx-auto flex flex-col items-center gap-12">
        {/* Section Heading */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <p className="text-2xl lg:text-4xl font-bold">Best Sellers</p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Explore our most-loved gadgets — carefully selected for their
            outstanding quality, style, and performance.
          </p>
        </motion.div>

        {/* Best Seller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <p className="text-white font-semibold text-lg">{card.title}</p>
                <p className="text-gray-200 text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
