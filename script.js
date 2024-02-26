function hideLogo() {
    logo.classList.add('hidden'); // Add 'hidden' class to apply the CSS transition
}

// Function to reveal the logo
function revealLogo() {
    logo.classList.remove('hidden'); // Remove 'hidden' class to reveal the logo
}

// Example: Hide the logo after 2 seconds
setTimeout(hideLogo, 2000);

// Example: Reveal the logo after 4 seconds
setTimeout(revealLogo, 4000)

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically switch slides every 5 seconds
setInterval(nextSlide, 5000);
const logo = document.getElementById('logo');

// Function to toggle logo visibility with animation
function toggleLogo() {
    logo.style.display = (logo.style.display === 'none') ? 'inline-block' : 'none';
}

// Call the function to toggle logo on page load
toggleLogo();