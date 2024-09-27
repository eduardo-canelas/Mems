// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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