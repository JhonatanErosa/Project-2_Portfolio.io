const hamburger = document.querySelector('.hamburger');
const mainLinks = document.querySelector('#links-nav');
const linksPopUp = document.querySelectorAll('.menu-list');
const closeIcon = document.querySelector('.close-button');

function openWindow () {
    mainLinks.classList.replace('links', 'links-menu');
    mainLinks.style.left = '0';
}

function closeWindow () {
    mainLinks.classList.replace('links-menu', 'links');
    mainLinks.classList.remove('display-center');
}

hamburger.addEventListener('click', openWindow);
closeIcon.addEventListener('click', closeWindow);
