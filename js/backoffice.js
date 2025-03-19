// Vérifie si l'utilisateur est connecté
if (sessionStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html"; // Redirection vers la page de connexion
}

// Déconnexion
function logout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}

// Google Analytics API
const API_KEY = "AIzaSyAUUUcIG1TRzCP3MjKUNvoSiFGK4KkStbo";  // Remplace avec ta clé API
const VIEW_ID = "G-P2DKDZRQ47";  // Remplace avec ton View ID

async function fetchAnalyticsData() {
    const url = `https://www.googleapis.com/analytics/v3/data/ga?ids=ga:${VIEW_ID}&start-date=7daysAgo&end-date=today&metrics=ga:sessions&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        document.getElementById("analyticsData").innerText = `Sessions : ${data.totalsForAllResults["ga:sessions"]}`;
    } catch (error) {
        document.getElementById("analyticsData").innerText = `Erreur : ${error.message}`;
    }
}

fetchAnalyticsData();
