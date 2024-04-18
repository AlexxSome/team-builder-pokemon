import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom";
import {AppRouter} from "./router/AppRouter.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App>
            <RouterProvider router={AppRouter}  />
        </App>
  </React.StrictMode>,
)
