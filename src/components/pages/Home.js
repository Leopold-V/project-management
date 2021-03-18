import React from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '../../firebase';

import { setUser } from '../../slices/user';

export const Home = () => {

	const dispatch = useDispatch();

	function checkAuth() {
		//dispatch(getUser());
		dispatch(setUser());
	};

	function logout() {
		auth.signOut();
		
	}

	return (
		<div>
			Home page
			<button onClick={checkAuth}>Check</button>
			<button onClick={logout}>Logout</button>

		</div>
	)
};
