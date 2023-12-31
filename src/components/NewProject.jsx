import { styled } from "styled-components";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { useState, forwardRef } from "react";

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
`;

const NewProject = forwardRef(function NewProject({ forwardData }, submitForm) {
  const [data, setData] = useState({
    title: "",
    dueDate: "",
    description: "",
  });

  function handSubmittedForm(e) {
    e.preventDefault();
    if (forwardData) {
      forwardData(data);
    }
  }

  function storeValue(title, value) {
    setData({
      ...data,
      [title]: value,
    });
  }

  return (
    <>
      <form action="" onSubmit={handSubmittedForm}>
        <ButtonGroup>
          <Button type="submit">Save</Button>
          <Button>Cancel</Button>
        </ButtonGroup>

        {/* Title */}
        <Input
          type="text"
          name="title"
          onChange={(e) => storeValue("title", e.target.value)}
          labelTitle="Title"
        />

        {/* Due Date */}
        <Input
          type="date"
          name="due-date"
          onChange={(e) => storeValue("dueDate", e.target.value)}
          labelTitle="Due Date"
        />

        {/* Description */}

        <Input
          type="date"
          name="description"
          labelTitle="Description"
          onChange={(e) => storeValue("description", e.target.value)}
          isTextarea={true}
        />
      </form>
    </>
  );
});

export default NewProject;
