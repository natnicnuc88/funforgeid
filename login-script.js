document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const loginBtn = document.getElementById('loginBtn');
    const usernameInput = document.getElementById('username').value; // Mengambil input user

    loginBtn.innerText = "Mengecek Akun...";
    loginBtn.style.opacity = "0.7";

    setTimeout(() => {
        // --- BAGIAN PENTING ---
        // Simpan nama user ke memori browser
        localStorage.setItem('forgeUserName', usernameInput); 
        
        alert("Selamat datang, " + usernameInput + "! Siap untuk menempa kode?");
        window.location.href = "watch-learn.html";
    }, 1500);
});