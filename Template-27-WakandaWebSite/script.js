let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let home = document.querySelector(".home");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active");
    home.classList.toggle("active");
});

