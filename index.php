<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RePuzzy</title>
    <link rel="stylesheet" href="styles.css">
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

                // Login
                if (isset($_POST['loginSubmit'])) {
                    echo '<script>alert("Logging in...")</script>';

                    $lUser = $_POST['loginUsername'];
                    $lPass = $_POST['loginPassword'];
    
                    $query = "SELECT * FROM user_details
                              WHERE username = :lUser OR email = :lUser";
                              
                    $query_run = $connect->prepare($query);
                    $query_run->bindParam(':lUser', $lUser);
                    $query_run->execute();
    
                    $user = $query_run->fetch(PDO::FETCH_ASSOC);
    
                    if ($user && $lPass == $user['password']) {
                        $_SESSION['user'] = $user['username'];
                        echo '<script>alert("Successful log in!")</script>';
                        // header("Location: " . $_SERVER['PHP_SELF']);
                        header("Location: home.html");
                        exit();
                    } else {
                        echo '<script>alert("Invalid username or password.")</script>';
                    }
                }

                // Register
                if (isset($_POST['registerSubmit'])) {
                    $rUser = $_POST['registerUsername'];
                    $rEmail = $_POST['registerEmail'];
                    $rPass = $_POST['registerPassword'];
                    // $rPass = password_hash($_POST['registerPassword'], PASSWORD_BCRYPT);
    
                    $query = "INSERT INTO user_details(`username`, `email`, `password`)
                              VALUES (:rUser, :rEmail, :rPass)";
    
                    $query_run = $connect->prepare($query);
                    $data = [
                        ':rUser' => $rUser,
                        ':rEmail' => $rEmail,
                        ':rPass' => $rPass
                    ];
                    $query_execute = $query_run->execute($data);
    
                    echo '<script>alert("Created account")</script>';
    
                    header("Location: " . $_SERVER['PHP_SELF']);
                    exit();
                }
        }
        } catch (Exception $e) {            
            echo '<script>alert("Error")</script>';
            echo $e->getMessage();
        }
    ?>

    <div class="container">
        <img src="img/1.png" alt="Logo" id="logo">
        <p>A Filipino Rebus Puzzle Platform for Enhancing Literary Comprehension of Learners</p>
        <button id="loginBtn">Start</button>
    </div>

    <!-- Login Modal -->
    <div id="loginModal" class="modal">
        <div class="modal-content">
            <form method="POST" action="">
                <p>Log In</p>
                <label for="loginUsername">Username or Email</label>
                <input type="text" name="loginUsername" id="loginUsername" required>
                <label for="loginPassword">Password</label>
                <input type="password" name="loginPassword" id="loginPassword" required>
                <button name="loginSubmit" id="loginSubmit" value="login">Log In</button>
                <div class="link" id="showRegister">Do not have an account? Create one.</div>
            </form>
        </div>
    </div>

    <!-- Register Modal -->
    <div id="registerModal" class="modal">
        <div class="modal-content">
            <form method="POST" action="">
                <p>Create an Account</p>
                <label for="registerUsername">Username</label>
                <input type="text" name="registerUsername" id="registerUsername" required>
                <label for="registerEmail">Email</label>
                <input type="email" name="registerEmail" id="registerEmail" required>
                <label for="registerPassword">Password</label>
                <input type="password" name="registerPassword" id="registerPassword" required>
                <label for="registerConfirmPassword">Confirm Password</label>
                <input type="password" name="registerConfirmPassword" id="registerConfirmPassword" required>
                <button name="registerSubmit" id="registerSubmit" value="register">Register</button>
            </form>
        </div>
    </div>

    <!-- Confirmation Modal -->
    <div id="confirmationModal" class="modal">
        <div class="modal-content">
            <p>Welcome to RePuzzy!</p>
            <h1>Your account has been successfully created. Enjoy Playing!</h1>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>

</html>