const mobileNavDrawer = () => {
  window.onload = function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const body = document.querySelector("body");
    const navOverlay = document.querySelector(".nav-overlay");
    //const navOverlay = document.querySelector(".nav-overlay");
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      //navOverlay.classList.toggle("nav-open");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index /
            9}s`;
        }
        console.log(index / 7);
      });
      navOverlay.classList.toggle("nav-open");
      body.classList.toggle("prevent-scroll");
      burger.classList.toggle("toggle");
    });
  };
};

const app = () => {
  mobileNavDrawer();
};

app();
