document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    document.getElementById('playBtn').addEventListener('click', () => {
        alert('Play button clicked. Redirect to game page.');
    });

    document.getElementById('continueBtn').addEventListener('click', () => {
        alert('Continue button clicked. Redirect to continue game.');
    });

    document.getElementById('levelsBtn').addEventListener('click', () => {
        alert('Levels button clicked. Redirect to levels page.');
    });
});
