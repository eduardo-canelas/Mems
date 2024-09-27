// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-TgPF4dvNHrjy90E5XqzwIS4cQYRVgQI",
  authDomain: "mems-7e548.firebaseapp.com",
  projectId: "mems-7e548",
  storageBucket: "mems-7e548.appspot.com",
  messagingSenderId: "448710840387",
  appId: "1:448710840387:web:b888b8ebcf6c067e14c4f6",
  measurementId: "G-LBFJQBKQLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore
