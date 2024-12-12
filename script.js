window.onload = function() {
    let attempts = 0;
    
    // Show the password modal when the page loads
    const passwordModal = document.getElementById("passwordModal");
    const passwordInput = document.getElementById("passwordInput");
    const submitButton = document.getElementById("submitPassword");
    const errorMessage = document.getElementById("errorMessage");
    
    passwordModal.style.display = 'flex'; // Show the modal

    // When the submit button is clicked
    submitButton.onclick = function() {
        const password = passwordInput.value;
        
        if (password.toLowerCase() === "rev") {
            // Hide the modal
            passwordModal.style.display = 'none';
            
            // Show the content with the download links
            const contentDiv = document.getElementById('content');
            contentDiv.style.display = 'block';  // Make the content visible
        } else {
            attempts++;
            errorMessage.style.display = 'block';
            errorMessage.textContent = `Incorrect password. Try again. ${5 - attempts} attempts left.`;
            
            if (attempts >= 5) {
                alert("Access denied.");
                passwordModal.style.display = 'none';
            }
        }
    };
};
