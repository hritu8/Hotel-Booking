import React from "react";

const RoomCard = ({ price, imageSrc, roomType }) => {
  return (
    <div className="relative overflow-hidden shadow-lg cursor-pointer group h-72">
      <img
        src={imageSrc}
        alt={roomType}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-80 text-white">
        <h3 className="text-md sm:text-lg font-semibold">{roomType}</h3>
        <span className="text-sm text-gray-300">${price} / night</span>
      </div>
    </div>
  );
};

export default RoomCard;
