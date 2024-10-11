import React from "react";
import Navbar from "../components/Navbar";
import BookingForm from "../components/roomDetails/BookingForm";
import RoomFacilities from "../components/roomDetails/RoomFacilites";
import Rules from "../components/roomDetails/Rules";

const RoomPage = () => {
  return (
    <div>
      <Navbar />

      {/* Room Details Section */}
      <section className="container mx-auto mt-12 flex flex-col lg:flex-row gap-8 px-6 lg:px-16 mb-4">
        {/* Left Side: Room Info */}

        <div className="w-full lg:w-3/5 space-y-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Luxury Suite Room Details
          </h1>
          <div className="relative">
            <img
              src={
                "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Room"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-5">
            Room Facilites
          </h1>
          {/* Room Details */}
          <div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem dolores omnis fugiat nesciunt facere? Sequi dolor, cum
              deserunt nihil dignissimos porro ratione veniam facilis. Debitis
              deleniti esse optio aperiam! Nam neque dolores pariatur! Eum
              dolorum illo voluptatum quasi reprehenderit ullam illum id
              architecto ducimus, possimus, nemo omnis, quas eveniet. Doloribus.
            </p>
          </div>

          {/* Room Facilities */}
          <RoomFacilities />
        </div>

        {/* Right Side: Booking Form and Rules */}
        <div className="w-full lg:w-2/6 space-y-10 mt-10 ">
          {/* Booking Form */}
          <BookingForm />

          {/* Rules Section */}
          <Rules />
        </div>
      </section>
    </div>
  );
};

export default RoomPage;
