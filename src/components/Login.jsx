import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

const [isSignInForm, setisSignInForm] = useState(true);

const toggleSignin= ()=>{
  setisSignInForm(!isSignInForm);
};

  return (
    <div>
      <Header />
      <div>
        <img
          className="bg-center absolute"
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg"
          alt="background Image"
        ></img>
      </div>

        <form className="w-3/12 absolute p-8 bg-black/80 my-24 mx-auto left-0 right-0 rounded-md text-white">
      <h1 className="font-semibold text-3xl pb-6">{isSignInForm ? "Sign In" : "Sign UP"}</h1>
    {!isSignInForm && <input
        type="text"
        placeholder="Full Name"
        className="p-3 mb-4 w-full rounded-sm bg-gray-700 placeholder-gray-400"
      />}
      <input
        type="text"
        placeholder="Email "
        className="p-3 mb-4 w-full rounded-sm bg-gray-700 placeholder-gray-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-3 mb-6 w-full rounded-sm bg-gray-700 placeholder-gray-400"
      />
      <button className="p-3 mb-4 bg-red-600 w-full rounded-sm hover:bg-red-700 font-semibold cursor-pointer">
        {isSignInForm ? "Sign In" :"Sign Up" }
      </button>
      <p className="p-4 cursor-pointer" onClick={toggleSignin}>{isSignInForm? "New to Netflix? Sign Up Now": "Already have an account, Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;
