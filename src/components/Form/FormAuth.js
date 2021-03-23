import styled from 'styled-components';

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

export const FormAuth = styled.form`
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
