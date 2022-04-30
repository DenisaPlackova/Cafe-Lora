import './style.css';

console.log('funguju!');

/* schovávání navigae*/
const menuBtn = document.querySelector('#nav-btn');
const navigace = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  navigace.classList.toggle('nav-closed');
});

const allNavigace = document.querySelectorAll('nav a');

allNavigace.forEach((item) =>
  item.addEventListener('click', () => {
    navigace.classList.add('nav-closed');
  }),
);

/*objednávání*/

const objednavka = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');

let ordered = false;
objednavka.addEventListener('click', () => {
  if (!ordered) {
    objednavka.textContent = 'Zrušit';
    drinkCup.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    objednavka.textContent = 'Objednat';
    drinkCup.classList.remove('drink__cup--selected');
    ordered = false;
  }
});
