import React from 'react';
import { useSelector } from 'react-redux';

import { ContainerSection, ContainerCardTask, ContainerCard } from '../Container';
import { projectsSelector } from '../../slices/sliceProjects';
import { Card } from '../Card';
import { WrapperTransition } from '../Container/WrapperTransition';
import { NotFound } from './NotFound';

export const Project = (props) => {
  const id = props.match.params.id;

  const projects = useSelector((state) => projectsSelector(state).filter((ele) => ele.id === id));

  if (projects.length === 0) {
    return <NotFound />
  }

  return (
    <WrapperTransition>
      <ContainerSection>
        <ContainerCardTask key={id} pid={id} />
        <ContainerCard>
          <Card>
            <h2 style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{projects[0] && projects[0].name}</h2>
            <p style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{projects[0] && projects[0].tech}</p>
            <p style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{projects[0] && projects[0].resume}</p>
          </Card>
        </ContainerCard>
      </ContainerSection>
    </WrapperTransition>
  );
};
