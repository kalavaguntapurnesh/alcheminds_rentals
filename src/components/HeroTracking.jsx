import React from 'react'
import { Link } from 'react-router-dom';
import tracking from "../assets/tracking.webp";
const HeroTracking = () => {
    return (
        <div className='w-full h-screen'>
             <div className="w-full h-screen grid lg:grid-cols-2 pb-10">
                <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                    <img
                    src={tracking}
                    alt="Hero"
                    className="w-full h-[60%] object-cover rounded-lg" // Use full width and height with rounded corners
                    />
                </div>

                <div className=" p-8 flex flex-col justify-center bg-white/80">
                    <h1 className="lg:text-[40px] text-[35px] font-mono text-start font-semibold leading-tight text-blue-900">
                        Simple maintenance tracking
                    </h1>
            
                    <p className=" flex flex-col gap-[10px] lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                        
                       <div>Track maintenance issues and associated costs through your dashboard. See what tickets have been resolved and how much each repair costs through our Accounting dashboard.</div> 

                      
                    </p>
            
                    <div className="text-start lg:text-[27px] text-[20px] mt-8">
                    
                    <span className="underline text-blue-900">
                        <Link to={"#"}>Learn more about maintenance tracking.</Link>
                    </span>
                    </div>
                </div>          
        </div>
        </div>
      );
}

export default HeroTracking