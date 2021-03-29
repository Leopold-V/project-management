import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '../Button';
import { tasksSelector } from '../../slices/sliceTasks';

export const CardProject = ({ id, name, resume, tech }) => {
  let history = useHistory();

  const theme = useSelector((state) => state.switch);
  const tasksProject = useSelector(state => tasksSelector(state).filter((ele) => ele.projectId === id));

  const redirectToProject = () => {
    history.push('/project/' + id);
  };

  return (
    <Wrapper theme={theme}>
      <h4 style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{name}</h4>
      <div style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{tech}</div>
      <p>{resume}</p>
      <p>Progression : {tasksProject.filter((ele) => ele.progression === 'completed').length} / {tasksProject.length} </p>
      <Button onClick={redirectToProject} className="transparent">
        Open
      </Button>
    </Wrapper>
  );
};

CardProject.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.card};
  color: ${(props) => (!props.theme.value ? '#030111' : 'white')};
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  margin-bottom: 2rem;
  min-width: 13rem;
  max-width: 25rem;
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
