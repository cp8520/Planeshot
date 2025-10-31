const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});
