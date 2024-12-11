import React from 'react';
import { FaBroom, FaWindowMaximize, FaBuilding } from 'react-icons/fa'; // Import icons
import image from "../assets/homeimage.jpg";

const Three = () => {
  return (
    <div>
      {/* Full-Screen Image Section with All Content */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={image}
          alt="A beautiful house"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          {/* Header Section */}
          <div className="text-center mb-10 px-4 md:px-0">
            <h1 className="text-5xl font-bold">Welcome to Our Cleaning Services</h1>
            <p className="text-lg mt-4 max-w-2xl">
              Providing professional cleaning for homes, windows, and offices. Let us make your space shine!
            </p>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 md:px-16">
            {/* Home Cleaning Service */}
            <div className="service-card bg-white p-6 shadow-lg text-center transition-transform duration-300 hover:scale-105">
              <div className="icon mb-4 text-blue-500 text-4xl">
                <FaBroom /> {/* Icon for Home Cleaning */}
              </div>
              <div className='text-start'>
                <h3 className="text-xl font-bold text-gray-800">Home Cleaning</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, placeat!
                </p>
              </div>
            </div>

            {/* Windows Cleaning Service */}
            <div className="service-card bg-white p-6 shadow-lg text-center transition-transform duration-300 hover:scale-105">
              <div className="icon mb-4 text-green-500 text-4xl">
                <FaWindowMaximize /> {/* Icon for Windows Cleaning */}
              </div>
              <div className='text-start'>
                <h3 className="text-xl font-bold text-gray-800">Windows Cleaning</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, placeat!
                </p>
              </div>
            </div>

            {/* Office Cleaning Service */}
            <div className="service-card bg-white p-6 shadow-lg text-center transition-transform duration-300 hover:scale-105">
              <div className="icon mb-4 text-red-500 text-4xl">
                <FaBuilding /> {/* Icon for Office Cleaning */}
              </div>
              <div className='text-start'>
                <h3 className="text-xl font-bold text-gray-800">Office Cleaning</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, placeat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
