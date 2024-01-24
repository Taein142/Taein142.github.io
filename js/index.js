// const imageSlider = document.getElementById('image-slider');
// let currentIndex = 0;

// function showSlide(index) {
//     const translateValue = -index * 100 + '%';
//     imageSlider.style.transform = 'translateX(' + translateValue + ')';
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % imageSlider.childElementCount;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex = (currentIndex - 1 + imageSlider.childElementCount) % imageSlider.childElementCount;
//     showSlide(currentIndex);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     setInterval(nextSlide, 5000); // 자동으로 슬라이드 전환 (5초마다)
// });