// js/auth.js
// Ganti firebaseConfig di bawah dengan config dari Firebase Console
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

const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const errorDiv = document.getElementById('error');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorDiv.textContent = '';
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    // sukses -> redirect ke dashboard
    window.location.href = 'dashboard.html';
  } catch (err) {
    errorDiv.textContent = err.message || 'Gagal login.';
  }
});

// Buat akun baru (simple)
registerBtn.addEventListener('click', async () => {
  errorDiv.textContent = '';
  const email = prompt('Masukkan email untuk mendaftar:');
  if (!email) return;
  const password = prompt('Masukkan password (min 6 karakter):');
  if (!password) return;

  try {
    await auth.createUserWithEmailAndPassword(email, password);
    alert('Akun berhasil dibuat. Kamu akan diarahkan ke dashboard.');
    window.location.href = 'dashboard.html';
  } catch (err) {
    alert('Gagal daftar: ' + (err.message || err));
  }
});

// Jika pengguna sudah login, langsung ke dashboard
auth.onAuthStateChanged(user => {
  if (user) {
    // sudah login — pindah ke dashboard
    if (!location.pathname.endsWith('dashboard.html')) {
      window.location.href = 'dashboard.html';
    }
  }
});
