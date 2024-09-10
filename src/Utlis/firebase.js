import { initializeApp } from "firebase/app";
import {  getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC98hYKipUNFDXK3H4Wo_RzNdylbPufbxY",
  authDomain: "netflix-clone-40d8f.firebaseapp.com",
  projectId: "netflix-clone-40d8f",
  storageBucket: "netflix-clone-40d8f.appspot.com",
  messagingSenderId: "818566135677",
  appId: "1:818566135677:web:56f0bfba752262f981d614",
  measurementId: "G-CGDEFX4RFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//eslint-disable-next-line
 const analytics = getAnalytics(app);

export const auth = getAuth();