import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Home from './components/home/Home.Container';
import LoginContainer from './components/login/Login.Container';
import AdminContainer from "./components/admin/Admin.Container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginContainer />} />
        <Route path="/Admin" element={<AdminContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
