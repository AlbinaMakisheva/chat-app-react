<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');

$db = json_decode(file_get_contents('./dbChats.json'), true);

$req = json_decode(file_get_contents('php://input'), true);

$loggedUser= $req['id'];

$key = array_search($loggedUser, array_column($db, 'id'));

if ($key === false || $key === null) {
    echo json_encode(array('key'=>$key,'success' => false, 'chats'=>[]));
    exit();
}
echo json_encode(array( 'key'=> $key, 'chats'=>$db[$key]['chats']));
