window.onload = function() {
    let attempts = 0;
    const maxAttempts = 5;

    // Handle password input and submission
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submit');
    const errorMsg = document.getElementById('error-msg');
    const fileList = document.getElementById('file-list');
    const passwordContainer = document.getElementById('password-container');

    // Function to check the password and handle access
    function checkPassword() {
        const password = passwordInput.value.trim();
        if (password.toLowerCase() === "rev") {
            fileList.style.display = 'block';
            passwordContainer.style.display = 'none'; // Hide password container
        } else {
            attempts++;
            errorMsg.innerText = `Incorrect password. ${maxAttempts - attempts} attempts left.`;
            if (attempts >= maxAttempts) {
                errorMsg.innerText = "Access denied.";
                submitBtn.disabled = true; // Disable the submit button after max attempts
            }
        }
    }

    // Submit button click event
    submitBtn.addEventListener('click', function() {
        checkPassword();
    });

    // Allow "Enter" key to trigger password check
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
};
