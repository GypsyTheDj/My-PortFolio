// Delayed scrolling to different sections of the page
// Modified from a tutorial found at
// https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

$("#contact-form").on("submit", function (e) {
  $("#contactFormModal").modal("show");
  e.preventDefault();
});

const norman = document.getElementById("norman");

window.onscroll = () => {
  if (window.screen.width > 992 && window.screen.width < 1200) {
    if (document.documentElement.scrollTop > 700) {
      norman.classList.add("break");
    } else {
      norman.style.transform = `translate(-8%, ${document.documentElement
        .scrollTop / 5}vh)`;
    }
  } else if (window.screen.width > 1200 && window.screen.width < 1500) {
    if (document.documentElement.scrollTop > 840) {
      norman.classList.add("break");
    } else {
      norman.style.transform = `translate(-10%, ${document.documentElement
        .scrollTop / 7}vh)`;
    }
  } else {
    if (document.documentElement.scrollTop > 1050) {
      norman.classList.add("break");
    } else {
      norman.style.transform = `translate(-15%, ${document.documentElement
        .scrollTop / 10}vh)`;
    }
  }
};
