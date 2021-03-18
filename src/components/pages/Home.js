import React, { useEffect } from 'react';
import app from '../../firebase';
import { auth, db } from '../../firebase';


export const Home = () => {

	function logout() {
		auth.signOut();
	}

	const getData = () => {
		db.collection("projects").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
			});
		});
	}

	useEffect(() => {
		/*
		let projectRef = app.database().ref("users");
		projectRef.on('value', (snapshot) => {
			const data = snapshot.val();
			console.log(data);
		});*/

	}, [])

	return (
		<div>
			Home page
			<button onClick={getData}>Get data</button>
			<button onClick={logout}>Logout</button>
		</div>
	)
};
