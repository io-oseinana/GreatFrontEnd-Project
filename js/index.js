const emailInput = document.querySelector('.subscribe-input');
const submitButton = document.querySelector('.subscribe-btn');
const hintText = document.querySelector('.hint-text');

// Regex for checking whether the email is valid or not

const validEmail = (email) => {
  const reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return reg.test(String(email).toLowerCase());
};

//  Notification function for displaying success or failure message

const notification = document.querySelector('.toast-notification');
const messageText = document.querySelector('.message');
const badgeText = document.querySelector('.badge-text');

const notifySuccess = (badgeText, messageText) => {
  badgeText.textContent = 'Success';
  badgeText.classList.add('success');

  messageText.textContent = 'Subscription successful! Please check your email to confirm.';
  messageText.classList.add('success');

  notification.style.opacity = '1';
  notification.classList.add('success');
  setTimeout(() => {
    notification.remove();
  }, 3000);
};

const notifyError = (badgeText, messageText) => {
  badgeText.textContent = 'Error';
  badgeText.classList.add('failure');

  messageText.textContent = 'Failed to subscribe. Please ensure your email is correct or try again later.';
  messageText.classList.add('failure');

  notification.style.opacity = '1';
  notification.style.maxWidth = '580px';
  notification.classList.add('failure');
  setTimeout(() => {
    notification.remove();
  }, 3000);
};

// Event listeners for the submit button and email input field

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const hintMsg1 = 'Please enter valid email address.';
  const hintMsg2 = 'Email address is required.';

  if (emailInput.value === '') { // checking for empty string means that we should not send email if the input is empty
    hintText.textContent = hintMsg2;
    hintText.style.opacity = '1';
    emailInput.style.boxShadow = ' 0px 0px 0px 4px rgba(217, 45, 32, 0.12), 0px 0px 0px 1px rgba(217, 45, 32, 1)'; // changing boxShadow if input field to focus user attention
  } else if (!validEmail(emailInput.value)) { // using Regex to check email input  and validate it
    hintText.textContent = hintMsg1;
    hintText.style.opacity = '1';
  } else {
    hintText.textContent = '';
    hintText.style.opacity = '0';
    emailInput.value = '';

    // Send email to the user with the email address

    // The URL from which to fetch the email
    const url = new URL('https://mail.google.com/mail/');

    const sendEmail = async (email) => {
      email = url.searchParams.get('email');
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
          }),
        });
        if (response.status === 200) {
          notifySuccess(badgeText, messageText);
        } else {
          notifyError(badgeText, messageText);
        }
      } catch (error) {
        notifyError(badgeText, messageText);
      }
    };
    sendEmail(emailInput.value);
  }
});

// Remove the hint text when the user starts typing

emailInput.addEventListener('focus', () => {
  hintText.textContent = '';
  hintText.style.opacity = '0';
});
