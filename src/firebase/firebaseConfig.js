// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCBP8TNiEbrWDUHmlkHwZqQAchsmxyVgw",
  authDomain: "sura-store.firebaseapp.com",
  projectId: "sura-store",
  storageBucket: "sura-store.appspot.com",
  messagingSenderId: "377384810427",
  appId: "1:377384810427:web:6083a0e05004588fa9369e",
  measurementId: "G-C8XEEHFDN1"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

