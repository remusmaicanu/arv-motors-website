let slideIndex = 0;

// Function to move the slides
function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Update the slide index
    slideIndex += n;

    // Loop back to the first slide if at the end
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    // Loop to the last slide if at the beginning
    else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Move the slides container
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

let startX = 0;
let isDragging = false;

const slider = document.querySelector('.slider');

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
        moveSlide(diff > 0 ? 1 : -1);
        isDragging = false;
    }
});

slider.addEventListener('touchend', () => {
    isDragging = false;
});

let bookingSlideIndex = 0;

function moveBookingSlide(n) {
    const bookingSlides = document.querySelector('.booking-slides');
    const totalBookingSlides = document.querySelectorAll('.booking-slide').length;

    bookingSlideIndex += n;

    if (bookingSlideIndex >= totalBookingSlides) {
        bookingSlideIndex = 0;
    } else if (bookingSlideIndex < 0) {
        bookingSlideIndex = totalBookingSlides - 1;
    }

    bookingSlides.style.transform = `translateX(${-bookingSlideIndex * 100}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    moveBookingSlide(1);
}, 5000);