<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); // 예시. header('Access-Control-Allow-Origin : http://client.google.com');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
header("Content-type:text/html;charset=utf-8");

require_once(__DIR__."/routes/user.php");

$request = $_SERVER['REQUEST_URI'];
$router = explode("/", $request)[1];

$payload = $_REQUEST;

switch ($router)
{
    case '/' :
        require __DIR__ . '/views/index.php';
        break;
    case "user" :
        echo json_encode(["code"=>1, "msg"=>222, "data"=>$payload]);
//        userRouter($request, $_REQUEST);
        break;
    case '' :
        require __DIR__ . '/views/index.php';
        break;
    case '/user/create' :
        require __DIR__ . '/views/about.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;
}