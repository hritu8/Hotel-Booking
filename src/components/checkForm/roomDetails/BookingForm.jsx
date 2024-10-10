import React from "react";
import CheckIn from "../CheckIn";
import CheckOut from "../CheckOut";
import Adults from "../Adults";
import Kids from "../Kids";

const BookingForm = () => {
  return (
    <div className="booking-form bg-gray-100 p-4 rounded-lg">
      <CheckIn />
      <CheckOut />
      <Adults />
      <Kids />
      <button className="mt-4 w-full bg-black text-white p-2 rounded-md">
        Book Now
      </button>
    </div>
  );
};

export default BookingForm;
