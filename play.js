$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3, // Default number of slides to show
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2 // Number of slides to show at medium screens
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1 // Number of slides to show at small screens
                }
            }
        ]
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('fetch_puzzles.php')
        .then(response => response.json())
        .then(data => {
            const carousel = document.getElementById('carousel');
            data.forEach(puzzle => {
                const puzzleItem = document.createElement('div');
                puzzleItem.classList.add('carousel-item');
                puzzleItem.id = `puzzle${puzzle.id}`;

                const img = document.createElement('img');
                img.src = `img/puzzles/${puzzle.imageRef}`;
                img.alt = `Puzzle ${puzzle.id}`;

                const button = document.createElement('button');
                button.classList.add('solve-button');
                button.textContent = 'Solve';
                button.addEventListener('click', function() {
                    const queryString = `?id=${puzzle.id}&answer=${encodeURIComponent(puzzle.answer)}`;
                    window.location.href = `puzzle.html${queryString}`;
                });

                puzzleItem.appendChild(img);
                puzzleItem.appendChild(button);
                carousel.appendChild(puzzleItem);
            });

            // Reinitialize slick after adding items dynamically
            $('.carousel').slick('unslick');
            $('.carousel').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        })
        .catch(error => console.error('Error fetching puzzles:', error));
});
