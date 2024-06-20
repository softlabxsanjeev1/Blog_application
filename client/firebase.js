import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDRLAQA9_kE7_Du5GoYK3q7VM2UxnhsMMA",
    authDomain: "techblog-1dde4.firebaseapp.com",
    projectId: "techblog-1dde4",
    storageBucket: "techblog-1dde4.appspot.com",
    messagingSenderId: "859743763847",
    appId: "1:859743763847:web:bab5602855457880c66722"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);