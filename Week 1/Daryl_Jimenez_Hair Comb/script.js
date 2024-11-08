function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    var mobileMenu = document.querySelector('.mobile-menu');

    navLinks.classList.toggle('active'); 
    mobileMenu.classList.toggle('active'); 
}

document.addEventListener('click', function(e) {
    var mobileMenu = document.querySelector('.mobile-menu');
    var navToggle = document.querySelector('.nav-toggle');
    
    if (!navToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active'); 
    }
});

window.addEventListener('resize', function() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var navLinks = document.querySelector('.nav-links'); 
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active'); 
    }
});
