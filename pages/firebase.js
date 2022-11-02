// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMxHsoD9E3jx6BeYlrIarfMd21tVQGJ1A",
  authDomain: "fasion-corner.firebaseapp.com",
  projectId: "fasion-corner",
  storageBucket: "fasion-corner.appspot.com",
  messagingSenderId: "745339430715",
  appId: "1:745339430715:web:89abb7138136ad2c9df91e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app