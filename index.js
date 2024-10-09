
function comprar(url) {
    window.open(url, '_blank');
}

// Add event listener to burger-menu
const burger_menu = document.getElementById('burger-menu');
const second_line = document.getElementById('second-line');
const first_line = document.getElementById('first-line');
const last_line = document.getElementById('last-line');
const dropdown_menu = document.getElementById('dropdown-menu');
const button_call_us = document.getElementById('button-call-us');
const phones_menu = document.getElementById('phones-menu');


burger_menu.addEventListener('click', toggleMenu);
button_call_us.addEventListener('click', togglePhoneMenu);

function toggleMenu() {
    second_line.classList.toggle('menu-open');
    first_line.classList.toggle('menu-open');
    last_line.classList.toggle('menu-open');
    dropdown_menu.classList.toggle('dropdown-open');
}
function togglePhoneMenu() {
    phones_menu.classList.toggle('contact-open');
    button_call_us.classList.toggle('call-us-animation');
}

// main section carousel functionality 
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const dotsContainer = document.getElementById('dotsContainer');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalImages = images.length;
let currentIndex = 0;

images.forEach((_, index) => {
const dot = document.createElement('div');
dot.classList.add('dot');
if (index === 0) dot.classList.add('active');
dot.addEventListener('click', () => goToSlide(index));
dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.dot');

function updateCarousel() {
// Mover el carrusel
carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
// Actualizar los puntos activos
dots.forEach(dot => dot.classList.remove('active'));
dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

// Listeners para los botones
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

// Opcional: Automatización del carrusel
setInterval(showNextSlide, 5000); // Cambia la imagen cada 5 segundos


// scroll-maps

function scrollToLeft() {
    
    const scrollContainer = document.querySelector('.scrollable-map');
    scrollContainer.scrollBy({
    left: -600, // Ajusta la cantidad de desplazamiento según sea necesario
    behavior: 'smooth'
});
}

function scrollRight() {
    
    const scrollContainer = document.querySelector('.scrollable-map');
    scrollContainer.scrollBy({
        left: 600, // Ajusta la cantidad de desplazamiento según sea necesario
        behavior: 'smooth'
    });
}

// carousel functionality for the footer
const footerCarousel = document.querySelector('footer .carousel');
const footerImages = footerCarousel.querySelectorAll('img');
const footerDotsContainer = document.querySelector('footer .dots-container');

const footerPrevBtn = document.querySelector('footer #prevBtn');
const footerNextBtn = document.querySelector('footer #nextBtn');

footerPrevBtn.addEventListener('click', footerShowPrevSlide);
footerNextBtn.addEventListener('click', footerShowNextSlide);

let footerCurrentIndex = 0;
// Copy and paste the main section carousel functionality here
// and update the selectors and variable names to match the footer carousel

function footerShowNextSlide() {
    footerCurrentIndex = (footerCurrentIndex + 1) % footerImages.length;
    footerUpdateCarousel();
}

function footerShowPrevSlide() {
    footerCurrentIndex = (footerCurrentIndex - 1 + footerImages.length) % footerImages.length;
    footerUpdateCarousel();
}

function footerUpdateCarousel() {
    // Mover el carrusel
    footerCarousel.style.transform = `translateX(-${footerCurrentIndex * 100}%)`;
    // Actualizar los puntos activos
    footerDots.forEach(dot => dot.classList.remove('active'));
    footerDots[footerCurrentIndex].classList.add('active');
}

// Create dots for the footer carousel
footerImages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => footerGoToSlide(index));
    footerDotsContainer.appendChild(dot);
});

const footerDots = footerDotsContainer.querySelectorAll('.dot');

function footerGoToSlide(index) {
    footerCurrentIndex = index;
    footerUpdateCarousel();
}
