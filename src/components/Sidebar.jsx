import { styled } from "styled-components";
import Button from "./UI/Button";
import { forwardRef } from "react";

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

const Sidebar = forwardRef(function Sidebar({ projects }, ref) {
  return (
    <>
      <SideBarDiv>
        <SidebarTitle>Your Projects</SidebarTitle>
        <Button onClick={ref}>+Add Project</Button>

        <TabDiv>
          {projects &&
            projects.map((project, index) => (
              <Tabs key={index} $isActive={index === 0 ? "true" : "false"}>
                {project.title}
              </Tabs>
            ))}
        </TabDiv>
      </SideBarDiv>
    </>
  );
});

export default Sidebar;
