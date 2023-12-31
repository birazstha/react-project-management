import { styled } from "styled-components";
import NewProject from "./NewProject";
import NoProjectFound from "./NoProjectFound";
import ProjectDetail from "./ProjectDetail";

const ContentDiv = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #d4d4d4;
`;

export default function Content({ content }) {
  return (
    <>
      <ContentDiv>{content}</ContentDiv>
    </>
  );
}
