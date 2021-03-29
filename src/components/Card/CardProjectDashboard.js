import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { tasksSelector } from '../../slices/sliceTasks';

import { TableActions } from '../Table/TableActions';

export const CardProjectDashboard = ({ id, name, resume, tech }) => {

  const theme = useSelector((state) => state.switch);
  const tasksProject = useSelector(state => tasksSelector(state).filter((ele) => ele.projectId === id));

  return (
    <Wrapper theme={theme}>
      <BlocLeft>
        <h4 style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{name}</h4>
        <div style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{tech}</div>
        <p>{resume}</p>
        <p>Progression : {tasksProject.filter((ele) => ele.progression === 'completed').length} / {tasksProject.length} </p>
        <TableActions data={{Id: id, Name: name, Tech: tech}} />
      </BlocLeft>
      <BlocRight>Stats</BlocRight>
    </Wrapper>
  );
};

CardProjectDashboard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
};

const BlocLeft = styled.div`
  width: 50%;
  text-align: center;
`

const BlocRight = styled.div`
  width: 50%;
  text-align: center;
`

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.card};
  color: ${(props) => (!props.theme.value ? '#030111' : 'white')};
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 1rem 1rem;
  margin-bottom: 2rem;
  min-width: 20rem;
  //max-width: 25rem;
  box-shadow: ${(props) => props.theme.value ? 'none' : '0rem 0rem 1rem rgba(255, 255, 255, .7)'};
  transition: all 0.3s;
  &:hover {
    border: 2px solid ${(props) => (props.theme.value ? '#01b075' : 'transparent')};
    box-shadow: ${(props) =>
      props.theme.value ? '0rem 0rem 0.5rem rgba(70, 207, 122)' : '0rem .3rem .4rem rgba(0, 0, 0, .3)'};
  }
  & > p {
    text-align: center;
    max-height: 15rem;
    overflow-y: auto;
    color: ${(props) => props.theme.text};
  }
`;
