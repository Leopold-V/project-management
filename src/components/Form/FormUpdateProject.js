import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { projectsSelector } from '../../slices/sliceProjects';
import { fetchUpdateProject } from '../../actions/actionsProjects';

import { Button } from '../Button';
import { Input, InputGroup, TextArea, Icon, Form } from '../Form';

export const FormUpdateProject = ({ pid }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.projects.loading);
  const project = useSelector((state) => projectsSelector(state).find((project) => project.id === pid));

  const [input, setInput] = useState({...project});

  const handleChange = (e) => {
    setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name) {
      return toast.error('Please provide a project name');
    }
    if (!input.tech) {
      return toast.error('Please provide your techs stack informations');
    }
    if (!input.resume) {
      return toast.error('Please provide a project description');
    }
    if (input.name.length > 50) {
      return toast.error('Your project name is too long (max 50 char)');
    }
    if (input.tech.length > 100) {
      return toast.error('Your tech list is too long (max 100 char)');
    }
    if (input.resume.length > 200) {
      return toast.error('Your resume is too long (max 200 char)');
    }
    dispatch(fetchUpdateProject({...input}));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Icon className="fas fa-signature"></Icon>
        <Input type="text" name="name" placeholder="Project name" value={input.name} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <Icon className="fas fa-cogs"></Icon>
        <Input type="text" name="tech" placeholder="Tech name" value={input.tech} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <Icon className="fas fa-file-alt"></Icon>
        <TextArea
          name="resume"
          rows="5"
          cols="33"
          placeholder="Describe your project"
          value={input.resume}
          onChange={handleChange}
        />
      </InputGroup>
      <Button style={{ margin: '0 auto' }}>{loading ? 'loading...' : 'Update'}</Button>
    </Form>
  );
};

FormUpdateProject.propTypes = {
  pid: PropTypes.string.isRequired,
};
