import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBb1D9WLhYulVLLipLhsqH7sk2Af4G8Srg",
  authDomain: "reactjs-49905.firebaseapp.com",
  projectId: "reactjs-49905",
  storageBucket: "reactjs-49905.appspot.com",
  messagingSenderId: "64264571726",
  appId: "1:64264571726:web:e26d2fbf00501bb826ec1f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
