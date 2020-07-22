import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDfwp2_ie_HKFE99RMPCEsCnjWiEXi0-Po",
    authDomain: "clone-7d97e.firebaseapp.com",
    databaseURL: "https://clone-7d97e.firebaseio.com",
    projectId: "clone-7d97e",
    storageBucket: "clone-7d97e.appspot.com",
    messagingSenderId: "216092044188",
    appId: "1:216092044188:web:4b8b2cab35ac58c2d0f659",
    measurementId: "G-8KER45DGCE"
});

const auth=  firebase.auth();

export {auth};