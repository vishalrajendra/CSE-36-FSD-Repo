function check() {
    var uid = document.getElementById("userid").value;
    var pwd = document.getElementById("passwd").value;
    var cpwd = document.getElementById("confirmPass").value;

    var msg = "";

    if (uid.length == 0) {
        msg += "Username cannot be empty\n";
    }

    if (pwd.length == 0) {
        msg += "Password cannot be empty\n";
    }

    if (cpwd.length == 0) {
        msg += "Confirm Password cannot be empty\n";
    }

    if (pwd.length < 8) {
        msg += "Password must be at least 8 characters long\n";
    }

    if (pwd !== cpwd) {
        msg += "Password and Confirm Password must be the same\n";
    }

    if (msg.length > 0) {
        alert(msg);
        return;
    }

    if (uid == "admin" && pwd == "password123") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}