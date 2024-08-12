// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcViJ_AMTYd4x_Ooij0vqjKlHFHnkiXPc",
  authDomain: "inventory-management-809f8.firebaseapp.com",
  projectId: "inventory-management-809f8",
  storageBucket: "inventory-management-809f8.appspot.com",
  messagingSenderId: "264862243088",
  appId: "1:264862243088:web:1f305c5ab2f7b494466d95",
  measurementId: "G-Q1TH1CKH07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore= getFirestore(app);

export{firestore}