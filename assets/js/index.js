var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });

setTimeout(function() {
    var loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
}, 3000);