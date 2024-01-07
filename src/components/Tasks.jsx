import { styled } from "styled-components";
import Button from "./UI/Button";
import TaskList from "./TaskList";
import { useRef, useState } from "react";

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

export default function Tasks({ addTask, tasks }) {
  const [enteredTask, setEnteredTask] = useState([]);

  function handleInput(event) {
    setEnteredTask(event.target.value);
  }

  function sendTaskData() {
    addTask(enteredTask);
  }

  return (
    <>
      <div className="mt-3">
        <TaskInput onChange={handleInput} />
        <Button className="ml-4" onClick={sendTaskData}>
          Add Task
        </Button>
      </div>

      <div className="mt-3">
        <TaskUl>
          {tasks &&
            tasks.map((task, index) => <TaskList key={index} data={task} />)}
        </TaskUl>
      </div>
    </>
  );
}
