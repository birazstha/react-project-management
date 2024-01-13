import { styled } from "styled-components";
import Button from "./UI/Button";
import { ProjectContext } from "../context/project_data_context";
import { useContext } from "react";

const List = styled.li`
  box-shadow: 4px 2px 8px #949494;
  width: 100%;
  margin-bottom: 1rem;
  padding: 5px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function TaskList({ data, number }) {
  const { deleteTask } = useContext(ProjectContext);
  return (
    <>
      <List>
        <span>
          {number}. {data.title}{" "}
        </span>
        <Button className="ml-4" onClick={() => deleteTask(data.taskId)}>
          Clear
        </Button>
      </List>
    </>
  );
}
