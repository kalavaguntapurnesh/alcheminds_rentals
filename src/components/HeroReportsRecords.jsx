import React from 'react'
import Hero4 from "../assets/reports_records.webp"
import { Link } from 'react-router-dom';
const HeroReportsRecords = () => {
    return (
        <div className='w-full h-screen md:mt-0 mt-[30px]'>
             <div className="w-full h-screen grid lg:grid-cols-2 pb-10">
         
          <div className=" p-8 flex flex-col justify-center bg-white/80">
            <h1 className="lg:text-[40px] text-[35px] font-mono text-start font-semibold leading-tight text-blue-900">
            Request credit, criminal background, and eviction reports
           
            </h1>
    
            <p className="lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
            Get important information on interested tenants by requesting a 
            TransUnion credit check, background check, and eviction history. 
            Applicants or landlords can cover the one-time screening fee.
            </p>
    
            <div className="text-start lg:text-[27px] text-[20px] mt-8">
             
              <span className="underline text-blue-900">
                <Link to={"#"}>Learn More about reports and checks.</Link>
              </span>
            </div>
          </div>
    
     
          <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
              src={Hero4}
              alt="Hero"
              className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
            />
          </div>
        </div>
        </div>
      );
}

export default HeroReportsRecords