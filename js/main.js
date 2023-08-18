(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(document).ready(function () {
    function applyNavbarStyles(scrollTop) {
      if (scrollTop > 300) {
        $(".sticky-top").addClass("bg-white shadow-sm").css("top", "0");
        $(".navbar-nav .nav-link")
          .removeClass("nav-link")
          .addClass("nav-link2");
        $(".collapse.navbar-collapse2")
          .removeClass("navbar-collapse2")
          .addClass("navbar-collapse");
      } else {
        $(".sticky-top").removeClass("bg-white shadow-sm").css("top", "-150px");
        $(".navbar-nav .nav-link2")
          .removeClass("nav-link2")
          .addClass("nav-link");
        $(".collapse.navbar-collapse")
          .removeClass("navbar-collapse")
          .addClass("navbar-collapse2");
      }
    }

    // Initially applying the styles based on the initial scroll position
    var initialScrollTop = $(window).scrollTop();
    applyNavbarStyles(initialScrollTop);

    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();
      applyNavbarStyles(scrollTop);
    });
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 450) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // testimonial
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
})(jQuery);

/* ========== Navigation ========= */
const navLinks = document.querySelectorAll(".nav-item.nav-link");
function updateActiveNavLink() {
  const scrollPosition = window.scrollY;
  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}
window.addEventListener("scroll", updateActiveNavLink);
updateActiveNavLink();
