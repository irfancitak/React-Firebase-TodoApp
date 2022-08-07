// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeCcDNd6X8iGWS5HVBnuW_UfHvwO2_Rzk",
  authDomain: "todo-app-yt-3dbda.firebaseapp.com",
  projectId: "todo-app-yt-3dbda",
  storageBucket: "todo-app-yt-3dbda.appspot.com",
  messagingSenderId: "660031650492",
  appId: "1:660031650492:web:67ac0bbccfcb214338aeb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
