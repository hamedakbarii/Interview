import React from "react";

export default function Layout() {
  return (
    <div className="w-full flex flex-col md:flex-row-reverse md:gap-2 justify-center items-center pr-1 rounded-lg">
      <img
        src="./Images/Layout/312698222.jpg"
        alt="luxury house"
        className="w-full md:h-[600px]"
      />

      <form className="flex flex-col gap-20 md:w-[350px] w-full shadow-lg p-2 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl">Welcome Back !</h2>
          <span className="text-sm">Please Enter Your Details</span>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 w-full ">
          <input
            type="email"
            placeholder="Email"
            className="border-b p-2 outline-none w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b p-2 outline-none w-full"
          />
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" />
              <span className="text-xs">Remember for 30 days</span>
            </div>
            <span className="text-xs underline text-blue-900">
              Forgot Password
            </span>
          </div>

          <input
            type="button"
            value="Login"
            className="bg-blue-900 text-white text-sm p-2 rounded-lg w-full"
          />
          <p className="text-gray-400 text-sm">
            Don't you have account ?{" "}
            <span className="text-blue-900">sign up for free</span>
          </p>
        </div>
      </form>
    </div>
  );
}
