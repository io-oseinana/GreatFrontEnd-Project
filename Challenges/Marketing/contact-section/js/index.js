const nameField = document.querySelector('#name');
const nameError = document.querySelector('#name-error');

const emailField = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const messageField = document.querySelector('#message');
const messageError = document.querySelector('#message-error');
const charCount = document.querySelector('#char-count-value');


const toast = document.querySelector('#toaster');
const toastContent = document.querySelector('.toast__content');
const toastBadge = document.querySelector('.toast__content__badge');
const toastMessage = document.querySelector('.toast__content__message');

const contactForm = document.querySelector('#contact-form');
// Need to check if the field is empty

nameField.addEventListener('input', function () {
    if (nameField.value === '') {
        nameError.style.display = 'block';
        nameError.textContent = 'Name is required.';
    } else {
        nameError.style.display = 'none';
    }
});

// Email validation using HTML5 built-in validation

emailField.addEventListener('input', function () {
    const {validity} = this;
    emailError.style.display = validity.valid ? 'none' : 'block';
    emailError.classList.toggle('input__error', !validity.valid);

    if (validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email address.';
    } else if (validity.valueMissing) {
        emailError.textContent = 'Email address is required.';
    }
});


// Message field validation with character count and progress bar

const maxLength = 500;
const progressContainer = document.querySelector('#progress-container');
const progressBar = document.querySelector('#progress-bar');

messageField.addEventListener('input', function () {

    progressContainer.classList.add('progress');
    let text = messageField.value

    // Enforce max length
    if (text.length > maxLength) {
        text = text.substring(0, maxLength);
    }


    messageField.value = text;

    // Update character count display
    charCount.textContent = `${text.length}`;

    // Update progress bar dynamically
    const progress = (text.length / maxLength) * 100;
    progressBar.style.width = `${progress}%`;

    // Change progress bar color
    progressBar.style.backgroundColor = progress >= 90 ? 'red' : progress >= 70 ? 'orange' : 'green';

    // Show error if empty
    if (text === '') {
        messageError.style.display = 'block';
        messageError.textContent = 'Message is required.';
        progressContainer.classList.remove('progress');
    } else {
        messageError.style.display = 'none';
    }
});

// Form submission
const confirmation = document.querySelector('#confirmation');
const contactFormSection = document.querySelector('.contact-form-section');

contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
        const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameField.value,
                email: emailField.value,
                message: messageField.value
            }),
        })

        if (response.ok) {
            showToast(
                'Success',
                'toast__content__badge--success',
                'Submission successful! We will get back to you in 3-5 days via email.',
                'toast__content--success',
                'toast__content--success');

            contactForm.reset();
            contactForm.classList.add('hidden');
            progressContainer.classList.remove('progress');


            confirmation.style.display = 'flex';
            contactFormSection.classList.toggle('confirmed')

        } else {
            showToast(
                'Error',
                'toast__content__badge--success--error',
                ' Failed to submit. Please ensure your details are correct or try again later.',
                'toast__content--success--error',
                'toast__content--error');
        }
    } catch (error) {
        // Show toast with error message
        showToast(
            'Error',
            'toast__content__badge--error',
            error.message,
            'toast__content--error',
            'toast__content--error');
    }
})

const sendAnotherMessage = document.querySelector('#send-another-message');
sendAnotherMessage.addEventListener('click', function () {
    contactForm.classList.remove('hidden');
    contactForm.reset();
    confirmation.style.display = 'none';
    contactFormSection.classList.remove('confirmed');
})

/**
 * function to display a toast notification
 */
function showToast(badgeText, badgeTextClass, message, messageClass, toastContentClass) {
    toast.style.display = 'block';
    toastBadge.textContent = badgeText;
    toastMessage.textContent = message;
    toastContent.classList.toggle(toastContentClass)

    // Reset classes before adding a new one
    toastMessage.className = 'toast__content__message';
    toastMessage.classList.toggle(messageClass);

    // Auto-hide toast after a few seconds
    setTimeout(() => {
        toast.style.display = 'none';
        toastContent.classList.remove(toastContentClass);
    }, 5000);

}




