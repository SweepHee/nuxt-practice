<?php

function userRouter($request, $payload)
{

    switch($request)
    {
        case "/user/view" :
            echo json_encode("hello!");
            break;
        case "/user/create" :
            echo json_encode($payload);
            break;
    }

}