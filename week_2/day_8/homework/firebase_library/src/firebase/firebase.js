// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYxMhUC3BXK-8xZ0k9roZ8H7KJbCp84xY",
  authDomain: "ix-library-f2382.firebaseapp.com",
  projectId: "ix-library-f2382",
  storageBucket: "ix-library-f2382.appspot.com",
  messagingSenderId: "554557416307",
  appId: "1:554557416307:web:15e7553928323fb4ee9b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};