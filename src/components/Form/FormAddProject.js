import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import {fetchAddProject} from '../../slices/projects';

import { ButtonSmall } from '../Button';
import { Input, InputGroup, TextArea, Icon, Form } from '../Form';

export const FormAddProject = () => {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.projects.loading)

  const [input, setInput] = useState({
    name : '',
    tech : '',
    resume : ''
  });

  const handleChange = (e) => {
    setInput((input) => ({...input, [e.target.name]: e.target.value}));
  }

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
    dispatch(fetchAddProject({name: input.name, tech: input.tech, resume: input.resume}))
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Toaster position="bottom-center" reverseOrder={true} />
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
        <TextArea name="resume" rows="5" cols="33" placeholder="Describe your project" value={input.resume} onChange={handleChange} />
      </InputGroup>
      <ButtonSmall style={{margin: '0 auto'}}>
        {loading ? 'loading...' : <i className="fas fa-plus-circle fa-2x"></i>}
      </ButtonSmall>
    </Form>
  )
}
