/* Menu Toogle */
let menu = document.querySelector("#menu");
let menu_bar = document.querySelector("#menu-bar");

menu_bar.addEventListener("click", function () {
  menu.classList.toggle("menu__toggle");
});

menu.addEventListener("click", function () {
  menu.classList.toggle("menu__toggle");
});

/* Form Validate */
let contactForm = document.querySelector("#form");
let inputs = document.querySelectorAll("input[required]");

inputs.forEach((input) => {
  const span = document.createElement("span");
  span.id = input.name;
  span.textContent = input.title;
  span.classList.add("contact-form-error", "none");
  input.insertAdjacentElement("afterend", span);
});

document.addEventListener("keyup", (e) => {
  if (e.target.matches("input[required]")) {
  }
});
