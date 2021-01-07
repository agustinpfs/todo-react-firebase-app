import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDC3r1t9-vaPV0GE-46umXheKAenSC0-Ag",
    authDomain: "todo-app-cp-d437f.firebaseapp.com",
    projectId: "todo-app-cp-d437f",
    storageBucket: "todo-app-cp-d437f.appspot.com",
    messagingSenderId: "222599911251",
    appId: "1:222599911251:web:0dbd106883913332dff3a6",
    measurementId: "G-4HZ1HEE4NH"

});

const db = firebaseApp.firestore();

export default db;