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
  const [projects, setProjects] = useState([]);
  const [isNewProject, setNewProject] = useState(false);

  function handleNewProject() {
    setNewProject(true);
  }

  function newData(formData) {
    setProjects((prevData) => [...prevData, formData]);
  }

  return (
    <MainContainer>
      <Sidebar projects={projects} ref={handleNewProject} />
      <Content
        content={
          isNewProject ? (
            <NewProject forwardData={newData} />
          ) : (
            <NoProjectFound ref={handleNewProject} />
          )
        }
      />
    </MainContainer>
  );
}

export default App;
