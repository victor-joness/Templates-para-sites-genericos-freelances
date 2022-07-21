let menu = window.document.querySelector("#menu-btn");
let navbar1 = window.document.querySelector(".links");
let navbar2 = window.document.querySelector(".icons");
let home = document.querySelector(".home");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar1.classList.toggle("active");
    navbar2.classList.toggle("active");
    home.classList.toggle("active");
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar1.classList.remove('active');
    navbar2.classList.remove('active');
    home.classList.remove("active");
}

