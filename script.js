"use strict";

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const stickyHeight = 500; // Set the height at which the navbar becomes sticky (in pixels)
  const iveria = this.document.querySelector(".iveria");
  const links = this.document.querySelectorAll(".page");
  const btnBooking = this.document.querySelector(".nav-booking");

  if (window.pageYOffset >= stickyHeight) {
    navbar.classList.add("sticky");
    iveria.style.display = "block";
    links.forEach((link) => {
      link.classList.add("page-link");
    });
    btnBooking.classList.add("booking-sticky");
  } else {
    navbar.classList.remove("sticky");
    iveria.style.display = "none";
    links.forEach((link) => {
      link.classList.remove("page-link");
    });
  }
});
