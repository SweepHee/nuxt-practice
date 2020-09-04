<?php

function userRouter($request, $payload)
{

    $user = new model\user();

    switch($request)
    {
        case "/user/view" :
            echo json_encode("hello!");
            break;
        case "/user/create" :
            $user->test($payload);
            break;
    }

}