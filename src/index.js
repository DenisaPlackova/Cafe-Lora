import './style.css';

console.log('funguju!');

const menuBtn = document.querySelector('#nav-btn');
const navigace = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  navigace.classList.toggle('nav-closed');
});

const allNavigace = document.querySelectorAll('nav a');

allNavigace.forEach((item) =>
  item.addEventListener('click', () => {
    navigace.classList.toggle('nav-closed');
  }),
);
