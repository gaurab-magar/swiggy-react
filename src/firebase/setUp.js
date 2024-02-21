import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3w5djP4b693jYAO0lfXXxWSLFJMWC6Og",
  authDomain: "swiggy-2.firebaseapp.com",
  projectId: "swiggy-2",
  storageBucket: "swiggy-2.appspot.com",
  messagingSenderId: "508982358424",
  appId: "1:508982358424:web:fad1b8d8506c70971b7bed"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);