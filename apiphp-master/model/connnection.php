<?php
    $servername = "localhost";
    $username = "root";
    $password = "bcd127";
    $db = 'dbEscolaDS20201';
    

    $conn = new mysqli($servername, $username, $password, $db);
    $conn->set_charset('utf8');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;