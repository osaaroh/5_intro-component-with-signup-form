var form = document.querySelector('free--trial-form');
var email = document.getElementById("email");
var errorIcon = document.querySelector('.error-icon');
var validationMessage = document.querySelector('.validation-message');

form.addEventListener("submit", e => {
    e.preventDefault();
    const emailValue = email.value;

    if (!validateEmail(emailValue)) {
        validationMessage.textContent = "Please enter valid email";
        validationMessage.style.color = 'hsl(0, 93%, 68%)';
        errorIcon.classList.add("visible");
        email.classList.add("error");
    } else {
        validationMessage.textContent = "Thank you!";
        validationMessage.style.color = 'hsl(0, 6%, 24%)';
        errorIcon.classList.remove("visible");
        email.classList.remove("error");
        email.value = "";
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}