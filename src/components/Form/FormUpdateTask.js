import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { fetchUpdateTask } from '../../actions/actionsTasks';

import { Button } from '../Button';
import { Input, InputGroup, Icon, Form, TextArea } from '.';
import { TitlePrimary } from '../Typography';

export const FormUpdateTask = ({ task, updateState, index }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: task.name,
    note: task.note
  });

  const handleChange = (e) => {
    setInput(() => ({...input, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name) {
      return toast.error('Please provide a task name');
    }
    if (input.name.length > 50) {
      return toast.error('Your task name is too long (max 50 char)');
    }
    if (input.note.length > 300) {
      return toast.error('Your notes are too long (max 300 char)');
    }
    dispatch(fetchUpdateTask({ ...task, name: input.name, note: input.note })).then(() => {
      updateState({ ...task, name: input.name, note: input.note }, index);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TitlePrimary>Update :</TitlePrimary>
      <InputGroup>
        <Icon className="fas fa-signature"></Icon>
        <Input type="text" name="name" placeholder="Task name" onChange={handleChange} value={input.name} />
      </InputGroup>
      <InputGroup>
        <Icon className="fas fa-file-alt"></Icon>
        <TextArea
          name="note"
          rows="5"
          cols="33"
          placeholder="Write some notes"
          value={input.note}
          onChange={handleChange}
        />
      </InputGroup>
      <Button style={{ margin: '2rem auto' }}>Save</Button>
    </Form>
  );
};

FormUpdateTask.propTypes = {
  task: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
