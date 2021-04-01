const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list");
const body = document.querySelector("body");
let menuOpen = false;

hamburger.addEventListener("click", (e) => {
  if (!menuOpen) {
    hamburger.style.backgroundImage = "url(./images/icon-close.svg)";
    nav.classList.add("show");
    menuOpen = true;
  } else {
    hamburger.style.backgroundImage = "url(./images/icon-hamburger.svg)";
    nav.classList.remove("show");
    menuOpen = false;
  }
});

const expand = (e) => {
  const subNav = e.target.parentNode.parentNode.parentNode.children[1];
  const arrow = e.target.parentNode.children[1];

  if (subNav.style.display !== "block") {
    subNav.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  } else {
    subNav.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }
};
