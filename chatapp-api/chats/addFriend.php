<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');

$db= json_decode(file_get_contents('./dbChats.json'), true);

$req= json_decode(file_get_contents('php://input'), true);

//get data
$name=$req['name'];
$tel= $req['num'];
$loggedId= $req['loggedId'];


// find specific user
$idKey = array_search($loggedId, array_column($db, 'id'));

// check is phone exists
if(array_search($tel, array_column($db[$idKey], 'num')) !== false){
    $errormsg='Phone number already registered';
    echo json_encode(array('success' => false, 'message'=> $errormsg));
    exit();
}

//check if input is empty
if($tel==null || $name==null){
    $errormsg='Enter phone number and passwds';
    echo json_encode(array('success' => false, 'message'=> $errormsg));
    exit();
}

//check valid tel and passwd
if (!preg_match("/^[0-9]{3,14}$/", $tel)){
    $errormsg='Enter valid phone number';
    echo json_encode(array('success' => false, 'message'=> $errormsg));
    exit();
}


//add id
$id= rand(1,999);

$db[$idKey]['chats'][] = array(
    'id'=> $id,
    'name' => $name,
    'num' => $tel,
    'messages'
);

// add obj in json
file_put_contents('./dbChats.json', json_encode($db));
echo json_encode(array('success' => true));
