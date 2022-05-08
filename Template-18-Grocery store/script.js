let menu = window.document.querySelector("#menu-bar");
let navbar = window.document.querySelector(".navbar");
let header = window.document.querySelector(".header-2");

menu.addEventListener('click', () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 150){
        header.classList.add("active");
    }else{
        header.classList.remove("active")
    }
}

function CountDown(){
    let now = new Date();

    document.getElementById('day').innerText = now.getDate();
    document.getElementById('hour').innerText = now.getHours();
    document.getElementById('minute').innerText = (now.getMinutes());
    document.getElementById('second').innerText = now.setSeconds();
}

setInterval(function(){
    CountDown();
},1000)