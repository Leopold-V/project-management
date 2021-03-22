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

  const addProject = () => {
    alert('TODO');
  };

  return (
    <ContainerSection>
      <h2>Home</h2>
      <ContainerCard>
        <Card>
          <h4>Create a new project</h4>
          <p>A new project is add to your dashboard, fill informations, track and manage your tasks list.</p>
          <Button onClick={addProject}>
            <i class="fas fa-plus-circle"></i>&nbsp;Create
          </Button>
        </Card>
        <Card>
          <h4>Do you need inspiration ?</h4>
          <ul>
            <li>
              <a href="https://github.com/florinpop17/app-ideas">florinpop17 project ideas list</a>
            </li>
            <li>
              <a href="https://dribbble.com/shots/popular/web-design">Dribble</a>
            </li>
          </ul>
        </Card>
      </ContainerCard>
      <h3>Your project(s) :</h3>
      <ContainerCard>
        {' '}
        {/* bind data */}
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </ContainerCard>
    </ContainerSection>
  );
};
