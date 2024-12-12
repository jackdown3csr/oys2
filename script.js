window.onload = function() {
    let attempts = 0;
    
    // Display the custom modal to enter password
    const passwordModal = document.getElementById("passwordModal");
    const passwordInput = document.getElementById("passwordInput");
    const submitButton = document.getElementById("submitPassword");
    const errorMessage = document.getElementById("errorMessage");
    
    passwordModal.style.display = 'block'; // Show modal on load

    // When the submit button is clicked
    submitButton.onclick = function() {
        const password = passwordInput.value;
        
        if (password.toLowerCase() === "rev") {
            // Hide the modal
            passwordModal.style.display = 'none';
            
            // Show the download content
            document.getElementById('content').style.display = 'block';
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
