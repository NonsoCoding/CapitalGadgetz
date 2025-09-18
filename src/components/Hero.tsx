const Hero = () => {
  return (
    <section className="mt-15 md:mt-10 lg:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[85%] mx-auto items-center">
        <div className="w-full flex flex-col gap-8">
          <div className="w-full gap-6 flex flex-col">
            <p className="text-5xl font-bold">
              Introducing Our Top Pick of the Week
            </p>
            <p>
              Behold the TechFit Pro Smartwatch, the ultimate companion for
              modern living.
            </p>
          </div>
          <button className="bg-[#3498DB] px-6 py-3 w-50 rounded-md text-white">
            Learn More
          </button>
        </div>
        <div className="w-full">
          <img className="w-full" src="./WatchHero.png" alt="Watch" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
