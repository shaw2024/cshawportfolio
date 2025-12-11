// Optional JavaScript file for future enhancements
// Add interactive features here as needed

document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler (optional)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! This is a demo form.');
            contactForm.reset();
        });
    }
});
