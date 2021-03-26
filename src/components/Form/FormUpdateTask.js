import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { fetchUpdateTask } from '../../actions/actionsTasks';

import { Button } from '../Button';
import { Input, InputGroup, Icon, Form } from '.';

export const FormUpdateTask = ({ task, updateState }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);

  const [input, setInput] = useState(task.name);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return toast.error('Please provide a task name');
    }
    if (input.length > 50) {
      return toast.error('Your task name is too long (max 50 char)');
    }
    dispatch(fetchUpdateTask({ ...task, name: input })).then(() => {
      updateState({ ...task, name: input });
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Update :</h2>
      <InputGroup>
        <Icon className="fas fa-signature"></Icon>
        <Input type="text" name="name" placeholder="Task name" onChange={handleChange} value={input} />
      </InputGroup>
      <Button style={{ margin: '2rem auto' }}>{loading ? 'loading...' : 'Save'}</Button>
    </Form>
  );
};

FormUpdateTask.propTypes = {
  task: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired,
};
