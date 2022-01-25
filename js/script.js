// nav bar effect on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("static", window.scrollY > 0);
});


//ham menu open and close effect-responsive design
const hamIcon = document.getElementById("ham-icon");
const hamMenu = document.getElementById("ham-menu");
const navbarLinks = document.querySelector(".navbar__links");
const hamMenuItems = document.querySelectorAll(".navbar__links a");
const sendBtn = document.querySelector(".send-btn");


function verifyActiveMenu() {
  if (hamMenu.classList.contains("active")) {
    hamIcon.innerHTML = "close";
  } else {
    hamIcon.innerHTML = "menu";
  }
}


hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navbarLinks.classList.toggle("active");
  verifyActiveMenu();
});


hamMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    navbarLinks.classList.remove("active");
    verifyActiveMenu();
  });
});
