document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const answer = urlParams.get('answer');
    const puzzleImage = document.getElementById('puzzle-image');
    const answerInput = document.getElementById('answer-input');

    puzzleImage.src = `img/puzzles_clear/${urlParams.get('id')}.png`;

    const inputs = [];
    answer.split('').forEach((char, index) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.disabled = char === ' ';
        input.style.backgroundColor = char === ' ' ? 'transparent' : '';
        input.dataset.index = index;
        answerInput.appendChild(input);
        inputs.push(input);

        input.addEventListener('input', function() {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // Move focus to the previous input if backspace is pressed and the current input is empty
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    document.getElementById('puzzle-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const userAnswer = Array.from(answerInput.querySelectorAll('input'))
                                .map(input => input.value || (input.disabled ? ' ' : ''))
                                .join('');
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popup-message');

        if (userAnswer === answer) {
            popupMessage.textContent = 'Sheesh! you are good at this.';
        } else {
            popupMessage.textContent = 'Nuh Uhh. Try Again!';
        }

        popup.style.display = 'block';
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
