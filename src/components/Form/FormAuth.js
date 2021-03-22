import styled from 'styled-components';
import Particles from 'react-particles-js';

export const BlockLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  border-right: 2px solid #ddd;
  @media (max-width: 868px) {
    width: 100%;
    border: none;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 0 1rem;
  margin-top: 2rem;
  justify-content: center;
  transition: all 0.2s 0.7s;
  @media (max-width: 868px) {
    width: 90%;
    margin-top: 0;
  }
`;

export const Button = styled.button`
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

export const TitleMain = styled.h1`
  font-size: 2.2rem;
  color: black;
  margin-bottom: 2rem;
  font-weight: 900;
  text-align: center;
`;

export const WrapperTitle = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  border-radius: 30px;
  padding: 0 3rem;
  top: -6rem;
  transform: translateY(-10%);
  z-index: 9999;
  @media (max-width: 868px) {
    position: relative;
    top: 0;
    background-color: white;
    color: black;
    transform: translateY(0%);
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
`;

export const InputGroup = styled.div`
  max-width: 380px;
  width: 90%;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 15% 85%;
  position: relative;
  padding: 0 1rem;
`;

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

export const Icon = styled.i`
  text-align: center;
  line-height: 55px;
  color: #666;
  transition: 0.5s;
  font-size: 1.1rem;
`;

export const ParticlesStyled = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;
