<?php
    session_start();
    require 'connection.php';
    $connect = Connect();

    $sql = "SELECT * FROM levels WHERE 1";
    $stmt = $connect->query($sql);

    $puzzles = array();

    if ($stmt->rowCount() > 0)
    {
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
        {
            $puzzles[] = $row;
        }
    } else
    {
        echo json_encode(["message" => "0 puzzles returned"]);
        exit;
    }

    echo json_encode($puzzles);
?>
