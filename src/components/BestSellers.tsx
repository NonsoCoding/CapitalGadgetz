"use client";

const BestSellers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[85%] mx-auto flex flex-col items-center gap-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl">
          <p className="text-2xl lg:text-4xl font-bold">Best Sellers</p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Explore our most-loved gadgets — carefully selected for their
            outstanding quality, style, and performance.
          </p>
        </div>

        {/* Best Seller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Card 1 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
            <img
              src="./watch1.jpg"
              alt="Smart Watch"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
              <p className="text-white font-semibold text-lg">Smart Watch</p>
              <p className="text-gray-200 text-sm">Stylish & feature-packed</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
            <img
              src="./laptop1.jpg"
              alt="Laptop"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
              <p className="text-white font-semibold text-lg">Laptop</p>
              <p className="text-gray-200 text-sm">Powerful & reliable</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
            <img
              src="./smartphone.jpg"
              alt="Smartphone"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
              <p className="text-white font-semibold text-lg">Smartphone</p>
              <p className="text-gray-200 text-sm">Fast & sleek</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;

