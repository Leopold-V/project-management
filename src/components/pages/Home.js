import React from 'react';
import { useSelector } from 'react-redux';

import { projectsSelector } from '../../slices/sliceProjects';

import { useModal } from '../../hooks/useModal';

import { ContainerSection, ContainerCard } from '../Container';
import { Card, CardProject } from '../Card';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { FormAddProject } from '../Form';
import { WrapperTransition } from '../Container/WrapperTransition';
import { Text, TitleSecondary } from '../Typography';

export const Home = () => {
  const projects = useSelector(projectsSelector);

  const [show, toggle] = useModal();

  return (
    <WrapperTransition>
    <ContainerSection>
      <ContainerCard>
        <Card>
          <TitleSecondary>Create a new project</TitleSecondary>
          <Text>A new project is add to your dashboard, fill informations, track and manage your tasks list.</Text>
          <Button onClick={toggle}>
            <i className="fas fa-plus-circle"></i>&nbsp;Create
          </Button>
        </Card>
        <Card>
          <TitleSecondary>Inspiration</TitleSecondary>
          <ul style={{textAlign: 'center', listStyle: 'none'}}>
            <li>
              <a href="https://github.com/florinpop17/app-ideas">florinpop17 project ideas list</a>
            </li>
            <li>
              <a href="https://dribbble.com/shots/popular/web-design">Dribble</a>
            </li>
          </ul>
        </Card>
      </ContainerCard>
      <ContainerCard>
        {projects.map((ele) => {
          return <CardProject key={ele.id} id={ele.id} name={ele.name} resume={ele.resume} tech={ele.tech} />;
        })}
      </ContainerCard>
      

      <Modal show={show} toggle={toggle}>
        <FormAddProject />
      </Modal>
    </ContainerSection>
    </WrapperTransition>
  );
};
