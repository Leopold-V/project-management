import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
//import { Droppable, Draggable } from 'react-beautiful-dnd';

import { useModal } from '../../hooks/useModal';

import { ButtonSmall } from '../Button';
import { FormAddTask, FormUpdateTask, FormDeleteTask } from '../Form';
import { Modal } from '../Modal';

export const CardTask = ({ title, tasks, pid }) => {
  const [show, toggle] = useModal();

  return (
    <Wrapper>
      <CardHeader>
        <h4>{title}</h4>
      </CardHeader>
      <CardBody>
        {tasks.map((ele) => (
          <div key={ele.id}>
            <Item id={ele.id} onClick={toggle}>
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
  text-align: center;
`;

const Item = styled.div`
  background-color: whitesmoke;
  margin-bottom: 1rem;
  text-align: center;
  color: black;
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
  background-color: #27262b;
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
  & > p {
    max-height: 15rem;
    overflow-y: auto;
    color: #9b9b9b;
  }
`;
