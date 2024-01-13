import { createContext, useState, useReducer } from "react";
import NoProjectFound from "../components/NoProjectFound";
import NewProject from "../components/NewProject";
import ProjectDetails from "../components/ProjectDetails";

export const ProjectContext = createContext();

function reducer(state, action) {
  if (action.type === "NEW_DATA") {
    const newProject = {
      ...action.payload,
      id: Math.random(),
    };
    return {
      ...state,
      projects: [...state.projects, newProject],
    };
  }

  if (action.type === "ADD_NEW_PROJECT") {
    return {
      ...state,
      selectedProjectId: null,
    };
  }

  if (action.type === "SELECTED_PROJECT") {
    return {
      ...state,
      selectedProjectId: action.payload,
    };
  }

  if (action.type === "ADD_TASK") {
    const newTask = {
      title: action.payload,
      projectId: state.selectedProjectId,
      taskId: Math.random(),
    };

    return {
      ...state,
      tasks: [newTask, ...state.tasks],
    };
  }

  if (action.type === "DELETE_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.taskId !== action.id),
    };
  }
}

export default function ProjectContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function newData(formData) {
    dispatch({
      type: "NEW_DATA",
      payload: formData,
    });
  }

  function addNewProject() {
    dispatch({
      type: "ADD_NEW_PROJECT",
    });
  }

  function selectedProject(id) {
    dispatch({
      type: "SELECTED_PROJECT",
      payload: id,
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
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  }

  function deleteTask(id) {
    dispatch({
      type: "DELETE_TASK",
      id: id,
    });
  }

  let content, project, task;

  if (state.selectedProjectId === null) {
    content = <NewProject forwardData={newData} />;
  } else if (state.selectedProjectId === undefined) {
    content = <NoProjectFound />;
  } else if (state.selectedProjectId != null) {
    project = state.projects.find(
      (project) => project.id === state.selectedProjectId
    );
    task = state.tasks.filter((task) => task.projectId === project.id);
    content = <ProjectDetails />;
  }

  const ctxData = {
    addNewProject: addNewProject,
    content: content,
    project: project,
    projects: state.projects,
    tasks: task,
    selectedProject: selectedProject,
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
