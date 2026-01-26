const auth = firebase.auth();

// Proteksi halaman
auth.onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await auth.signOut();
  window.location.href = "login.html";
});
