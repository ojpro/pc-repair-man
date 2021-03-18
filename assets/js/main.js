// Friends Review Section with SwiperJS
var swiperColors = ['#ffd600', '#3497db', '#f70fdd', '#ff4343', '#b148dc', '#B5F02E', '#ffb900', '#8c8cd8',
  '#e3008c', '#607d88', '#2c3e50', '#795548'
]
var overlay = document.getElementById("swiperOverlay")

// Decalre Swipre Plugin
var testimonials = new Swiper('#testimonials-swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true
  },
  autoplay: {
    delay: 8000
  }
});
// Change Swipre backround every reload
// Change Swipre Container Background every swipe
testimonials.on('slideChange', function () {
  overlay.style.backgroundColor = swiperColors[Math.floor(Math.random(10) * swiperColors.length)];//! DRY
})
overlay.style.backgroundColor = swiperColors[Math.floor(Math.random(10) * swiperColors.length)];

// Google Map API
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}