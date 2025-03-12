const emailInput = document.querySelector('#email-input');
const emailError = document.querySelector('#email-error');
const newsletterForm = document.querySelector('#newsletter-form');

const toast = document.querySelector('#toast');

emailInput.addEventListener('input', function () {
    const {validity} = this;
    emailError.style.display = validity.valid ? 'none' : 'block';
    emailInput.classList.toggle('input__field--error', !validity.valid);

    if (validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email address.';
    } else if (validity.valueMissing) {
        emailError.textContent = 'Email address is required.';
    }
});


// newsletterForm.addEventListener('submit', (e) => {
//     e.preventDefault();
// }