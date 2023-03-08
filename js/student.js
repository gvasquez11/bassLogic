// Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
    import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
    import { getDatabase, update, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
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
    const analytics = getAnalytics(app);
    const auth = getAuth();
    const database = getDatabase(app);
    const db = getFirestore(app);
    

    const colRef = collection(db, 'appointments')
    getDocs(colRef).then((snapshot) => {
        let appointments = []
        snapshot.docs.forEach(doc => {
            appointments.push({...doc.data(), id: doc.id})
        })
        console.log(appointments[1].name)
    }).catch(err => {
        console.log(err.message)
    })



    submitButton.addEventListener('click', (e) =>{

        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.

            alert('See you next time!')
            location.href = "index.html"
        }).catch((error) => {
        // An error happened.
            console.log(error)
        });
        

    })

    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user)
        // ...
    } else {
        // User is signed out
        // ...
    }
    });