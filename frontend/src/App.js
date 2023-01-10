import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Home from './components/home/Home.Container';
import LoginContainer from './components/login/Login.Container';
import AdminContainer from "./components/admin/Admin.Container";
import ByYearsContainer from "./components/byYears/By.Years.Container";
import ByconstructorsContainer from "./components/byConstructors/Byconstructors.Container";
import BydriversContainer from "./components/byDrivers/Bydrivers.Container";
import MiniatureContainer from "./components/miniatures/Miniature.Container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginContainer />} />
        <Route path="/Admin" element={<AdminContainer />} />
        <Route path="/Seasons" element={<ByYearsContainer />} />
        <Route path="/Constructors" element={<ByconstructorsContainer />} />
        <Route path="/Drivers" element={<BydriversContainer />} />
        <Route path="/Model/:id" element={<MiniatureContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
