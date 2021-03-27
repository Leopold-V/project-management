import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { change } from '../../slices/sliceSwitch';

const Switch = () => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(change());
  };

  return (
    <StyledLabel>
      <input type="checkbox" onChange={handleChange} id="slider" />
      <span className="slider round"></span>
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  display: block;
  width: 60px;
  height: 20px;
  position: relative;
  margin: 0 1rem;
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 3px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background: white url('./moon.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  input:checked + .slider {
    background-color: #2196f3;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(28px);
    -ms-transform: translateX(28px);
    transform: translateX(28px);
    background: white url('./sun.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
`;

export default Switch;
