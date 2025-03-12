const emailInput = document.querySelector('#email-input');
const emailError = document.querySelector('#email-error');
const newsletterForm = document.querySelector('#newsletter-form');

const toast = document.querySelector('#toaster');
const toastContent = document.querySelector('.toast__content');
const toastBadge = document.querySelector('.toast__content__badge');
const toastMessage = document.querySelector('.toast__content__message');

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


newsletterForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
        const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/newsletter', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: emailInput.value}),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        // Show toast with success message
        showToast('Success', 'toast__content__badge--success', result.message, 'toast__content--success', 'toast__content--success');

        // Clear input field after successful submission
        emailInput.value = '';

    } catch (error) {
        // Show toast with error message
        showToast('Error', 'toast__content__badge--error', error.message, 'toast__content--error', 'toast__content--error');
    }
});

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
