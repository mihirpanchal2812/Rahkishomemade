// Smooth scroll to sections on nav click
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Optional: Add a fade-in effect for sections
window.addEventListener('scroll', function() {
    document.querySelectorAll('section').forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            section.style.opacity = '1';
        } else {
            section.style.opacity = '0';
        }
    });
});

// Carousel logic for menu and gallery
let currentIndex = 0;
const menuImages = document.querySelector('.menu-images');
const galleryImages = document.querySelector('.image-container');

document.querySelector('.menu-gallery .next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % menuImages.children.length;
    menuImages.scrollBy({ left: 200, behavior: 'smooth' });
});

document.querySelector('.menu-gallery .prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + menuImages.children.length) % menuImages.children.length;
    menuImages.scrollBy({ left: -200, behavior: 'smooth' });
});

document.querySelector('.gallery-images .next').addEventListener('click', () => {
    galleryImages.scrollBy({ left: 200, behavior: 'smooth' });
});

document.querySelector('.gallery-images .prev').addEventListener('click', () => {
    galleryImages.scrollBy({ left: -200, behavior: 'smooth' });
});
