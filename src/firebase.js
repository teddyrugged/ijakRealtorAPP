// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl9DVkezEd85QEl8OR9ScDdUZSY_0p2mE",
  authDomain: "jirealestateapp.firebaseapp.com",
  projectId: "jirealestateapp",
  storageBucket: "jirealestateapp.appspot.com",
  messagingSenderId: "648680771604",
  appId: "1:648680771604:web:51249a8543dde6c1c31701"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFireStore()