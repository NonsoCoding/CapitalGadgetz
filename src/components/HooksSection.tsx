"use client";

const HooksSection = ({
}) => {
    return (
        <section className="mt-15 md:mt-10 lg:mt-0 flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[85%] mx-auto items-center gap-6">
                <div className="w-full flex flex-col gap-8">
                  <div className="w-full gap-6 flex flex-col">
                    <p className="text-2xl lg:text-5xl font-bold">
                      Get your next must-have Gadget
                    </p>
                    <p className="w-full max-w-[550px] text-gray-600 leading-relaxed">
                      Collect the innovation you love. 
Explore our curated selection of high-tech wonders, designed to elevate your daily life and inspire your passions.
                    </p>
                  </div>
                  <button className="bg-[#3498DB] px-6 py-3 w-50 rounded-md text-white">
                    Learn More
                  </button>
                </div>
                <div className="w-full">
                  <img className="w-full" src="./Headphone.png" alt="Watch" />
                </div>
              </div>
              <div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-2 w-[85%] mx-auto items-center gap-6">
                <div className="w-full">
                  <img className="w-full" src="./Airpods.png" alt="Watch" />
                </div>
                <div className="w-full flex flex-col gap-8">
                  <div className="w-full gap-6 flex flex-col">
                    <p className="text-2xl lg:text-5xl font-bold">
                      Discover exclusive offers
                    </p>
                    <p className="w-full text-gray-600 leading-relaxed max-w-[550px]">{`
                      Take advantage of our limited-time offers and enjoy discounts of up to 30% off. Don't miss out – shop now and elevate your tech game today!
                    `}
                    </p>
                  </div>
                  <button className="bg-[#3498DB] px-6 py-3 w-50 rounded-md text-white">
                    Learn More
                  </button>
                </div>
              </div>
            </section>
    )
}

export default HooksSection;