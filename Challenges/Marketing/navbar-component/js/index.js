const header = document.querySelector('header');
const menuBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const menuContainer = document.querySelector('.nav_btn-toggle-menu');

menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('.nav_mobile');
  nav.classList.toggle('active');
  header.classList.toggle('active');
  menuContainer.classList.add('active');

  if (menuContainer.classList.contains('active')) {
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  } else {
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  }
});

closeBtn.addEventListener('click', () => {
  const nav = document.querySelector('.nav_mobile');
  nav.classList.remove('active');
  header.classList.remove('active');
  menuContainer.classList.remove('active');
  menuBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});
