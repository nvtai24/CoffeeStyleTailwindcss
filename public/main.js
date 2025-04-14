const navbar = document.querySelector("#ct-nav");
const menuBtn = document.querySelector("#menu-icon");

document.addEventListener("click", (e) => {
  if (menuBtn.contains(e.target)) {
    navbar.classList.toggle("menu-expanded");
    navbar.classList.toggle("hidden");
  } else {
    if (navbar.classList.contains("menu-expanded")) {
      navbar.classList.toggle("hidden");
      navbar.classList.remove("menu-expanded");
    }
  }
});
