import React from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

const CheckOut = ({
  checkOutDate,
  setCheckOutDate,
  isCheckOutCalendarOpen,
  setIsCheckOutCalendarOpen,
  checkOutRef,
}) => {
  return (
    <div className="relative" ref={checkOutRef}>
      <div
        onClick={() => setIsCheckOutCalendarOpen(!isCheckOutCalendarOpen)}
        className="flex justify-between items-center border border-gray-300 p-2 rounded-md cursor-pointer hover:shadow-md"
      >
        <span className="text-gray-500">Check Out</span>
        <FaCalendarAlt className="text-gray-500 ml-2" />
      </div>
      {isCheckOutCalendarOpen && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md p-3">
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default CheckOut;
