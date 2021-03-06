import styled from 'styled-components';

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.9rem 0.8rem;
  color: #333;
  &::placeholder {
    color: #666;
    font-weight: 500;
  }
`;
