import React from 'react';

//import { auth } from '../../firebase';

import { Container } from '../Container';

export const Home = () => {

	const getData = () => {
		//const user = auth.currentUser;
		//console.log(user.uid, user.email, user.displayName);
		/*db.collection("projects").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
			});
		});*/
	};

	return (
		<Container>
			<h1>Home page</h1>
			<button onClick={getData}>Get data</button>
		</Container>
	);
};
