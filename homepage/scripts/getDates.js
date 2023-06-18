// // Dark mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");    

}


// Year

// const date = new Date("2023");
// let year = date.getFullYear();

// document.getElementById('year').innerHTML = year;

// hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// window.onload=function(){
//     hamburger.addEventListener('click', toggleMenu);
//   }