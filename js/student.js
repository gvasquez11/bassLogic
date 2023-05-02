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

    let date = document.querySelector('#date');
    let time = document.querySelector('#time');
    let instructor = document.querySelector('#instructor');
    let message = document.querySelector('#message');

    let timeData = document.querySelector('#timeData');
    let dateData = document.querySelector('#dateData');
    let instructorData = document.querySelector('#instructorData')


    document.getElementById("buttonOne").addEventListener('click', SetLesson);
    document.getElementById("buttonTwo").addEventListener('click',updateLesson);
    document.getElementById("buttonThree").addEventListener('click', cancelLesson)


    // const colRef = collection(db, 'appointments')
    // getDocs(colRef).then((snapshot) => {
    //     let appointments = []
    //     snapshot.docs.forEach(doc => {
    //         appointments.push({...doc.data(), id: doc.id})
    //     })
    //     console.log(appointments[1].name)
    // }).catch(err => {
    //     console.log(err.message)
    // })

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
        getLesson();
        // ...
    } else {
        // User is signed out
        // ...
    }
    });

    function SetLesson(){
        const user = auth. currentUser

        let lesson = {
            Time: time.value, 
            Date: date.value,
            Instructor: instructor.value,
            Message: message.value}


        update(ref(database, 'users/' + user.uid), {
         Lesson : lesson
         
        }).then(()=>{
            alert("Lesson scheduled succsessfully!")
        }).catch((error) => {
        // An error happened.
            alert(error)
            console.log(error)
        });

    }
   
    function updateLesson(){
        const user = auth. currentUser
        if(date.value == '')
        {
            alert('You left the date blank!')
        }
        else if(time.value == '')
        {
            alert('You left time blank!')
        }
        else if(instructor.value == 'NULL')
        {
            alert('You left the instructor blank!')
        }
        else
        {
            let lesson = {
            Time: time.value, 
            Date: date.value,
            Instructor: instructor.value,
            Message: message.value}

            update(ref(database, 'users/' + user.uid), {
            Lesson : lesson
            
            }).then(()=>{
                alert("Lesson scheduled succsessfully!")
            }).catch((error) => {
            // An error happened.
                alert(error)
                console.log(error)
            });
        }
     

    }

    function cancelLesson(){
        const user = auth. currentUser
       let confirmResponse = confirm('Are you sure you want to cancel your lesson?')

        if(confirmResponse)
        {
            remove(ref(database, 'users/' + user.uid  + '/Lesson'))
            .then(() =>{
                alert('Successfully canceled Lesson')
            }).catch((error) => {
            // An error happened.
                alert(error)
                console.log(error)
            });
        }

    }

    function getLesson(){
        const user = auth. currentUser;
        const dbref = ref(database);

        get(child(dbref,'users/' + user.uid  + '/Lesson'))
        .then((snapshot) =>{
            if(snapshot.exists()){
                document.getElementById("defaultInfo").style.display = "none";
                timeData.innerHTML = snapshot.val().Time;
                dateData.innerHTML = snapshot.val().Date;
                instructorData.innerHTML = snapshot.val().Instructor
            }
            else{
                document.getElementById("infoSection").style.display = "none";
                document.getElementById("buttonThree").style.display = "none";

            }
        }).catch((error) => {
        // An error happened.
            alert(error)
            console.log(error)
        });

    }


    //functionality for showing Instructor info

    document.querySelector('.arrow1').onclick = showInstructorOne;

    function showInstructorOne(){

        let arrow =  document.querySelector('.arrow1');
        arrow.classList.toggle("arrowToggle1")

        let showBio = document.querySelector('.bio1');
        showBio.classList.toggle("toggleBio1")
    }

     document.querySelector('.arrow2').onclick = showInstructorTwo;

    function showInstructorTwo(){

        let arrow =  document.querySelector('.arrow2');
        arrow.classList.toggle("arrowToggle2")

        let showBio = document.querySelector('.bio2');
        showBio.classList.toggle("toggleBio2")

    }



