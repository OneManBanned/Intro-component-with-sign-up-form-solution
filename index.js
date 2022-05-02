const firstNameInput = document.querySelector('.firstName')
const lastNameInput = document.querySelector('.lastName')
const emailInput = document.querySelector('.email')
const passwordInput = document.querySelector('.password')

/*ERROR HANDLING*/

firstNameInput.addEventListener('invalid', (e) => {
    e.preventDefault();
    firstNameInput.classList.add('firstNameError')
    document.querySelector('.emptyMessageFirst').style.display = 'block'
    firstNameInput.placeholder = ''
});

lastNameInput.addEventListener('invalid', (e) => {
    e.preventDefault();
    lastNameInput.classList.add('lastNameError')
    document.querySelector('.emptyMessageLast').style.display = 'block'
    lastNameInput.placeholder = ''
});

emailInput.addEventListener('invalid', (e) => {
    if (emailInput.validity.valueMissing) {
        e.preventDefault();
        emailInput.classList.add('emailError')
        document.querySelector('.emptyMessageEmail').style.display = 'block'
        emailInput.placeholder = ''
    } else if (!emailInput.validity.patternMismatch) {
        e.preventDefault()
        emailInput.classList.add('emailError')
        const error = document.querySelector('.emptyMessageEmail')
        error.style.display = 'block'
        error.innerHTML = "Looks like this is not an email"
        emailInput.value = 'email@example/com'
    }
});

passwordInput.addEventListener('invalid', (e) => {
    e.preventDefault();
    passwordInput.classList.add('passwordError')
    document.querySelector('.emptyMessagePassword').style.display = 'block'
    passwordInput.placeholder = ''
});

/*RESET ON RETRY*/

firstNameInput.addEventListener('keypress', e => {
    document.querySelector('.emptyMessageFirst').style.display = 'none'
    firstNameInput.classList.remove('firstNameError')
})


lastNameInput.addEventListener('keypress', e => {
    document.querySelector('.emptyMessageLast').style.display = 'none'
    lastNameInput.classList.remove('lastNameError')
})

emailInput.addEventListener('keypress', e => {
    document.querySelector('.emptyMessageEmail').style.display = 'none'
    emailInput.classList.remove('emailError')
})


emailInput.addEventListener('focus', e => {
    emailInput.value = ''
})


passwordInput.addEventListener('keypress', e => {
    document.querySelector('.emptyMessagePassword').style.display = 'none'
    passwordInput.classList.remove('passwordError')
})

/*WINDOW RESIZE RESET*/

window.addEventListener('resize', e => {
    document.querySelector('.emptyMessageFirst').style.display = 'none';
    document.querySelector('.emptyMessageLast').style.display = 'none';
    document.querySelector('.emptyMessageEmail').style.display = 'none';
    document.querySelector('.emptyMessagePassword').style.display = 'none';
    firstNameInput.classList.remove('firstNameError');
    lastNameInput.classList.remove('lastNameError');
    emailInput.classList.remove('emailError');
    passwordInput.classList.remove('passwordError');
    firstNameInput.placeholder = 'First Name';
    lastNameInput.placeholder = 'Last Name';
    emailInput.placeholder = 'Email Address';
    passwordInput.placeholder = 'Password';
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
});






