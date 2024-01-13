import { styled } from "styled-components";
import Button from "./UI/Button";
import TaskList from "./TaskList";
import { useContext, useState } from "react";
import { ProjectContext } from "../context/project_data_context";

const TaskInput = styled.input`
  outline: none;
  width: 25%;
  padding: 0.5rem;
  border-radius: 3px;
  border: ${({ $isError }) => ($isError ? "1px solid red" : "")};
`;

const TaskUl = styled.ul`
  margin-bottom: 1rem;
`;

export default function Tasks() {
  const [enteredTask, setEnteredTask] = useState();
  const [isError, setIsError] = useState(false);

  const { tasks, addTask } = useContext(ProjectContext);

  function handleInput(event) {
    setIsError(false);
    setEnteredTask(event.target.value);
  }

  function sendTaskData() {
    if (enteredTask === "") {
      setIsError(true);
      return;
    } else {
      setIsError(false);
      setEnteredTask("");
      addTask(enteredTask);
    }
  }

  return (
    <>
      <div className="mt-3">
        <TaskInput onChange={handleInput} value={enteredTask} />
        <Button className="ml-4" onClick={sendTaskData}>
          Add Task
        </Button>
      </div>
      {isError && (
        <span className="text-red-500 ">Please enter the title.</span>
      )}

      <div className="mt-3">
        {tasks && tasks.length > 0 ? (
          <TaskUl>
            {tasks &&
              tasks.map((task, index) => (
                <TaskList key={index} data={task} number={index + 1} />
              ))}
          </TaskUl>
        ) : (
          <span className="text-red-500">No tasks found.</span>
        )}
      </div>
    </>
  );
}
