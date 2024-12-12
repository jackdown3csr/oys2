// Function to handle the password verification and content display
document.getElementById('submit-btn').addEventListener('click', function() {
    var password = document.getElementById('password').value;
    var correctPassword = "turbo2024"; // správné heslo

    if (password === correctPassword) {
        // Skrytí divu pro zadání hesla a zobrazení souborů
        document.querySelector('.password-popup').style.display = 'none';
        document.getElementById('files').style.display = 'block';
    } else {
        // Zobrazení chybové zprávy při nesprávném heslu
        document.getElementById('error-message').textContent = "Incorrect password, please try again!";
    }
});

// Umožní potvrdit heslo stiskem Enter
document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('submit-btn').click();
    }
});
