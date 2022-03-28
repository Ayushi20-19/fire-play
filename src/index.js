import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { VideosDataProvider } from "./context/data-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideosDataProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </VideosDataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
