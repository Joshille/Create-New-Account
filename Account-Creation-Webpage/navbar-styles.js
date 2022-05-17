const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".myNavbar-menu");
const navLink = document.querySelectorAll(".MyNav-link");

/* to display hamburger menu */
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
/* to close hamburger menu when any link is clicked */
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
