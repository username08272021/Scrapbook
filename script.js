// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

document.getElementById('nextButton').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

document.getElementById('prevButton').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000); // Change slide every 5 seconds

// Background Music Control
const backgroundMusic = document.getElementById('backgroundMusic');

// Automatically play music when the page loads
window.addEventListener('load', () => {
  backgroundMusic.play();
});

// Optional: Add a play/pause button
const musicButton = document.createElement('button');
musicButton.textContent = 'Pause Music';
musicButton.style.position = 'fixed';
musicButton.style.bottom = '20px';
musicButton.style.right = '20px';
musicButton.style.padding = '10px 20px';
musicButton.style.backgroundColor = 'rgb(82, 194, 112)';
musicButton.style.color = 'white';
musicButton.style.border = 'none';
musicButton.style.borderRadius = '5px';
musicButton.style.cursor = 'pointer';
document.body.appendChild(musicButton);

musicButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicButton.textContent = 'Pause Music';
  } else {
    backgroundMusic.pause();
    musicButton.textContent = 'Play Music';
  }
});