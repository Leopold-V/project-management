import styled from 'styled-components';
import PropTypes from 'prop-types';

const color = {
  primary : '#01b075',
  danger : '#e63225'
}

export const ButtonSmall = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 0.7rem 0.8rem;
  background-color: ${(props) => color[props.color]};
  color: white;
  cursor: pointer;
  box-shadow: ${(props) => (props.light ? '0rem 0rem .5rem' + color[props.color] : 'none')};
  transition: all .3s;
  &:hover {
    box-shadow: ${(props) => '0rem 0rem .5rem' + color[props.color]};
  }
  &.transparent {
    color: #01b075;
    border: 2px solid #01b075;
    font-weight: 600;
    background-color: transparent;
  }
`;

ButtonSmall.propTypes = {
  color: PropTypes.string,
  light: PropTypes.bool,
};

ButtonSmall.defaultProps = {
  color: 'primary',
  light: false,
};