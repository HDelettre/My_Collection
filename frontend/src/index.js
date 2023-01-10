import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// IMPORT STYLES
import "./styles/styles.css";

// IMPORT COMPONENTS
import Header from "./components/Standard/Header";
import Footer from "./components/Standard/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
