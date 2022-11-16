import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAesYdM6y7RMk2OA83K9Z82ZgjH0vVuu3w",
    authDomain: "olx1-231c0.firebaseapp.com",
    projectId: "olx1-231c0",
    storageBucket: "olx1-231c0.appspot.com",
    messagingSenderId: "487851057120",
    appId: "1:487851057120:web:6f39d0645ab73af5c89585",
    measurementId: "G-0D0F22BH3Y"
  };

export default firebase.initializeApp(firebaseConfig)