// js/dashboard.js
// Pakai config yang sama seperti di auth.js
const firebaseConfig = {
  apiKey: "REPLACE_API_KEY",
  authDomain: "REPLACE_PROJECT.firebaseapp.com",
  projectId: "REPLACE_PROJECT_ID",
  // ... sisanya jika ada
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
