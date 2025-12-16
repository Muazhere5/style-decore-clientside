import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";

// ✅ Apply saved theme globally
const savedTheme = localStorage.getItem("theme") || "styledecorlight";
document.documentElement.setAttribute("data-theme", savedTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
