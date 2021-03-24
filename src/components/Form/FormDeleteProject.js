import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';

import {fetchDeleteProject} from '../../slices/projects';

import { Button, WrapperButton } from '../Button';
import { Form } from '../Form';

export const FormDeleteProject = ({toggle, pid}) => {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.projects.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.innerText === 'Yes') {
        dispatch(fetchDeleteProject(pid));
        return toggle();
    } 
    toggle();
  };

  return (
    <Form>
      <Toaster position="bottom-center" reverseOrder={true} />
      <WrapperButton>
        <Button onClick={handleSubmit}>
            {loading ? 'loading...' : 'Yes'}
        </Button>
        <Button onClick={handleSubmit}>
            {loading ? 'loading...' : 'No'}
        </Button>
      </WrapperButton>
    </Form>
  )
}

FormDeleteProject.propTypes = {
    toggle: PropTypes.func.isRequired,
    pid: PropTypes.string.isRequired,
};
