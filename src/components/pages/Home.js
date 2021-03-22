import React from 'react';
import { useSelector } from 'react-redux';

import { projectsSelector } from '../../slices/projects';

import { ContainerSection, ContainerCard } from '../Container';
import { Card, CardProject } from '../Card';
import { Button } from '../Button';

export const Home = () => {

  const projects = useSelector(projectsSelector);

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
            <i className="fas fa-plus-circle"></i>&nbsp;Create
          </Button>
        </Card>
        <Card>
          <h4>Inspiration</h4>
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
      <h3>Your project{projects.length > 0 ? 's' : ''} :</h3>
      <ContainerCard>
        {projects.map((ele) => {
          return <CardProject key={ele.id} name={ele.name} resume={ele.resume} tech={ele.tech} />
        })}
      </ContainerCard>
    </ContainerSection>
  );
};
