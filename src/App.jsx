import Content from "./components/Content";
import { styled } from "styled-components";
import Sidebar from "./components/Sidebar";
import ProjectContextProvider from "./context/project_data_context";

const MainContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <ProjectContextProvider>
      <MainContainer>
        <Sidebar />
        <Content />
      </MainContainer>
    </ProjectContextProvider>
  );
}
export default App;
