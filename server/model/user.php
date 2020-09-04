<?php

namespace model;

class user {
    
    function __construct()
    {
        
    }

    public function test($payload) 
    {
        echo json_encode([$payload, "in_user_test!"]);
    } 

}