"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from 'swiper';
import { useEffect, useRef, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { db } from "./settings/FirebaseSettings";

const testimonials = [
  {
    id: 1,
    name: "JethaLal Gada",
    text: "Love my new Apple Airpods! It's sleek, packed with features, and has great battery life. Highly recommend!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    text: "Amazing product quality and exceptional customer service. The team went above and beyond to ensure my satisfaction!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b5de25a7?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Mike Chen",
    text: "Outstanding experience from start to finish. The product exceeded my expectations and arrived quickly!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Emily Davis",
    text: "Fantastic quality and great value for money. I've been using it for months and it still works perfectly!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt?: Timestamp | null;
}


const OurCustomers = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

   useEffect(() => {
    const q = query(collection(db, "feedbacks"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const feedbackData: Feedback[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Feedback, "id">),
      }));
      setFeedbacks(feedbackData);
    });

    return () => unsubscribe();
  }, []);

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl lg:text-4xl font-bold text-gray-900 mb-2">
            Our Customers Says
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
         <Swiper
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={feedbacks.length === 1 ? 1 : 3}
  centeredSlides={feedbacks.length === 1 ? false : true}
  loop={feedbacks.length > 1}   // 👈 disable loop if only 1
  navigation={false}
  pagination={{
    clickable: true,
    bulletClass:
      "swiper-pagination-bullet !bg-blue-400 !opacity-50",
    bulletActiveClass:
      "swiper-pagination-bullet-active !bg-blue-600 !opacity-100",
  }}
  autoplay={feedbacks.length > 1 ? { delay: 5000 } : false} // 👈 no autoplay if only 1
  className="overflow-hidden"
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
    640: { slidesPerView: feedbacks.length === 1 ? 1 : 1.5 },
    1024: { slidesPerView: feedbacks.length === 1 ? 1 : 2.5 },
    1280: { slidesPerView: feedbacks.length === 1 ? 1 : 3 },
  }}
>
            {feedbacks.map((fb) => (
              <SwiperSlide key={fb.id}>
                {({ isActive }) => (
                  <div 
                    className={`bg-white rounded-2xl p-6 md:p-6 lg:p-8 shadow-xl text-center relative transition-all duration-300 transform ${
                      isActive 
                        ? 'scale-100 opacity-100' 
                        : 'scale-90 opacity-60 blur-sm hover:opacity-80'
                    }`}
                  >
                    {/* Quotes */}
                    <div className="text-4xl md:text-6xl lg:text-8xl text-blue-400 mb-2 md:mb-4 absolute -top-1 md:-top-2 lg:-top-4 left-1 md:left-2 lg:left-4">
                      <p></p>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-8xl text-blue-400 mb-2 md:mb-4 absolute -bottom-1 md:-bottom-2 lg:-bottom-4 right-1 md:right-2 lg:right-4 rotate-180">
                      <p></p>
                    </div>

                    {/* Profile Image */}
                    <div className="mb-4 md:mb-6">
                     <img
  src={`https://api.dicebear.com/7.x/identicon/svg?seed=${fb.name}`}
  alt={fb.name}
  className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto object-cover border-2 md:border-4 border-blue-100"
/>
                    </div>

                    {/* Name */}
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                      {fb.name}
                    </h3>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm lg:text-base px-2">
                      {fb.message}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm lg:text-base px-2">
                      {fb.createdAt?.toDate().toLocaleDateString()}
                    </p>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-4">
            <button 
              onClick={goToPrev}
              className="group bg-white hover:bg-blue-50 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 border border-gray-200 hover:shadow-xl"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="group bg-white hover:bg-blue-50 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 border border-gray-200 hover:shadow-xl"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        .swiper-pagination {
          position: static !important;
          margin-top: 2rem;
        }
        
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          transform: scale(1.2) !important;
        }
      `}</style>
    </section>
  );
};

export default OurCustomers;