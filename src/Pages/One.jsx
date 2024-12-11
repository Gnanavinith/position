import React from 'react';
import HomeImage from "../assets/homeimage.jpg";
import House from "../assets/House1.jpg";
import Two from './Two';
import Three from './Three';

const One = () => {
  return (
    <div className="h-screen flex">
      {/* Left Half with Image and Overlay */}
      <div className="w-1/2 h-full relative">
        <img
          src={House}
          alt="Home"
          className="w-full h-full object-cover"/>
       
      </div>

      {/* Right Half with Content and Transform */}
      <div className="w-1/2 h-full flex justify-center items-center bg-blue-300 relative transform -translate-x-0 z-10 mt-12">
        <Two />
      </div>

      <div className='absolute'>
        <Three/>
      </div>
    </div>
  );
};

export default One;
