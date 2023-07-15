import React from "react";
import { Circle } from "better-react-spinkit";
// import * as C from "../styles";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <Circle />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`


export default Loading;
