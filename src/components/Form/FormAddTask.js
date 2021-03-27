import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { fetchAddTask } from '../../actions/actionsTasks';
import getCurrentUser from '../../utils/user';

import { ButtonInput } from '../Button';
import { Input, InputGroup, Form } from '../Form';

export const FormAddTask = ({ pid, title, addState }) => {
  const dispatch = useDispatch();

  const ref_name = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ref_name.current.value) {
      return toast.error('Please provide a task name');
    }
    if (ref_name.current.value > 50) {
      return toast.error('Your task name is too long (max 50 char)');
    }
    const newTask = {
      name: ref_name.current.value,
      progression: title.toLowerCase(),
      projectId: pid,
      userId: getCurrentUser().uid,
    };
    dispatch(fetchAddTask(newTask)).then((result) => {
      addState(result.payload);
    });
    ref_name.current.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
      <ButtonInput className="transparent" style={{marginRight: '.2rem', textAlign: 'center'}}>
        <i className="fas fa-plus"></i>
      </ButtonInput>
        <Input ref={ref_name} type="text" name="name" placeholder="Task name" />
      </InputGroup>
    </Form>
  );
};

FormAddTask.propTypes = {
  title: PropTypes.string.isRequired,
  pid: PropTypes.string.isRequired,
};
