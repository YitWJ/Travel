window.onload = d1;

function d1(){

    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) alert("Login in successfully");
        window.location.href="hehe.html"; 
        return false;
     }
} 