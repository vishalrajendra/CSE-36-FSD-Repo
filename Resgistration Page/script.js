let form = document.getElementById("registerForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(password != confirmPassword){
        alert("Password and Confirm Password do not match!");
    }
    else{
        alert("Registration Successful!\nWelcome " + name);
        form.reset();
    }

});