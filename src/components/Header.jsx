import React, { useState, useEffect } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/UserSlice";
import { Logo, user_AVATAR } from "../utils/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  
    useEffect(() => {
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          // for signin & signUp it will be called
          dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
          navigate("/browse");
        } else {
          // User is signed outx
          // ...
          dispatch(removeUser());
          navigate("/");
        }

        return ()=> unsubscribe();
      });
    }, []);




  const handlesignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser);
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
        src={Logo}
        alt="logo"
      />


      {user && (
        <div className="relative py-4 inline-block group">
          <img
            className="w-10 h-10"
            src={user_AVATAR}
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
