<?php
/**
 * Created by PhpStorm.
 * User: BARAEM_programer2
 * Date: 2020-09-04
 * Time: 오후 3:37
 */
header('Access-Control-Allow-Origin : http://localhost:3000'); // 예시. header('Access-Control-Allow-Origin : http://client.google.com');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
header('Content-Type: application/json;charset=UTF-8');



echo json_encode($_POST);
