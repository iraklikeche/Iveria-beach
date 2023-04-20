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
    btnBooking.classList.remove("booking-sticky");
  }
});

function scrollElement(e) {
  let element = document.getElementById(`${e}`);
  element.scrollIntoView({ block: "start", behavior: "smooth" });
}

function loadMenu(menuFile) {
  const menuContainer = document.getElementById("menu-container");

  fetch(menuFile)
    .then((response) => response.text())
    .then((html) => {
      menuContainer.innerHTML = html;
    })
    .catch((error) => {
      console.warn(error);
    });
}

const allDayMenu = document.getElementById("allday-btn");
const drinksMenu = document.getElementById("drinks-btn");
const nonAlcoholMenu = document.getElementById("nonalcohol-btn");

allDayMenu.addEventListener("click", () => {
  loadMenu("./menu/allDayMenu.html");
  allDayMenu.classList.add("active");
  drinksMenu.classList.remove("active");
  nonAlcoholMenu.classList.remove("active");
});

drinksMenu.addEventListener("click", () => {
  loadMenu("./menu/drinksMenu.html");
  drinksMenu.classList.add("active");
  allDayMenu.classList.remove("active");
  nonAlcoholMenu.classList.remove("active");
});

nonAlcoholMenu.addEventListener("click", () => {
  loadMenu("./menu/nonAlco.html");
  nonAlcoholMenu.classList.add("active");
  allDayMenu.classList.remove("active");
  drinksMenu.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
  loadMenu("./menu/allDayMenu.html");
});
