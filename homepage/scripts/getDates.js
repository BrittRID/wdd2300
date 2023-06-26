// // Dark mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");    

}



// hamburger menu

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");


// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }
// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

// // Number of visits on page
// let visitorCount = localStorage.getItem("visitorCount") || 0;

//         // Increment the visitor count by 1
//         visitorCount++;
        
//         // Update the visitor count on the page
//         document.getElementById("visitorCount").textContent = visitorCount;

//         // Store the updated visitor count in local storage
//         localStorage.setItem("visitorCount", visitorCount);


function calculateDays() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    // Calculate the difference in milliseconds
    var diffInMs = Math.abs(endDate - startDate);

    // Convert milliseconds to days
    var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    document.getElementById('results').innerHTML = "Days between the dates: " + diffInDays;}