import React from "react";

type Props = {
  title: string;
  image: string;
  description: string;
  className?: string;
  height?: string | number; // Pridanie výšky ako prop
};

const ImageWithDescription: React.FC<Props> = ({
  title,
  image,
  description,
  className = "",
  height = "200px",
}) => (
  <div
    className={`relative group overflow-hidden rounded-md shadow-lg inline-block ${className}`}
    style={{ height }}
  >
    <div className="absolute inset-0">
      <img
        src={image}
        alt={description}
        title={title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="absolute bottom-0 left-0 right-0 bg-brand text-white text-center py-2 z-10">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>

    <div
      className="absolute inset-0 bg-brand text-white flex items-center justify-center text-center p-4 opacity-0 
        group-hover:opacity-100 transition-opacity duration-300 z-20"
    >
      <p className="text-md font-semibold">{description}</p>
    </div>
  </div>
);

export default ImageWithDescription;