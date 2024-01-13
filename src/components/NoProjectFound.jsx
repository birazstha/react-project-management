import Button from "./UI/Button";
import { styled } from "styled-components";
import Image from "../assets/no-projects.png";
import { ProjectContext } from "../context/project_data_context";
import { useContext } from "react";

const MainDiv = styled.div`
  height: 85vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NoProjectFound() {
  const { addNewProject } = useContext(ProjectContext);
  return (
    <>
      <MainDiv>
        <img src={Image} alt="" height="10px" width="80px" className="mb-5" />
        <p>No Projects Found</p>
        <p>Select a project or get started with a new one.</p>
        <Button onClick={addNewProject}>Create a new project</Button>
      </MainDiv>
    </>
  );
}
