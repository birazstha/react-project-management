import { styled } from "styled-components";

const ButtonDiv = styled.button`
  padding: 6px;
  color: #fdfdfd;
  background: #898484;
  border-radius: 5px;
  margin: 5px;
  font-weight: bolder;
  transition: all 0.3s ease;

  &:hover {
    background: #757575;
    color: #fdfdfd;
    box-shadow: 0 0 10px rgba(160, 160, 160, 0.3);
  }
`;

export default function Button({ children,...props }) {
  return <ButtonDiv {...props}>{children}</ButtonDiv>;
}
