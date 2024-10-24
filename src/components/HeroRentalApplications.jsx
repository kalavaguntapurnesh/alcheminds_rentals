import React from 'react'
import Hero3 from "../assets/HeroRentalApplications.webp"
import { Link } from 'react-router-dom';
const HeroRentalApplications = () => {
    return (
        <div className='w-full h-screen '>
             <div className="w-full h-screen grid lg:grid-cols-2 pb-10">
                <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                    <img
                    src={Hero3}
                    alt="Hero"
                    className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
                    />
                </div>

                <div className=" p-8 flex flex-col justify-center bg-white/80">
                    <h1 className="lg:text-[40px] text-[35px] font-mono text-start font-semibold leading-tight text-blue-900">
                        Screen interested renters with a rental application
                    </h1>
            
                    <p className=" flex flex-col gap-[10px] lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                        
                       <div>Learn more about a person's renting history, income, and other important details to determine their eligibility.</div> 

                       <div> Our system saves you time by automatically performing landlord reference checks so you don't have to.</div> 
                    </p>
            
                    <div className="text-start lg:text-[27px] text-[20px] mt-8">
                    
                    <span className="underline text-blue-900">
                        <Link to={"#"}>Learn More about rental applications.</Link>
                    </span>
                    </div>
                </div>          
        </div>
        </div>
      );
}

export default HeroRentalApplications