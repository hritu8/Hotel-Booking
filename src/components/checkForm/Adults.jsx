import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Adults = ({
  adults,
  setAdults,
  isAdultsDropdownOpen,
  setIsAdultsDropdownOpen,
  adultsRef,
}) => {
  return (
    <div className="relative" ref={adultsRef}>
      <div
        onClick={() => setIsAdultsDropdownOpen(!isAdultsDropdownOpen)}
        className="flex justify-between items-center border border-gray-300 p-2 rounded-md cursor-pointer hover:shadow-md"
      >
        <span className="text-gray-500">
          {adults} Adult{adults > 1 ? "s" : ""}
        </span>
        <FaChevronDown className="text-gray-500 ml-2" />
      </div>

      {isAdultsDropdownOpen && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md p-3 w-full">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setAdults((prev) => Math.max(prev - 1, 1))}
              className="text-gray-500 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition duration-200 hover:bg-gray-100"
              disabled={adults === 1}
            >
              <span className="text-lg">-</span>
            </button>
            <span className="mx-4 text-gray-700 font-semibold">{adults}</span>
            <button
              onClick={() => setAdults((prev) => prev + 1)}
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

export default Adults;
