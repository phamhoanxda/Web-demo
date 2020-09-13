/* =====================================
             SERVICE
======================================*/
$(document).ready(function () {
  //animation on scroll
  new WOW().init();
});

/* =====================================
             WORK
======================================*/
$(function () {
  $("#work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    // other options
    gallery: {
      enabled: true,
    },
  });
});

/* =====================================
             TEAM
======================================*/

$(document).ready(function () {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

/* =====================================
             TESTIMONIALS
======================================*/

$(document).ready(function () {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});
