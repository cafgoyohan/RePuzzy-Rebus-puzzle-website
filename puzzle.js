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

//WIP start
document.addEventListener('DOMContentLoaded', function() {
    const puzzles = [
        { id: 'puzzle1', answer: 'araw-araw sweldo', index: 0 },
        { id: 'puzzle2', answer: 'champorado', index: 1  },
        { id: 'puzzle3', answer: 'love ko to', index: 2 },
        { id: 'puzzle4', answer: 'malaki ang ulo', index: 3 },
        { id: 'puzzle5', answer: 'bida ang saya', index: 4 },
        { id: 'puzzle6', answer: 'maliwanag ang buhay', index: 5 },
        { id: 'puzzle7', answer: 'sa ilalim ng puting ilaw', index: 6 },
        { id: 'puzzle8', answer: 'tulog mantika', index: 7 },
        { id: 'puzzle9', answer: 'baguio', index: 8 },
        { id: 'puzzle10', answer: 'bahaghari', index: 9 },
        { id: 'puzzle11', answer: 'kanin-tutong', index: 10 },
        { id: 'puzzle12', answer: 'panganay', index: 11 },
        { id: 'puzzle13', answer: 'santa mesa', index: 12 },
        { id: 'puzzle14', answer: 'pureza', index: 13 }
    ];

//WIP next and previous functions
function prevPage() {
    if (index > 0) {
        puzzles.forEach((puzzle, index) => {
            document.getElementById('nav-button').addEventListener('click', function() {
            index = index - 1;
            const queryString = `?id=${puzzle.id}&answer=${encodeURIComponent(puzzle.answer)}&index=${index}`;
            window.location.href = `puzzle.html${queryString}`;
        });
    });
    }
}

function nextPage() {
    if (index < puzzleImage.length - 1) {
        puzzles.forEach((puzzle, index) => {
            document.getElementById('nav-button').addEventListener('click', function() {
            index = index + 1;
            const queryString = `?id=${puzzle.id}&answer=${encodeURIComponent(puzzle.answer)}&index=${index}`;
            window.location.href = `puzzle.html${queryString}`;
        });
    });
    }
}

});