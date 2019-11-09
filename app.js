const navSlide = () => {
  window.onload = function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const page = document.querySelector(".page-grid");
    const navOverlay = document.querySelector(".nav-overlay");
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      navOverlay.classList.toggle("nav-open");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index /
            7 +
            0.1}s`;
        }
        console.log(index / 7);
      });

      burger.classList.toggle("toggle");
    });
  };
};

const app = () => {
  navSlide();
};

app();
