let form = document.getElementById("login-form");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let showPassword = document.getElementById("show-password")

form.addEventListener("submit", function (event){
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let match = users.find(function (user){
        return user.username === usernameInput.value
        && user.password === passwordInput.value;
    })
    if(match){
        window.location.href = "welcome.html"
    }
    else{
        alert("Login Failed! Check username or password") 
    }
});

showPassword.addEventListener("change", function(){
    if(showPassword.checked){
        passwordInput.type = "text"
    }
    else{
        passwordInput.type = "password"
    }
})