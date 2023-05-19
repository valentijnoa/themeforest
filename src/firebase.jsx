// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj2Kq7gPpHJJOqGnNRxlSvlGgQSqcAAbE",
  authDomain: "themeforest-18b7d.firebaseapp.com",
  databaseURL:
    "https://themeforest-18b7d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "themeforest-18b7d",
  storageBucket: "themeforest-18b7d.appspot.com",
  messagingSenderId: "44545181378",
  appId: "1:44545181378:web:c0c48679feba7ad7f51d5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
