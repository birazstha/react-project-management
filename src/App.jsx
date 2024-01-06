import { useState } from 'react'
import Content from './components/Content'
import { styled } from 'styled-components'
import Sidebar from './components/Sidebar'
import NoProjectFound from './components/NoProjectFound'
import NewProject from './components/NewProject'
import ProjectDetails from './components/ProjectDetails'

const MainContainer = styled.div`
  display: flex;
`

function App() {
  const [projectData, setProjectData] = useState({
    selectedProjectId: undefined,
    projects: [],
  })

  function newData(formData) {
    setProjectData((prevProject) => {
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
    setProjectData((prevData) => {
      return {
        ...prevData,
        selectedProjectId: null,
      }
    })
  }

  function projectId(id) {
    setProjectData((prevData) => {
      return {
        ...prevData,
        selectedProjectId: id,
      }
    })
  }

  let content

  if (projectData.selectedProjectId === null) {
    content = <NewProject forwardData={newData} />
  } else if (projectData.selectedProjectId === undefined) {
    content = <NoProjectFound addNewProject={addNewProject} />
  } else if (projectData.selectedProjectId != null) {
    const project = projectData.projects.find(
      (task) => task.id === projectData.selectedProjectId,
    )
    content = <ProjectDetails project={project} />
  }

  return (
    <MainContainer>
      <Sidebar
        projects={projectData.projects}
        addNewProject={addNewProject}
        selectedProjectId={projectId}
      />
      <Content>{content}</Content>
    </MainContainer>
  )
}

export default App
