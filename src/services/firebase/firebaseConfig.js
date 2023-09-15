import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6aZA9mkEJi-yQ8BHlzqdC_1j8fv5vr38",
  authDomain: "backend-fiorosea.firebaseapp.com",
  projectId: "backend-fiorosea",
  storageBucket: "backend-fiorosea.appspot.com",
  messagingSenderId: "802855101487",
  appId: "1:802855101487:web:44b0bf5aac23dde13f52da"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)