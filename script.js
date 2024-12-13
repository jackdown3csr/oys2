window.onload = function() {
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submit');
    const errorMsg = document.getElementById('error-msg');
    const fileList = document.getElementById('file-list');
    const passwordContainer = document.getElementById('password-container');

    // Store the MD5 hash of "rev"
    const PASSWORD_HASH = "48cd7517d21176f980daa5502d9efb31"; // MD5 of "rev"

    // Function to compute MD5 hash of input
    function md5(string) {
        return CryptoJS.MD5(string).toString(CryptoJS.enc.Hex); // Ensure the output is in Hex format
    }

    // Function to check the password and handle access
    function checkPassword() {
        const password = passwordInput.value.trim();
        const inputHash = md5(password); // Hash the entered password

        // Compare the hash with the pre-stored hash of "rev"
        if (inputHash === PASSWORD_HASH) {
            fileList.style.display = 'block'; // Show the file list
            passwordContainer.style.display = 'none'; // Hide password input
            playSound('sounds/success.mp3'); // Play success sound
        } else {
            errorMsg.innerText = "Incorrect password. Please try again."; // Show error
            errorMsg.style.color = 'red';
            playSound('sounds/error.mp3'); // Play error sound
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

    // Seznam všech odkazů v .file-list pro přidání zvuku při hover
    const fileLinks = document.querySelectorAll('.file-list a'); 

    // Funkce pro přehrání zvuku
    function playSound(soundFile) {
        var audio = new Audio(soundFile);
        audio.play();
    }

    // Přehrání zvuku při hover na odkaz v seznamu
    fileLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            playSound('sounds/hover.mp3'); // Přehrát zvuk při hover na odkaz
        });
    });
};
