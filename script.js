window.onload = function() {
    var password = prompt("Enter password to access Turbo downloader:");
    if (password && password.toLowerCase() === "rev") {
        document.getElementById('content').style.display = 'block';
        // Create download links
        var contentDiv = document.getElementById('content');
        contentDiv.innerHTML = 
            '<h2>Welcome to Turbo downloader</h2>' +
            '<ul class="file-list">' +
                '<li><a href="downloads/file1.txt" download>file1.txt</a></li>' +
                '<li><a href="downloads/file2.zip" download>file2.zip</a></li>' +
                '<li><a href="downloads/yek_saw_ver.png" download>yek_saw_ver_REVIEW_THIS.png</a></li>' +
            '</ul>';
    } else {
        alert("Access denied.");
    }
};