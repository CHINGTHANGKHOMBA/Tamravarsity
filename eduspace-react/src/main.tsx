import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from './App.tsx'
import './index.css'
import './style.scss' 

const CLIENT_ID = "1092625048449-vqoc4054984u2t02cpc6dq8hgilpqtt2.apps.googleusercontent.com"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
