import Navbar from "../components/Navbar";
import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Register = () => {
  const [userType, setUserType] = useState("");

  return (
    <>
      <Navbar />

      <div className="w-full min-h-[calc(100vh-90px)] pt-[50px] lg:p-[100px] flex justify-center items-center">
        <div className="flex flex-col w-full max-w-[900px] mx-auto gap-[40px]">
          {/* Title */}
          <div className="text-start font-mono text-[35px] md:text-[50px] text-blue-900 text-center lg:mt-[20px] lg:mb-[10px]">
            <h1>Get started with Rentals.</h1>
          </div>

          {/* Form */}
          <form className="w-full space-y-10 mx-auto">
            <div className="space-y-6">
              <label className="text-start text-2xl md:text-3xl block mb-6">
                Choose one of the following options:
              </label>
              <div className="flex flex-col md:flex-row justify-between mt-4">
                <label className="text-xl md:text-2xl font-semibold text-blue-900 flex items-center mb-4 md:mb-0">
                  <input
                    type="radio"
                    name="userType"
                    value="Landlord"
                    onChange={(e) => setUserType(e.target.value)}
                    className="h-6 w-6 mr-3"
                  />
                  I am a Landlord
                </label>
                <label className="text-xl md:text-2xl font-semibold text-blue-900 flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="Tenant"
                    onChange={(e) => setUserType(e.target.value)}
                    className="h-6 w-6 mr-3"
                  />
                  I am a Tenant
                </label>
              </div>
            </div>

            <div>
              <label className="text-start text-xl font-mono block mb-2">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-4 font-mono border border-gray-300 rounded-lg text-xl"
                required
              />
            </div>

            <div>
              <label className="text-start text-xl font-mono block mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 font-mono border border-gray-300 rounded-lg text-xl"
                required
              />
            </div>

            <div>
              <label className="text-start text-xl font-mono block mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-4 font-mono border border-gray-300 rounded-lg text-xl"
                required
              />
            </div>

            {/* Submit Button and Login Link */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl mb-4 md:mb-0">
                Have an Account?{" "}
                <span className="hover:underline text-blue-700">
                  <Link to={"/login"}>Login</Link>
                </span>
              </div>

              <div className="text-right">
                <button className="bg-gray-300 text-white text-xl font-bold py-4 px-6 rounded-lg transition duration-200 hover:text-black flex items-center justify-center">
                  <div className="flex items-center justify-center space-x-2">
                    <div>SIGN UP AS A {userType}</div>
                    <div>
                      <HiOutlineArrowRight />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
