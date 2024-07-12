<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RePuzzy: Play</title>
    <link rel="stylesheet" href="play.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>
</head>
<body>

    <div class="header">
        <button class="back-button" onclick="window.location.href='home.html'">Back</button>
        <div class="logo-container">
            <img src="img/logo-2.png" alt="RePuzzy Logo" class="header-logo">
        </div>
    </div>

    <div class="title">
        <img src="img/puzzle-title.png" alt="Please choose a puzzle to solve:">
    </div>

    <div class="carousel" id="carousel">
        <!-- Puzzles are read from db -->
    </div>

    <div class="bottom-design">
        <img src="img/footer.png" alt="Bottom Design">
    </div>

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <script src="play.js"></script>
</body>
</html>
