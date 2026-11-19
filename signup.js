let form = document.getElementById("signin-form");
let usernameInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let showPassword = document.getElementById("show-password")

form.addEventListener("submit", function (event){
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let taken = users.find(function (user){
        return user.username === usernameInput.value;
    })
    if(taken){
        alert("Username already taken.")
    }
    else{
        users.push({username: usernameInput.value, password: passwordInput.value});
        localStorage.setItem("users", JSON.stringify(users))
        alert("Account Created") 
        form.reset();
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