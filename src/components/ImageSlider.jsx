import React, { useState, useEffect } from "react";
import { sliderImages } from "../constant/sliderImages";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px]">
      <img
        src={sliderImages[currentImage].image}
        alt="Hotel"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
        <h1 className="text-4xl text-white font-bold mb-4">
          {sliderImages[currentImage].text}
        </h1>
        <button className="bg-white text-black py-2 px-6 rounded-full shadow-md hover:bg-gray-200">
          Our Rooms
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
