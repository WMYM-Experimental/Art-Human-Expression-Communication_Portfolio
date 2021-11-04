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
const eyes = document.querySelectorAll(".eye");

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
//eyes
eyes.forEach((eye) => {
  window.addEventListener("mousemove", (event) => {
    let x = eye.left + eye.x / 2;
    let y = eye.top + eye.y / 2;
    let rad = Math.atan2(event.x - x, event.x - y);
    let rot = rad * (180 / Math.PI) * -1 + 180;
    eye.style.webkit = "rotate(" + rot + "deg)";
    eye.style.moz = "rotate(" + rot + "deg)";
    eye.style.ms = "rotate(" + rot + "deg)";
    eye.style.transform = "rotate(" + rot + "deg)";
  });
});
