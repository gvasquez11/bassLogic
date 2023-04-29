document.getElementById('togglePassword').onclick = showPassword

function showPassword(){
    this.classList.remove('fa-eye');

    if(password.type === 'password'){
        password.type = 'text'
        this.classList.toggle('fa-eye');
    }
    else
    {
        password.type = 'password'
    
    }

}

 // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

    import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
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

    submitButton.addEventListener('click', (e) =>{

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let fname = document.getElementById('first-name').value;
        let lname = document.getElementById('last-name').value;
        let fullName = `${fname} ${lname}`;
        let userName = `${fname}.${lname}`;
        userName = userName.toLowerCase();


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...user.uid
                set(ref(database, 'users/' + user.uid), {
                    name: fullName,
                    username: userName,
                    email: email,
                    password: password,
                    last_login: Date.now()
                })
                    .then(() => {
                    // Data saved successfully!
                    alert('User created successfully! \nPlease return to the home page to login.');
                    })
                    .catch((error) => {
                    // The write failed...
                    alert(error)
                    });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage)
            });



    })


