document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "admin@gmail.com"; // Identifiant fixe
    const validPassword = "123456789";  // Mot de passe fixe

    if (username === validUsername && password === validPassword) {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "backoffice.html"; // Redirection vers le backoffice
    } else {
        document.getElementById("errorMessage").innerText = "Identifiant ou mot de passe incorrect.";
    }
});
