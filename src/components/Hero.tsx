"use client";

const Hero = () => {
  return (
    <section className="mt-15 md:mt-10 lg:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[85%] mx-auto items-center">
        {/* Left Content */}
        <div className="w-full flex flex-col gap-8">
          <div className="w-full gap-6 flex flex-col">
            <p className="text-4xl font-bold leading-tight">
              Your One-Stop Shop for <span className="text-[#3498DB]">Gadgets</span>
            </p>
           <p className="text-gray-600 leading-relaxed text-lg">
  At <span className="font-semibold">CapitalGadgetz</span>, we provide the latest
  phones, laptops, and gadgets — combining quality, style, and value all in one place.
</p>
          </div>
          <button className="bg-[#3498DB] px-6 py-3 w-fit rounded-md text-white font-medium shadow-md hover:bg-blue-600 transition">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img className="w-full" src="./WatchHero.png" alt="Featured gadget" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
