// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAvh5wq1mpZ3TNDgqZyqcEgxjrJz5ujaUU",

  authDomain: "react-cursos-d00d1.firebaseapp.com",

  projectId: "react-cursos-d00d1",

  storageBucket: "react-cursos-d00d1.appspot.com",

  messagingSenderId: "815774722824",

  appId: "1:815774722824:web:cc314720a43c7ccbd2dabd"

};


 
// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );