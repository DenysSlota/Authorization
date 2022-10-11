import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBI_bq9yLxcJ9zYvjfW_QIxrZvnYdbcXPQ",
  authDomain: "auth-b7c1c.firebaseapp.com",
  projectId: "auth-b7c1c",
  storageBucket: "auth-b7c1c.appspot.com",
  messagingSenderId: "480491202449",
  appId: "1:480491202449:web:68cf5c5e52ad9a89025c30",
  measurementId: "G-GQK01DT6LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Context = createContext(null);

const auth = getAuth(app);
const firestore = getStorage(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      app,
      auth,
      firestore
    }}>
        <App />
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
