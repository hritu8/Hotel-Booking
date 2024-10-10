import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          ADINA HOTEL & SPA
        </div>
        <ul className="flex space-x-6 text-lg text-gray-600">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Rooms</li>
          <li className="hover:text-black cursor-pointer">Restaurant</li>
          <li className="hover:text-black cursor-pointer">Spa</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
