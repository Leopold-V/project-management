import styled from 'styled-components';

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  &::placeholder {
    color: #666;
    font-weight: 500;
  }
`;
