
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Programmer1" && password === "ILoveWebDev") {
        console.log("correct");
        window.location= "home.html";
    } else {
        alert("Username or Password incorrect")
    }
})