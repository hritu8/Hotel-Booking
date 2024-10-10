import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Kids = ({ kids, setKids, isKidsDropdownOpen, setIsKidsDropdownOpen }) => {
  return (
    <div className="relative kids-dropdown">
      <div
        onClick={() => setIsKidsDropdownOpen(!isKidsDropdownOpen)}
        className="flex justify-between items-center border border-gray-300 p-2 rounded-md cursor-pointer hover:shadow-md"
      >
        <span className="text-gray-500">
          {kids} Kid{kids > 1 ? "s" : ""}
        </span>
        <FaChevronDown className="text-gray-500 ml-2" />
      </div>

      {isKidsDropdownOpen && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md p-3 w-full">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setKids((prev) => Math.max(prev - 1, 0))}
              className="text-gray-500 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition duration-200 hover:bg-gray-100"
              disabled={kids === 0}
            >
              <span className="text-lg">-</span>
            </button>
            <span className="mx-4 text-gray-700 font-semibold">{kids}</span>
            <button
              onClick={() => setKids((prev) => prev + 1)}
              className="text-gray-500 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition duration-200 hover:bg-gray-100"
            >
              <span className="text-lg">+</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kids;
