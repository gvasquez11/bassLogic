document.getElementById('togglePassword').onclick = showPassword

function showPassword(){
    console.log('entering function')
    this.classList.remove('fa-eye');

    if(password.type === 'password'){
        password.type = 'text'
        this.classList.toggle('fa-eye');
        console.log('open eye')
    }
    else
    {
        password.type = 'password'
    
    }

}

 // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
    import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

    import { getDatabase, update, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
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
    const auth = getAuth(app);
    const database = getDatabase(app);

    submitButton.addEventListener('click', (e) =>{

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                  update(ref(database, 'users/' + user.uid), {
                    last_login: Date.now()
                })
                alert('Welcome Back!')

                        // User is signed in, see docs for a list of available properties
                        // https://firebase.google.com/docs/reference/js/firebase.User
                        // location.href = "studentPage.html"
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('Incorrect creddentials')
            });

    })

    const checkAuthState = async() => {
        onAuthStateChanged(auth,user => {
            if(user){
                location.href = "studentPage.html"
            }
            else{
                // alert('Please Sign In or create an account')
            }
        })
    }

    checkAuthState();