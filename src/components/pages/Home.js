import React from 'react';

//import { auth } from '../../firebase';

import { ContainerSection, ContainerCard } from '../Container';
import { Card, CardProject } from '../Card';
import { Button } from '../Button';

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
		<ContainerSection>
			<h2>Home</h2>
			<ContainerCard>
				<Card>
					<h4>Create a new project</h4>
					<p>A new project is add to your dashboard, fill informations, track and manage your tasks list.</p>
					<Button><i class="fas fa-plus-circle"></i>&nbsp;Create</Button>
				</Card>
				<Card>
					<h4>Do you need inspiration ?</h4>
					<ul>
						<li><a href="https://github.com/florinpop17/app-ideas">florinpop17 project ideas list</a></li>
						<li><a href="https://dribbble.com/shots/popular/web-design">Dribble</a></li>
					</ul>
				</Card>
			</ContainerCard>
			<h3>Your project(s) :</h3>
			<ContainerCard> {/* bind data */}
				<CardProject>
					<h4>Url shortener</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis bibendum purus. Curabitur molestie, urna mattis venenatis volutpat, enim nisl molestie quam, vitae vehicula nisi justo ac quam. Vestibulum condimentum luctus turpis, ut facilisis dui aliquet dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
					<Button className="transparent">Open</Button>
				</CardProject>
				<CardProject>
					<h4>React photo</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
					<Button className="transparent">Open</Button>
				</CardProject>
				<CardProject>
					<h4>Movie app</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus. Curabitur molestie, urna mattis venenatis volutpat, enim nisl molestie quam, vitae vehicula nisi. Vestibulum condimentum luctus turpis, ut facilisis dui aliquet dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
					<Button className="transparent">Open</Button>
				</CardProject>
				<CardProject>
					<h4>Movie app</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus. Curabitur molestie, urna mattis venenatis volutpat, enim nisl molestie quam, vitae vehicula nisi. Vestibulum condimentum luctus turpis, ut facilisis dui aliquet dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
					<Button className="transparent">Open</Button>
				</CardProject>
			</ContainerCard>
		</ContainerSection>
	);
};


