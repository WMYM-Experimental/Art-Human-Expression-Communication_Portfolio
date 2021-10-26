// nav bar effect on scroll

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("static", window.scrollY > 0);
});

//ham menu effect-responsive design
const hamIcon = document.getElementById("ham-icon");
const hamMenu = document.getElementById("ham-menu");
const navbarLinks = document.querySelector(".navbar__links");
hamMenu.addEventListener("click", () => {
  hamIcon.innerHTML = "close";
  hamMenu.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});
