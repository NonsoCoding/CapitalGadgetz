"use client";

import { CarIcon, Package, ShieldCheck, Headphones } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto w-[90%] lg:w-[80%] flex flex-col gap-16">
        {/* Heading */}
        <div className="mx-auto text-center max-w-2xl flex flex-col gap-6">
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
          <div className="flex flex-col items-center gap-3 mt-6">
            <img
              src="./CEO.jpg" // replace with actual image path
              alt="Owner"
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
            <p className="font-semibold text-lg text-gray-800">
              Obi Ifeanyi Kasimir
            </p>
            <p className="text-sm text-gray-500">Founder & CEO</p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col gap-4 text-center">
            <div className="h-16 w-16 mx-auto rounded-xl bg-[#3498DB] flex items-center justify-center">
              <CarIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Fast Delivery
            </h3>
            <p className="text-sm text-gray-600">
              Quick and reliable shipping, so you get your gadgets when you need
              them — with real-time tracking every step of the way.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col gap-4 text-center">
            <div className="h-16 w-16 mx-auto rounded-xl bg-[#3498DB] flex items-center justify-center">
              <Package className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Quality Products
            </h3>
            <p className="text-sm text-gray-600">
              We handpick only top-quality electronics and accessories that are
              durable, innovative, and worth your investment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col gap-4 text-center">
            <div className="h-16 w-16 mx-auto rounded-xl bg-[#3498DB] flex items-center justify-center">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Secure Shopping
            </h3>
            <p className="text-sm text-gray-600">
              Shop with confidence — our secure checkout and trusted payment
              methods keep your information safe.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col gap-4 text-center">
            <div className="h-16 w-16 mx-auto rounded-xl bg-[#3498DB] flex items-center justify-center">
              <Headphones className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              24/7 Support
            </h3>
            <p className="text-sm text-gray-600">
              Our friendly support team is always ready to assist you — before,
              during, and after your purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
