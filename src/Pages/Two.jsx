import React from 'react';
import { FaBroom, FaClock } from 'react-icons/fa'; // Importing icons from react-icons

const Two = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-lg text-blue-600 font-semibold">Maid For You</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">A Cleaner Place Is a Safer Place</h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ipsam!
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Professional Cleaning */}
        <div className="flex items-start space-x-4 p-6 bg-white shadow-lg rounded-lg">
          {/* Icon */}
          <div className="text-blue-500 text-4xl">
            <FaBroom />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Professional Cleaning</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, magni!
            </p>
          </div>
        </div>

        {/* Fast and Efficient */}
        <div className="flex items-start space-x-4 p-6 bg-white shadow-lg rounded-lg">
          {/* Icon */}
          <div className="text-green-500 text-4xl">
            <FaClock />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Fast And Efficient</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, similique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
