import { forwardRef } from 'react'
import { styled } from 'styled-components'

const Label = styled.label`
  color: black;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  /* border: 1px solid red; */
`

const InputGroup = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

const InputField = styled.input`
  outline: none;
  width: 100%;
  padding: 0.5rem;
  border-radius: 3px;
  border: ${({ $isError }) => ($isError ? '1px solid red' : '')};
`

const Textarea = styled.textarea`
  outline: none;
  width: 100%;
  padding: 0.5rem;
  border-radius: 3px;
  border: ${({ $isError }) => ($isError ? '1px solid red' : '')};
`

const Input = forwardRef(function Input(
  { labelTitle, errMsg, name, isTextarea, isError, ...props },
  ref,
) {
  return (
    <>
      <InputGroup>
        <Label htmlFor="">{labelTitle}</Label>
        {isTextarea ? (
          <Textarea
            cols="5"
            rows="5"
            $isError={isError}
            ref={ref}
            placeholder={labelTitle}
            {...props}
          ></Textarea>
        ) : (
          <InputField
            id={name}
            name={name}
            placeholder={labelTitle}
            $isError={isError}
            ref={ref}
            {...props}
          />
        )}
        <span className="mt-1 text-red-500">{errMsg}</span>
      </InputGroup>
    </>
  )
})

export default Input
