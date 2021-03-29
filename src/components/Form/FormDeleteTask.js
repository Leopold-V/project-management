import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchDeleteTask } from '../../actions/actionsTasks';

import { Button } from '../Button';
import { Form } from '../Form';

export const FormDeleteTask = ({ toggle, task, deleteTask }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchDeleteTask(task.id)).then(() => {
      deleteTask(task);
    });
    toggle();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button color="danger" style={{ margin: '0rem auto' }}>
        {loading ? 'loading...' : 'Delete'}
      </Button>
    </Form>
  );
};

FormDeleteTask.propTypes = {
  toggle: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
};