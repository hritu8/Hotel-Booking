import React from "react";
import { FaWifi, FaCoffee, FaBath } from "react-icons/fa"; // Add other icons

const RoomFacilities = () => {
  return (
    <div className="room-facilities grid grid-cols-3 gap-4 mt-4">
      <div className="facility-item flex items-center">
        <FaWifi className="text-xl text-gray-700" />
        <span className="ml-2">Wifi</span>
      </div>
      <div className="facility-item flex items-center">
        <FaCoffee className="text-xl text-gray-700" />
        <span className="ml-2">Coffee</span>
      </div>
      <div className="facility-item flex items-center">
        <FaBath className="text-xl text-gray-700" />
        <span className="ml-2">Bath</span>
      </div>
      {/* Add other facility icons similarly */}
    </div>
  );
};

export default RoomFacilities;
