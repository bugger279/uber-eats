import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBZdxsMVz3lBBsvns_quP-P02oPz538fgg",
    authDomain: "rn-uber-eats-clone-fd8a4.firebaseapp.com",
    projectId: "rn-uber-eats-clone-fd8a4",
    storageBucket: "rn-uber-eats-clone-fd8a4.appspot.com",
    messagingSenderId: "70507885872",
    appId: "1:70507885872:web:24aff541a8eadde37784f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);