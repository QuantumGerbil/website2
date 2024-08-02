document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form by its ID
    const contactForm = document.getElementById('contact-form');

    if(contactForm){
    // Add a submit event listener to the contact form
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get the values of the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Log the form data to the console
        console.log('Form submitted:', { name, email, message });

        // Display an alert to the user
        alert('Thanks for your message! I\'ll get back to you faster than you can say "Totoro"!');

        // Reset the form fields
        contactForm.reset();
    });
    }
});
