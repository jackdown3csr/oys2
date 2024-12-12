window.onload = function() {
    // Show the password modal as soon as the page loads
    document.getElementById('passwordModal').style.display = 'flex';

    // Get the password input and submit button
    var passwordInput = document.getElementById('passwordInput');
    var submitButton = document.getElementById('submitPassword');
    var errorMessage = document.getElementById('errorMessage');

    // Function to handle password validation and content reveal
    function validatePassword() {
        var password = passwordInput.value;
        
        if (password.toLowerCase() === "rev") {
            document.getElementById('passwordModal').style.display = 'none';  // Hide password modal
            document.getElementById('content').style.display = 'block';  // Show download content

            // Create download links dynamically
            var contentDiv = document.getElementById('content');
            contentDiv.innerHTML = 
                '<h2>../root/m_reports/oysoga/alpha/private/</h2>' +
                '<ul class="file-list">' +
                    '<li><a href="downloads/galactica_white_paper.pdf" download>GalaWP.pdf</a></li>' +
                    '<li><a href="downloads/oysoga.txt" download>oysoga_mission_report.txt</a></li>' +
                    '<li><a href="downloads/yek_saw_ver.png" download>yek_ver_sata_sample.png</a></li>' +
                    '<li><a href="downloads/tools.txt" download>tools.txt</a></li>' +
                '</ul>';
        } else {
            errorMessage.textContent = "Incorrect password. Try again.";
        }
    }

    // Event listener for the submit button
    submitButton.addEventListener('click', function() {
        validatePassword();
    });

    // Allow submitting the password with the Enter key
    passwordInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            validatePassword();
        }
    });
};
