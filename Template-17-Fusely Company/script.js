const options = window.document.querySelector(".options");
const buttons = window.document.querySelector(".buttons");
const menu = window.document.querySelector("#menu-btn");
const home = window.document.querySelector(".home");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    options.classList.toggle("active");
    buttons.classList.toggle("active");
    home.classList.toggle("active");
});