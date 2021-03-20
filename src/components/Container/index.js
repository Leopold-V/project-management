import styled from "styled-components"

export const ContainerLayout = styled.div`
    display: flex;
    justify-content: start;
    min-height: 100vh;
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const ContainerSideBar = styled.div`
	width: 280px;
	background-color: #1c1b20;
	position: static;
`

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #030111;
    color: white;
`

export const ContainerHeadBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 5rem;
    border-radius: 5px;
    margin: 1rem 1.3rem;
    padding: 0 2rem;
    background-color: #1c1b20;
`

export const ContainerHome = styled.div`
  position: relative;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
  padding: 0 1.3rem;
`

export const ContainerCard = styled.div`

`