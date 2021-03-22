import styled from 'styled-components';

export const Card = styled.div`
  background-color: #27262b;
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0 1.5rem;
  transition: all 0.3s;
  &:hover {
    border: 2px solid #01b075;
    box-shadow: 0rem 0rem 0.5rem rgba(70, 207, 122);
  }
  & > p,
  div {
    color: #9b9b9b;
  }
  & > a,
  a:link,
  a:visited {
    color: #9b9b9b;
    font-weight: 600;
    &:hover {
      color: #01b075;
    }
  }
`;
