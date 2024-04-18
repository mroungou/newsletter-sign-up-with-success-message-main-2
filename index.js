const form = document.getElementById('form');
const dismissButton = document.getElementById('dismiss-button');

const mainPage = document.getElementById('main')
const successPage = document.getElementById('success-message');

function isEmail(emailValue) {
    // Regular expression for basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
}

function setError(element) {
    const inputField = element.parentElement;
    const errorMessage = inputField.querySelector('.error')

    errorMessage.innerText = 'Valid email is required'
    inputField.classList.add('has-error');
    inputField.classList.remove('error');
}

function setNoError(element) {
    const inputField = element.parentElement;
    const displayError = inputField.querySelector('.error');

    displayError.innerText = '';
    inputField.classList.add('not-error');
    inputField.classList.remove('has-error');
    
}

function handleSubmit(e) {
    e.preventDefault();

    const emailConfirmation = document.getElementById('email-confirmation');

    const data = {};
    const fields = e.target.querySelectorAll('input');

    for (const field of fields) {
        data[field.name] = field.value;
    }

    if (!isEmail(data.email)) {
        setError(email);
    } else {
        setNoError(email)
        mainPage.style.display = 'none';
        successPage.style.display = 'block';

        emailConfirmation.innerText = data.email;
    }

}

function returnToMainPage() {
    if(window.innerWidth !== 1440) {
        mainPage.style.display = 'block';
        successPage.style.display = 'none';
    } else {
        mainPage.style.display = 'grid';
        successPage.style.display = 'none';
    }

    form.reset();
}

form.addEventListener('submit', handleSubmit);
dismissButton.addEventListener('click', returnToMainPage)