// GANTI DENGAN CONFIG FIREBASE KAMU
const firebaseConfig = {
    apiKey: "AIzaSyB3uUZVQi1yq-XuzaP9LV5a_0-TJyIAHTw",
    authDomain: "ilmu-coding.firebaseapp.com",
    projectId: "ilmu-coding",
    storageBucket: "ilmu-coding.firebasestorage.app",
    messagingSenderId: "612619782484",
    appId: "1:612619782484:web:a317f2bfacc28291fe20c1",
    measurementId: "G-63L7V9Q48K"
  };

// Jangan hapus ini
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
