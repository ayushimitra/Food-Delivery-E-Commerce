import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./Context/StoreContext.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
<GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <StoreContextProvider>
        <App />
    </StoreContextProvider>
    </GoogleOAuthProvider>
</BrowserRouter>
);
