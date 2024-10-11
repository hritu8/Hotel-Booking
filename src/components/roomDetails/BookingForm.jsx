import React from "react";
import CheckForm from "../checkForm/CheckForm";

const BookingForm = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-sm mx-auto lg:max-w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Your Reservation
      </h2>

      {/* Custom Layout for CheckForm */}
      <div className="space-y-6">
        <CheckForm customLayout />
      </div>

      <button className="bg-yellow-600 text-white w-full py-3 mt-6 rounded-lg hover:bg-yellow-500">
        Book Now for $320
      </button>
    </div>
  );
};

export default BookingForm;
