<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');

$db = json_decode(file_get_contents('./dbUsers.json'), true);

$req = json_decode(file_get_contents('php://input'), true);

if (!isset($req['tel']) || !isset($req['passwd'])) {
    echo json_encode(array('success' => false, 'message' => 'Missing phone number or password'));
    exit();
}

//get data
$tel = intval($req['tel']);
$passwd = intval($req['passwd']);

if (!preg_match("/^[0-9]+$/", $tel) || !preg_match("/^[0-9]+$/", $passwd)) {
    echo json_encode(array('success' => false, 'message' => 'Invalid  format'));
    exit();
}

// find specific user
$telKey = array_search($tel, array_column($db, 'tel'));


if ($telKey === false || $telKey === null) {
    echo json_encode(array('key'=>$telKey,'success' => false, 'message' => 'User not found'));
    exit();
}

// validating passwd
if ($db[$telKey]['passwd'] !== $passwd) {
    echo json_encode(array('key'=> $telKey, 'success' => false, 'message' => 'Incorrect password'));
    exit();
}

//return resp
if($tel === $db[$telKey]['tel'] && $passwd === $db[$telKey]['passwd']){
    $loggedUser= $db[$telKey]['id'];
    echo json_encode(array('success' => true, 'user'=> $loggedUser));
}