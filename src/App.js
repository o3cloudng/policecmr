import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootswatch/dist/darkly/bootstrap.min.css";

import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
// import Animate from 'animate.css-react'
// import 'animate.css/animate.css'


// import styled from "styled-components";
// import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";

import Profile from "./Pages/ProfilesPage";
import ProfileAddPage from "./Pages/ProfileAddPage";
import ProfileEditPage from "./Pages/ProfileEditPage";
import ProfileDeletePage from "./Pages/ProfileDeletePage";

import OnboardPage from "./Pages/OnboardPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import AccountsPage from "./Pages/AccountsPage";

import UsersPage from "./Pages/UsersPage";
import UserAddPage from "./Pages/UserAddPage";
import UserEditPage from "./Pages/UserEditPage";

import SettingsPage from "./Pages/SettingsPage";
import ErrorPage from "./Pages/ErrorPage";

// import { GlobalProvider } from "./Contexts/GlobalState";

export default function App() {

  return (
      <Router>
        <ReactNotifications />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profile />} />
          <Route path="/profiles/add" element={<ProfileAddPage />} />
          <Route path="/profiles/edit/:id" element={<ProfileEditPage />} />
          <Route path="/profiles/delete/:id" element={<ProfileDeletePage />} />
          <Route path="/onboard" element={<OnboardPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<UserAddPage />} />
          <Route path="/users/edit/:id" element={<UserEditPage />} />
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
