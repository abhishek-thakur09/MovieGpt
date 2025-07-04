// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAclFH--M3WDS62tsH0Tmv-HL2uSZ0PweE",
  authDomain: "moviegpt-39e2b.firebaseapp.com",
  projectId: "moviegpt-39e2b",
  storageBucket: "moviegpt-39e2b.firebasestorage.app",
  messagingSenderId: "188790631483",
  appId: "1:188790631483:web:7120b57c6a548ff081401e",
  measurementId: "G-D8TG7EQBKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();