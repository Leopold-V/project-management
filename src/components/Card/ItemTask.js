import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import { useModal } from '../../hooks/useModal';

import { FormUpdateTask, FormDeleteTask, Icon } from '../Form';
import { Modal } from '../Modal';

export const ItemTask = ({ task, index, updateState, deleteTask }) => {
  const [show, toggle] = useModal();

  const theme = useSelector((state) => state.switch);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <>
          <Item
            id={task.id}
            onClick={toggle}
            theme={theme}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {task.name}
            {task.note.length > 0 && <Icon className="fas fa-comment"></Icon>}
          </Item>
          <Modal show={show} toggle={toggle} who={task.id}>
            <FormUpdateTask task={task} updateState={updateState} index={index} />
            <FormDeleteTask toggle={toggle} task={task} deleteTask={deleteTask} />
          </Modal>
        </>
      )}
    </Draggable>
  );
};

ItemTask.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

const Item = styled.div`
  position: relative;
  background-color: #01b075;
  margin-bottom: 1rem;
  text-align: center;
  border-radius: 5px;
  color: white;
  padding: 0.7rem 1rem;
  max-height: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: opacity 0.3s;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.5);
  & > i {
    color: white;
    position: absolute;
    top: 7px;
    right: 5px;
    transform: translate(-50%, 50%);
  }
  &:hover {
    opacity: 0.8;
  }
`;
