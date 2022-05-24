import React from "react";

import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Login from "../components/Auth/Login";

export default function LoginPage() {
  return (
    <Div>
      <Sidebar />
      <Login />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;