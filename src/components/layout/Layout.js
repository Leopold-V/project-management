import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Main } from './Main';
import { Headbar } from './Headbar';
import { SideBar } from './SideBar';

export const Layout = ({children}) => {

	let location = useLocation();

	if (location.pathname === '/login' || location.pathname === '/register') {
		return (
			<>{children}</>
		);
	}
	return (
		<Container>
			<SideBar />
			<Main>
				<Headbar />
				{children}
			</Main>
		</Container>
	)
}

const Container = styled.div`
    display: flex;
    justify-content: start;
    min-height: 100vh;
`
