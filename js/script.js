// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("Bienvenue sur le Blog d'Articles !");
});

 // Identifiants pour la connexion (à utiliser en production, mets ça dans une base de données sécurisée)
 const validUsername = "admin"; // Remplace par ton identifiant
 const validPassword = "123456"; // Remplace par ton mot de passe

 // Gérer la soumission du formulaire de connexion
 document.getElementById("loginForm").addEventListener("submit", function(event) {
     event.preventDefault(); // Empêcher le rechargement de la page
     const username = document.getElementById("username").value;
     const password = document.getElementById("password").value;

     // Vérification de l'identifiant et du mot de passe
     if (username === validUsername && password === validPassword) {
         // Connexion réussie, rediriger vers la page du backoffice
         window.location.href = "backoffice.html"; // Redirige vers la page du backoffice
     } else {
         alert("Identifiant ou mot de passe incorrect");
     }
 });
