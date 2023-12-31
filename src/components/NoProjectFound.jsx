import Button from "./UI/Button";
import { styled } from "styled-components";

const MainDiv = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function NoProjectFound() {
  return (
    <>
      <MainDiv>
        <p>No Projects Found</p>
        <p>Select a project or get started with a new one.</p>
        <Button>Create a new project</Button>
      </MainDiv>
    </>
  );
}
