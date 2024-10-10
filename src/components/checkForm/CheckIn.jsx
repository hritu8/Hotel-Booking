import React from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

const CheckIn = ({
  checkInDate,
  setCheckInDate,
  isCheckInCalendarOpen,
  setIsCheckInCalendarOpen,
  checkInRef,
}) => {
  return (
    <div className="relative" ref={checkInRef}>
      <div
        onClick={() => setIsCheckInCalendarOpen(!isCheckInCalendarOpen)}
        className="flex justify-between items-center border border-gray-300 p-2 rounded-md cursor-pointer hover:shadow-md"
      >
        <span className="text-gray-500">Check In</span>
        <FaCalendarAlt className="text-gray-500 ml-2" />
      </div>
      {isCheckInCalendarOpen && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md p-3">
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default CheckIn;
