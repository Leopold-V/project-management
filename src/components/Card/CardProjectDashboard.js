import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

import { tasksSelector } from '../../slices/sliceTasks';

import { Text, TitleSecondary } from '../Typography';

export const CardProjectDashboard = ({ id, name, resume, tech }) => {
  const theme = useSelector((state) => state.switch);
  const tasksProject = useSelector((state) => tasksSelector(state).filter((ele) => ele.projectId === id));

  const dataTasks = [
    { name: 'Todo', value: tasksProject.filter((ele) => ele.progression === 'todo').length },
    { name: 'In progress', value: tasksProject.filter((ele) => ele.progression === 'in progress').length },
    { name: 'Completed', value: tasksProject.filter((ele) => ele.progression === 'completed').length },
  ];

  const colorsPie = ['#d0ed57', '#a4de6c', '#82ca9d'];

  return (
    <Wrapper theme={theme}>
      <BlocLeft>
        <TitleSecondary style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{name}</TitleSecondary>
        <Text theme={theme} style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>
          {tech}
        </Text>
        <Text theme={theme}>{resume}</Text>
      </BlocLeft>
      <BlocRight>
        {tasksProject.length > 0 && (
          <>
            <Text>
              Progression :{' '}
              {(tasksProject.filter((ele) => ele.progression === 'completed').length / tasksProject.length) * 100} %{' '}
            </Text>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie data={dataTasks} cx="50%" cy="50%" outerRadius={45} label>
                  {dataTasks.map((ele, i) => (
                    <Cell key={`cells-${i}`} fill={colorsPie[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </>
        )}
      </BlocRight>
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
`;

const BlocRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.card};
  color: ${(props) => (!props.theme.value ? '#030111' : 'white')};
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 1rem 1rem;
  min-width: 30%;
  min-height: 15rem;
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

Wrapper.propTypes = {
  theme: PropTypes.object.isRequired,
};
