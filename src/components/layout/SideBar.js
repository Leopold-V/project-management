import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { projectsSelector } from '../../slices/sliceProjects';

import { ButtonLink } from '../Button';
import { ContainerSideBar } from '../Container';

export const SideBar = () => {
  let history = useHistory();

  const projects = useSelector(projectsSelector);
  const theme = useSelector(state => state.switch);

  const refreshPage = () => {
    history.go('/');
  };

  return (
    <ContainerSideBar theme={theme}>
      <Title onClick={refreshPage}>
        Open<span>Board</span>
      </Title>
      <Nav>
        <NavList>
          <NavTitle>Main</NavTitle>
          <NavItem>
            <ButtonLink $light={true} exact to="/" activeClassName="active">
              <i className="fas fa-home"></i>&nbsp;Overview
            </ButtonLink>
          </NavItem>
          <NavItem>
            <ButtonLink $light={true} exact to="/dashboard" activeClassName="active">
            <i className="fas fa-chart-line"></i>&nbsp;Dashboard
            </ButtonLink>
          </NavItem>
          <NavItem>
            <ButtonLink $light={true} to="/profile" activeClassName="active">
              <i className="fas fa-cog"></i>&nbsp;Profile
            </ButtonLink>
          </NavItem>
        </NavList>
        <NavList>
          <NavTitle>Projects</NavTitle>
          {projects.map((ele) => {
            return (
              <NavItem key={ele.id}>
                <ButtonLink $light={true} to={'/project/' + ele.id} activeClassName="active">
                  {ele.name}
                </ButtonLink>
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
    </ContainerSideBar>
  );
};

const NavTitle = styled.h3`
  margin-bottom: 0.5rem 0;
  color: white;
`;

const NavItem = styled.li`
  margin: 0.5rem 0;
  & > a {
    color: #9b9b9b;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 4rem 0;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  padding: 0.9rem 0;
  text-align: center;
  cursor: pointer;
  & > span {
    color: #46cf7a;
  }
`;

const Nav = styled.nav`
  padding: 0 2rem;
`;
