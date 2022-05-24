import React from "react";

import styled from "styled-components";
export default function ErrorPage() {
  return (
    <Div>
        <>
            <h1>Error!</h1>
            <h1>Page could not be found.</h1>
        </>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;