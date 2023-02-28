// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export { app, analytics };
