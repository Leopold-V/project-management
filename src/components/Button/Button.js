import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0.6rem 1rem;
  background-color: #01b075;
  color: white;
  cursor: pointer;
  box-shadow: ${(props) => (props.light ? '0rem 0rem .5rem rgba(70, 207, 122)' : 'none')};
  transition: all 0.2s;
  & > i {
    margin-right: 0.2rem;
  }
  &.transparent {
    color: #01b075;
    border: 2px solid #01b075;
    font-weight: 600;
    background-color: transparent;
  }
  &:hover {
    box-shadow: 0rem 0rem 0.5rem rgba(70, 207, 122);
  }
`;

Button.propTypes = {
  light: PropTypes.bool
};

Button.defaultTypes = {
  light: false
};