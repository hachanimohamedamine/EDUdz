
import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.register = () => {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("تم إنشاء الحساب: " + userCredential.user.email);
    })
    .catch(error => {
      alert("خطأ: " + error.message);
    });
}

window.login = () => {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("مرحباً بك: " + userCredential.user.email);
    })
    .catch(error => {
      alert("خطأ: " + error.message);
    });
}

window.logout = () => {
  signOut(auth).then(() => {
    alert("تم تسجيل الخروج.");
  });
}
