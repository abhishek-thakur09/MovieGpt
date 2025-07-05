import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";



const Body = () => {

  const appRouter = createBrowserRouter([
    {
       path: "/", 
       element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName } = user;
  //       // for signin & signUp it will be called
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //     } else {
  //       // User is signed out
  //       // ...
  //       dispatch(removeUser());
  //     }
  //   });
  // }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
