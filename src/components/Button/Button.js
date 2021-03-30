import styled from 'styled-components';
import PropTypes from 'prop-types';

const color = {
  primary: '#01b075',
  secondary: '#06d6f1',
  danger: '#e63225',
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0.6rem 1.2rem;
  background-color: ${(props) => color[props.color]};
  color: white;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  box-shadow: ${(props) => (props.light ? '0rem 0rem .5rem' + color[props.color] : 'none')};
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
    box-shadow: ${(props) => '0rem 0rem .5rem' + color[props.color]};
  }
`;

Button.propTypes = {
  color: PropTypes.string,
  light: PropTypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  light: false,
};
