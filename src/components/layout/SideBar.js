import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from '../Button';

export const SideBar = () => {

	return (
		<Wrapper>
			<Title>Open<span>Board</span></Title>
			<Nav>
				<NavList>
					<NavTitle>Main</NavTitle>
					<NavItem>
						<ButtonLink exact to='/' activeClassName="active">
							<i className="fas fa-home" style={{marginRight: '.2rem'}}></i>&nbsp;Overview
						</ButtonLink>
					</NavItem>
					<NavItem>
						<ButtonLink to='/profile' activeClassName="active">
							<i className="fas fa-cog" style={{marginRight: '.2rem'}}></i>&nbsp;Profile
						</ButtonLink>
					</NavItem>
				</NavList>
				<NavList>
					<NavTitle>Projects</NavTitle>
					<NavItem><ButtonLink to={'/project/ReactPhotos'} activeClassName="active">ReactPhotos</ButtonLink></NavItem>
					<NavItem><ButtonLink to={'/project/Urls'} activeClassName="active">Urls shortener</ButtonLink></NavItem>
					<NavItem><ButtonLink to={'/project/Movie'} activeClassName="active">Movie app</ButtonLink></NavItem>
				</NavList>
			</Nav>
		</Wrapper>
	)
}

const NavTitle = styled.h3`
	margin-bottom: .5rem 0;
	color: white;

`

const NavItem = styled.li`
	margin: .5rem 0;
	& > a {
		color: #9b9b9b;
	}
`

const NavList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 4rem 0;
`

const Title = styled.div`
    font-weight: 900;
    font-size: 2rem;
	padding: 2rem 0;
	text-align: center;
    & > span {
        color: #46cf7a;
    }
`

const Nav = styled.nav`
	padding: 0 2rem;
`

const Wrapper = styled.div`
	width: 280px;
	background-color: #1c1b20;
	position: static;
`