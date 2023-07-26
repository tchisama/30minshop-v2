// HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-bold mb-6">Lorem Ipsum</h1>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium">
              Call to Action
            </button>
          </div>
          <div className="order-1  md:order-2">
            <img
              className="w-full h-auto rounded-lg p-8"
              src="https://cdn.pixabay.com/photo/2018/03/15/13/52/earth-3228308_1280.png"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;