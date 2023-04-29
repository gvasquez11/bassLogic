// Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
    import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
    import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
    import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDFxsfNT9Fp_B-Dp9XkHu0N4uSFLt5xIPw",
        authDomain: "bass-logic.firebaseapp.com",
        projectId: "bass-logic",
        storageBucket: "bass-logic.appspot.com",
        messagingSenderId: "619837246592",
        appId: "1:619837246592:web:273ec8fc8e349905df6a65",
        measurementId: "G-F1MR2MZRWQ"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);  
    const auth = getAuth();
    const database = getDatabase(app);

     onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user)
        getLesson();
        document.getElementById('dashButton').innerText = 'Dashboard';
        // ...
    } else {
        // User is signed out
        // ...
    }
    });

