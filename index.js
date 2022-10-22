/* 
    This is only for practice no need to insert it in our developement.
    This is the practicing javascript file works perfectly. 
    But I had corrected it in HTML page itself. So, there is no necessary for this Script file.

*/

//Form - 1

function vfun1() {
    var uname = document.forms["loginForm"]["uname"].value;
    var pwd = document.forms["loginForm"]["pwd"].value;

    if (uname == null || uname == "") {
        document.getElementById("errorBox").innerHTML = "Enter UserName"
        return false;
    }

    if (pwd == null || pwd == "") {
        document.getElementById("errorBox").innerHTML = "Enter Password"
        return false;
    }

    if (uname != ' ' && pwd != ' ') {
        alert("Login Successfully!!!");
    }
}

// Form - 2
function vfun2() {
    var fname = document.forms["registerForm"]["fname"].value;
    var lname = document.forms["registerForm"]["lname"].value;
    var uname = document.forms["registerForm"]["uname"].value;
    var pwd = document.forms["registerForm"]["pwd"].value;
    var rpwd = document.forms["registerForm"]["rpwd"].value;

    if (fname == null || fname == "") {
        document.getElementById("errorBox").innerHTML = "Enter FirstName"
        return false;
    }

    if (lname == null || lname == "") {
        document.getElementById("errorBox").innerHTML = "Enter LastName"
        return false;
    }

    if (uname == null || uname == "") {
        document.getElementById("errorBox").innerHTML = "Enter UserName"
        return false;
    }

    if (pwd == null || pwd == "") {
        document.getElementById("errorBox").innerHTML = "Enter Password"
        return false;
    }


    if (rpwd == null || rpwd == "") {
        document.getElementById("errorBox").innerHTML = "Enter Re-Password"
        return false;
    }

    if (pwd != rpwd) {
        document.getElementById("errorBox").innerHTML = "Password does not match!"
        return false;
    }

    if (fname != '' && lname != '' && uname != '' && pwd != '' && rpwd != '') {
        alert("Registed Successfully!!!");
    }
}