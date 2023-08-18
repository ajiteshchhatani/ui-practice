const button = document.getElementById("menu-trigger");
const close_btn = document.getElementById("close-btn");
const mobile_nav_menu = document.getElementById("mobile-nav-container");
const mobile_menu_items = document.getElementById("mobile-menu-items");
const backdrop = document.getElementById("backdrop");

button.addEventListener("click", () => {
  mobile_nav_menu.classList.toggle("mobile-menu-items");
  backdrop.classList.toggle("backdrop");
});

close_btn.addEventListener("click", () => {
  mobile_nav_menu.classList.toggle("mobile-menu-items");
  backdrop.classList.toggle("backdrop");
});
