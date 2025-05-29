
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAy1SWA-KcxVE_jpdQhGRAE5aifl-t0dwU",
  authDomain: "edudz-3cc10.firebaseapp.com",
  projectId: "edudz-3cc10",
  storageBucket: "edudz-3cc10.firebasestorage.app",
  messagingSenderId: "601516747195",
  appId: "1:601516747195:web:21a95c18cb6b78e43fbc9e",
  measurementId: "G-1WJC631QCB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
