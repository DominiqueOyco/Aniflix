const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('menu-index-items');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});