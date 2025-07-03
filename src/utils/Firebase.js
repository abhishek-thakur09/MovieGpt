import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCqMj8Hl4CTwNsajOp_8BJHf0aEvu9xWJs",
  authDomain: "moviegpt-cd03c.firebaseapp.com",
  projectId: "moviegpt-cd03c",
  storageBucket: "moviegpt-cd03c.firebasestorage.app",
  messagingSenderId: "128615034926",
  appId: "1:128615034926:web:6d89ac544d8e9c1d8aefbf",
  measurementId: "G-8L5CPS0J5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);