import React from "react";

type Props = {
  title: string;
  image: string;
  description: string;
  className?: string;
};

const ImageWithDescription: React.FC<Props> = ({
  title,
  image,
  description,
  className = "",
}) => (
  <div
    className={`relative group overflow-hidden rounded-lg shadow-lg ${className}`}
  >
    <img
      src={image}
      alt={description}
      title={title}
      className="w-full h-auto object-cover"
    />

    <div className="bg-brand text-white text-center py-2">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>

    <div
      className="absolute inset-0 bg-brand text-white flex items-center justify-center text-center p-4 opacity-0 
        group-hover:opacity-100 transition-opacity duration-300"
    >
      <p className="text-md font-semibold">{description}</p>
    </div>
  </div>
);

export default ImageWithDescription;