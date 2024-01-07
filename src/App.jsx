import { useState } from "react";
import Content from "./components/Content";
import { styled } from "styled-components";
import Sidebar from "./components/Sidebar";
import NoProjectFound from "./components/NoProjectFound";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";

const MainContainer = styled.div`
  display: flex;
`;

function App() {
  const [projectData, setProjectData] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function newData(formData) {
    setProjectData((prevProject) => {
      const newProject = {
        ...formData,
        id: Math.random(),
      };

      return {
        ...prevProject,
        projects: [...prevProject.projects, newProject],
      };
    });
  }

  function addNewProject() {
    setProjectData((prevData) => {
      return {
        ...prevData,
        selectedProjectId: null,
      };
    });
  }

  function projectId(id) {
    setProjectData((prevData) => {
      return {
        ...prevData,
        selectedProjectId: id,
      };
    });
  }

  function handleDelete(id) {
    setProjectData((prevData) => {
      const updatedProjects = prevData.projects.filter(
        (item) => item.id !== id
      );

      return {
        ...prevData,
        selectedProjectId: undefined,
        projects: updatedProjects,
      };
    });
  }

  function addTask(task) {
    setProjectData((prevData) => {
      const newTask = {
        title: task,
        projectId: prevData.selectedProjectId,
        taskId: Math.random(),
      };

      return {
        ...prevData,
        tasks: [newTask, ...prevData.tasks],
      };
    });
  }

  function deleteTaskId(id) {
    console.log(id);
    setProjectData((prevData) => {
      return {
        ...prevData,
        tasks: prevData.tasks.filter((task) => task.taskId !== id),
      };
    });

    console.log(projectData);
  }

  let content;

  if (projectData.selectedProjectId === null) {
    content = <NewProject forwardData={newData} />;
  } else if (projectData.selectedProjectId === undefined) {
    content = <NoProjectFound addNewProject={addNewProject} />;
  } else if (projectData.selectedProjectId != null) {
    const project = projectData.projects.find(
      (project) => project.id === projectData.selectedProjectId
    );
    const tasks = projectData.tasks.filter(
      (task) => task.projectId === project.id
    );
    content = (
      <ProjectDetails
        project={project}
        tasks={tasks}
        handleDelete={handleDelete}
        addTask={addTask}
        deleteTaskId={deleteTaskId}
      />
    );
  }

  return (
    <MainContainer>
      <Sidebar
        projects={projectData.projects}
        addNewProject={addNewProject}
        selectedProjectId={projectId}
        activeProjectTab={projectData.selectedProjectId}
      />
      <Content>{content}</Content>
    </MainContainer>
  );
}

export default App;
