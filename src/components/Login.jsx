import React, { use, useRef, useState } from "react";
import Header from "./Header";
import { checkValidatedata } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [ShowError, SetShowError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignin = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const Email = email.current.value;
    const Password = password.current.value;
    const Name = isSignInForm ? null : name.current?.value;

    console.log(Email);
    console.log(Password);
    console.log(Name);

    const msg = checkValidatedata(Email, Password, Name, isSignInForm);
    SetShowError(msg);

    if (msg) return;

    if (!isSignInForm) {
      // Signed up
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetShowError(errorCode + "_" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if("auth/invalid-credential_Firebase: Error (auth/invalid-credential)." == errorCode + "_" + errorMessage){
            SetShowError("User not found. Please try again..");
          }
          
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg"
        alt="background Image"
      />

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 sm:w-9/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-6 sm:p-8 bg-black/80 rounded-md text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="font-semibold text-2xl sm:text-3xl pb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 mb-4 w-full rounded-sm bg-gray-700 placeholder-gray-400"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 mb-4 w-full rounded-sm bg-gray-700 placeholder-gray-400"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mb-6 w-full rounded-sm bg-gray-700 placeholder-gray-400"
        />

        <p className="text-red-500 p-2 font-bold">{ShowError}</p>

        <button
          className="p-3 mb-4 bg-red-600 w-full rounded-sm hover:bg-red-700 font-semibold cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 cursor-pointer" onClick={toggleSignin}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account, Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
