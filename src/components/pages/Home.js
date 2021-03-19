import React from 'react';
import { auth, db } from '../../firebase';

export const Home = () => {

	function logout() {
		auth.signOut();
	};

	const getData = () => {
		db.collection("projects").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
			});
		});
	};

	return (
		<div>
			Home page
			<button onClick={getData}>Get data</button>
			<button onClick={logout}>Logout</button>
		</div>
	);
};
