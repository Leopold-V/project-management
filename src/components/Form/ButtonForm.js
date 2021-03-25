import styled from 'styled-components';

export const ButtonForm = styled.button`
  text-align: center;
  padding: 0.8rem 2.2rem;
  background-color: #01b075;
  border: 2px solid transparent;
  outline: none;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin: 1rem 0;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }

  &.transparent {
    background: white;
    color: #01b075;
    border: 2px solid #01b075;
    font-weight: 600;
  }
`;
