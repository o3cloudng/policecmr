import React from "react";

import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Signup from "../components/Auth/Signup";
export default function SignupPage() {
  return (
    <Div>
      <Sidebar />
      <Signup />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;