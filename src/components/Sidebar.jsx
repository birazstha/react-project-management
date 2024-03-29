import { styled } from "styled-components";
import Button from "./UI/Button";
import { useContext } from "react";
import { ProjectContext } from "../context/project_data_context";

const SideBarDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  padding: 10px;
  color: white;
  background-color: #222121;
`;

const SidebarTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Tabs = styled.span`
  cursor: pointer;
  display: flex;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding: 5px;
  background: ${({ $isActive }) => ($isActive == "true" ? "white" : "")};
  color: ${({ $isActive }) => ($isActive == "true" ? "black" : "")};
`;

const TabDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export default function Sidebar({ activeProjectTab }) {
  const { addNewProject, projects, selectedProject } =
    useContext(ProjectContext);

  return (
    <>
      <SideBarDiv>
        <SidebarTitle>Your Projects</SidebarTitle>
        <Button onClick={addNewProject}>+Add Project</Button>

        <TabDiv>
          {projects &&
            projects.map((project, index) => (
              <Tabs
                onClick={() => selectedProject(project.id)}
                key={index}
                $isActive={activeProjectTab === project.id ? "true" : "false"}
              >
                {project.title}
              </Tabs>
            ))}
        </TabDiv>
      </SideBarDiv>
    </>
  );
}
