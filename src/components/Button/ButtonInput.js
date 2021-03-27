import styled from 'styled-components';
import PropTypes from 'prop-types';

const color = {
  primary: '#01b075',
  danger: '#e63225',
};

export const ButtonInput = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  outline: none;
  background-color: ${(props) => color[props.color]};
  color: white;
  padding: 0.6rem 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: ${(props) => (props.light ? '0rem 0rem .5rem' + color[props.color] : 'none')};
  transition: all 0.2s;
  & > i {
    margin-right: 0.2rem;
  }
  &.transparent {
    color: #01b075;
    font-weight: 600;
    background-color: transparent;
  }
  &:hover {
    opacity: 0.8;
  }
`;

ButtonInput.propTypes = {
  color: PropTypes.string,
  light: PropTypes.bool,
};

ButtonInput.defaultProps = {
  color: 'primary',
  light: false,
};
