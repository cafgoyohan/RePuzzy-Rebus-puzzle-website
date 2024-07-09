document.addEventListener('DOMContentLoaded', function() {
    const puzzles = [
        { id: 'puzzle1', answer: 'araw-araw sweldo' },
        { id: 'puzzle2', answer: 'champorado' },
        { id: 'puzzle3', answer: 'love ko to' },
        { id: 'puzzle4', answer: 'malaki ang ulo' },
        { id: 'puzzle5', answer: 'bida ang saya' },
        { id: 'puzzle6', answer: 'maliwanag ang buhay' },
        { id: 'puzzle7', answer: 'sa ilalim ng puting ilaw' },
        { id: 'puzzle8', answer: 'tulog mantika' },
        { id: 'puzzle9', answer: 'baguio' },
        { id: 'puzzle10', answer: 'bahaghari' },
        { id: 'puzzle11', answer: 'kanin-tutong' },
        { id: 'puzzle12', answer: 'panganay' },
        { id: 'puzzle13', answer: 'santa mesa' },
        { id: 'puzzle14', answer: 'pureza' }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const currentPuzzleId = urlParams.get('id');
    const currentPuzzleIndex = puzzles.findIndex(p => p.id === currentPuzzleId);
    const answer = urlParams.get('answer');
    const puzzleImage = document.getElementById('puzzle-image');
    const answerInput = document.getElementById('answer-input');

    if (currentPuzzleIndex !== -1) {
        const currentPuzzle = puzzles[currentPuzzleIndex];
        puzzleImage.src = `img/puzzles_clear/${currentPuzzle.id}.png`;

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

        // Navigation buttons
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        prevButton.onclick = function() {
            const prevPuzzleIndex = (currentPuzzleIndex - 1 + puzzles.length) % puzzles.length;
            const prevPuzzle = puzzles[prevPuzzleIndex];
            const queryString = `?id=${prevPuzzle.id}&answer=${encodeURIComponent(prevPuzzle.answer)}`;
            window.location.href = `puzzle.html${queryString}`;
        };

        nextButton.onclick = function() {
            const nextPuzzleIndex = (currentPuzzleIndex + 1) % puzzles.length;
            const nextPuzzle = puzzles[nextPuzzleIndex];
            const queryString = `?id=${nextPuzzle.id}&answer=${encodeURIComponent(nextPuzzle.answer)}`;
            window.location.href = `puzzle.html${queryString}`;
        };
    }
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
