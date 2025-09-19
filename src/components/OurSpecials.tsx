


const OurSpecials = () => {
    return (
        <section className="w-[85%] py-15 flex flex-col mx-auto gap-10 overflow-x-hidden">
            <p className="font-bold text-4xl text-center">Our Specials</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="flex flex-col gap-8 mx-auto">
                    <img className="w-full lg:w-100" src="./watch1.jpg" alt="" />
                    <p>Experience unparalleled wireless 
                        freedom with AirPods – your perfect companion for immersive sound, 
                        seamless connectivity, and all-day comfort.</p>
                        <button className="bg-[#3498DB] h-10 flex rounded-sm justify-center w-50 items-center gap-5">
                            <p className="text-white">More Information</p>
                            <img className="h-4 mt-1" src="./vector-right.png" alt="" />
                        </button>
                </div>
                <div className="mx-auto">
                    <img className="h-full lg:h-165" src="./watch1.jpg" alt="" />
                </div>
                <div className="mx-auto grid grid-cols-1 items-center">
                    <img className="mx-auto h-80" src="./shopnow1.png" alt="" />
                    <img className="h-full lg:h-100" src="./watch1.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default OurSpecials;