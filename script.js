window.onload = function() {
    let attempts = 0;
    const checkPassword = function(password) {
        return password.toLowerCase() === "rev";
    };

    const handlePasswordPrompt = function() {
        const consoleDiv = document.createElement('div');
        consoleDiv.className = "console";
        document.body.appendChild(consoleDiv);

        // Simulate a console prompt
        const promptText = document.createElement('p');
        promptText.innerHTML = "> Enter password to access Turbo downloader:";
        consoleDiv.appendChild(promptText);

        const inputField = document.createElement('input');
        inputField.type = "password";
        inputField.className = "console-input";
        consoleDiv.appendChild(inputField);

        // When user types and presses enter
        inputField.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                let password = inputField.value;
                if (password === "") return; // Do nothing if input is empty

                if (checkPassword(password)) {
                    document.getElementById('content').style.display = 'block';
                    let contentDiv = document.getElementById('content');
                    contentDiv.innerHTML = 
                        '<h2>../root/m_reports/oysoga/alpha/private/</h2>' +
                        '<ul class="file-list">' +
                            '<li><a href="downloads/galactica_white_paper.pdf" download>GalaWP.pdf</a></li>' +
                            '<li><a href="downloads/oysoga.txt" download>oysoga_mission_report.txt</a></li>' +
                            '<li><a href="downloads/yek_saw_ver.png" download>yek_ver_sata_sample.png</a></li>' +
                            '<li><a href="downloads/tools.txt" download>tools.txt</a></li>' +
                        '</ul>';
                    promptText.innerHTML = "> Access granted. You may now download the files.";
                    inputField.style.display = "none"; // Hide input field after successful login
                } else {
                    attempts++;
                    promptText.innerHTML = "> Incorrect password. " + (5 - attempts) + " attempts left.";
                    if (attempts >= 5) {
                        promptText.innerHTML = "> Access denied.";
                        inputField.style.display = "none"; // Hide input field after 5 failed attempts
                    }
                }
            }
        });

        inputField.focus();
    };

    // Trigger the console-like prompt on load
    setTimeout(handlePasswordPrompt, 500);
};
