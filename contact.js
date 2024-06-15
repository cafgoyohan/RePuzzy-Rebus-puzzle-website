document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('zfVQzio5wOn-jmQtU');

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email
        emailjs.send('service_repuzzy', 'template_default', {
            from_name: name,
            reply_to: email,
            message: message,
        })
        .then((response) => {
            alert('Message sent successfully!');
            contactForm.reset();
        })
        .catch((error) => {
            alert('Failed to send the message, please try again later.');
            console.error('EmailJS Error:', error);
        });
    });
});
