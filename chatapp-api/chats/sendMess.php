<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');

$db= json_decode(file_get_contents('./dbChats.json'), true);

$req= json_decode(file_get_contents('php://input'), true);

//get data
$name=$req['name'];
$mess= $req['mess'];
$emoji= $req['emoji'];
$loggedId= $req['loggedId'];

$idKey = array_search($loggedId, array_column($db, 'id'));
$chatkey = array_search($name, array_column($db[$idKey]['chats'], 'name'));


// check is phone exists
if(array_search($tel, array_column($db[$loggedId], 'num')) !== false){
    $errormsg='No such user';
    echo json_encode(array('success' => false, 'message'=> $errormsg));
    exit();
}

//check if input is empty
if($mess==null || $name==null){
    $errormsg='Enter mess';
    echo json_encode(array('success' => false, 'message'=> $errormsg));
    exit();
}

$id = count(array_filter(array_keys($array), function($key) {
    return substr($key, 0, 2) === "2.";
}))+1;
 


$db[$idKey]['chats'][$chatkey]['messages'] = array(
    '2.'.$id => $mess,
);

// add obj in json
file_put_contents('./dbChats.json', json_encode($db));
echo json_encode(array('success' => true));
