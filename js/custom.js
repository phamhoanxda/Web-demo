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
/* =====================================
             STATS
======================================*/

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2500,
  });
});

/* =====================================
             CLIENTS
======================================*/

$(document).ready(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartspeed: 350,
    loop: true,
    autoplayHoverPause: true,
  });
});

/* ======================================
                 NAVIGATION BAR 
========================================= */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("nav").removeClass("vesco-top-nav");
      $("#back-to-top").fadeOut();
    } else {
      $("nav").addClass("vesco-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});

//smooth scroll
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    //get anf return id like #work, #about
    var section = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});
