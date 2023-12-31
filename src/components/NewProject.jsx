import { styled } from "styled-components";
import Button from "./UI/Button";
import Input from "./UI/Input";

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
`;

export default function NewProject() {
  return (
    <>
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>

      <Input type="text" name="title" labelTitle="Title" />
      <Input type="date" name="due-date" labelTitle="Due Date" />
      <Input
        type="date"
        name="due-date"
        labelTitle="Due Date"
        isTextarea={true}
      />
    </>
  );
}
