import React, { useRef } from 'react'
import Header from './Header';
import { useState } from 'react';
import { isValid } from '../utils/validation';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVTAR } from '../utils/constant';

const Login = () => {
        // handel the sign in or sign up toggle // 
     const [isSignInForm,setInSignInForm] = useState(true);
     
     const toggleSignInForm = () => {
        
      setInSignInForm(!isSignInForm);

     };
     // validation for email and password and name  // 
     const[errorMessage,setErrorMessage] = useState(null);
     const dispatch = useDispatch();
     const email = useRef(null);
     const password = useRef(null);
     const name  = useRef(null);
     
    const handelButtonClick = () => {
       
        const message =  isValid(email.current?.value,password.current?.value,name.current?.value);
        setErrorMessage(message);
         // form authentication
        if(!isSignInForm) {
          
          createUserWithEmailAndPassword(auth, email.current.value,password.current.value,name.current.value)
            .then((userCredential) => {
              // Signed up 
              
              const user = userCredential.user;
              // udate user profile and display name //
              updateProfile(user, {
                displayName: name.current.value, photoURL: USER_AVTAR 
              }).then(() => {
                // Profile updated!
                const {uid,email,displayName,photoURL} = auth.currentUser;
                // add in to the redux store
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
       
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
              });
              
             
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+ "-" + errorMessage);
               
            });
        } else {
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ "-" + errorMessage);
            
          });

        }
        
     };
  return (
    <div >
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      
        <form  onSubmit={(e)=> e.preventDefault()} className=" w-3/12 bg-black absolute p-7 my-40 mx-auto right-0 left-0 text-white bg-opacity-80">
          <h1 className="font-bold p-5 text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && <input ref={name}
             type="text" placeholder="Enter full name" 
             className="p-2 my-3 w-full bg-gray-700 rounded-lg"
           /> }
          <input ref={email}
            type="email" placeholder="Email or phone numner" 
            className="p-2 my-3 w-full bg-gray-700 rounded-lg" 
          />
          
          <input ref={password}
            type="password" placeholder="password"
            className="p-2 my-3 w-full bg-gray-700 rounded-lg"
          />
          {/* //print the error message// */}
          <p className="text-red-500 font-bold">{errorMessage}</p>
          <button className="my-5 p-2 bg-red-700 border-radius w-full bg-gray-700 rounded-lg" 
            onClick={handelButtonClick}>
             {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ?  "New to Netflix? Sign up now." : "Already registered Sign In Now "}</p>
        </form>
      
    </div>
  );
}

export default Login;