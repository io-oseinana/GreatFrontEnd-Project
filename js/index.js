const emailInput = document.querySelector('.subscribe-input');
const submitButton = document.querySelector('.subscribe-btn');
const hintText = document.querySelector('.hint-text');

const validEmail = (email) => {
  const reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return reg.test(String(email).toLowerCase());
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
    
});

emailInput.addEventListener('focus', () => {
  hintText.textContent = '';
  hintText.style.opacity = '0';
});
