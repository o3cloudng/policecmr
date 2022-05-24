import React from "react";

import styled from "styled-components";
import Error from "../components/Error";
import Sidebar from "../components/Sidebar";
export default function ErrorPage() {
  return (
    <Div>
      <Sidebar />
      <Error />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;