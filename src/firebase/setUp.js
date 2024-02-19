import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBR_kOlN-I1elhUkwhZhb1DGOONbP-eVTg",
  authDomain: "swiggy-e6463.firebaseapp.com",
  projectId: "swiggy-e6463",
  storageBucket: "swiggy-e6463.appspot.com",
  messagingSenderId: "958518053349",
  appId: "1:958518053349:web:b6848d895779a5c919070c",
  measurementId: "G-VT1GNRD4ZC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)