import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import "bootswatch/dist/darkly/bootstrap.min.css";

// import styled from "styled-components";
// import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Profile from "./Pages/ProfilePage";
import OnboardPage from "./Pages/OnboardPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import AccountsPage from "./Pages/AccountsPage";
import UsersPage from "./Pages/UsersPage";
import SettingsPage from "./Pages/SettingsPage";
import ErrorPage from "./Pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/onboard" element={<OnboardPage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/settings" element={<SettingsPage />} />
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