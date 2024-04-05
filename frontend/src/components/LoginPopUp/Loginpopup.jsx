import { assets } from "../../assets/assets";
import { useState } from "react";
import { TextInput } from "./TextInput";

export const Loginpopup = ({ setShowlogin }) => {
  const [currState, setCurrstate] = useState("Sign up");

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Background overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {/* Image component */}
      </div>

      {/* Popup container */}
      <div className="relative z-10 bg-white p-6 rounded-lg">
        {/* Close button */}
        <img
          className="absolute top-7 right-5 cursor-pointer"
          onClick={() => setShowlogin(false)}
          src={assets.cross_icon}
          alt="Cross button"
        />

        {/* Popup content */}
        <div>
          <h2>{currState}</h2>
          <div>
            {currState === "Login" ? (
              <div className="flex flex-col gap-4 w-60 pt-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-600">
                    Username
                  </label>
                  <TextInput type="text" placeholder="Your name" required />
                  <label htmlFor="name" className="text-gray-600">
                    Password
                  </label>
                  <TextInput type="text" placeholder="Your password" required />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 w-60 pt-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-600">
                    Username
                  </label>
                  <TextInput type="text" placeholder="Your name" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-600">
                    Email
                  </label>
                  <TextInput type="email" placeholder="Your email" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-gray-600">
                    Password
                  </label>
                  <TextInput
                    type="password"
                    placeholder="Your password"
                    required
                  />
                </div>
              </div>
            )}
          </div>
          <button className="w-full bg-orange-400 mt-4 rounded-md px-3 py-2 text-white">
            {currState === "Sign up" ? "Create account" : "Login"}
          </button>
          <div className="flex items-center mt-2">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-600">
              By continuing I agree to the terms and condition
            </label>
          </div>
          {currState === "Login" ? (
            <p className="flex justify-center">
              Create a new account?{" "}
              <span
                className="text-orange-500 pl-5 cursor-pointer"
                onClick={() => setCurrstate("Sign up")}
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                className="text-orange-500 cursor-pointer"
                onClick={() => setCurrstate("Login")}
              >
                Login Here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
