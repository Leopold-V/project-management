import styled from 'styled-components';

export { ContainerCardTask } from './ContainerCardTask';
export { ContainerMain } from './ContainerMain';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ContainerLayout = styled.div`
  display: flex;
  justify-content: start;
  min-height: 100vh;
`;

export const ContainerSideBar = styled.div`
  width: 280px;
  background-color: #27262b;
  position: static;
`;

export const ContainerHeadBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
  border-radius: 5px;
  padding: 0 2rem;
  margin: 1.3rem 2rem;
  box-shadow: ${(props) => props.theme.value ? 'none' : '0rem 0rem 1rem rgba(255, 255, 255, .7)'};
  background-color: ${(props) => props.theme.card};
  color: ${(props) => (!props.theme.value ? '#030111' : 'white')};
`;

export const ContainerSection = styled.div`
  position: relative;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
  padding: 1rem 3rem;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
`;

export const ContainerForm = styled.div`
  background: white;
  width: 65%;
  border-radius: 5px;
  padding: 2rem 0;
  display: flex;
  justify-content: start;
  z-index: 0;
  color: black;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 868px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
