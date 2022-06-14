let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let home = document.querySelector(".home");

menu.onclick = function(){
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  home.classList.toggle('active');
}

window.onscroll = function(){
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  home.classList.remove('active');
}