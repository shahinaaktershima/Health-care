// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBClUdikNFggtXmUbZYzBlGd0y1GZttmvk",
  authDomain: "heath-care-b77ac.firebaseapp.com",
  projectId: "heath-care-b77ac",
  storageBucket: "heath-care-b77ac.appspot.com",
  messagingSenderId: "78558788948",
  appId: "1:78558788948:web:d12f311eba02eba9bcdcc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
