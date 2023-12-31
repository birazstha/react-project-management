import { useState } from "react";
import Content from "./components/Content";
import { styled } from "styled-components";
import Sidebar from "./components/Sidebar";
import NoProjectFound from "./components/NoProjectFound";
import NewProject from "./components/NewProject";

const MainContainer = styled.div`
  display: flex;
`;

function App() {
  const [tabs, setTabs] = useState([]);
  const [isNewProject, setNewProject] = useState(false);

  function handleNewProject() {
    setNewProject(true);
  }

  return (
    <MainContainer>
      <Sidebar tabs={tabs} ref={handleNewProject} />
      <Content content={isNewProject ? <NewProject /> : <NoProjectFound />} />
    </MainContainer>
  );
}

export default App;
