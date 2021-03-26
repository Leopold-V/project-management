import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
//import { Droppable, Draggable } from 'react-beautiful-dnd';

import { useModal } from '../../hooks/useModal';

import { ButtonSmall } from '../Button';
import { FormAddTask, FormUpdateTask, FormDeleteTask } from '../Form';
import { Modal } from '../Modal';

export const CardTask = ({ title, tasks, pid }) => {
  const [show, toggle] = useModal();

  const theme = useSelector(state => state.switch);

  return (
    <Wrapper theme={theme}>
      <CardHeader>
        <h4>{title}</h4>
      </CardHeader>
      <CardBody>
        {tasks.map((ele) => (
          <div key={ele.id}>
            <Item id={ele.id} onClick={toggle} theme={theme}>
              {ele.name}
            </Item>
            <Modal show={show} toggle={toggle} who={ele.id}>
              <h2>Update :</h2>
              <FormUpdateTask task={ele} />
              <FormDeleteTask toggle={toggle} tid={ele.id} />
            </Modal>
          </div>
        ))}
      </CardBody>
      <WrapperButton>
        <ButtonSmall onClick={toggle} className="transparent" id={title}>
          <i className="fas fa-plus-circle fa-2x" id={title}></i>
        </ButtonSmall>
      </WrapperButton>
      <Modal show={show} toggle={toggle} who={title}>
        <h2>New task :</h2>
        <FormAddTask pid={pid} title={title} />
      </Modal>
    </Wrapper>
  );
};

CardTask.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  pid: PropTypes.string.isRequired,
};

const CardHeader = styled.div`
  background-color: #01b075;
  color: white;
  text-align: center;
`;

const Item = styled.div`
  background-color: ${(props) => props.theme.value ? 'whitesmoke' : '#505555'};
  margin-bottom: 1rem;
  text-align: center;
  color: ${(props) => props.theme.card};
  padding: 0.7rem 1rem;
  max-height: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const WrapperButton = styled.div`
  margin: 1rem auto;
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.card};
  box-shadow: ${(props) => props.theme.value ? 'none' : '0rem .1rem .4rem rgba(0, 0, 0, .3)'};
  border: 2px solid transparent;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 1rem;
  margin-bottom: 2rem;
  width: 20rem;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    border: 2px solid ${(props) => props.theme.value ? '#01b075' : 'transparent'};
    box-shadow: ${(props) => props.theme.value ? '0rem 0rem 0.5rem rgba(70, 207, 122)' : '0rem .3rem .4rem rgba(0, 0, 0, .3)'};
  }
  & > p {
    max-height: 15rem;
    overflow-y: auto;
    color: #9b9b9b;
  }
`;
