import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { initializeApp } from "firebase/app";
import RouterApp from "./router/RouterApp";
import App from "./App";
import "./styles.css"
import {ContextProvider} from "./context/ContextProvider";

const firebaseConfig = {
    apiKey: "AIzaSyBVb85UMg9eBXa1_DpFy19nTU27D9CZukg",
    authDomain: "team-builder-app-506b5.firebaseapp.com",
    projectId: "team-builder-app-506b5",
    storageBucket: "team-builder-app-506b5.appspot.com",
    messagingSenderId: "109183360001",
    appId: "1:109183360001:web:375508213a5eec91923400"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter basename="/">
            <ContextProvider>
                <App>
                    <RouterApp />
                </App>
            </ContextProvider>
        </BrowserRouter>
  </React.StrictMode>
);
