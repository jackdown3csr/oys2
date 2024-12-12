window.onload = function() {
    // Get elements from the DOM
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
            errorMsg.innerText = "Incorrect password. Please try again.";
            errorMsg.style.color = 'red'; // Make error message red for visibility
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

    // Clear error message when user starts typing
    passwordInput.addEventListener('input', function() {
        errorMsg.innerText = ''; // Clear error message when typing
    });

    // Optionally, disable the submit button when the password is empty
    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.trim() === '') {
            submitBtn.disabled = true; // Disable submit if no password is entered
        } else {
            submitBtn.disabled = false; // Enable submit if password is entered
        }
    });

    // Initialize: disable submit button initially until the user starts typing
    submitBtn.disabled = true;
};
