import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAywgG9LH7_7uz00U3_GUAbyjyTATNFXSU",
  authDomain: "swiggy-clone-7f791.firebaseapp.com",
  projectId: "swiggy-clone-7f791",
  storageBucket: "swiggy-clone-7f791.appspot.com",
  messagingSenderId: "668042039813",
  appId: "1:668042039813:web:d243841a70b27aeab8026c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);