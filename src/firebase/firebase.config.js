// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJUkG3aRbTGFzt6dAEXEcMmx9Pg0fe9tg",
  authDomain: "futuristix-tech.firebaseapp.com",
  projectId: "futuristix-tech",
  storageBucket: "futuristix-tech.appspot.com",
  messagingSenderId: "335230698975",
  appId: "1:335230698975:web:7cbd31bbbf08c15663f06a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;