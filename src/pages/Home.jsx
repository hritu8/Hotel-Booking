import React from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import CheckForm from "../components/checkForm/CheckForm";
import RoomCard from "../components/RoomCards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <CheckForm />
      {/* Room Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
        <RoomCard
          price={400}
          imageSrc="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          roomType="Double Deluxe"
        />
        <RoomCard
          price={500}
          imageSrc="https://example.com/room-image-2.jpg"
          roomType="Suite"
        />
        <RoomCard
          price={600}
          imageSrc="https://example.com/room-image-3.jpg"
          roomType="Luxury Room"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
