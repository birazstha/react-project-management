import { useState } from 'react'
import Content from './components/Content'
import { styled } from 'styled-components'
import Sidebar from './components/Sidebar'
import NoProjectFound from './components/NoProjectFound'
import NewProject from './components/NewProject'

const MainContainer = styled.div`
  display: flex;
`

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  })

  function newData(formData) {
    setProjects((prevProject) => {
      const newProject = {
        ...formData,
        id: Math.random(),
      }

      return {
        ...prevProject,
        projects: [...prevProject.projects, newProject],
      }
    })
  }

  function addNewProject() {
    setProjects((prevData) => {
      return {
        ...prevData,
        selectedProjectId: null,
      }
    })

    console.log(projects)
  }
 
  let content

  if (projects.selectedProjectId === null) {
    content = <NewProject forwardData={newData} />
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectFound addNewProject={addNewProject} />
  }

  return (
    <MainContainer>
      <Sidebar projects={projects.projects} addNewProject={addNewProject} />
      <Content>{content}</Content>
    </MainContainer>
  )
}

export default App
