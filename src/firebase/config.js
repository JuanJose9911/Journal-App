import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
// Configurar variables de entorno
const firebaseConfig = {
    apiKey: "AIzaSyCJ076uHSkouNwcXnVn6QpBvKgxGyAftUU",
    authDomain: "journal-app-55533.firebaseapp.com",
    projectId: "journal-app-55533",
    storageBucket: "journal-app-55533.appspot.com",
    messagingSenderId: "309010746729",
    appId: "1:309010746729:web:e21550ba8dfb57383781f8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )

export const FirebaseDB = getFirestore( FirebaseApp)