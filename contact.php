<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact RePuzzy</title>
    <link rel="stylesheet" href="contact.css">
</head>

<body>
    <?php
        session_start();
        require 'connection.php';
        $connect = Connect();
        
        try {
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                // echo '<pre>';
                // print_r($_POST);
                // echo '</pre>';

                // Register
                if (isset($_POST['ticketSubmit'])) {
                    $name = $_POST['name'];
                    $email = $_POST['email'];
                    $msg = $_POST['message'];
    
                    $query = "INSERT INTO tickets(`name`, `email`, `message`)
                              VALUES (:name, :email, :msg)";
    
                    $query_run = $connect->prepare($query);
                    $data = [
                        ':name' => $name,
                        ':email' => $email,
                        ':msg' => $msg
                    ];
                    $query_execute = $query_run->execute($data);
    
                    echo '<script>alert("Submitted ticket")</script>';
                    header("Location: submitted_ticket.html");
                    exit();
                }
        }
        } catch (Exception $e) {            
            echo '<script>alert("Error submitting ticket")</script>';
            echo $e->getMessage();
        }
    ?>
    
    <nav class="navbar">
        <div class="nav-content">
            <a href="home.html" class="nav-logo">
                <img src="img/logo-2.png" alt="RePuzzy Logo">
            </a>

            <div class="nav-links" id="navLinks">
                <a href="home.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
                <a href="index.php">Log Out</a>
            </div>

            <div class="hamburger" id="hamburger">
                <img src="img/hamburger.png" alt="Cat" class="cat">
            </div>
        </div>
    </nav>

    <div class="header-design">
        <img src="img/header.png" alt="Header Design">
    </div>

    <main>
        <section class="contact" id="contact">
            <h2 class="header1">Contact Us</h2>
            <p>If you have any questions or feedback, feel free to reach out to us using the form below or through our
                contact information provided.</p>

            <form id="contactForm" method="POST" action="">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                
                <button class="submit-button" name="ticketSubmit" id="ticketSubmit" value="ticket">Send Message</button>
            </form>

            <p id="confirmationMessage" style="display:none; color: green; font-weight: bold;">Your message has been
                sent successfully!</p>


            <h3 class="header2">Other Ways to Reach Us</h3>
            <p><span>Email: </span><a href="mailto:contact@repuzzy.com">contact@repuzzy.com</a></p>
            <p><span>Phone: </span>+63 912 345 6789</p>
            <p><span>Address: </span>1234 Puzzle St, Manila, Philippines</p>

            <h3 class="header2">Follow Us</h3>
            <ul class="social-media">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </section>
    </main>

    <div class="bottom-design">
        <img src="img/footer-2.png" alt="Bottom Design">
    </div>

    <footer>
        <p>&copy; 2024 RePuzzy. All rights reserved.</p>
        <p>Designed to enhance literary comprehension and cognitive skills.</p>
    </footer>

    <script src="contact.js"></script>
</body>

</html>