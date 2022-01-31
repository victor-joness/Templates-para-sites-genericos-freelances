let menu = window.document.querySelector("#menu-bars");
let navbar = window.document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    section.forEach(sec =>{
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute("id");

      if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove("active");
          document.querySelector("header .navbar a[href*="+id+"]").classList.add("active");
        });
      }
    });
}

let search = window.document.querySelector("#search-icon");
let searchPage = window.document.querySelector("#search-form");

search.onclick = () =>{
    searchPage.classList.add("active");
}

let CLOSE = window.document.querySelector("#close");

CLOSE.onclick = () =>{
    searchPage.classList.remove("active");
}







/* swiper slider script */

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });