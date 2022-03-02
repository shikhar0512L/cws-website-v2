import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAldxcaa-aYfqo3YumqHCgQt6MierKJUEY",
    authDomain: "cws-database-backend.firebaseapp.com",
    projectId: "cws-database-backend",
    storageBucket: "cws-database-backend.appspot.com",
    messagingSenderId: "110264755799",
    appId: "1:110264755799:web:2002368c0c11a1f949a512"
});

var db = firebaseApp.firestore();

export { db };
