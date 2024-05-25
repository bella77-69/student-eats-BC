import React from "react";
import logo from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <img 
           src={logo}
          alt="Hero Image" 
          className="mx-auto mb-8 w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Student Eats BC!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your go-to resource for affordable and nutritious food options.
        </p>
        <div className="relative max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Search for resources, recipes, or tips..." 
            className="w-full p-4 pr-12 text-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor" 
              className="w-6 h-6 text-gray-600"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

     
   
