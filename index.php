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
        require 'connection.php';
        $connect = Connect();
        
        try {
            if (isset($_POST['registerSubmit'])) {
                $rUser = $_POST['registerUsername'];
                $rEmail = $_POST['registerEmail'];
                $rPass = $_POST['registerPassword'];
                // $rDate = date('Y-m-d H:i:s');

                $query = "INSERT INTO user_details(`username`, `email`, `password`)
                VALUES (:rUser, :rEmail, :rPass)";
            
                $query_run = $connect->prepare($query);
                $data = [
                    ':rUser' => $rUser,
                    ':rEmail' => $rEmail,
                    ':rPass' => $rPass,
                    // ':rDate' => $rDate
                ];
                $query_execute = $query_run->execute($data);
                
                echo '<script>alert("Created account")</script>';
        }
        } catch (Exception $e) {
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
            <p>Log In</p>
            <label for="loginUsername">Username</label>
            <input type="text" id="loginUsername" required>
            <label for="loginEmail">Email</label>
            <input type="email" id="loginEmail" required>
            <label for="loginPassword">Password</label>
            <input type="password" id="loginPassword" required>
            <button id="loginSubmit">Log In</button>
            <div class="link" id="showRegister">Do not have an account? Create one.</div>
        </div>
    </div>

    <!-- Register Modal -->
    <div id="registerModal" class="modal">
        <div class="modal-content">
            <form method="post" action="?">
                <p>Create an Account</p>
                <label for="registerUsername">Username</label>
                <input type="text" name="registerUsername" id="registerUsername" required>
                <label for="registerEmail">Email</label>
                <input type="email" name="registerEmail" id="registerEmail" required>
                <label for="registerPassword">Password</label>
                <input type="password" name="registerPassword" id="registerPassword" required>
                <label for="registerConfirmPassword">Confirm Password</label>
                <input type="password" name="registerConfirmPassword" id="registerConfirmPassword" required>
                <button name="registerSubmit" id="registerSubmit">Register</button>
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