import { styled } from 'styled-components'
import NewProject from './NewProject'
import NoProjectFound from './NoProjectFound'
import ProjectDetail from './ProjectDetails'

const ContentDiv = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #e2e2e2;
`

export default function Content({ children }) {
  return (
    <>
      <ContentDiv>{children}</ContentDiv>
    </>
  )
}
