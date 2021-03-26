import React from 'react';
import { useSelector } from 'react-redux';

import { ContainerSection, ContainerCardTask } from '../Container';
import { projectsSelector } from '../../slices/sliceProjects';

export const Project = (props) => {
  const id = props.match.params.id;

  const projects = useSelector((state) => projectsSelector(state).filter((ele) => ele.id === id));

  return (
    <ContainerSection>
      <h2 style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>Project page {projects[0] && projects[0].name}</h2>
      <p style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{projects[0] && projects[0].resume}</p>
      <ContainerCardTask key={id} pid={id} />
    </ContainerSection>
  );
};
