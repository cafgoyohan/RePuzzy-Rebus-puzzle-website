document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('main .scroll-section');
    
    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
