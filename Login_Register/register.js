window.onload = d1;

function d1(){

    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) alert("Sign up successfully");
        window.location.href="login.html"; 
        return false;
     }
} 