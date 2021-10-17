// nav bar effect on scroll

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("static", window.scrollY > 0);
});
