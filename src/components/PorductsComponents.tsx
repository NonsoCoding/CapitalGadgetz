import React from "react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  alt: string;
}

const ProductCard = ({ title, price, image, alt }: ProductCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      {/* Image */}
      <div className="relative h-96 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex justify-between items-end">
            <h3 className="text-white text-2xl md:text-3xl font-light tracking-tight">
              {title}
            </h3>
            <p className="text-white text-2xl md:text-3xl font-light">
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
