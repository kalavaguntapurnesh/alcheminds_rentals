import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage1 from "../assets/hero1.webp";

const Hero = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-3">
 
      <div className="lg:col-span-2 p-8 flex flex-col justify-center bg-white/80"> 
        <h1 className="lg:text-[52px] text-[35px] font-mono text-start text-blue-900 leading-tight">
          Feel good about the way
           you manage your rentals  
          with Rentals. landlord software 
       
        </h1>

        <p className="lg:text-[28px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
          Find tenants, view credit history, sign leases, and collect rent on any device,
          with tools built specifically for DIY landlords.
        </p>

        <div className="text-start lg:text-[27px] text-[20px] mt-8">
          Already a member?{" "}
          <span className="underline text-blue-900">
            <Link to={"/login"}>Sign in here.</Link>
          </span>
        </div>
      </div>

     
      <div className="w-full h-full flex items-center justify-center lg:col-span-1">
        <img
          src={HeroImage1}
          alt="Hero"
          className="w-full h-[70%] object-cover rounded-lg" 
        />
      </div>
    </div>
  );
};

export default Hero;
