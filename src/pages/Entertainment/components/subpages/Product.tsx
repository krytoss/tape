import React from "react";

type ProductProps = {
  title: string;
  description: string[];
  image: string;
};

const Product: React.FC<ProductProps> = ({ title, description, image }) => {
  return (
	/*
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
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
	*/
	<div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
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