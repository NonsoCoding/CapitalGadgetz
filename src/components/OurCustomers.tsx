"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const OurCustomers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];
  const prevTestimonialData = testimonials[currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1];
  const nextTestimonialData = testimonials[currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl lg:text-4xl font-bold text-gray-900 mb-2">Our Customers Says</h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 z-10 bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Left Preview Card */}
          <div className="hidden lg:block opacity-30 transform scale-75 -mr-8 z-0">
            <div className="bg-white rounded-2xl p-6 shadow-md w-80 text-center">
              <div className="text-6xl text-gray-300 mb-4">
                <p>{`"`}</p>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">{prevTestimonialData.text}</p>
              <div className="mt-4">
                <img
                  src={prevTestimonialData.image}
                  alt={prevTestimonialData.name}
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                />
                <h4 className="font-semibold text-gray-800">{prevTestimonialData.name}</h4>
              </div>
            </div>
          </div>

          {/* Main Testimonial Card */}
          <div className="z-20 mx-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl w-96 text-center relative">
              <div className="text-8xl text-blue-400 mb-4 absolute -top-4 left-4">
                <p>{`"`}</p>
              </div>
              <div className="text-8xl text-blue-400 mb-4 absolute -bottom-4 right-4 rotate-180"><p>{`"`}</p></div>
              
              {/* Profile Image */}
              <div className="mb-6">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-blue-100"
                />
              </div>
              
              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {currentTestimonial.name}
              </h3>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed text-base">
                {currentTestimonial.text}
              </p>
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="hidden lg:block opacity-30 transform scale-75 -ml-8 z-0">
            <div className="bg-white rounded-2xl p-6 shadow-md w-80 text-center">
              <div className="text-6xl text-gray-300 mb-4">
                <p>{`"`}</p>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">{nextTestimonialData.text}</p>
              <div className="mt-4">
                <img
                  src={nextTestimonialData.image}
                  alt={nextTestimonialData.name}
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                />
                <h4 className="font-semibold text-gray-800">{nextTestimonialData.name}</h4>
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 z-10 bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;