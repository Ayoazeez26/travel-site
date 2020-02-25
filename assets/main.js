const hamburger = document.querySelector('.hamburger');
const smallNav = document.querySelector('.small-nav');

function openHamburger() {
    hamburger.classList.toggle('is-active');
    smallNav.classList.toggle('small-nav-toggle');
}