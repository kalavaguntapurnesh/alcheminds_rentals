import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[calc(100vh-90px)] p-[100px] lg:p-[100px] flex justify-center items-center">
        <div className="flex flex-col w-full max-w-[600px] mx-auto gap-[40px]">
         
          <div className="text-start font-mono text-[35px] md:text-[50px] text-blue-900 text-center lg:mt-[20px] lg:mb-[10px]">
            <h1>Please Log in.</h1>
          </div>

          <div>
            <label className="text-start text-xl font-mono block mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 font-mono border border-gray-300 rounded-lg text-xl"
              required
            />
          </div>

         
          <div>
            <label className="text-start text-xl font-mono block mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 font-mono border border-gray-300 rounded-lg text-xl"
              required
            />
          </div>

          {/* Login Button */}
          <div className="text-center">
            <button className="bg-blue-900 text-white text-2xl font-bold py-4 px-12 rounded-lg  transition duration-200">
              Log In
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <Link
              to="/forgot-password"
              className="text-blue-700 hover:underline text-lg font-mono"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-lg">
            If you don't have an account,{" "}
            <span>
              <Link to="/register" className="text-blue-700 hover:underline">
                You can sign up here.
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;