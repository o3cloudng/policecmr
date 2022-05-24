import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import styled from "styled-components";
// import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Riders from "./Pages/Riders";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ErrorPage from "./Pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/riders" element={<Riders />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

// const Div = styled.div`
//   position: relative;
// `;