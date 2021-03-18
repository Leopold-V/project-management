import React from 'react';

import { auth } from '../../firebase';

export const Home = () => {

	function logout() {
		auth.signOut();
	}

	return (
		<div>
			Home page
			<button onClick={logout}>Logout</button>
		</div>
	)
};
