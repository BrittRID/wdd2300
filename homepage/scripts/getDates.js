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


// Number of visits on page
let visitorCount = localStorage.getItem("visitorCount") || 0;

        // Increment the visitor count by 1
        visitorCount++;
        
        // Update the visitor count on the page
        document.getElementById("visitorCount").textContent = visitorCount;

        // Store the updated visitor count in local storage
        localStorage.setItem("visitorCount", visitorCount);









