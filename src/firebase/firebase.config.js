// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVKncepoVhLVaEsfO8lg7eOpGJL1krvVM",
    authDomain: "italia-foodie.firebaseapp.com",
    projectId: "italia-foodie",
    storageBucket: "italia-foodie.appspot.com",
    messagingSenderId: "444475832623",
    appId: "1:444475832623:web:3469eef56402551cd549da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;