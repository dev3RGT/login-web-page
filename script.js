// Standard Form Submission logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        console.log("Standard login attempt:", email);
        alert("Standard login submitted!");
    }
});

// --- Google Authentication Logic ---

// Callback function handled after a user successfully logs into Google
function handleCredentialResponse(response) {
    // The response token is a secure JSON Web Token (JWT) containing user profile data
    console.log("Encoded JWT ID token: " + response.credential);
    
    alert("Google authentication successful! Check console for token.");
    
    /* Next steps in production:
       Send 'response.credential' to your backend server using fetch() to 
       verify the user and log them into your application session.
    */
}

window.onload = function () {
    // Initialize Google Identity Services
    google.accounts.id.initialize({
        // Replace YOUR_GOOGLE_CLIENT_ID with your actual ID from Google Cloud Console
        client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", 
        callback: handleCredentialResponse
    });

    // Render the styled Google button in our HTML container
    google.accounts.id.renderButton(
        document.getElementById("googleBtnContainer"),
        { 
            theme: "outline", 
            size: "large", 
            width: "360", // Matches the width profile of your form elements
            text: "signin_with",
            shape: "rectangular"
        } 
    );

    // Optional: Displays the Google One Tap prompt overlay on the top right
    google.accounts.id.prompt(); 
};
