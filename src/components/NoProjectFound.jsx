import Button from './UI/Button'
import { styled } from 'styled-components'
import { forwardRef } from 'react'
import Image from '../assets/no-projects.png'
const MainDiv = styled.div`
  height: 85vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function NoProjectFound({ addNewProject }) {
  return (
    <>
      <MainDiv>
        <img src={Image} alt="" height="10px" width="80px" className="mb-5" />
        <p>No Projects Found</p>
        <p>Select a project or get started with a new one.</p>
        <Button onClick={addNewProject}>Create a new project</Button>
      </MainDiv>
    </>
  )
}
