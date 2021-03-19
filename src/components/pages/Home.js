import React from 'react';
import { auth } from '../../firebase';

export const Home = () => {

	function logout() {
		auth.signOut();
	};

	const getData = () => {
		const user = auth.currentUser;
		//console.log(user.uid, user.email, user.displayName);
		/*db.collection("projects").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
			});
		});*/
	};

	return (
		<div>
			Home page
			<button onClick={getData}>Get data</button>
			<button onClick={logout}>Logout</button>
		</div>
	);
};
