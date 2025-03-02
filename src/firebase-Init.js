// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0kjwHUR8MfErterTxXDgLQvMiUg7D6D4",
  authDomain: "blogging-app-a164f.firebaseapp.com",
  projectId: "blogging-app-a164f",
  storageBucket: "blogging-app-a164f.firebasestorage.app",
  messagingSenderId: "428555114295",
  appId: "1:428555114295:web:af93c4f41383e3d0aeacb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);