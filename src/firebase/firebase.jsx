import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa38TUxwrn0I3rj1199PC4LaugWHomx3o",
  authDomain: "fir-login-signup-98168.firebaseapp.com",
  projectId: "fir-login-signup-98168",
  storageBucket: "fir-login-signup-98168.appspot.com",
  messagingSenderId: "1052319742047",
  appId: "1:1052319742047:web:a3a7e796c805a844b383ea",
  measurementId: "G-509LJ1Q58N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };