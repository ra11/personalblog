
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAzAnowGMx3_1puziaLBAzHc3uJKpvh_nc",
  authDomain: "blog-app-bfaf8.firebaseapp.com",
  projectId: "blog-app-bfaf8",
  storageBucket: "blog-app-bfaf8.firebasestorage.app",
  messagingSenderId: "449108065050",
  appId: "1:449108065050:web:712e79adbdde3d180e8aa3",
  measurementId: "G-R4HJEPLV0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth