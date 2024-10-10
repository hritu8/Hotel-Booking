import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-6 shadow-bottom">
      {" "}
      {/* Custom shadow class */}
      <div className="max-w-7xl mx-auto text-center pt-28">
        {/* Testimonials Section */}
        <div className="mb-10 px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            "Very Neat and clean Pods, very friendly staff behaviour, the
            washroom are hygienic and always had Hot water in them. I would
            highly recommend going and staying in these Japanese pods instead of
            staying in any hotel. It's really easy to approach as it's at a
            walking distance from Metro station."
          </p>
          <p className="text-gray-500 mt-4">- Alice Johnson, Paris, France</p>
        </div>
      </div>
      {/* Full-Width Newsletter Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-full mx-auto px-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Get the latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] px-4 py-3 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0 sm:mr-4"
            />
            <button
              type="submit"
              className="w-[100px] sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
