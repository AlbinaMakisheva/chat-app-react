<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type: application/json');

$db= './dbUsers.json';

if(file_exists($db)){
    $data= file_get_contents($db);
    echo $data;
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
    echo "NOT FOUND";
}


