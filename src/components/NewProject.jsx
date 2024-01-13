import { forwardRef, useState, useRef, useContext } from "react";
import { styled } from "styled-components";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { ProjectContext } from "../context/project_data_context";

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
`;

const NewProject = forwardRef(function NewProject({ forwardData }, ref) {
  const { newData } = useContext(ProjectContext);

  const title = useRef();
  const dueDate = useRef();
  const description = useRef();

  const [data, setData] = useState({
    id: null,
    title: "",
    dueDate: "",
    description: "",
  });

  const initialErrors = {
    errTitle: false,
    errDueDate: false,
    errDescription: false,
  };

  const [errors, setErrors] = useState(initialErrors);

  function handleSubmittedForm(e) {
    e.preventDefault();
    const enteredTitle = title.current.value;
    const enteredDueDate = dueDate.current.value;
    const enteredDescription = description.current.value;

    const newErrors = {
      errTitle: enteredTitle.trim() === "",
      errDueDate: enteredDueDate.trim() === "",
      errDescription: enteredDescription.trim() === "",
    };

    setErrors(newErrors);

    const newData = {
      id: Math.random(),
      title: enteredTitle,
      dueDate: enteredDueDate,
      description: enteredDescription,
    };

    setData(newData);

    if (
      !newErrors.errTitle &&
      !newErrors.errDueDate &&
      !newErrors.errDescription
    ) {
      forwardData(newData);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmittedForm} ref={ref}>
        <ButtonGroup>
          <Button type="submit">Save</Button>
          <Button>Cancel</Button>
        </ButtonGroup>

        {/* Title */}
        <Input
          labelTitle="Title"
          type="text"
          name="title"
          isError={errors.errTitle}
          ref={title}
        />

        {/* Due Date */}
        <Input
          labelTitle="Due Date"
          type="date"
          isError={errors.errDueDate}
          name="dueDate"
          ref={dueDate}
        />

        {/* Description */}
        <Input
          labelTitle="Description"
          type="text"
          isError={errors.errDescription}
          name="description"
          ref={description}
          isTextarea={true}
        />
      </form>
    </>
  );
});

export default NewProject;
