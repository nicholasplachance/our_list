// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOuF5mR_kWCfmJAP4JJ0L4nLvfJ0inZ-4",
  authDomain: "our-list-2e6ea.firebaseapp.com",
  projectId: "our-list-2e6ea",
  storageBucket: "our-list-2e6ea.appspot.com",
  messagingSenderId: "918367105593",
  appId: "1:918367105593:web:ad6b06405acbaf412713e8",
  measurementId: "G-KZN4K75CXS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
