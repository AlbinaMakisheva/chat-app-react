<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');

$db= json_decode(file_get_contents('./dbUsers.json'), true);

$req= json_decode(file_get_contents('php://input'), true);

//get data
$name=$req['name'];
$tel= $req['tel'];
$passwd= $req['passwd'];

// check is phone exists
if(array_search($tel, array_column($db, 'tel')) !== false){
    $errormsg='Phone number already registered';
    echo json_encode(array('success' => false, 'message'=> $errormsg));
    exit();
}

//check if input is empty
if($tel==null || $name==null || $passwd ==null){
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
if (!preg_match('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/', $passwd)){
    $errormsg='Enter valid password';
    echo json_encode(array('success'=> false, 'message'=> $errormsg));
    exit();
}

//add id
$id= count($db);

$db[] = array(
    'id'=> $id,
    'name' => $name,
    'tel' => $tel,
    'passwd' => $passwd 
);

// add obj in json
file_put_contents('./dbUsers.json', json_encode($db));
echo json_encode(array('success' => true));
