// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuG3uiK21AlCjO5yRe7ifMx5OJ_3bEiKY",
  authDomain: "react--clone-eb256.firebaseapp.com",
  projectId: "react--clone-eb256",
  storageBucket: "react--clone-eb256.appspot.com",
  messagingSenderId: "821419953601",
  appId: "1:821419953601:web:67bab9e09214dfea38f340",
  measurementId: "G-JLCGBLKH7Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
