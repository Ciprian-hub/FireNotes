// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGVMAef4vSZmx7r_iOmcM1n2lBw4SL4P4",
    authDomain: "notes-715c9.firebaseapp.com",
    projectId: "notes-715c9",
    storageBucket: "notes-715c9.appspot.com",
    messagingSenderId: "772967181304",
    appId: "1:772967181304:web:03f9ace1c6f7e5392bc40d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app)
export { db, auth }