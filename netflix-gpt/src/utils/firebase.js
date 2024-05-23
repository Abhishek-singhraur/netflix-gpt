// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCakLn7IbLhgZ5R6VKjLCXmfAyIl8h81VE",
  authDomain: "netflixgpt-4f9fe.firebaseapp.com",
  projectId: "netflixgpt-4f9fe",
  storageBucket: "netflixgpt-4f9fe.appspot.com",
  messagingSenderId: "991898679241",
  appId: "1:991898679241:web:e378a4a38e50737f02da18",
  measurementId: "G-PB6H478FZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();