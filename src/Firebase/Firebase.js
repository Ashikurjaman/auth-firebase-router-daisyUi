// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjrzgIm8NORf5RJbPBEQmL4hB4rqKTN4o",
  authDomain: "auth-firebase-router-daisy.firebaseapp.com",
  projectId: "auth-firebase-router-daisy",
  storageBucket: "auth-firebase-router-daisy.appspot.com",
  messagingSenderId: "886123820037",
  appId: "1:886123820037:web:38d5723d12cc1422b2d86c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
