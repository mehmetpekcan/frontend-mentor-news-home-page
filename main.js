const hamburgerMenuOpenButton = document.querySelector(".hamburger-menu-open");
const hamburgerMenuCloseButton = document.querySelector(".close-icon");

hamburgerMenuOpenButton.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".hamburger-menu-wrapper");
  mobileMenu.classList.add("open");
});

hamburgerMenuCloseButton.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".hamburger-menu-wrapper");
  mobileMenu.classList.remove("open");
});
