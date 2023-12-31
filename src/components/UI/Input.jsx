import { styled } from "styled-components";

const Label = styled.label`
  color: black;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  /* border: 1px solid red; */
`;

const InputGroup = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const InputField = styled.input`
  outline: none;
  width: 100%;
  padding: 0.5rem;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
  outline: none;
  width: 100%;
  padding: 0.5rem;
  border-radius: 1px;
`;

export default function Input({ labelTitle, name, isTextarea, ...props }) {
  return (
    <>
      <InputGroup>
        <Label htmlFor="">{labelTitle}</Label>
        {isTextarea ? (
          <Textarea cols="5" rows="5" {...props} placeholder={labelTitle}></Textarea>
        ) : (
          <InputField
            id={name}
            name={name}
            placeholder={labelTitle}
            {...props}
          />
        )}
      </InputGroup>
    </>
  );
}
