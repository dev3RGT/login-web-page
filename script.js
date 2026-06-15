document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Grab the inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple frontend verification check
    if (email && password) {
        console.log("Attempting login with:", email);
        
        // This is where you would normally send data to a server.
        // For now, we will just show a success alert.
        alert("Login submitted successfully!");
    } else {
        alert("Please fill in all fields.");
    }
});
