document.getElementById('year').textContent = new Date().getFullYear();
const button = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');
button.addEventListener('click', () => links.classList.toggle('open'));
