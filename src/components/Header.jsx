import React, { useState } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/UserSlice";
import { signOut } from "firebase/auth";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  console.log(user);
  
  const handlesignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };



  const toggleDropdown = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between md:px-4">
      <img
        className="w-44"
        src="
https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />


      {user && (
        <div className="relative py-4 inline-block group">
          <img
            className="w-10 h-10"
            src="https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUi6ZpOspE7SWzYlN-o_H3QkoVd5zpDcPgQEQWWl73eQ9kxZiA9t6hgFjyw7ITQuAKIgfZdBkv02PdLFHos7NFC5SGlz-Nk.png?r=66c"
            alt="usericon"
            onClick={toggleDropdown}
          ></img>
          <div className={`absolute group-hover:block bg-black text-white ${isOpen ? 'block' : 'hidden'} shadow-lg mt-1 z-10 -right-1/4 py-10`}>
            <div className="top-1">
              <ul className="w-48">
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                 {user.displayName}, Account
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Help center
              </li>
              <li
                onClick={handlesignOut}
                className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
              >
                signout from Netflix?
              </li>
            </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
