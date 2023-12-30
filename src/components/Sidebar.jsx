import { styled } from "styled-components";

const SideBarDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  padding: 10px;
  color: white;
  background-color: #222121;
`;

const Button = styled.button`
  padding: 6px;
  color: #fdfdfd;
  background: #898484;
  border-radius: 5px;
  margin-top: 2rem;
  font-weight: bolder;
  transition: all 0.3s ease;

  &:hover {
    background: #757575;
    color: #fdfdfd;
    box-shadow: 0 0 10px rgba(160, 160, 160, 0.3);
  }
`;

const SidebarTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 2rem;
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

export default function Sidebar({ tabs }) {
  return (
    <>
      <SideBarDiv>
        <SidebarTitle>Your Projects</SidebarTitle>
        <Button>Add Project</Button>

        <TabDiv>
          {tabs.map((tab, index) => (
            <Tabs key={index} $isActive={index === 0 ? "true" : "false"}>
              {tab}
            </Tabs>
          ))}
        </TabDiv>
      </SideBarDiv>
    </>
  );
}
