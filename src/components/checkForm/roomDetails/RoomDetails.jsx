import React from "react";

const RoomDetails = () => {
  return (
    <div className="room-details">
      <div className="image-gallery">
        {/* Add sliding image gallery logic here */}
        <img src="/path-to-image" alt="Room" />
      </div>
      <div className="room-description mt-4">
        <h1 className="text-3xl font-bold">Luxury Suite Room Details</h1>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea placeat
          eos sed voluptas unde veniam eligendi a...
        </p>
      </div>
    </div>
  );
};

export default RoomDetails;
