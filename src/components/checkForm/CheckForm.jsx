import React, { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Adults from "./Adults";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import Kids from "./Kids";

const CheckForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [isCheckInCalendarOpen, setIsCheckInCalendarOpen] = useState(false);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isCheckOutCalendarOpen, setIsCheckOutCalendarOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [isAdultsDropdownOpen, setIsAdultsDropdownOpen] = useState(false);
  const [isKidsDropdownOpen, setIsKidsDropdownOpen] = useState(false);

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const adultsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (checkInRef.current && !checkInRef.current.contains(event.target)) {
        setIsCheckInCalendarOpen(false);
      }
      if (checkOutRef.current && !checkOutRef.current.contains(event.target)) {
        setIsCheckOutCalendarOpen(false);
      }
      if (adultsRef.current && !adultsRef.current.contains(event.target)) {
        setIsAdultsDropdownOpen(false);
      }
      if (isKidsDropdownOpen && !event.target.closest(".kids-dropdown")) {
        setIsKidsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isKidsDropdownOpen]);

  return (
    <div className="bg-white p-6 mt-8 shadow-lg rounded-lg mx-auto w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Check In */}
        <CheckIn
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          isCheckInCalendarOpen={isCheckInCalendarOpen}
          setIsCheckInCalendarOpen={setIsCheckInCalendarOpen}
          checkInRef={checkInRef}
        />

        {/* Check Out */}
        <CheckOut
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
          isCheckOutCalendarOpen={isCheckOutCalendarOpen}
          setIsCheckOutCalendarOpen={setIsCheckOutCalendarOpen}
          checkOutRef={checkOutRef}
        />

        {/* Adults */}
        <Adults
          adults={adults}
          setAdults={setAdults}
          isAdultsDropdownOpen={isAdultsDropdownOpen}
          setIsAdultsDropdownOpen={setIsAdultsDropdownOpen}
          adultsRef={adultsRef}
        />

        {/* Kids */}
        <Kids
          kids={kids}
          setKids={setKids}
          isKidsDropdownOpen={isKidsDropdownOpen}
          setIsKidsDropdownOpen={setIsKidsDropdownOpen}
        />

        <button className="bg-black text-white rounded-md p-2 hover:shadow-lg transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default CheckForm;
