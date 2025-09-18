"use client";

import { CarIcon } from "lucide-react";

const About = () => {
  return (
    <section>
      <div className="mx-auto w-[85%] flex flex-col gap-15">
        <div className="mx-auto w-[70%] items-center flex flex-col gap-10">
          <p className="font-bold text-4xl">
            ABOUT Capital<span className="text-[#3498DB]">Gadgetz</span>
          </p>
          <p className="text-center">
            At GadgetBazar, we're passionate about bringing you the latest and
            greatest in electronics and gadgets. With our curated selection of
            high-quality products and exceptional customer service, we strive to
            make your shopping experience enjoyable and hassle-free.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-[#BBDEFB] rounded-lg p-6 shadow-xl gap-6 flex flex-col">
            <div className="h-20 w-20 rounded-lg bg-[#3498DB] items-center flex justify-center">
              <CarIcon className="h-15 w-15" color="white" />
            </div>
            <div>
              <p>
                Offering expedited shipping options and ensuring timely delivery
                of orders, with tracking information available for customers.
              </p>
            </div>
          </div>
          <div className="bg-[#BBDEFB] rounded-lg p-6 shadow-xl gap-6 flex flex-col">
            <div className="h-20 w-20 rounded-lg bg-[#3498DB] items-center flex justify-center">
              <CarIcon className="h-15 w-15" color="white" />
            </div>
            <div>
              <p>
                Offering expedited shipping options and ensuring timely delivery
                of orders, with tracking information available for customers.
              </p>
            </div>
          </div>
          <div className="bg-[#BBDEFB] rounded-lg p-6 shadow-xl gap-6 flex flex-col">
            <div className="h-20 w-20 rounded-lg bg-[#3498DB] items-center flex justify-center">
              <CarIcon className="h-15 w-15" color="white" />
            </div>
            <div>
              <p>
                Offering expedited shipping options and ensuring timely delivery
                of orders, with tracking information available for customers.
              </p>
            </div>
          </div>
          <div className="bg-[#BBDEFB] rounded-lg p-6 shadow-xl gap-6 flex flex-col">
            <div className="h-20 w-20 rounded-lg bg-[#3498DB] items-center flex justify-center">
              <CarIcon className="h-15 w-15" color="white" />
            </div>
            <div>
              <p>
                Offering expedited shipping options and ensuring timely delivery
                of orders, with tracking information available for customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
