document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        console.log("Standard login attempt:", email);
        alert("Standard login submitted!");
    }
});

// Google Identity Services Setup
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    alert("Google authentication successful!");
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", 
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("googleBtnContainer"),
        { 
            theme: "outline", 
            size: "large", 
            width: "350", 
            text: "signin_with",
            shape: "pill" // Transforms Google button profile to look modern and sleek
        } 
    );
};
