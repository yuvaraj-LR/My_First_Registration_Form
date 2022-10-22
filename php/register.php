<?php
    $fname = $_POST('fname');
    $lname = $_POST('lname');
    $uname = $_POST('uname');
    $pwd = $_POST('pwd');
    $rpwd = $_POST('rpwd');

    if ($fname != '' && $lname != '' && $uname != '' && $pwd != '' && $rpwd != ''){
        $conn = new mysqli("localhost", "root", "", "Regi_form");
  
        // Check connection
        if ($conn->connect_error) {
            die("Connection failure: " 
                . $conn->connect_error);
        } 

        else {
            $SELECT = "SELECT uname FROM users WHERE user = ? LIMIT 1";
            
            $INSERT = "INSERT INTO users (fname, lname, uname, pwd, rpwd) VALUES (?, ?, ?, ?, ?)";

            //PREPARE STATEMENT

            $stmt = $conn->prepare($SELECT);
            $stmt->bind_param("s", $uname);
            $stmt->execute();
            $stmt->bind_result($uname);
            $stmt->store_result();

            $rnum = $stmt->num_rows;

            //Checking UserName
            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("sssss", $fname, $lname, $uname, $pwd, $rpwd);
                $stmt->execute();
                echo "New Record Inserted Successfully!!!";
            } else {
                echo "Someone already registed using this email";
            }

            $stmt->close();
            $conn->close();
        }
    }

    else {
        echo "All field are required";
        die();
    }

?>