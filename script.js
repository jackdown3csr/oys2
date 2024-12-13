window.onload = function() {
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submit');
    const errorMsg = document.getElementById('error-msg');
    const fileList = document.getElementById('file-list');
    const passwordContainer = document.getElementById('password-container');

    // Store the MD5 hash of pass
    const PASSWORD_HASH = "48cd7517d21176f980daa5502d9efb31"; // MD5 of pass

    // List of file hashes (encoded links for protection)
    const fileHashes = [
        { name: "GalaWP.pdf", hash: "c3ab8ff13720e8ad9047dd39466b3c890a1e1d1c0ebbbb930a6cc1945f1d524c7" }, // MD5 of the file link
        { name: "oysoga_mission_report.txt", hash: "b111df5d635cdebcfcf4e4eae87768e91f4f6cd1b9b2402b8252a1dba8ebed8e" },
        { name: "yek_ver_data_sample.png", hash: "d3ff1a20ff46539e2c8c3b8c5b74b517b3d85e3c111f63a7a3c8d26ae9f13f7d" },
        { name: "tools.txt", hash: "9a1e3fbbb1cfc684801a6847a5475a53b8ff4d2c4e8a6b50a21371fd6278be62" }
    ];

    // Function to compute MD5 hash of input
    function md5(string) {
        return CryptoJS.MD5(string).toString(CryptoJS.enc.Hex); // Ensure the output is in Hex format
    }

    // Function to check the password and handle access
    function checkPassword() {
        const password = passwordInput.value.trim();
        const inputHash = md5(password); // Hash the entered password

        // Compare the hash with the pre-stored hash of "pass"
        if (inputHash === PASSWORD_HASH) {
            displayFileList(); // Show the file list
            passwordContainer.style.display = 'none'; // Hide password input
            playSound('sounds/success.mp3'); // Play success sound
        } else {
            errorMsg.innerText = "Incorrect password. Please try again."; // Show error
            errorMsg.style.color = 'red';
            playSound('sounds/error.mp3'); // Play error sound
        }
    }

    // Function to display the file list dynamically
    function displayFileList() {
        const ul = fileList.querySelector('.file-list');
        fileHashes.forEach(file => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            // Hash the actual link to prevent direct access
            a.href = getRealFileLink(file.hash); // Decrypt the link after password is correct
            a.download = file.name;
            a.innerText = file.name;
            li.appendChild(a);
            ul.appendChild(li);
        });
        fileList.style.display = 'block'; // Show the file list

        // Add hover sound event listeners after file list is displayed
        const fileLinksElements = document.querySelectorAll('.file-list a');
        fileLinksElements.forEach(link => {
            link.addEventListener('mouseover', function() {
                playSound('sounds/hover.mp3'); // Play hover sound when mouseover event occurs
            });
        });
    }

    // Function to get the real file link (decrypted from hash)
    function getRealFileLink(hash) {
        // For simplicity, we're just matching hashes to their links here
        const fileLinks = {
            "c3ab8ff13720e8ad9047dd39466b3c890a1e1d1c0ebbbb930a6cc1945f1d524c7": "downloads/galactica_white_paper.pdf",
            "b111df5d635cdebcfcf4e4eae87768e91f4f6cd1b9b2402b8252a1dba8ebed8e": "downloads/oysoga.txt",
            "d3ff1a20ff46539e2c8c3b8c5b74b517b3d85e3c111f63a7a3c8d26ae9f13f7d": "downloads/yek_saw_ver.png",
            "9a1e3fbbb1cfc684801a6847a5475a53b8ff4d2c4e8a6b50a21371fd6278be62": "downloads/tools.txt"
        };
        return fileLinks[hash] || '#'; // Return the real link if hash matches, else '#'
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

    // Function to play sound
    function playSound(soundFile) {
        var audio = new Audio(soundFile);
        audio.play();
    }
};
