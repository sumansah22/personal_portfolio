const nav = document.getElementById("navbar");
document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// slide-up script

$(document).ready(function () {
  window.addEventListener("scroll", () => {
    if (window.scroll >= 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    $("scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
    });
  });
});

// // toogle menu/navbar script

$(document).ready(function () {
  $("#menu-btn").click(function () {
    $("#menu").toggleClass("show");
  });
});

// typing animation

$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "UX/UI Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

$(document).ready(function () {
  var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "UX/UI Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// owl carousel script

$(document).ready(function () {
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
