// // Dark mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");    

}

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

// Visitor counter
const countElement = document.getElementById('count');

update();

function update() {
	fetch('https://api.countapi.xyz/update/samcode/pen/?amount=1').then(res => res.json()).then(res => {
		countElement.innerHTML = res.value;
	})
}






