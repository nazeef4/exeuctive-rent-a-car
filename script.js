// 'use strict';

// // Select the necessary elements
// const scrollBtn = document.getElementById('scroll-btn');
// const navbarLinks = document.getElementById('navbar-links');
// const overlay = document.getElementById('overlay');
// let prevScrollPos = window.pageYOffset;

// // Function to toggle the navbar visibility
// const toggleNavbar = () => {
//   navbarLinks.classList.toggle('active'); // Show/Hide navbar links
//   overlay.classList.toggle('active'); // Show/Hide overlay when navbar is open
// };

// // Scroll event to hide navbar on scroll down and show on scroll up
// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;

//   // Hide navbar on scroll down
//   if (prevScrollPos < currentScrollPos) {
//     navbarLinks.classList.remove('active'); // Hide navbar links
//     overlay.classList.remove('active'); // Hide overlay when navbar is hidden
//   } else {
//     navbarLinks.classList.add('active'); // Show navbar links when scrolling up
//     overlay.classList.add('active'); // Show overlay when navbar is visible
//   }

//   prevScrollPos = currentScrollPos;
// };

// // Button to toggle navbar on click
// scrollBtn.addEventListener('click', (e) => {
//   e.preventDefault(); // Prevent default anchor behavior
//   toggleNavbar(); // Toggle the vertical navbar visibility
// });

// // Close navbar when clicking the overlay (on mobile view)
// overlay.addEventListener('click', () => {
//   navbarLinks.classList.remove('active'); // Hide navbar
//   overlay.classList.remove('active'); // Hide overlay
// });
'use strict';

// Select the necessary elements
const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');
const overlay = document.querySelector('.overlay');

// Toggle the navbar visibility when checkbox is clicked
menuToggle.addEventListener('change', () => {
  navbarLinks.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close navbar when clicking the overlay (on mobile view)
overlay.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  overlay.classList.remove('active');
});
