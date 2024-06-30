document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const answer = urlParams.get('answer');
    const puzzleImage = document.getElementById('puzzle-image');
    const answerInput = document.getElementById('answer-input');

    puzzleImage.src = `img/puzzles_clear/${urlParams.get('id')}.png`;

    answer.split('').forEach(char => {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.disabled = char === ' ';
        input.style.backgroundColor = char === ' ' ? 'transparent' : '';
        answerInput.appendChild(input);
    });

    document.getElementById('puzzle-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const userAnswer = Array.from(answerInput.querySelectorAll('input'))
                                .map(input => input.value || (input.disabled ? ' ' : ''))
                                .join('');
        if (userAnswer === answer) {
            alert('Correct!');
        } else {
            alert('Try again!');
        }
    });
});
