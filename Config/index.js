// Import the functions you need from the SDKs you need
import  app  from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
;// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADEDRXZ2Ds5TSbuY1kalzWlcg9d7BFSfA",
  authDomain: "whatsapp-15166.firebaseapp.com",
  projectId: "whatsapp-15166",
  storageBucket: "whatsapp-15166.appspot.com",
  messagingSenderId: "105528090268",
  appId: "1:105528090268:web:662a866ef9c5e8b6749759",
  measurementId: "G-HGHC2J1QV9"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase;