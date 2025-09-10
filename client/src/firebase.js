// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-eedc0.firebaseapp.com",
  projectId: "mern-estate-eedc0",
  storageBucket: "mern-estate-eedc0.firebasestorage.app",
  messagingSenderId: "1096677292454",
  appId: "1:1096677292454:web:06b35a259f604411487767"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);