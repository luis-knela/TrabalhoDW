const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordconfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkinputs();
})

function checkinputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordconfirmationValue = passwordconfirmation.value;


    if (usernameValue === '') {
        setErrorFor(username, 'campo obrigatorio');
    } else {
        setSuccessFor(username);
    }


    if (emailValue === '') {
        setErrorFor(email, 'campo obrigatorio');
    }
    else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'email invalido');
    } else { 
        setSuccessFor(email); 
    }


    if (passwordValue === '') {
        setErrorFor(password, 'campo obrigatorio');
    }
    else if (passwordValue.length < 8) {
        setErrorFor(password, 'minimo oito caracteres');
    } else { 
        setSuccessFor(password) 
    }


    if (passwordconfirmationValue === '') {
        setErrorFor(passwordconfirmation, 'campo obrigatorio');
    }
    else if (passwordconfirmationValue !== passwordValue) {
        setErrorFor(passwordconfirmation, 'senhas não conferem');
    } else { 
        setSuccessFor(passwordconfirmation); 
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}