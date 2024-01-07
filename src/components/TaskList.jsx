import {styled} from 'styled-components';
import Button from './UI/Button';

const List = styled.li`
  box-shadow: 4px 2px 8px #949494;
  width: 100%;
  margin-bottom: 1rem;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function TaskList({data}) {
  return (
    <>
      <List>
        <span>{data.title} </span>
        <Button className="ml-4">Clear</Button>
      </List>
    </>
  )
}
