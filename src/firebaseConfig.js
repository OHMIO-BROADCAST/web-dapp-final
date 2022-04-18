// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAc5LLyYeKTCBGhxp8lrCuHLSl64AmU7Q",
    authDomain: "tips-66488.firebaseapp.com",
    projectId: "tips-66488",
    storageBucket: "tips-66488.appspot.com",
    messagingSenderId: "3858377952",
    appId: "1:3858377952:web:f7eff8f419f4d1d94c3485",
    measurementId: "G-S3F99N924P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export default firebaseConfig;
