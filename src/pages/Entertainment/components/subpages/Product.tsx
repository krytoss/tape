import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

type ProductProps = {
  title: string;
  description: string[];
  image: string | string[];
};

const Product: React.FC<ProductProps> = ({ title, description, image }) => {
  const images = Array.isArray(image) ? image : [image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = doprava, -1 = doľava
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const currentImageRef = useRef<HTMLDivElement>(null);
  const previousImageRef = useRef<HTMLDivElement>(null);
  const [previousIndex, setPreviousIndex] = useState(0);

  useEffect(() => {
    if (!isFirstLoad && images.length > 1 && currentImageRef.current && previousImageRef.current) {
      const timeline = gsap.timeline();

      // Animácia starého obrázka (posunutie preč)
      timeline.fromTo(
        previousImageRef.current,
        { x: "0%", opacity: 1 },
        { x: direction === 1 ? "-100%" : "100%", opacity: 0, duration: 0.5, ease: "power2.out" }
      );

      // Animácia nového obrázka (príchod z druhej strany)
      timeline.fromTo(
        currentImageRef.current,
        { x: direction === 1 ? "100%" : "-100%" },
        { x: "0%", duration: 0.5, ease: "power2.out" },
        "<"
      );
    }
  }, [currentIndex, direction, isFirstLoad, images.length]);

  const nextImage = () => {
    if (images.length > 1) {
      setDirection(1);
      setIsFirstLoad(false);
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 1) {
      setDirection(-1);
      setIsFirstLoad(false);
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const goToImage = (index: number) => {
    if (images.length > 1) {
      setDirection(index > currentIndex ? 1 : -1);
      setIsFirstLoad(false);
      setPreviousIndex(currentIndex);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Image slider */}
      <div className="relative w-full h-64 overflow-hidden">
        {images.length > 1 ? (
          <>
            {/* Predošlý obrázok */}
            <div
              ref={previousImageRef}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={images[previousIndex]}
                alt={title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Aktuálny obrázok */}
            <div
              ref={currentImageRef}
              className={`absolute inset-0 w-full h-full transition-opacity ${
                isFirstLoad ? "opacity-100" : ""
              }`}
            >
              <img
                src={images[currentIndex]}
                alt={title}
                className="w-full h-64 object-cover"
              />
            </div>
          </>
        ) : (
          <img
            src={images[0]}
            alt={title}
            className="w-full h-64 object-cover"
          />
        )}

        {/* Šípky na prepínanie */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute bg-transparent rounded-none border-0 border-gray-400 border-t-2 border-l-2 left-4 top-1/2 -translate-y-1/2 z-50 -rotate-45 p-0 w-4 h-4 flex items-center justify-center focus:outline-none hover:border-gray-700"
            />
            <button
              onClick={nextImage}
              className="absolute bg-transparent rounded-none border-0 border-gray-400 border-t-2 border-r-2 right-4 top-1/2 -translate-y-1/2 z-50 rotate-45 p-0 w-4 h-4 flex items-center justify-center focus:outline-none hover:border-gray-700"
            />
          </>
        )}

        {/* Dots navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-50">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 focus:outline-none p-0 border-0 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-400 scale-125" : "bg-gray-200 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <ul className="mt-2 text-gray-600 space-y-1">
          {description.map((line, index) => (
            <li key={index} className="text-sm">
              • {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;