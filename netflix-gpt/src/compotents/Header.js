import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import  toggleGptSearchView from"../utils/gptSlice";


const Header = () => { 

  const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
    const unsuscribe =   onAuthStateChanged(auth, (user) => {
        if (user) {
       
         const {uid,email,displayName,photoURL} = user;
         // add in to the redux store
         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
           navigate("/browse");
        // ...
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => unsuscribe();
    },[dispatch] );
    //handel sign out 
    const handelSignOut = () => {
   
     signOut(auth).then(() => {
        navigate("/")
  // Sign-out successful.

        }).catch((error) => {
          navigate("/error");
    });
    
  }
    const handelGptSearch = () => {
       dispatch(toggleGptSearchView);
    }
  return (
    <div className="absolute w-screen px-9 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="logo"
        />
      { user &&
        <div className="flex p-2 ">
          {/* // gpt Search icon // */}
          <button className="text-white font-bold  py-2 px-3  mx-5 my-5 bg-red-700 rounded-lg hover:opacity-60" onClick={handelGptSearch}>
            Gpt Search
          </button>
          {/* //signOut search // */}
          <img  className="w-12 h-12 my-4 rounded-lg" src={user.photoURL} alt="profile"/>
          <button className=" text-white font-bold " onClick={handelSignOut}>Sign out</button>
        </div>

       }
    </div>
    
   
  );
};

export default Header;