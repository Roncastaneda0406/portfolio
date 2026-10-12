import "./style.css";  

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


const musicBtn = document.getElementById("musicBtn");   
const bgVideo = document.getElementById("bgVideo");     
const header = document.getElementById("header");       

window.addEventListener("scroll", () => {
  musicBtn.dataset.scrolled = window.scrollY > 0;
  header.dataset.scrolled = window.scrollY > 0;
});

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  const isOpen = !mobileMenu.classList.contains("hidden");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "✕" : "☰";
});

musicBtn.addEventListener("click", () => {
  bgVideo.muted = !bgVideo.muted;
  musicBtn.textContent = bgVideo.muted ? "MUSIC: 🔇" : "MUSIC: 🔊";
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
  });
});