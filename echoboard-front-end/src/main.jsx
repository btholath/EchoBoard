import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo-FjJFd_oEss_s6EPtxr6y8xOsAdbAUI",
  authDomain: "echoboard-b994f.firebaseapp.com",
  projectId: "echoboard-b994f",
  storageBucket: "echoboard-b994f.firebasestorage.app",
  messagingSenderId: "460081465840",
  appId: "1:460081465840:web:5773d6ff95583863a9f535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)