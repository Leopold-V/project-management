import React from 'react';

//import { auth } from '../../firebase';

import { ContainerHome } from '../Container';

export const Home = () => {

	/*const getData = () => {
		const user = auth.currentUser;
		console.log(user.uid, user.email, user.displayName);
		db.collection("projects").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
			});
		});
	};*/

	return (
		<ContainerHome>
			<h2>Home</h2>
		</ContainerHome>
	);
};
