// Just to code faster ;).
let $ = (el) => document.querySelector(el);
// Costumers Review Section with SwiperJS
var swiperColors = [
  "#ffd600",
  "#3497db",
  "#f70fdd",
  "#ff4343",
  "#b148dc",
  "#B5F02E",
  "#ffb900",
  "#8c8cd8",
  "#e3008c",
  "#607d88",
  "#2c3e50",
  "#795548",
];
var overlay = $("#swiperOverlay");

// Decalre Swipre Plugin
var testimonials = new Swiper("#testimonials-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 8000,
  },
});
// Change Swipre Container Background every swipe
testimonials.on("slideChange", function () {
  overlay.style.backgroundColor =
    swiperColors[Math.floor(Math.random(10) * swiperColors.length)]; //! DRY
});
overlay.style.backgroundColor =
  swiperColors[Math.floor(Math.random(10) * swiperColors.length)];

// Contact Section
contactFields = $('input[type="text"],input[type="email"],textarea');
contactFields.onchange = function () {
  this.classList.add("changed");
};
// Initialize AOS
AOS.init({ delay: 400 });

// Navbar Toggler
let navbarLinks = $(".navbar_links");
$(".navbar_hamburger").onclick = function () {
  navbarLinks.classList.toggle("active");
};