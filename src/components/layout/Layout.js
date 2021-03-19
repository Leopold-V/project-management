import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = ({children}) => {

	let location = useLocation();

	return (
		<>
			{(location.pathname !== '/login' && location.pathname !== '/register') ?
			<Navbar />
			: ''}
			{children}
		</>
	)
}
