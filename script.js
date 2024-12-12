window.onload = function() {
    let attempts = 0;
    while (attempts < 5) {
        var password = prompt("Enter password to access Turbo downloader:");
        if (password === null) {
            // User clicked cancel
            alert("Access aborted.");
            return;
        }
        if (password.toLowerCase() === "rev") {
            // Show the content and apply the fade-in effect
            var contentDiv = document.getElementById('content');
            contentDiv.style.display = 'block';  // Ensure the content is visible
            setTimeout(function() {
                contentDiv.classList.add('visible');  // Apply the fade-in effect
            }, 10); // Adding a small delay to ensure the display is set first

            // Create download links
            contentDiv.innerHTML = 
                '<h2>../root/m_reports/oysoga/alpha/private/</h2>' +
                '<ul class="file-list">' +
                    '<li><a href="downloads/galactica_white_paper.pdf" download>GalaWP.pdf</a></li>' +
                    '<li><a href="downloads/oysoga.txt" download>oysoga_mission_report.txt</a></li>' +
                    '<li><a href="downloads/yek_saw_ver.png" download>yek_ver_sata_sample.png</a></li>' +
                    '<li><a href="downloads/tools.txt" download>tools.txt</a></li>' +
                '</ul>';
            break;
        } else {
            attempts++;
            alert("Incorrect password. " + (5 - attempts) + " attempts left.");
        }
    }
    if (attempts >= 5) {
        alert("Access denied.");
    }
};
