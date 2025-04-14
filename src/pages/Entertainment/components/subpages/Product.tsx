import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ImageModal from "../ImageModal";

type ProductProps = {
  title: string;
  shortDescription?: string;
  description?: (string | React.ReactNode)[];
  image: string | string[];
  setMaxHeight?: (height: number) => void;
  maxHeight?: number;
  onlyImage?: boolean;
};

const Product: React.FC<ProductProps> = ({ title, shortDescription, description, image, setMaxHeight, maxHeight, onlyImage = false }) => {
	const images = Array.isArray(image) ? image : [image];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const productRef = useRef<HTMLDivElement>(null);

	const currentImageRef = useRef<HTMLDivElement>(null);
	const previousImageRef = useRef<HTMLDivElement>(null);
	const [previousIndex, setPreviousIndex] = useState(0);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const openModal = (index: number) => {
		setActiveIndex(index);
		setIsModalOpen(true);
	};

	const nextImage = () => {
		setActiveIndex((prev) => (prev + 1) % images.length);
	};

	const prevImage = () => {
		setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
	};

  useEffect(() => {
    if (!isFirstLoad && images.length > 1 && currentImageRef.current && previousImageRef.current) {
      const timeline = gsap.timeline();

      timeline.fromTo(
        previousImageRef.current,
        { x: "0%", opacity: 1 },
        { x: direction === 1 ? "-100%" : "100%", opacity: 0, duration: 0.5, ease: "power2.out" }
      );

      timeline.fromTo(
        currentImageRef.current,
        { x: direction === 1 ? "100%" : "-100%" },
        { x: "0%", duration: 0.5, ease: "power2.out" },
        "<"
      );
    }
  }, [currentIndex, direction, isFirstLoad, images.length]);

  useEffect(() => {
    if (productRef.current && setMaxHeight) {
      const height = productRef.current.offsetHeight;
      setMaxHeight(height);
    }
  }, [ setMaxHeight ]);

  console.log(onlyImage)

  return (
    <div
      ref={productRef}
      className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
      style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
    >
		{
			onlyImage && (
				<div className="p-5">
					<h3 className="text-xl font-bold text-gray-900 text-center">{title}</h3>
				</div>
			)
		}

      <div className={`relative w-full ${onlyImage ? 'h-[calc(100%-5rem)]' : 'h-64'} overflow-hidden flex`}>
        {images.length > 1 ? (
          <>
            <div ref={previousImageRef} className="absolute inset-0 w-full h-full flex">
              <img src={images[previousIndex]} alt={title} className="max-w-full max-h-full m-auto" />
            </div>
            <div
              ref={currentImageRef}
              className={`absolute inset-0 w-full h-full flex transition-opacity ${isFirstLoad ? "opacity-100" : ""}`}
            >
              <img
			  	src={images[currentIndex]}
				alt={title}
				className="max-w-full max-h-full m-auto cursor-pointer"
				onClick={() => openModal(currentIndex)}
				/>
            </div>
          </>
        ) : (
          <img
		  	src={images[0]}
		  	alt={title}
		  	className="max-w-full h-full max-h-[400px] m-auto cursor-pointer"
		  	onClick={() => openModal(0)}
		  />
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={() => {
                setDirection(-1);
                setIsFirstLoad(false);
                setPreviousIndex(currentIndex);
                setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
              }}
              className="absolute bg-transparent rounded-none border-0 border-gray-400 border-t-2 border-l-2 left-4 top-1/2 -translate-y-1/2 z-50 -rotate-45 p-0 w-4 h-4 flex items-center justify-center focus:outline-none hover:border-gray-700"
            />
            <button
              onClick={() => {
                setDirection(1);
                setIsFirstLoad(false);
                setPreviousIndex(currentIndex);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
              }}
              className="absolute bg-transparent rounded-none border-0 border-gray-400 border-t-2 border-r-2 right-4 top-1/2 -translate-y-1/2 z-50 rotate-45 p-0 w-4 h-4 flex items-center justify-center focus:outline-none hover:border-gray-700"
            />
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-2 z-50 bg-black px-3 py-2 rounded-full bg-opacity-40">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setIsFirstLoad(false);
                  setPreviousIndex(currentIndex);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 focus:outline-none p-0 border-0 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-500 scale-125" : "bg-gray-200 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>

		{!onlyImage && (
			<div className="p-5">
			<h3 className="text-xl font-bold text-gray-900 text-center">{title}</h3>
			{shortDescription && <p className="text-gray-600 text-sm mt-2">{shortDescription}</p>}
			{
				description && <ul className="mt-2 text-gray-600 space-y-1 list-disc pl-2">
					{description.map((line, index) => (
						<li key={index} className="text-sm">
						{line}
						</li>
					))}
				</ul>
			}
		  </div>
		)}

	  {isModalOpen && (
		<ImageModal
			images={images}
			currentIndex={activeIndex}
			onClose={() => setIsModalOpen(false)}
			onPrev={prevImage}
			onNext={nextImage}
		/>
	  )}
    </div>
  );
};

export default Product;
