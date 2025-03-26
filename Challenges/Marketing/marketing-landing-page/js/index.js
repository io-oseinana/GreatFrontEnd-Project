const navMenu = document.querySelector('#slideout-menu');
const menuBtn = document.querySelector('#mobile-menu-button');
const closeBtn = document.querySelector('#mobile-close-menu-button');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
});
