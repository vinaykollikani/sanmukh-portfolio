// Slider Animation Duplicates
const logosOne = document.querySelector('.logos_1').cloneNode(true);
document.querySelector('.slider_right').appendChild(logosOne);
const logosTwo = document.querySelector('.logos_2').cloneNode(true);
document.querySelector('.slider_left').appendChild(logosTwo);


// Nav Menu Button
const navMenu = document.querySelector('.nav-menu');
navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Mobile Screen Menu
const mobileScreenMenu = document.querySelector('.mobile-menu');
navMenu.addEventListener('click', () => {
  mobileScreenMenu.classList.toggle('active');
});