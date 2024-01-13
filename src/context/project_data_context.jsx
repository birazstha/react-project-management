import { createContext, useState } from "react";
import NoProjectFound from "../components/NoProjectFound";
import NewProject from "../components/NewProject";
import ProjectDetails from "../components/ProjectDetails";

export const ProjectContext = createContext({
  addTask: () => {},
});

export default function ProjectContextProvider({ children }) {
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

  function deleteTask(id) {
    setProjectData((prevData) => {
      return {
        ...prevData,
        tasks: prevData.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  let content, project, task;

  if (projectData.selectedProjectId === null) {
    content = <NewProject forwardData={newData} />;
  } else if (projectData.selectedProjectId === undefined) {
    content = <NoProjectFound />;
  } else if (projectData.selectedProjectId != null) {
    project = projectData.projects.find(
      (project) => project.id === projectData.selectedProjectId
    );
    task = projectData.tasks.filter((task) => task.projectId === project.id);
    content = <ProjectDetails />;
  }

  const ctxData = {
    addNewProject: addNewProject,
    content: content,
    project: project,
    projects: projectData.projects,
    tasks: task,
    projectId: projectId,
    handleDelete: handleDelete,
    addTask: addTask,
    deleteTask: deleteTask,
    newData: newData,
  };

  return (
    <ProjectContext.Provider value={ctxData}>
      {children}
    </ProjectContext.Provider>
  );
}
