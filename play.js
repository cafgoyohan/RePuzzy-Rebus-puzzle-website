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

    puzzles.forEach(puzzle => {
        document.getElementById(puzzle.id).addEventListener('click', function() {
            const queryString = `?id=${puzzle.id}&answer=${encodeURIComponent(puzzle.answer)}`;
            window.location.href = `puzzle.html${queryString}`;
        });
    });
});

