import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import RouterApp from "./router/RouterApp";
import App from "./App";
import "./styles.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter basename="/">
            <App>
                <RouterApp />
            </App>
        </BrowserRouter>
  </React.StrictMode>
);
