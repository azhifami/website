// js/dashboard.js
// Pakai config yang sama seperti di auth.js
const firebaseConfig = {
    apiKey: "AIzaSyB3uUZVQi1yq-XuzaP9LV5a_0-TJyIAHTw",
    authDomain: "ilmu-coding.firebaseapp.com",
    projectId: "ilmu-coding",
    storageBucket: "ilmu-coding.firebasestorage.app",
    messagingSenderId: "612619782484",
    appId: "1:612619782484:web:a317f2bfacc28291fe20c1",
    measurementId: "G-63L7V9Q48K"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const welcomeText = document.getElementById('welcomeText');
const logoutBtn = document.getElementById('logoutBtn');

// Pastikan hanya pengguna ter-auth yang bisa lihat halaman ini
auth.onAuthStateChanged(user => {
  if (!user) {
    // tidak login -> kembali ke halaman login
    window.location.href = 'login.html';
    return;
  }
  // jika ingin menampilkan nama/email:
  const email = user.email || '';
  welcomeText.textContent = `Selamat datang di ilmu coding digital, disini kamu bisa belajar coding! (Masuk sebagai ${email})`;
});

// logout
logoutBtn.addEventListener('click', async () => {
  await auth.signOut();
  window.location.href = 'login.html';
});
