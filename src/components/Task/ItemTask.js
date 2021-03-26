import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useModal } from '../../hooks/useModal';

import { FormUpdateTask, FormDeleteTask } from '../Form';
import { Modal } from '../Modal';

export const ItemTask = ({task}) => {
    const [show, toggle] = useModal();
  
    const theme = useSelector(state => state.switch);
  
    return (
      <>
        <Item id={task.id} onClick={toggle} theme={theme}>
          {task.name}
        </Item>
        <Modal show={show} toggle={toggle} who={task.id}>
          <h2>Update :</h2>
          <FormUpdateTask task={task} />
          <FormDeleteTask toggle={toggle} tid={task.id} />
        </Modal>
      </>
    )
}

ItemTask.propTypes = {
    task: PropTypes.object.isRequired,
};

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