import { styled } from "styled-components";
import Button from "./UI/Button";
import Tasks from "./Tasks";
import { ProjectContext } from "../context/project_data_context";
import { useContext } from "react";

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
  margin-bottom: 5px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const DueDate = styled.p`
  /* font-size: 30px; */
  color: #666666;
`;

const Description = styled.p`
  /* font-size: 30px; */
  margin-top: 2rem;
`;

const LineBreak = styled.div`
  border: 1px solid white;
  margin-top: 1rem;
`;

export default function ProjectDetails() {
  const { handleDelete, project } = useContext(ProjectContext);

  return (
    <>
      <TitleDiv>
        <Title>{project.title}</Title>
        <Button onClick={() => handleDelete(project.id)}>Delete</Button>
      </TitleDiv>
      <DueDate>{project.dueDate}</DueDate>
      <Description>{project.description}</Description>
      <LineBreak />
      <h2 className="text-2xl font-bolder mt-4 uppercase">Tasks</h2>
      <Tasks />
    </>
  );
}
