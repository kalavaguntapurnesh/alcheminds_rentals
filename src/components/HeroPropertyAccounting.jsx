import React from 'react'
import { Link } from 'react-router-dom';
import AccountingImage from "../assets/accounting.webp"
const HeroPropertyAccounting = () => {
    return (
        <div className='w-full h-screen'>
             <div className="w-full h-screen grid lg:grid-cols-2 pb-10">
         
          <div className=" p-8 flex flex-col justify-center bg-white/80">
            <h1 className="lg:text-[40px] text-[35px] font-mono text-start font-semibold leading-tight text-blue-900">
                Straightforward rental property accounting
            </h1>
    
            <p className=" flex flex-col gap-[10px] lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                        
                       <div>Track your rental property income and expenses to streamline the accounting process.</div> 

                       <div> Rent payments and maintenance costs are automatically uploaded to your accounting dashboard to make it easier to see how much money is coming in and out.</div> 
            </p>
            
    
            <div className="text-start lg:text-[27px] text-[20px] mt-8">
             
              <span className="underline text-blue-900">
                <Link to={"#"}>Learn more about rental property accounting.</Link>
              </span>
            </div>
          </div>
    
     
          <div className="w-full h-full flex items-center justify-center lg:col-span-1">
            <img
              src={AccountingImage}
              alt="Hero"
              className="w-full h-[70%] object-cover rounded-lg" // Use full width and height with rounded corners
            />
          </div>
        </div>
        </div>
      );
}

export default HeroPropertyAccounting