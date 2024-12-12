window.onload = function() {
    let attempts = 0;

    // Funkce pro ověření hesla
    function checkPassword() {
        var password = document.getElementById("password").value;
        var errorMessage = document.getElementById("error-message");
        if (password === "") {
            errorMessage.textContent = "Please enter a password.";
            return;
        }
        
        if (password.toLowerCase() === "rev") {
            document.getElementById('content').style.display = 'block';
            // Vytvoření seznamu souborů ke stažení
            var contentDiv = document.getElementById('content');
            contentDiv.innerHTML = 
                '<h2>../root/m_reports/oysoga/alpha/private/</h2>' +
                '<ul class="file-list">' +
                    '<li><a href="downloads/galactica_white_paper.pdf" download>GalaWP.pdf</a></li>' +
                    '<li><a href="downloads/oysoga.txt" download>oysoga_mission_report.txt</a></li>' +
                    '<li><a href="downloads/yek_saw_ver.png" download>yek_ver_sata_sample.png</a></li>' +
                    '<li><a href="downloads/tools.txt" download>tools.txt</a></li>' +
                '</ul>';
            errorMessage.textContent = '';  // Clear any error message on success
        } else {
            attempts++;
            errorMessage.textContent = "Incorrect password. " + (5 - attempts) + " attempts left.";
            if (attempts >= 5) {
                errorMessage.textContent = "Access denied.";
            }
        }
    }

    // Při kliknutí na tlačítko
    document.getElementById("submit-btn").addEventListener("click", checkPassword);

    // Při stisku klávesy Enter v inputu pro heslo
    document.getElementById("password").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword();
        }
    });
};
