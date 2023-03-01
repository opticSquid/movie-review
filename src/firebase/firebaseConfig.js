// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDrOOCzlCi-alz2Mc1sV8aNTHz64DQDaOg",
  authDomain: "movie-review-ce6a6.firebaseapp.com",
  projectId: "movie-review-ce6a6",
  storageBucket: "movie-review-ce6a6.appspot.com",
  messagingSenderId: "751152250102",
  appId: "1:751152250102:web:e0778388b28ef446b6c0d7",
  measurementId: "G-V188V45KJ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
