
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector(".reservation-form");
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevents actual form submission
            alert("Thank you! Your reservation has been received.");
            form.reset(); // Optional: reset the form after submission
        });
    });



    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
        alert("Thank you for your feedback! We truly appreciate it.");
        // Optionally, reset the form
        this.reset();
    });



document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const menuLinks = document.querySelectorAll('.mobile-menu-links a, .nav-links a');
    
    // Open menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    // Close menu when X is clicked
    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Handle all menu link clicks (both mobile and desktop)
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = link.getAttribute('href');
            
            // Only handle anchor links
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                // Close mobile menu if open
                mobileMenu.classList.remove('active');
                
                // Scroll to section
                if (targetId === '#') {
                    // Home link - scroll to top
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Other sections
                    const target = document.querySelector(targetId);
                    if (target) {
                        // Calculate position accounting for fixed header
                        const headerHeight = document.querySelector('nav').offsetHeight;
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });
    
    // Close menu when clicking outside content
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });

    // Form handling
    document.querySelector(".reservation-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you! Your reservation has been received.");
        this.reset();
    });

    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you for your feedback! We truly appreciate it.");
        this.reset();
    });
});