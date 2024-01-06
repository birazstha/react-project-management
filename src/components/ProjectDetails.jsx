import { styled } from 'styled-components'
import Button from './UI/Button'

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
  margin-bottom: 5px;
`
const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`

const DueDate = styled.p`
  /* font-size: 30px; */
  color: #666666;
`

const Description = styled.p`
  /* font-size: 30px; */
  margin-top: 2rem;
`

export default function ProjectDetails({ project }) {
  return (
    <>
      <TitleDiv>
        <Title>{project.title}</Title>
        <Button>Delete</Button>
      </TitleDiv>
      <DueDate>{project.dueDate}</DueDate>
      <Description>{project.description}</Description>
      <hr />
    </>
  )
}