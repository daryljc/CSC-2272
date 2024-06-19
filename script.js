// Function to toggle the mobile menu
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    var mobileMenu = document.querySelector('.mobile-menu');

    navLinks.classList.toggle('active'); // Toggle active class for .nav-links
    mobileMenu.classList.toggle('active'); // Toggle active class for .mobile-menu
}

// Close the mobile menu when clicking outside of it
document.addEventListener('click', function(e) {
    var mobileMenu = document.querySelector('.mobile-menu');
    var navToggle = document.querySelector('.nav-toggle');

    // Check if the clicked element is not part of the mobile menu or the nav toggle button
    if (!navToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active'); // Remove active class from nav-links as well
    }
});

// Event listener to close mobile menu on window resize
window.addEventListener('resize', function() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var navLinks = document.querySelector('.nav-links'); // Add navLinks selection here
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active'); // Remove active class from nav-links as well
    }
});
