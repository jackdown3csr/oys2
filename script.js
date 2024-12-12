window.onload = function() {
    let attempts = 0;

    // Countdown Timer
    var countdownDate = new Date("Dec 15, 2024 23:59:59").getTime();
    var countdownFunction = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);

    // Simulating fake progress bar
    function simulateDownload() {
        var progress = 0;
        var progressBar = document.getElementById('progress-bar');
        var interval = setInterval(function() {
            progress += Math.random() * 10;  // Random increments
            progressBar.style.width = progress + '%';
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(function() {
                    alert("Download complete!");
                }, 500);
            }
        }, 300); // Update every 300ms
    }

    while (attempts < 5) {
        var password = prompt("Enter password to access Turbo downloader:");
        if (password === null) {
            alert("Access aborted.");
            return;
        }
        if (password.toLowerCase() === "rev") {
            document.getElementById('content').style.display = 'block';
            simulateDownload();  // Start the fake download progress

            var contentDiv = document.getElementById('content');
            contentDiv.innerHTML = 
                '<h2>../root/m_reports/oysoga/alpha/private/</h2>' +
                '<ul class="file-list">' +
                    '<li><a href="downloads/galactica_white_paper.pdf" download>GalaWP.pdf</a></li>' +
                    '<li><a href="downloads/oysoga.txt" download>oysoga_mission_report.txt</a></li>' +
                    '<li><a href="downloads/yek_saw_ver.png" download>yek_ver_sata_sample.png</a></li>' +
                    '<li><a href="downloads/tools.txt" download>tools.txt</a></li>' +
                '</ul>';
            document.getElementById('success-sound').play();  // Play success sound
            break;
        } else {
            attempts++;
            document.getElementById('error-sound').play();  //
