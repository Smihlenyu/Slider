document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-btn.next",
      prevEl: ".swiper-btn.prev",
    },
    pagination: { el: ".swiper-pagi", clickable: true },
  });
});
