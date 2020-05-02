// Delayed scrolling to different sections of the page
// Modified from a tutorial found at
// https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2

const navBar = document.querySelector(".navbar");
const navContent = document.getElementById("navbarToggleExternalContent");

$('a[href^="#"]').on("click", function (event) {
  const target = $(this.getAttribute("href"));
  navContent.classList.remove("show");

  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - (navBar.scrollHeight - 9),
        },
        1000
      );
  }
});
