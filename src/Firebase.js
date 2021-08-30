import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC75I_m_bKzCDvkg1I3baFtrNFspggqJWM",
    authDomain: "portfolio-2fa97.firebaseapp.com",
    projectId: "portfolio-2fa97",
    storageBucket: "portfolio-2fa97.appspot.com",
    messagingSenderId: "778878770136",
    appId: "1:778878770136:web:d55404a7157e1adf9270ad",
    measurementId: "G-F17YHKL1RF"
  };

//initialize the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig)
//initialize the database
const db = firebaseApp.firestore();

export default db
