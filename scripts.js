// Get elements
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const confirmationModal = document.getElementById('confirmationModal');
const showRegister = document.getElementById('showRegister');
const loginSubmit = document.getElementById('loginSubmit');
const registerSubmit = document.getElementById('registerSubmit');

// Show login modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Switch to register modal from login modal
showRegister.addEventListener('click', () => {
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
});

// Close modals by clicking outside
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    } else if (event.target === registerModal) {
        registerModal.style.display = 'none';
    } else if (event.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
});

// Validate registration form and show confirmation modal
registerSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (username && email && password && confirmPassword && password === confirmPassword) {
        registerModal.style.display = 'none';
        confirmationModal.style.display = 'flex';
    } else {
        alert('Please fill in all fields and ensure passwords match.');
    }
});
