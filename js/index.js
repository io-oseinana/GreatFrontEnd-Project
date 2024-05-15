const emailInput = document.querySelector('.subscribe-input');
const submitButton = document.querySelector('.subscribe-btn');
const hintText = document.querySelector('.hint-text');

const validEmail = (email) => {
  const reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return reg.test(String(email).toLowerCase());
};

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

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const hintMsg1 = 'Please enter valid email address.';
  const hintMsg2 = 'Email address is required.';

  if (emailInput.value === '') {
    hintText.textContent = hintMsg2;
    hintText.style.opacity = '1';
  } else if (!validEmail(emailInput.value)) {
    hintText.textContent = hintMsg1;
    hintText.style.opacity = '1';
  } else {
    hintText.textContent = '';
    hintText.style.opacity = '0';
    emailInput.value = '';
  }
});

emailInput.addEventListener('focus', () => {
  hintText.textContent = '';
  hintText.style.opacity = '0';
});
