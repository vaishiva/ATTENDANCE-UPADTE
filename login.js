function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var user="vaishiva"
    var pass="3129"
    
    if (username==user && password==pass) {
        window.location.href="home.html";
        alert('Logged in successfully!');
    } else {
        alert('Invalid username and password');
    }
}