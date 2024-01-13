import { styled } from "styled-components";
import { ProjectContext } from "../context/project_data_context";
import { useContext } from "react";

const ContentDiv = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #e2e2e2;
`;

export default function Content() {
  const { content } = useContext(ProjectContext);
  return (
    <>
      <ContentDiv>{content}</ContentDiv>
    </>
  );
}
