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


