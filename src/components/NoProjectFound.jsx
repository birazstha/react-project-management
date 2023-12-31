import Button from "./UI/Button";
import { styled } from "styled-components";
import { forwardRef } from "react";

const MainDiv = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoProjectFound = forwardRef(function NoProjectFound({}, ref) {
  return (
    <>
      <MainDiv>
        <p>No Projects Found</p>
        <p>Select a project or get started with a new one.</p>
        <Button onClick={ref}>Create a new project</Button>
      </MainDiv>
    </>
  );
});

export default NoProjectFound;
