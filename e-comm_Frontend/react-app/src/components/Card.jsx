import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ category, images }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/product'); 
  };
  return (
    <div onClick={handleCardClick} className="max-w-md bg-white border border-white-200 rounded-lg shadow p-6">
      <div className="mb-4" >
        <h5 className="text-lg font-semibold">{category}</h5>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center ">
            <img
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              className="w-full h-40 object-contain rounded"
            />
            <p className="mt-2 text-sm text-gray-600">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
