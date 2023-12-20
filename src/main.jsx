import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routers/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import DataProvider from "./Providers/DataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={routes} />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
