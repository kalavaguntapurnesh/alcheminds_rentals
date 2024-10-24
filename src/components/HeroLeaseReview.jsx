import React from 'react'
import { Link } from 'react-router-dom';
import Hero4 from "../assets/leasereview.webp"
const HeroLeaseReview = () => {
    return (
        <div className='w-full h-screen'>
             <div className="w-full h-screen grid lg:grid-cols-2 pb-10">
                <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                    <img
                    src={Hero4}
                    alt="Hero"
                    className="w-full h-[60%] object-cover rounded-lg" // Use full width and height with rounded corners
                    />
                </div>

                <div className=" p-8 flex flex-col justify-center bg-white/80">
                    <h1 className="lg:text-[40px] text-[35px] font-mono text-start font-semibold leading-tight text-blue-900">
                    Access lawyer-reviewed, state-specific lease agreement templates
                    </h1>
            
                    <p className=" flex flex-col gap-[10px] lg:text-[20px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                        
                       <div>Access state-specific templates that can be customized with Unlimited Plus. Our lease agreement and addendum templates ensure both you and your tenants are protected during the lease term.</div> 

                       <div> Sign lease agreements online for free.</div> 
                    </p>
            
                    <div className="text-start lg:text-[27px] text-[20px] mt-8">
                    
                    <span className="underline text-blue-900">
                        <Link to={"#"}>Learn more about Local Assist and online leasing.</Link>
                    </span>
                    </div>
                </div>          
        </div>
        </div>
      );
}

export default HeroLeaseReview