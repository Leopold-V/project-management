import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonLink } from '../Button';
import { ContainerSideBar } from '../Container';

export const SideBar = () => {
  let history = useHistory();

  const refreshPage = () => {
    history.go('/');
  };

  return (
    <ContainerSideBar>
      <Title onClick={refreshPage}>
        Open<span>Board</span>
      </Title>
      <Nav>
        <NavList>
          <NavTitle>Main</NavTitle>
          <NavItem>
            <ButtonLink light exact to="/" activeClassName="active">
              <i className="fas fa-home"></i>&nbsp;Overview
            </ButtonLink>
          </NavItem>
          <NavItem>
            <ButtonLink light to="/profile" activeClassName="active">
              <i className="fas fa-cog"></i>&nbsp;Profile
            </ButtonLink>
          </NavItem>
        </NavList>
        <NavList>
          {' '}
          {/*bind data*/}
          <NavTitle>Projects</NavTitle>
          <NavItem>
            <ButtonLink light to={'/project/ReactPhotos'} activeClassName="active">
              ReactPhotos
            </ButtonLink>
          </NavItem>
          <NavItem>
            <ButtonLink light to={'/project/Urls'} activeClassName="active">
              Urls shortener
            </ButtonLink>
          </NavItem>
          <NavItem>
            <ButtonLink light to={'/project/Movie'} activeClassName="active">
              Movie app
            </ButtonLink>
          </NavItem>
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
